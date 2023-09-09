package ec.gob.educacion.controlador.seguridad;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ec.gob.educacion.controlador.util.Constantes;
import ec.gob.educacion.modelo.DTO.MenuDTO;
import ec.gob.educacion.modelo.DTO.ParametroRolesDTO;
import ec.gob.educacion.modelo.DTO.RolesAplicacionDTO;
import ec.gob.educacion.modelo.DTO.RolesMenuDTO;
import ec.gob.educacion.modelo.response.ResponseGenerico;
import ec.gob.educacion.modelo.seguridad.Recurso;
import ec.gob.educacion.modelo.seguridad.RolAplicacionRecurso;
import ec.gob.educacion.servicio.seguridad.RecursoServicio;
import ec.gob.educacion.servicio.seguridad.RolAplicacionRecursoServicio;
import ec.gob.educacion.servicio.seguridad.RolAplicacionServicio;
import ec.gob.educacion.venta.resources.EstadoEnum;

@RestController
@RequestMapping("seguridad/")
public class RolAplicacionRecursoControlador {
	@Autowired
	private RolAplicacionRecursoServicio rolAplicacionRecursoServicio;
	@Autowired
	private RolAplicacionServicio rolAplicacionServicio;
	@Autowired
	private RecursoServicio recursoServicio;

