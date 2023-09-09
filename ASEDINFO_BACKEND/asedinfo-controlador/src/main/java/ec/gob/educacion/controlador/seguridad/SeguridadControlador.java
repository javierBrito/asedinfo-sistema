package ec.gob.educacion.controlador.seguridad;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.util.Date;
import java.util.Hashtable;
import java.util.List;
import javax.naming.AuthenticationException;
import javax.naming.Context;
import javax.naming.NamingEnumeration;
import javax.naming.NamingException;
import javax.naming.directory.DirContext;
import javax.naming.directory.SearchControls;
import javax.naming.directory.SearchResult;
import javax.naming.ldap.InitialLdapContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ec.gob.educacion.controlador.util.EncryptUtils;
import ec.gob.educacion.controlador.util.Utils;
import ec.gob.educacion.modelo.DTO.LoginDTO;
import ec.gob.educacion.modelo.DTO.ParametroLoginDTO;
import ec.gob.educacion.modelo.DTO.RolesAplicacionDTO;
import ec.gob.educacion.modelo.DTO.UsuarioAdDTO;
import ec.gob.educacion.modelo.catalogo.Persona;
import ec.gob.educacion.modelo.seguridad.Aplicacion;
import ec.gob.educacion.modelo.seguridad.ClaveUsuario;
import ec.gob.educacion.modelo.seguridad.RolAplicacion;
import ec.gob.educacion.modelo.seguridad.Usuario;
import ec.gob.educacion.modelo.seguridad.UsuarioDetalleAccion;
import ec.gob.educacion.modelo.seguridad.UsuarioRolAplicacion;
import ec.gob.educacion.venta.resources.Constantes;
import ec.gob.educacion.servicio.catalogo.PersonaServicio;
import ec.gob.educacion.servicio.seguridad.AplicacionServicio;
import ec.gob.educacion.servicio.seguridad.RolAplicacionServicio;
import ec.gob.educacion.servicio.seguridad.UsuarioRolAplicacionServicio;
import ec.gob.educacion.servicio.seguridad.UsuarioServicio;

@RestController
@RequestMapping("public/")
public class SeguridadControlador {
	@Autowired
	private RolAplicacionServicio rolAplicacionServicio;
	@Autowired
	private AplicacionServicio aplicacionServicio;
	@Autowired
	private UsuarioServicio audSesionServicio;
	@Autowired
	private PersonaServicio personaServicio;
	@Autowired
	private UsuarioRolAplicacionServicio usuarioRolAplicacionServicio;

	@PostMapping(value = "loginAplicacion")
	public ResponseEntity<LoginDTO> buscarUsuarioCas(@RequestBody ParametroLoginDTO parametroLoginDTO)
			throws NoSuchAlgorithmException, UnsupportedEncodingException {
		String claveEncriptada = "";
		LoginDTO loginDTO = new LoginDTO();
		Long codigo;
		String identificacion;
		String token;

		claveEncriptada = EncryptUtils.applyAlgorithm(parametroLoginDTO.getClave(), EncryptUtils.MD5, EncryptUtils.UTF);
		List<LoginDTO> listaRespuesta = audSesionServicio.listaRespuestaLogin(parametroLoginDTO.getIdentificacion(),
				claveEncriptada);

		if (listaRespuesta.isEmpty()) {
			loginDTO.setCodigoUsuario(0L);
			loginDTO.setObservacion("USUARIO O CONTRASEÑA INCORRECTOS");
			loginDTO.setAccesoConcedido(false);
			listaRespuesta.add(loginDTO);
		} else {
			if (listaRespuesta.get(0).isAccesoConcedido()) {
				codigo = listaRespuesta.get(0).getCodigoUsuario();
				identificacion = listaRespuesta.get(0).getIdentificacion();

				token = Utils.obtenerToken(codigo, identificacion);

				loginDTO = listaRespuesta.get(0);
				loginDTO.setToken(token);
			}
		}
		return new ResponseEntity<LoginDTO>(loginDTO, HttpStatus.OK);
	}

	@PostMapping(value = "loginDocenteAD")
	public ResponseEntity<LoginDTO> buscarUsuarioDocenteAD(@RequestBody ParametroLoginDTO parametroLoginDTO)
			throws NoSuchAlgorithmException, UnsupportedEncodingException {
		String identificacion = parametroLoginDTO.getIdentificacion();
		String password = parametroLoginDTO.getClave();

		LoginDTO usuarioLogueado = new LoginDTO();
		usuarioLogueado = loginAD(identificacion, password, Constantes.DIRECTORIO_BUSQUEDA_LDAP_DOCENTES);

		return new ResponseEntity<LoginDTO>(usuarioLogueado, HttpStatus.OK);
	}

