package ec.gob.educacion.servicio.impl.seguridad;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ec.gob.educacion.modelo.DTO.AplicacionDTO;
import ec.gob.educacion.modelo.DTO.LoginDTO;
import ec.gob.educacion.modelo.DTO.RolesAplicacionDTO;
import ec.gob.educacion.modelo.catalogo.Persona;
import ec.gob.educacion.modelo.seguridad.ClaveUsuario;
import ec.gob.educacion.modelo.seguridad.Sede;
import ec.gob.educacion.modelo.seguridad.Usuario;
import ec.gob.educacion.modelo.seguridad.UsuarioDetalleAccion;
import ec.gob.educacion.repositorio.seguridad.ClaveRepositorio;
import ec.gob.educacion.repositorio.seguridad.UsuarioDetalleAccionRepositorio;
import ec.gob.educacion.repositorio.seguridad.UsuarioRepositorio;
import ec.gob.educacion.servicio.catalogo.PersonaServicio;
import ec.gob.educacion.servicio.seguridad.SedeServicio;
import ec.gob.educacion.servicio.seguridad.UsuarioServicio;
import ec.gob.educacion.venta.resources.Constantes;

@Service
public class UsuarioServicioImpl implements UsuarioServicio {

	@Autowired
	private UsuarioRepositorio usuarioRepositorio;
	@Autowired
	private ClaveRepositorio claveRepositorio;
	@Autowired
	private UsuarioDetalleAccionRepositorio usuarioDetalleAccionRepositorio;
	@Autowired
	private SedeServicio sedeServicio;
	@Autowired
	private PersonaServicio personaServicio;

	List<RolesAplicacionDTO> rolesAplicacionDTO;
	AplicacionDTO aplicacion = new AplicacionDTO();

	@Override
	public List<Usuario> listarTodosUsuario() {
		return usuarioRepositorio.findAll();
	}

	@Override
	public List<Usuario> listarUsuarioActivo(String estado) {
		return usuarioRepositorio.findByEstadoOrderByCodigo(estado);
	}

	@Override
	public List<Usuario> listarUsuarioPorPersona(Long codPersona) {
		return usuarioRepositorio.listarUsuarioPorPersona(codPersona);
	}

	@Override
	public List<Usuario> listarUsuarioPorSede(Long codigoSede) {
		return usuarioRepositorio.listarUsuarioPorSede(codigoSede);
	}

	@Override
	public Usuario buscarUsuarioPorCodigo(Long codigo) {
		return usuarioRepositorio.findByCodigo(codigo);
	}

	@Override
	public List<Usuario> listarUsuarioPorIdentificacion(String identificacion) {
		return usuarioRepositorio.listarUsuarioPorIdentificacion(identificacion);
	}

	@Override
	public Usuario registrar(Usuario usuario) {
		if (usuario.getCodSede() != null && usuario.getCodSede() != 0) {
			Sede sede = new Sede();
			sede = sedeServicio.buscarSedePorCodigo(usuario.getCodSede());
			if (sede != null) {
				usuario.setSede(sede);
			}
		}
		if (usuario.getCodPersona() != null && usuario.getCodPersona() != 0) {
			Persona persona = personaServicio.buscarPersonaPorCodigo(usuario.getCodPersona());
			if (persona != null) {
				usuario.setPersona(persona);
			}
		}

		return usuarioRepositorio.save(usuario);
	}

	//@Override
	//public List<Usuario> buscarPorIdentificacion(String identificacion) {
	//	return usuarioRepositorio.findByIdentificacionAndEstado(identificacion, Constantes.REGISTRO_ACTIVO);
	//}

	public List<LoginDTO> listaRespuestaLogin(String identificacion, String clave) {
		List<LoginDTO> consultas = new ArrayList<>();
		usuarioRepositorio.listaRespuestaLogin(identificacion, clave).forEach(objects -> {
			LoginDTO cr = new LoginDTO();

			if (objects[0] == null || objects[0] == "") {
				cr.setObservacion("USUARIO O CONTRASEÑA INCORRECTOS");
				cr.setAccesoConcedido(false);
			} else {
				cr.setCodigoUsuario(Long.parseLong(String.valueOf(objects[0])));
				cr.setAccesoConcedido(true);
			}
			if (objects[1] != null || objects[1] != "") {
				cr.setIdentificacion(String.valueOf(objects[1]));
			}
			if (objects[2] == null || objects[2] == "") {
			} else {
				cr.setCedula(String.valueOf(objects[2]));
			}
			if (objects[3] == null || objects[3] == "") {
			} else {
				cr.setNombre(String.valueOf(objects[3]));
			}
			if (objects[4] == null || objects[4] == "") {
			} else {
				Long codigoSede = Long.parseLong(String.valueOf(objects[4]));
				if (codigoSede != null) {
					cr.setSede(sedeServicio.buscarSedePorCodigo(codigoSede));
				}
			}

			consultas.add(cr);
		});

		return consultas;
	}

	@Override
	public Usuario crearUsuario(Usuario usuario) {
		// Crear nuevo usuario
		try {
			usuario.setCambioClave(Constantes.NO);
			usuario.setActualizacionDatos(Constantes.NO);
			usuario.setEstado(Constantes.REGISTRO_ACTIVO);

		} catch (Exception e) {
			System.out.println("Error al crear Usuario: " + e.getMessage());
		}

		return usuarioRepositorio.save(usuario);
	}

	@Override
	public ClaveUsuario crearClaveUsuario(Usuario usuario, String claveEncriptada) {
		// Crear clave del usuario
		ClaveUsuario claveUsuario = new ClaveUsuario();
		try {
			claveUsuario.setUsuario(usuario);
			claveUsuario.setEstado(Constantes.REGISTRO_ACTIVO);
			claveUsuario.setFechaInicio(new Date());
			claveUsuario.setClave(claveEncriptada);
		} catch (Exception e) {
			System.out.println("Error al crear clave de usuario: " + e.getMessage());
		}

		return claveRepositorio.save(claveUsuario);
	}

	@Override
	public UsuarioDetalleAccion crearUsuarioDetalleAccion(Usuario usuario, Integer tipo) {
		UsuarioDetalleAccion usuarioDetalleAccion = new UsuarioDetalleAccion();
		try {
			usuarioDetalleAccion.setUsuario(usuario);
			usuarioDetalleAccion.setTipoAccion(tipo);
			usuarioDetalleAccion.setTipoRegistro(Constantes.TIPO_REGISTRO_APLICACION);
			usuarioDetalleAccion.setIp("0.0.0.0");
			usuarioDetalleAccion.setSolicitado(usuario.getSolicitado());
			usuarioDetalleAccion.setFechaAccion(new Date());
		} catch (Exception e) {
			System.out.println("Error al crear detalle Usuario Impl: " + e.getMessage());
		}

		return usuarioDetalleAccionRepositorio.save(usuarioDetalleAccion);
	}
	
}