	@GetMapping(value = "listarTodosRolAplicacionRecurso")
	public ResponseGenerico<RolAplicacionRecurso> listarTodosRolAplicacionRecurso() {
		List<RolAplicacionRecurso> listaRolAplicacionRecurso = rolAplicacionRecursoServicio.listarTodosRolAplicacionRecurso();
		// Respuesta
		ResponseGenerico<RolAplicacionRecurso> response = new ResponseGenerico<>();
		response.setListado(listaRolAplicacionRecurso);
		response.setTotalRegistros((long) listaRolAplicacionRecurso.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarRolAplicacionRecursoActivo")
	public ResponseGenerico<RolAplicacionRecurso> listarRolAplicacionRecursoActivo() {
		List<RolAplicacionRecurso> listaRolAplicacionRecurso = rolAplicacionRecursoServicio.listarRolAplicacionRecursoActivo(EstadoEnum.ACTIVO.getDescripcion());
		// Respuesta
		ResponseGenerico<RolAplicacionRecurso> response = new ResponseGenerico<>();
		response.setListado(listaRolAplicacionRecurso);
		response.setTotalRegistros((long) listaRolAplicacionRecurso.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarRolAplicacionRecursoPorRolAplicacion/{codigoRolAplicacion}")
	public ResponseGenerico<RolAplicacionRecurso> listarRolAplicacionRecursoPorRolAplicacion(@PathVariable("codigoRolAplicacion") Long codigoRolAplicacion) {
		List<RolAplicacionRecurso> listaRolAplicacionRecurso = rolAplicacionRecursoServicio.listarRolAplicacionRecursoPorRolAplicacion(codigoRolAplicacion);
		// Respuesta
		ResponseGenerico<RolAplicacionRecurso> response = new ResponseGenerico<>();
		response.setListado(listaRolAplicacionRecurso);
		response.setTotalRegistros((long) listaRolAplicacionRecurso.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarRolAplicacionRecursoPorAplicacion/{codigoAplicacion}")
	public ResponseGenerico<RolAplicacionRecurso> listarRolAplicacionRecursoPorAplicacion(@PathVariable("codigoAplicacion") Long codigoAplicacion) {
		List<RolAplicacionRecurso> listaRolAplicacionRecurso = rolAplicacionRecursoServicio.listarRolAplicacionRecursoPorAplicacion(codigoAplicacion);
		// Respuesta
		ResponseGenerico<RolAplicacionRecurso> response = new ResponseGenerico<>();
		response.setListado(listaRolAplicacionRecurso);
		response.setTotalRegistros((long) listaRolAplicacionRecurso.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	/**
	 * REST para obtener RolAplicacionRecurso
	 * 
	 * @return RolAplicacionRecurso
	 */
	@GetMapping(value = "buscarRolAplicacionRecursoPorCodigo/{codigo}")
	public ResponseGenerico<RolAplicacionRecurso> buscarRolAplicacionRecursoPorCodigo(@PathVariable("codigo") Long codigo) {
		RolAplicacionRecurso rolAplicacionRecurso = rolAplicacionRecursoServicio.buscarRolAplicacionRecursoPorCodigo(codigo);
		// Respuesta
		ResponseGenerico<RolAplicacionRecurso> response = new ResponseGenerico<>();
		response.setObjeto(rolAplicacionRecurso);
		response.setTotalRegistros((long) (1));
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}
	
	 /** REST para guardar o actualizar rolAplicacionRecurso
	 * 
	 * @return guardar
	 */
	@PostMapping(value = "guardarRolAplicacionRecurso")
	public ResponseGenerico<RolAplicacionRecurso> guardarRolAplicacionRecurso(@RequestBody RolAplicacionRecurso rolAplicacionRecurso) {
		rolAplicacionRecurso = rolAplicacionRecursoServicio.registrar(rolAplicacionRecurso);
		// Respuesta
		ResponseGenerico<RolAplicacionRecurso> response = new ResponseGenerico<>();
		response.setObjeto(rolAplicacionRecurso);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_CREADO);
		return response;
	}

	/**
	 * Metodo para eliminar (baja lógica) un registro
	 * 
	 * @return objeto response
	 */
	@DeleteMapping(value = "eliminarRolAplicacionRecursoPorId/{codigo}")
	public ResponseGenerico<RolAplicacionRecurso> eliminarRolAplicacionRecurso(@PathVariable("codigo") Long codigo) {
		RolAplicacionRecurso rolAplicacionRecurso = rolAplicacionRecursoServicio.buscarRolAplicacionRecursoPorCodigo(codigo);
		rolAplicacionRecurso.setEstado(EstadoEnum.INACTIVO.getDescripcion());
		rolAplicacionRecursoServicio.registrar(rolAplicacionRecurso);
		// Respuesta
		ResponseGenerico<RolAplicacionRecurso> response = new ResponseGenerico<>();
		response.setObjeto(rolAplicacionRecurso);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_ELIMINADO);
		return response;
	}

	@PostMapping(value = "obtenerRolesMenu")
	public ResponseEntity<List<RolesMenuDTO>> listarRolMenu(@RequestBody ParametroRolesDTO parametroRolesDTO) {
		List<RolesAplicacionDTO> rolesAplicacion = rolAplicacionServicio
				.listaRolesAplicaciones(parametroRolesDTO.getCodigoUsuario(), parametroRolesDTO.getPrefijoAplicacion());

		List<RolesMenuDTO> rolesMenu = new ArrayList<RolesMenuDTO>();

		for (RolesAplicacionDTO rolApp : rolesAplicacion) {
			RolesMenuDTO auxRolesMenu = new RolesMenuDTO();

			auxRolesMenu.setCodigo(rolApp.getCodigo() != null ? rolApp.getCodigo() : null);
			auxRolesMenu.setAplicacion(rolApp.getAplicacion() != null ? rolApp.getAplicacion() : null);
			auxRolesMenu.setNombre(rolApp.getNombre() != null ? rolApp.getNombre() : null);
			auxRolesMenu.setDescripcion(rolApp.getDescripcion() != null ? rolApp.getDescripcion() : null);
			auxRolesMenu.setEstado(rolApp.getEstado() != null ? rolApp.getEstado() : null);
			auxRolesMenu.setEstadoActivo(rolApp.getEstadoActivo() != null ? rolApp.getEstadoActivo() : null);
			auxRolesMenu.setAsignado(rolApp.getAsignado() != null ? rolApp.getAsignado() : null);
			auxRolesMenu
					.setEnumRolSeguridad(rolApp.getEnumRolSeguridad() != null ? rolApp.getEnumRolSeguridad() : null);
			auxRolesMenu.setAsignadoAdministrador(
					rolApp.getAsignadoAdministrador() != null ? rolApp.getAsignadoAdministrador() : null);
			auxRolesMenu.setCod_aplicacion(rolApp.getCod_aplicacion() != null ? rolApp.getCod_aplicacion() : null);
			auxRolesMenu.setMenu(obtenerMenu(rolApp.getCodigo() != null ? rolApp.getCodigo() : null));

			rolesMenu.add(auxRolesMenu);
		}

		return new ResponseEntity<List<RolesMenuDTO>>(rolesMenu, HttpStatus.OK);
	}

	@PostMapping(value = "listarAplicacionMenu")
	public ResponseEntity<List<RolesMenuDTO>> listarAplicacionMenu(@RequestBody ParametroRolesDTO parametroRolesDTO) {
		List<RolesAplicacionDTO> rolesAplicacion = rolAplicacionServicio
				.listarRolAplicacion(parametroRolesDTO.getCodigoUsuario());

		List<RolesMenuDTO> rolesMenu = new ArrayList<RolesMenuDTO>();

		for (RolesAplicacionDTO rolApp : rolesAplicacion) {
			RolesMenuDTO auxRolesMenu = new RolesMenuDTO();

			auxRolesMenu.setCodigo(rolApp.getCodigo() != null ? rolApp.getCodigo() : null);
			auxRolesMenu.setAplicacion(rolApp.getAplicacion() != null ? rolApp.getAplicacion() : null);
			auxRolesMenu.setNombre(rolApp.getNombre() != null ? rolApp.getNombre() : null);
			auxRolesMenu.setDescripcion(rolApp.getDescripcion() != null ? rolApp.getDescripcion() : null);
			auxRolesMenu.setEstado(rolApp.getEstado() != null ? rolApp.getEstado() : null);
			auxRolesMenu.setEstadoActivo(rolApp.getEstadoActivo() != null ? rolApp.getEstadoActivo() : null);
			auxRolesMenu.setAsignado(rolApp.getAsignado() != null ? rolApp.getAsignado() : null);
			auxRolesMenu
					.setEnumRolSeguridad(rolApp.getEnumRolSeguridad() != null ? rolApp.getEnumRolSeguridad() : null);
			auxRolesMenu.setAsignadoAdministrador(
					rolApp.getAsignadoAdministrador() != null ? rolApp.getAsignadoAdministrador() : null);
			auxRolesMenu.setCod_aplicacion(rolApp.getCod_aplicacion() != null ? rolApp.getCod_aplicacion() : null);
			auxRolesMenu.setMenu(obtenerMenu(rolApp.getCodigo() != null ? rolApp.getCodigo() : null));

			rolesMenu.add(auxRolesMenu);
		}

		return new ResponseEntity<List<RolesMenuDTO>>(rolesMenu, HttpStatus.OK);
	}

	/**
	 * Metodo para obtener los roles
	 * 
	 * @return objeto response
	 */
	@PostMapping(value = "obtenerRoles")
	public ResponseEntity<List<RolesAplicacionDTO>> listarRol(@RequestBody ParametroRolesDTO parametroRolesDTO) {
		List<RolesAplicacionDTO> rolesAplicacion = rolAplicacionServicio
				.listaRolesAplicaciones(parametroRolesDTO.getCodigoUsuario(), parametroRolesDTO.getPrefijoAplicacion());
		return new ResponseEntity<List<RolesAplicacionDTO>>(rolesAplicacion, HttpStatus.OK);
	}

	/**
	 * Metodo para obtener el menú
	 * 
	 * @return objeto response
	 */
	@GetMapping(value = "obtenerMenu/{estCodigoRol}")
	public ResponseEntity<List<MenuDTO>> listarMenu(@PathVariable("estCodigoRol") Long estCodigoRol) {
		List<MenuDTO> listaRecurso = obtenerMenu(estCodigoRol);
		return new ResponseEntity<List<MenuDTO>>(listaRecurso, HttpStatus.OK);
	}

	private List<MenuDTO> obtenerMenu(Long codigoRol) {
		List<MenuDTO> listaRecursoNivel1 = new ArrayList<MenuDTO>();
		List<MenuDTO> listaRecursoNivel2 = new ArrayList<MenuDTO>();
		List<MenuDTO> listaRecursoNivel3 = new ArrayList<MenuDTO>();
		List<MenuDTO> listaRecursoNivel4 = new ArrayList<MenuDTO>();
		List<Recurso> recursosTotalesHabilitados = new ArrayList<Recurso>();

		recursosTotalesHabilitados = recursoServicio.obtenerRecursosPorCodigoRol(codigoRol);

		for (Recurso recurso : recursosTotalesHabilitados) {

			/** RECURSOS NIVEL 1 **/
			if (recurso.getNivel() != null && recurso.getNivel() == 1) {
				MenuDTO MenuDTOPadre = new MenuDTO();
				MenuDTOPadre.setCodigo(recurso.getCodigo() != null ? recurso.getCodigo() : null);
				MenuDTOPadre.setDescripcion(recurso.getDescripcion() != null ? recurso.getDescripcion() : "");
				MenuDTOPadre.setNivel(recurso.getNivel() != null ? recurso.getNivel() : null);
				MenuDTOPadre.setNombre(recurso.getNombre() != null ? recurso.getNombre() : "");
				MenuDTOPadre.setUrl(recurso.getUrl() != null ? recurso.getUrl() : "");
				listaRecursoNivel1.add(MenuDTOPadre);
			}

			/** OBTIENE RECURSOS NIVEL 1 DE CONSULTA DE RECURSOS NIVEL 2 EXISTENTES **/
			if (recurso.getNivel() != null && recurso.getNivel() == 2) {
				if (recurso.getPadre() != null && recurso.getPadre().getCodigo() != null) {
					Recurso recursoPadre = new Recurso();
					recursoPadre = recursoServicio.obtenerRecursoPorCodigo(recurso.getPadre().getCodigo());

					if (recursoPadre != null && recursoPadre.getNombre() != null) {
						MenuDTO MenuDTOPadre = new MenuDTO();
						MenuDTOPadre.setCodigo(recursoPadre.getCodigo() != null ? recursoPadre.getCodigo() : null);
						MenuDTOPadre.setDescripcion(
								recursoPadre.getDescripcion() != null ? recursoPadre.getDescripcion() : "");
						MenuDTOPadre.setNivel(recursoPadre.getNivel() != null ? recursoPadre.getNivel() : null);
						MenuDTOPadre.setNombre(recursoPadre.getNombre() != null ? recursoPadre.getNombre() : "");
						MenuDTOPadre.setUrl(recursoPadre.getUrl() != null ? recursoPadre.getUrl() : "");
						listaRecursoNivel1.add(MenuDTOPadre);
					}

					MenuDTO MenuDTONivel2 = new MenuDTO();
					MenuDTONivel2.setCodigo(recurso.getCodigo() != null ? recurso.getCodigo() : null);
					MenuDTONivel2.setDescripcion(recurso.getDescripcion() != null ? recurso.getDescripcion() : "");
					MenuDTONivel2.setNivel(recurso.getNivel() != null ? recurso.getNivel() : null);
					MenuDTONivel2.setNombre(recurso.getNombre() != null ? recurso.getNombre() : "");
					MenuDTONivel2.setUrl(recurso.getUrl() != null ? recurso.getUrl() : "");
					MenuDTONivel2
							.setCodigoRecursoPadre(recurso.getPadre() != null ? recurso.getPadre().getCodigo() : null);
					listaRecursoNivel2.add(MenuDTONivel2);
				}
			}

			/** OBTENCION RECURSOS NIVEL 2 DE CONSULTA DE RECURSOS NIVEL 3 EXISTENTES **/
			if (recurso.getNivel() != null && recurso.getNivel() == 3) {
				if (recurso.getPadre() != null && recurso.getPadre().getCodigo() != null) {
					Recurso recursoPadreNivel2 = new Recurso();
					recursoPadreNivel2 = recursoServicio.obtenerRecursoPorCodigo(recurso.getPadre().getCodigo());

					if (recursoPadreNivel2 != null && recursoPadreNivel2.getNombre() != null) {
						MenuDTO MenuDTOPadreNivel2 = new MenuDTO();
						MenuDTOPadreNivel2.setCodigo(
								recursoPadreNivel2.getCodigo() != null ? recursoPadreNivel2.getCodigo() : null);
						MenuDTOPadreNivel2.setDescripcion(
								recursoPadreNivel2.getDescripcion() != null ? recursoPadreNivel2.getDescripcion() : "");
						MenuDTOPadreNivel2
								.setNivel(recursoPadreNivel2.getNivel() != null ? recursoPadreNivel2.getNivel() : null);
						MenuDTOPadreNivel2.setNombre(
								recursoPadreNivel2.getNombre() != null ? recursoPadreNivel2.getNombre() : "");
						MenuDTOPadreNivel2
								.setUrl(recursoPadreNivel2.getUrl() != null ? recursoPadreNivel2.getUrl() : "");
						MenuDTOPadreNivel2.setCodigoRecursoPadre(
								recursoPadreNivel2.getPadre() != null ? recursoPadreNivel2.getPadre().getCodigo()
										: null);
						listaRecursoNivel2.add(MenuDTOPadreNivel2);
					}

					MenuDTO MenuDTONivel3 = new MenuDTO();
					MenuDTONivel3.setCodigo(recurso.getCodigo() != null ? recurso.getCodigo() : null);
					MenuDTONivel3.setDescripcion(recurso.getDescripcion() != null ? recurso.getDescripcion() : "");
					MenuDTONivel3.setNivel(recurso.getNivel() != null ? recurso.getNivel() : null);
					MenuDTONivel3.setNombre(recurso.getNombre() != null ? recurso.getNombre() : "");
					MenuDTONivel3.setUrl(recurso.getUrl() != null ? recurso.getUrl() : "");
					MenuDTONivel3
							.setCodigoRecursoPadre(recurso.getPadre() != null ? recurso.getPadre().getCodigo() : null);
					listaRecursoNivel3.add(MenuDTONivel3);
				}
			}

			/** OBTENCION RECURSOS NIVEL 3 DE CONSULTA DE RECURSOS NIVEL 4 EXISTENTES **/
			if (recurso.getNivel() != null && recurso.getNivel() == 4) {
				if (recurso.getPadre() != null && recurso.getPadre().getCodigo() != null) {
					Recurso recursoPadreNivel3 = new Recurso();
					recursoPadreNivel3 = recursoServicio.obtenerRecursoPorCodigo(recurso.getPadre().getCodigo());

					if (recursoPadreNivel3 != null && recursoPadreNivel3.getNombre() != null) {
						MenuDTO MenuDTOPadreNivel3 = new MenuDTO();
						MenuDTOPadreNivel3.setCodigo(
								recursoPadreNivel3.getCodigo() != null ? recursoPadreNivel3.getCodigo() : null);
						MenuDTOPadreNivel3.setDescripcion(
								recursoPadreNivel3.getDescripcion() != null ? recursoPadreNivel3.getDescripcion() : "");
						MenuDTOPadreNivel3
								.setNivel(recursoPadreNivel3.getNivel() != null ? recursoPadreNivel3.getNivel() : null);
						MenuDTOPadreNivel3.setNombre(
								recursoPadreNivel3.getNombre() != null ? recursoPadreNivel3.getNombre() : "");
						MenuDTOPadreNivel3
								.setUrl(recursoPadreNivel3.getUrl() != null ? recursoPadreNivel3.getUrl() : "");
						MenuDTOPadreNivel3.setCodigoRecursoPadre(
								recursoPadreNivel3.getPadre() != null ? recursoPadreNivel3.getPadre().getCodigo()
										: null);
						listaRecursoNivel3.add(MenuDTOPadreNivel3);
					}

					MenuDTO MenuDTONivel4 = new MenuDTO();
					MenuDTONivel4.setCodigo(recurso.getCodigo() != null ? recurso.getCodigo() : null);
					MenuDTONivel4.setDescripcion(recurso.getDescripcion() != null ? recurso.getDescripcion() : "");
					MenuDTONivel4.setNivel(recurso.getNivel() != null ? recurso.getNivel() : null);
					MenuDTONivel4.setNombre(recurso.getNombre() != null ? recurso.getNombre() : "");
					MenuDTONivel4.setUrl(recurso.getUrl() != null ? recurso.getUrl() : "");
					MenuDTONivel4
							.setCodigoRecursoPadre(recurso.getPadre() != null ? recurso.getPadre().getCodigo() : null);
					listaRecursoNivel4.add(MenuDTONivel4);
				}
			}

		}

		/** OBTENCION RECURSOS NIVEL 2 DE CONSULTA DE RECURSOS DE LISTA NIVEL 3 **/
		listaRecursoNivel3.forEach(nivel3 -> {
			if (nivel3.getCodigoRecursoPadre() != null) {
				Recurso recursoPadreNivel2 = new Recurso();
				recursoPadreNivel2 = recursoServicio.obtenerRecursoPorCodigo(nivel3.getCodigoRecursoPadre());

				if (recursoPadreNivel2 != null && recursoPadreNivel2.getNombre() != null) {
					MenuDTO MenuDTOPadre = new MenuDTO();
					MenuDTOPadre
							.setCodigo(recursoPadreNivel2.getCodigo() != null ? recursoPadreNivel2.getCodigo() : null);
					MenuDTOPadre.setDescripcion(
							recursoPadreNivel2.getDescripcion() != null ? recursoPadreNivel2.getDescripcion() : "");
					MenuDTOPadre.setNivel(recursoPadreNivel2.getNivel() != null ? recursoPadreNivel2.getNivel() : null);
					MenuDTOPadre
							.setNombre(recursoPadreNivel2.getNombre() != null ? recursoPadreNivel2.getNombre() : "");
					MenuDTOPadre.setUrl(recursoPadreNivel2.getUrl() != null ? recursoPadreNivel2.getUrl() : "");
					listaRecursoNivel2.add(MenuDTOPadre);
				}
			}
		});

		/** OBTENCION RECURSOS NIVEL 1 DE CONSULTA DE RECURSOS DE LISTA NIVEL 2 **/
		listaRecursoNivel2.forEach(nivel2 -> {
			if (nivel2.getCodigoRecursoPadre() != null) {
				Recurso recursoPadreNivel1 = new Recurso();
				recursoPadreNivel1 = recursoServicio.obtenerRecursoPorCodigo(nivel2.getCodigoRecursoPadre());

				if (recursoPadreNivel1 != null && recursoPadreNivel1.getNombre() != null) {
					MenuDTO MenuDTOPadre = new MenuDTO();
					MenuDTOPadre
							.setCodigo(recursoPadreNivel1.getCodigo() != null ? recursoPadreNivel1.getCodigo() : null);
					MenuDTOPadre.setDescripcion(
							recursoPadreNivel1.getDescripcion() != null ? recursoPadreNivel1.getDescripcion() : "");
					MenuDTOPadre.setNivel(recursoPadreNivel1.getNivel() != null ? recursoPadreNivel1.getNivel() : null);
					MenuDTOPadre
							.setNombre(recursoPadreNivel1.getNombre() != null ? recursoPadreNivel1.getNombre() : "");
					MenuDTOPadre.setUrl(recursoPadreNivel1.getUrl() != null ? recursoPadreNivel1.getUrl() : "");
					listaRecursoNivel1.add(MenuDTOPadre);
				}
			}
		});

		/** ELIMINACION DE ELEMENTOS DUPLICADOS LISTA RECURSOS NIVEL 1 **/
		Set<MenuDTO> hs = new HashSet<>();
		hs.addAll(listaRecursoNivel1);
		listaRecursoNivel1.clear();
		listaRecursoNivel1.addAll(hs);

		/** ELIMINACION DE ELEMENTOS DUPLICADOS LISTA RECURSOS NIVEL 2 **/
		Set<MenuDTO> hs2 = new HashSet<>();
		hs2.addAll(listaRecursoNivel2);
		listaRecursoNivel2.clear();
		listaRecursoNivel2.addAll(hs2);

		/** ELIMINACION DE ELEMENTOS DUPLICADOS LISTA RECURSOS NIVEL 3 **/
		Set<MenuDTO> hs3 = new HashSet<>();
		hs3.addAll(listaRecursoNivel3);
		listaRecursoNivel3.clear();
		listaRecursoNivel3.addAll(hs3);

		/** ELIMINACION DE ELEMENTOS DUPLICADOS LISTA RECURSOS NIVEL 4 **/
		Set<MenuDTO> hs4 = new HashSet<>();
		hs4.addAll(listaRecursoNivel4);
		listaRecursoNivel4.clear();
		listaRecursoNivel4.addAll(hs4);

		/** SE ORDENA ALFABETICAMENTE POR EL NOMBRE A LA LISTA DE RECURSOS NIVEL 1 **/
		if (listaRecursoNivel1.size() > 0) {
			Collections.sort(listaRecursoNivel1, new Comparator<MenuDTO>() {
				@Override
				public int compare(MenuDTO o1, MenuDTO o2) {
					return o1.getNombre().compareTo(o2.getNombre());
				}
			});
		}

		/** SE ORDENA ALFABETICAMENTE POR EL NOMBRE A LA LISTA DE RECURSOS NIVEL 2 **/
		if (listaRecursoNivel2.size() > 0) {
			Collections.sort(listaRecursoNivel2, new Comparator<MenuDTO>() {
				@Override
				public int compare(MenuDTO o1, MenuDTO o2) {
					return o1.getNombre().compareTo(o2.getNombre());
				}
			});
		}

		/** SE ORDENA ALFABETICAMENTE POR EL NOMBRE A LA LISTA DE RECURSOS NIVEL 3 **/
		if (listaRecursoNivel3.size() > 0) {
			Collections.sort(listaRecursoNivel3, new Comparator<MenuDTO>() {
				@Override
				public int compare(MenuDTO o1, MenuDTO o2) {
					return o1.getNombre().compareTo(o2.getNombre());
				}
			});
		}

		/** SE ORDENA ALFABETICAMENTE POR EL NOMBRE A LA LISTA DE RECURSOS NIVEL 3 **/
		if (listaRecursoNivel4.size() > 0) {
			Collections.sort(listaRecursoNivel4, new Comparator<MenuDTO>() {
				@Override
				public int compare(MenuDTO o1, MenuDTO o2) {
					return o1.getNombre().compareTo(o2.getNombre());
				}
			});
		}

		/** EMPAREJAMIENTO DE RECURSOS HIJOS **/
		listaRecursoNivel1.forEach(nivel1 -> {

			/** EMPAREJAMIENTO DE RECURSOS HIJOS DE RECURSOS NIVEL 1 **/
			List<MenuDTO> listaRecursoNivel2Vinculada = new ArrayList<MenuDTO>();
			listaRecursoNivel2.forEach(nivel2 -> {
				if (nivel2.getCodigoRecursoPadre() != null && nivel1.getCodigo() != null
						&& nivel2.getCodigoRecursoPadre().equals(nivel1.getCodigo())) {
					listaRecursoNivel2Vinculada.add(nivel2);
				}

				/** EMPAREJAMIENTO DE RECURSOS HIJOS DE RECURSOS NIVEL 2 **/
				List<MenuDTO> listaRecursoNivel3Vinculada = new ArrayList<MenuDTO>();
				listaRecursoNivel3.forEach(nivel3 -> {
					if (nivel3.getCodigoRecursoPadre() != null && nivel2.getCodigo() != null
							&& nivel3.getCodigoRecursoPadre().equals(nivel2.getCodigo())) {
						listaRecursoNivel3Vinculada.add(nivel3);
					}

					/** EMPAREJAMIENTO DE RECURSOS HIJOS DE RECURSOS NIVEL 3 **/
					List<MenuDTO> listaRecursoNivel4Vinculada = new ArrayList<MenuDTO>();
					listaRecursoNivel4.forEach(nivel4 -> {
						if (nivel4.getCodigoRecursoPadre() != null && nivel3.getCodigo() != null
								&& nivel4.getCodigoRecursoPadre().equals(nivel3.getCodigo())) {
							listaRecursoNivel4Vinculada.add(nivel4);
						}
					});
					nivel3.setRecursosHijos(listaRecursoNivel4Vinculada);

				});
				nivel2.setRecursosHijos(listaRecursoNivel3Vinculada);

			});
			nivel1.setRecursosHijos(listaRecursoNivel2Vinculada);
		});

		return listaRecursoNivel1;
	}

}