	@PostMapping(value = "loginGeneralAD")
	public ResponseEntity<LoginDTO> buscarUsuarioGeneralAD(@RequestBody ParametroLoginDTO parametroLoginDTO)
			throws NoSuchAlgorithmException, UnsupportedEncodingException {
		String identificacion = parametroLoginDTO.getIdentificacion();
		String password = parametroLoginDTO.getClave();

		LoginDTO usuarioLogueado = new LoginDTO();
		usuarioLogueado = loginAD(identificacion, password, Constantes.DIRECTORIO_BUSQUEDA_LDAP_USUARIOS_GENERAL);

		return new ResponseEntity<LoginDTO>(usuarioLogueado, HttpStatus.OK);
	}

	@SuppressWarnings("rawtypes")
	private LoginDTO loginAD(String identificacion, String clave, String directorioLDAP) {
		Hashtable<String, String> env = new Hashtable<String, String>();
		String username = identificacion + Constantes.CUENTA_LOCAL;
		String password = clave;
		String usuario = "";
		String token;
		LoginDTO outUsuarioLogueado = null;

		env.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.ldap.LdapCtxFactory");
		env.put(Context.SECURITY_AUTHENTICATION, "simple");
		env.put(Context.PROVIDER_URL, Constantes.SERVIDOR_AD);
		env.put(Context.SECURITY_PRINCIPAL, username);
		env.put(Context.SECURITY_CREDENTIALS, password);

		DirContext ctx;
		outUsuarioLogueado = new LoginDTO();

		try {
			ctx = new InitialLdapContext(env, null);
			String searchBase = directorioLDAP;
			usuario = username.substring(0, username.indexOf("@", 0));
			String searchFilter = "(&(objectClass=Person)(sAMAccountName=" + usuario + "))";
			SearchControls sCtrl = new SearchControls();
			sCtrl.setSearchScope(SearchControls.SUBTREE_SCOPE);
			NamingEnumeration answer = ctx.search(searchBase, searchFilter, sCtrl);

			if (answer.hasMoreElements()) {
				SearchResult sr = (SearchResult) answer.next();

				if (Utils.esCuentaExpirada(sr.getAttributes().get("accountExpires").toString())) {
					outUsuarioLogueado.setAccesoConcedido(false);
					outUsuarioLogueado.setObservacion("LA CUENTA SE ENCUENTRA EXPIRADA, SOLICITAR CAMBIO DE CLAVE.");
				} else {
					outUsuarioLogueado.setIdentificacion(identificacion);
					outUsuarioLogueado.setCedula(sr.getAttributes().get("postalcode").toString());
					outUsuarioLogueado.setNombre(sr.getAttributes().get("name").toString());
					outUsuarioLogueado
							.setCedula(outUsuarioLogueado.getCedula().toLowerCase().replace("postalcode: ", ""));
					outUsuarioLogueado.setNombre(outUsuarioLogueado.getNombre().replace("name: ", ""));
					outUsuarioLogueado.setAccesoConcedido(true);

					List<Usuario> infoUsuarioSeguridades = audSesionServicio.listarUsuarioPorIdentificacion(identificacion);

					if (infoUsuarioSeguridades.isEmpty()) {
						outUsuarioLogueado.setCodigoUsuario(0L);
					} else {
						outUsuarioLogueado.setCodigoUsuario(infoUsuarioSeguridades.get(0).getCodigo());
						//outUsuarioLogueado.setCedula(infoUsuarioSeguridades.get(0).getCedula());
					}

					token = Utils.obtenerToken(outUsuarioLogueado.getCodigoUsuario(), identificacion);
					outUsuarioLogueado.setToken(token);
				}
			} else {
				outUsuarioLogueado.setAccesoConcedido(false);
				outUsuarioLogueado.setObservacion("EL USUARIO INGRESADO NO SE ENCUENTRA EN EL AD.");
			}
		} catch (AuthenticationException ex) {
			System.out.println("Excepcion 404: " + ex);
			outUsuarioLogueado.setAccesoConcedido(false);
			outUsuarioLogueado.setObservacion("USUARIO / CLAVE INCORRECTA, CLAVE EXPIRADA O CUENTA BLOQUEADA.");
			return outUsuarioLogueado;
		} catch (NullPointerException ex) {
			System.out.println("Excepcion 400: " + ex);
			outUsuarioLogueado.setAccesoConcedido(false);
			outUsuarioLogueado.setObservacion("USUARIO O CLAVE INCORRECTA.");
			return outUsuarioLogueado;
		} catch (NamingException e) {
			System.out.println("excepcion 500: " + e);
			outUsuarioLogueado.setAccesoConcedido(false);
			outUsuarioLogueado.setObservacion("USUARIO O CLAVE INCORRECTA.");
			return outUsuarioLogueado;
		} catch (Exception e) {
			System.out.println("excepcion otros: " + e);
			outUsuarioLogueado.setAccesoConcedido(false);
			outUsuarioLogueado.setObservacion("USUARIO O CLAVE INCORRECTA.");
			return outUsuarioLogueado;
		}

		return outUsuarioLogueado;
	}

