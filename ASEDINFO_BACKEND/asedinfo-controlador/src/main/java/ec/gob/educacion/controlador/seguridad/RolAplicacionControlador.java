package ec.gob.educacion.controlador.seguridad;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ec.gob.educacion.controlador.util.Constantes;
import ec.gob.educacion.modelo.response.ResponseGenerico;
import ec.gob.educacion.modelo.seguridad.RolAplicacion;
import ec.gob.educacion.servicio.seguridad.RolAplicacionServicio;
import ec.gob.educacion.venta.resources.EstadoEnum;

@RestController
@RequestMapping("seguridad/")
public class RolAplicacionControlador {

	@Autowired
	private RolAplicacionServicio rolAplicacionServicio;

	@GetMapping(value = "listarTodosRolAplicacion")
	public ResponseGenerico<RolAplicacion> listarTodosRolAplicacion() {
		List<RolAplicacion> listaRolAplicacion = rolAplicacionServicio.listarTodosRolAplicacion();
		// Respuesta
		ResponseGenerico<RolAplicacion> response = new ResponseGenerico<>();
		response.setListado(listaRolAplicacion);
		response.setTotalRegistros((long) listaRolAplicacion.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarRolAplicacionActivo")
	public ResponseGenerico<RolAplicacion> listarRolAplicacionActivo() {
		List<RolAplicacion> listaRolAplicacion = rolAplicacionServicio.listarRolAplicacionActivo(EstadoEnum.ACTIVO.getDescripcion());
		// Respuesta
		ResponseGenerico<RolAplicacion> response = new ResponseGenerico<>();
		response.setListado(listaRolAplicacion);
		response.setTotalRegistros((long) listaRolAplicacion.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarRolAplicacionPorCodAplicacion/{codAplicacion}")
	public ResponseGenerico<RolAplicacion> listarRolAplicacionPorCodAplicacion(@PathVariable("codAplicacion") Long codAplicacion) {
		List<RolAplicacion> listaRolAplicacion = rolAplicacionServicio.listarRolAplicacionPorCodAplicacion(codAplicacion);
		// Respuesta
		ResponseGenerico<RolAplicacion> response = new ResponseGenerico<>();
		response.setListado(listaRolAplicacion);
		response.setTotalRegistros((long) listaRolAplicacion.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	/**
	 * REST para obtener RolAplicacion
	 * 
	 * @return RolAplicacion
	 */
	@GetMapping(value = "buscarRolAplicacionPorCodigo/{codigo}")
	public ResponseGenerico<RolAplicacion> buscarRolAplicacionPorCodigo(@PathVariable("codigo") Long codigo) {
		RolAplicacion rolAplicacion = rolAplicacionServicio.buscarRolAplicacionPorCodigo(codigo);
		// Respuesta
		ResponseGenerico<RolAplicacion> response = new ResponseGenerico<>();
		response.setObjeto(rolAplicacion);
		response.setTotalRegistros((long) (1));
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}
	
	 /** REST para guardar o actualizar rolAplicacion
	 * 
	 * @return guardar
	 */
	@PostMapping(value = "guardarRolAplicacion")
	public ResponseGenerico<RolAplicacion> guardarRolAplicacion(@RequestBody RolAplicacion rolAplicacion) {
		rolAplicacion = rolAplicacionServicio.registrar(rolAplicacion);
		// Respuesta
		ResponseGenerico<RolAplicacion> response = new ResponseGenerico<>();
		response.setObjeto(rolAplicacion);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_CREADO);
		return response;
	}

	/**
	 * Metodo para eliminar (baja lógica) un registro
	 * 
	 * @return objeto response
	 */
	@DeleteMapping(value = "eliminarRolAplicacionPorId/{codigo}")
	public ResponseGenerico<RolAplicacion> eliminarRolAplicacion(@PathVariable("codigo") Long codigo) {
		RolAplicacion rolAplicacion = rolAplicacionServicio.buscarRolAplicacionPorCodigo(codigo);
		rolAplicacion.setEstadoRol(EstadoEnum.INACTIVO.getDescripcion());
		rolAplicacionServicio.registrar(rolAplicacion);
		// Respuesta
		ResponseGenerico<RolAplicacion> response = new ResponseGenerico<>();
		response.setObjeto(rolAplicacion);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_ELIMINADO);
		return response;
	}
}