	@PostMapping(value = "loginAdSeg")
	public ResponseEntity<LoginDTO> LoginGeneralADSeguridades(@RequestBody ParametroLoginDTO parametroLoginDTO)
			throws NoSuchAlgorithmException, UnsupportedEncodingException {
		LoginDTO usuarioLogin = new LoginDTO();
		String identificacion = parametroLoginDTO.getIdentificacion();
		String password = parametroLoginDTO.getClave();
		String prefijoApp = parametroLoginDTO.getPrefijoApp();
		String claveEncriptada = "";
		Long codigo;
		String token;
		claveEncriptada = EncryptUtils.applyAlgorithm(parametroLoginDTO.getClave(), EncryptUtils.MD5, EncryptUtils.UTF);

		UsuarioAdDTO usuarioLogueadoAD = new UsuarioAdDTO();
		usuarioLogueadoAD = consultaAD(identificacion, password, Constantes.DIRECTORIO_BUSQUEDA_LDAP_USUARIOS_GENERAL);
		if (usuarioLogueadoAD.isAccesoConcedido()) {
			// existe el usuario en el AD
			String rolAD = usuarioLogueadoAD.getTipo().trim();
			if (rolAD.equals(Constantes.TIPO_DOCENTE_LDAP) || rolAD.equals(Constantes.TIPO_RECTOR_LDAP)) {
				// es docente o rector en el ad
				List<Usuario> usuarioSeg = audSesionServicio.listarUsuarioPorIdentificacion(identificacion);
				if (usuarioSeg.isEmpty()) {
					// crear usuario y asignar el rol
					if (usuarioLogueadoAD.getMail() == null || usuarioLogueadoAD.getMail().isEmpty()) {
						// no se puede crear usuario porque no tiene el campo mail en el ad
						usuarioLogin.setObservacion("NO SE PUEDE CREAR EL USUARIO EN SEGURIDADES");
					} else {
						Persona personaNueva = new Persona();
						personaNueva.setIdentificacion(usuarioLogueadoAD.getIdentificacion());
						personaNueva.setNombres(usuarioLogueadoAD.getNombre().toUpperCase());
						personaNueva.setCorreo(usuarioLogueadoAD.getMail());
						personaNueva.setCelular(Constantes.NUMERO_TELEFONO_DEFECTO);
						personaNueva.setCedula(usuarioLogueadoAD.getCedula());
						// Crear Persona
						Persona personaCreada = personaServicio.crearPersona(personaNueva);

						Usuario usuarioNuevo = new Usuario();
						usuarioNuevo.setSolicitado(Constantes.MEDIO_SOLICITUD);

						// Usuario usuarioCreado = crearUsuarioSeguridades(usuarioNuevo,
						// claveEncriptada);
						Usuario usuarioCreado = audSesionServicio.crearUsuario(usuarioNuevo);
						// Adiciona
						audSesionServicio.crearClaveUsuario(usuarioCreado, claveEncriptada);

						UsuarioRolAplicacion rolAsignado = AsignarRolAPlicacionUsuario(usuarioCreado,
								rolAD.toUpperCase(), prefijoApp);
						if (rolAsignado != null) {
							usuarioLogin.setCodigoUsuario(usuarioCreado.getCodigo());
							usuarioLogin.setIdentificacion(personaCreada.getIdentificacion());
							usuarioLogin.setCedula(personaCreada.getCedula());
							if (personaCreada.getApellidos() == null || personaCreada.getApellidos().isEmpty()) {
								usuarioLogin.setNombre(personaCreada.getNombres());
							} else {
								usuarioLogin.setNombre(personaCreada.getNombres() + " " + personaCreada.getApellidos());
							}

							usuarioLogin.setAccesoConcedido(true);

							codigo = usuarioCreado.getCodigo();
							identificacion = personaCreada.getIdentificacion();

							token = Utils.obtenerToken(codigo, identificacion);

							usuarioLogin.setToken(token);
						} else {
							usuarioLogin.setObservacion("USUARIO SIN ACCESO A LA APLICACION");
						}

					}
				} else {
					// asignar el rol
					// Verificar roles del usuario en la aplicacion
					List<RolesAplicacionDTO> rolesAplicacion = rolAplicacionServicio
							.listaRolesAplicaciones(usuarioSeg.get(0).getCodigo(), prefijoApp);
					if (rolesAplicacion.size() > 0 || !rolesAplicacion.isEmpty()) {

						// verificar si ya tiene el rol buscado
						boolean rolEncontrado = false;
						for (RolesAplicacionDTO rolesAplicacionDTO : rolesAplicacion) {
							String rolSeguridades = rolesAplicacionDTO.getNombre().trim();
							if (rolAD.toUpperCase().equals(rolSeguridades.toUpperCase())) {
								rolEncontrado = true;
							}
						}

						if (rolEncontrado) {
							usuarioLogin.setCodigoUsuario(usuarioSeg.get(0).getCodigo());
							usuarioLogin.setIdentificacion(usuarioSeg.get(0).getPersona().getIdentificacion());
							usuarioLogin.setCedula(usuarioSeg.get(0).getPersona().getCedula());
							if (usuarioSeg.get(0).getPersona().getApellidos() == null
									|| usuarioSeg.get(0).getPersona().getApellidos().isEmpty()) {
								usuarioLogin.setNombre(usuarioSeg.get(0).getPersona().getNombres());
							} else {
								usuarioLogin.setNombre(
										usuarioSeg.get(0).getPersona().getNombres() + " " + usuarioSeg.get(0).getPersona().getApellidos());
							}
							usuarioLogin.setAccesoConcedido(true);
							codigo = usuarioSeg.get(0).getCodigo();
							identificacion = usuarioSeg.get(0).getPersona().getIdentificacion();

							token = Utils.obtenerToken(codigo, identificacion);

							usuarioLogin.setToken(token);
						} else {
							// si no cuenta con el rol del ad dentro del listado se le asigna
							// UsuarioRolAplicacion rolAsignado =
							// AsignarRolAPlicacionUsuario(usuarioSeg.get(0),
							// rolAD.toUpperCase(), prefijoApp);
							// if( rolAsignado!=null) {
							usuarioLogin.setCodigoUsuario(usuarioSeg.get(0).getCodigo());
							usuarioLogin.setIdentificacion(usuarioSeg.get(0).getPersona().getIdentificacion());
							usuarioLogin.setCedula(usuarioSeg.get(0).getPersona().getCedula());
							if (usuarioSeg.get(0).getPersona().getApellidos() == null
									|| usuarioSeg.get(0).getPersona().getApellidos().isEmpty()) {
								usuarioLogin.setNombre(usuarioSeg.get(0).getPersona().getNombres());
							} else {
								usuarioLogin.setNombre(
										usuarioSeg.get(0).getPersona().getNombres() + " " + usuarioSeg.get(0).getPersona().getApellidos());
							}
							usuarioLogin.setAccesoConcedido(true);
							codigo = usuarioSeg.get(0).getCodigo();
							identificacion = usuarioSeg.get(0).getPersona().getIdentificacion();

							token = Utils.obtenerToken(codigo, identificacion);

							usuarioLogin.setToken(token);
							/*
							 * }else { usuarioLogin.setObservacion("USUARIO SIN ACCESO A LA APLICACION"); }
							 */
						}
					} else {
						// si no tiene roles en la aplicacion se le asigna el rol en base al ROlAD

						UsuarioRolAplicacion rolAsignado = AsignarRolAPlicacionUsuario(usuarioSeg.get(0),
								rolAD.toUpperCase(), prefijoApp);
						if (rolAsignado != null) {
							usuarioLogin.setCodigoUsuario(usuarioSeg.get(0).getCodigo());
							usuarioLogin.setIdentificacion(usuarioSeg.get(0).getPersona().getIdentificacion());
							usuarioLogin.setCedula(usuarioSeg.get(0).getPersona().getCedula());
							if (usuarioSeg.get(0).getPersona().getApellidos() == null
									|| usuarioSeg.get(0).getPersona().getApellidos().isEmpty()) {
								usuarioLogin.setNombre(usuarioSeg.get(0).getPersona().getNombres());
							} else {
								usuarioLogin.setNombre(
										usuarioSeg.get(0).getPersona().getNombres() + " " + usuarioSeg.get(0).getPersona().getApellidos());
							}
							usuarioLogin.setAccesoConcedido(true);
							codigo = usuarioSeg.get(0).getCodigo();
							identificacion = usuarioSeg.get(0).getPersona().getIdentificacion();

							token = Utils.obtenerToken(codigo, identificacion);

							usuarioLogin.setToken(token);
						} else {
							usuarioLogin.setObservacion("USUARIO SIN ACCESO A LA APLICACION");
						}
					}
				}
			} else {
				List<Usuario> usuarioSeg = audSesionServicio.listarUsuarioPorIdentificacion(identificacion);
				if (usuarioSeg.isEmpty()) {
					usuarioLogin.setCodigoUsuario(0L);
					usuarioLogin.setObservacion("NO SE HA ENCONTRADO AL USUARIO EN SEGURIDADES");
					usuarioLogin.setAccesoConcedido(false);
				} else {
					codigo = usuarioSeg.get(0).getCodigo();
					identificacion = usuarioSeg.get(0).getPersona().getIdentificacion();

					token = Utils.obtenerToken(codigo, identificacion);
					List<RolesAplicacionDTO> rolesAplicacion = rolAplicacionServicio.listaRolesAplicaciones(codigo,
							prefijoApp);
					if (rolesAplicacion.size() > 0 || !rolesAplicacion.isEmpty()) {
						usuarioLogin.setCodigoUsuario(usuarioSeg.get(0).getCodigo());
						usuarioLogin.setIdentificacion(usuarioSeg.get(0).getPersona().getIdentificacion());
						usuarioLogin.setCedula(usuarioSeg.get(0).getPersona().getCedula());
						if (usuarioSeg.get(0).getPersona().getApellidos() == null || usuarioSeg.get(0).getPersona().getApellidos().isEmpty()) {
							usuarioLogin.setNombre(usuarioSeg.get(0).getPersona().getNombres());
						} else {
							usuarioLogin
									.setNombre(usuarioSeg.get(0).getPersona().getNombres() + " " + usuarioSeg.get(0).getPersona().getApellidos());
						}
						usuarioLogin.setAccesoConcedido(true);
						usuarioLogin.setToken(token);
					} else {
						usuarioLogin.setObservacion("USUARIO SIN ACCESO A LA APLICACION");
					}
				}
			}
		} else {
			// no se encuentra en el AD
			List<LoginDTO> listaRespuesta = audSesionServicio.listaRespuestaLogin(parametroLoginDTO.getIdentificacion(),
					claveEncriptada);

			if (listaRespuesta.isEmpty()) {
				usuarioLogin.setCodigoUsuario(0L);
				usuarioLogin.setObservacion("USUARIO O CONTRASEÑA INCORRECTOS");
				usuarioLogin.setAccesoConcedido(false);
				listaRespuesta.add(usuarioLogin);
			} else {
				if (listaRespuesta.get(0).isAccesoConcedido()) {
					codigo = listaRespuesta.get(0).getCodigoUsuario();
					identificacion = listaRespuesta.get(0).getIdentificacion();

					token = Utils.obtenerToken(codigo, identificacion);
					List<RolesAplicacionDTO> rolesAplicacion = rolAplicacionServicio.listaRolesAplicaciones(codigo,
							prefijoApp);
					if (rolesAplicacion.size() > 0 || !rolesAplicacion.isEmpty()) {
						usuarioLogin = listaRespuesta.get(0);
						usuarioLogin.setToken(token);
					} else {
						usuarioLogin.setObservacion("USUARIO SIN ACCESO A LA APLICACION");
					}

				}
			}
		}
		return new ResponseEntity<LoginDTO>(usuarioLogin, HttpStatus.OK);
	}

	@SuppressWarnings("rawtypes")
	private UsuarioAdDTO consultaAD(String identificacion, String clave, String directorioLDAP) {
		Hashtable<String, String> env = new Hashtable<String, String>();
		String username = identificacion + Constantes.CUENTA_LOCAL;
		String password = clave;
		String usuario = "";
		// String token;

		UsuarioAdDTO outUsuarioLogueado = null;

		env.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.ldap.LdapCtxFactory");
		env.put(Context.SECURITY_AUTHENTICATION, "simple");
		env.put(Context.PROVIDER_URL, Constantes.SERVIDOR_AD);
		env.put(Context.SECURITY_PRINCIPAL, username);
		env.put(Context.SECURITY_CREDENTIALS, password);

		DirContext ctx;
		outUsuarioLogueado = new UsuarioAdDTO();

		try {
			ctx = new InitialLdapContext(env, null);
			String searchBase = directorioLDAP;
			usuario = username.substring(0, username.indexOf("@", 0));
			String searchFilter = "(&(objectClass=Person)(sAMAccountName=" + usuario + "))";
			SearchControls sCtrl = new SearchControls();
			sCtrl.setSearchScope(SearchControls.SUBTREE_SCOPE);
			NamingEnumeration answer = ctx.search(searchBase, searchFilter, sCtrl);

			if (answer.hasMoreElements()) {
				SearchResult sr = (SearchResult) answer.next();

				if (Utils.esCuentaExpirada(sr.getAttributes().get("accountExpires").toString())) {
					outUsuarioLogueado.setAccesoConcedido(false);
					outUsuarioLogueado.setObservacion("LA CUENTA SE ENCUENTRA EXPIRADA, SOLICITAR CAMBIO DE CLAVE.");
				} else {
					outUsuarioLogueado.setIdentificacion(identificacion);
					outUsuarioLogueado.setCedula(sr.getAttributes().get("postalcode").toString());
					outUsuarioLogueado.setNombre(sr.getAttributes().get("name").toString());
					outUsuarioLogueado
							.setCedula(outUsuarioLogueado.getCedula().toLowerCase().replace("postalcode: ", ""));
					outUsuarioLogueado.setNombre(outUsuarioLogueado.getNombre().replace("name: ", ""));
					outUsuarioLogueado.setTipo(sr.getAttributes().get("description").toString()
							.substring(sr.getAttributes().get("description").toString().indexOf(":") + 1).trim());
					outUsuarioLogueado.setMail(sr.getAttributes().get("mail").toString());
					outUsuarioLogueado.setMail(outUsuarioLogueado.getMail().toLowerCase().replace("mail: ", ""));
					outUsuarioLogueado.setAccesoConcedido(true);
				}
			} else {
				outUsuarioLogueado.setAccesoConcedido(false);
				outUsuarioLogueado.setObservacion("EL USUARIO INGRESADO NO SE ENCUENTRA EN EL AD.");
			}
		} catch (AuthenticationException ex) {
			System.out.println("Excepcion 404: " + ex);
			outUsuarioLogueado.setAccesoConcedido(false);
			outUsuarioLogueado.setObservacion("USUARIO / CLAVE INCORRECTA, CLAVE EXPIRADA O CUENTA BLOQUEADA.");
			return outUsuarioLogueado;
		} catch (NullPointerException ex) {
			System.out.println("Excepcion 400: " + ex);
			outUsuarioLogueado.setAccesoConcedido(false);
			outUsuarioLogueado.setObservacion("USUARIO O CLAVE INCORRECTA.");
			return outUsuarioLogueado;
		} catch (NamingException e) {
			System.out.println("excepcion 500: " + e);
			outUsuarioLogueado.setAccesoConcedido(false);
			outUsuarioLogueado.setObservacion("USUARIO O CLAVE INCORRECTA.");
			return outUsuarioLogueado;
		} catch (Exception e) {
			System.out.println("excepcion otros: " + e);
			outUsuarioLogueado.setAccesoConcedido(false);
			outUsuarioLogueado.setObservacion("USUARIO O CLAVE INCORRECTA.");
			return outUsuarioLogueado;
		}

		return outUsuarioLogueado;
	}

	public Usuario crearUsuarioSeguridades(Usuario nuevoUsuario, String clave, Persona nuevaPersona) {
		// clave = ingresa clave encriptada
		try {
			Usuario usuarioCreado = null;
			if (nuevaPersona.getIdentificacion() == null || nuevaPersona.getIdentificacion().isEmpty()) {

			} else if (nuevaPersona.getCelular() == null || nuevaPersona.getCelular().isEmpty()) {

			} else {
				// Crear nuevo usuario
				try {
					nuevoUsuario.setCambioClave(Constantes.NO);
					nuevoUsuario.setActualizacionDatos(Constantes.NO);
					nuevoUsuario.setEstado(Constantes.REGISTRO_ACTIVO);
					usuarioCreado = audSesionServicio.crearUsuario(nuevoUsuario);

					// Crear clave usuario
					try {
						// Si no viene clave, se la ingresa un patrón "1512"
						if (clave != "") {
							clave = EncryptUtils.applyAlgorithm("1512", EncryptUtils.MD5, EncryptUtils.UTF);
						}
						ClaveUsuario claveNueva = new ClaveUsuario();
						claveNueva.setUsuario(usuarioCreado);
						claveNueva.setEstado(Constantes.REGISTRO_ACTIVO);
						claveNueva.setFechaInicio(new Date());
						claveNueva.setClave(clave);
						// audSesionServicio.crearClaveUsuario(claveNueva);
						audSesionServicio.crearClaveUsuario(nuevoUsuario, clave);

						// crearDetalleAccion(usuarioCreado, Constantes.TIPO_ACCION_CREACION);
						audSesionServicio.crearUsuarioDetalleAccion(usuarioCreado, Constantes.TIPO_ACCION_CREACION);
					} catch (Exception e) {
						System.out.println("Error al crear clave de usuario: " + e.getMessage());
						e.printStackTrace();
					}
				} catch (Exception e) {
					System.out.println("Error al crear Usuario: " + e.getMessage());
					e.printStackTrace();
				}
			}

			return usuarioCreado;
		} catch (Exception e) {
			System.out.println("Error al crear Usuario " + e.getMessage());
			e.printStackTrace();
			return null;
		}
	}

	public UsuarioRolAplicacion AsignarRolAPlicacionUsuario(Usuario usuario, String tipo, String prefijoApp) {
		UsuarioRolAplicacion usuarioRolAsignado = null;
		Aplicacion aplicacion = aplicacionServicio.buscarAplicacionPorPrefijo(prefijoApp);
		RolAplicacion rolAplicacion = rolAplicacionServicio.buscarRolAplicacionNombre(aplicacion, tipo);
		if (rolAplicacion != null) {
			try {
				UsuarioRolAplicacion rolAsignado = new UsuarioRolAplicacion();
				rolAsignado.setFechaInicial(new Date());
				rolAsignado.setRolAplicacion(rolAplicacion);
				rolAsignado.setUsuario(usuario);
				usuarioRolAsignado = usuarioRolAplicacionServicio.crearUsuarioRolAplicacion(rolAsignado);
				if (rolAsignado.getCodigo() != null) {
					// crearDetalleAccion(usuario,
					// Constantes.TIPO_ACCION_ASIGNACION_APLICACION_ROLES);
					audSesionServicio.crearUsuarioDetalleAccion(usuario,
							Constantes.TIPO_ACCION_ASIGNACION_APLICACION_ROLES);
				}
			} catch (Exception e) {
				System.out.println("Error al asignar rol al usuario: " + e.getMessage());
				e.printStackTrace();
				usuarioRolAsignado = null;
			}
		} else {
			System.out.println("No se ha encontrado el rol");
			usuarioRolAsignado = null;
		}

		return usuarioRolAsignado;
	}

	public UsuarioDetalleAccion crearDetalleAccion(Usuario usuario, Integer tipo) {
		// UsuarioDetalleAccion detalle = new UsuarioDetalleAccion();
		try {/*
				 * detalle.setUsuario(usuario); detalle.setTipoAccion(tipo);
				 * detalle.setTipoRegistro(Constantes.TIPO_REGISTRO_APLICACION);
				 * detalle.setIp("0.0.0.0"); detalle.setSolicitado(usuario.getSolicitado());
				 * detalle.setFechaAccion(new Date());
				 */
			UsuarioDetalleAccion detalle = audSesionServicio.crearUsuarioDetalleAccion(usuario, tipo);

			return detalle;
		} catch (Exception e) {
			System.out.println("Error al crear detalle Usuario: " + e.getMessage());
			// e.printStackTrace();

			return null;
		}
	}
}
