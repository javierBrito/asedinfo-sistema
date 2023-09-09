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
import ec.gob.educacion.modelo.seguridad.Aplicacion;
import ec.gob.educacion.servicio.seguridad.AplicacionServicio;
import ec.gob.educacion.venta.resources.EstadoEnum;

@RestController
@RequestMapping("seguridad/")
public class AplicacionControlador {

	@Autowired
	private AplicacionServicio aplicacionServicio;

	@GetMapping(value = "listarTodosAplicacion")
	public ResponseGenerico<Aplicacion> listarTodosAplicacion() {
		List<Aplicacion> listaAplicacion = aplicacionServicio.listarTodosAplicacion();
		// Respuesta
		ResponseGenerico<Aplicacion> response = new ResponseGenerico<>();
		response.setListado(listaAplicacion);
		response.setTotalRegistros((long) listaAplicacion.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarAplicacionActivo")
	public ResponseGenerico<Aplicacion> listarAplicacionActivo() {
		List<Aplicacion> listaAplicacion = aplicacionServicio.listarAplicacionActivo(EstadoEnum.ACTIVO.getDescripcion());
		// Respuesta
		ResponseGenerico<Aplicacion> response = new ResponseGenerico<>();
		response.setListado(listaAplicacion);
		response.setTotalRegistros((long) listaAplicacion.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	/**
	 * REST para obtener Aplicacion
	 * 
	 * @return Aplicacion
	 */
	@GetMapping(value = "buscarAplicacionPorCodigo/{codigo}")
	public ResponseGenerico<Aplicacion> buscarAplicacionPorCodigo(@PathVariable("codigo") Long codigo) {
		Aplicacion aplicacion = aplicacionServicio.buscarAplicacionPorCodigo(codigo);
		// Respuesta
		ResponseGenerico<Aplicacion> response = new ResponseGenerico<>();
		response.setObjeto(aplicacion);
		response.setTotalRegistros((long) (1));
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	/**
	 * REST para obtener Aplicacion
	 * 
	 * @return Aplicacion
	 */
	@GetMapping(value = "buscarAplicacionPorPrefijo/{prefijo}")
	public ResponseGenerico<Aplicacion> buscarAplicacionPorPrefijo(@PathVariable("prefijo") String prefijo) {
		Aplicacion aplicacion = aplicacionServicio.buscarAplicacionPorPrefijo(prefijo, EstadoEnum.ACTIVO.getDescripcion());
		// Respuesta
		ResponseGenerico<Aplicacion> response = new ResponseGenerico<>();
		response.setObjeto(aplicacion);
		response.setTotalRegistros((long) (1));
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}
	
	 /** REST para guardar o actualizar aplicacion
	 * 
	 * @return guardar
	 */
	@PostMapping(value = "guardarAplicacion")
	public ResponseGenerico<Aplicacion> guardarAplicacion(@RequestBody Aplicacion aplicacion) {
		aplicacion = aplicacionServicio.registrar(aplicacion);
		// Respuesta
		ResponseGenerico<Aplicacion> response = new ResponseGenerico<>();
		response.setObjeto(aplicacion);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_CREADO);
		return response;
	}

	/**
	 * Metodo para eliminar (baja lógica) un registro
	 * 
	 * @return objeto response
	 */
	@DeleteMapping(value = "eliminarAplicacionPorId/{codigo}")
	public ResponseGenerico<Aplicacion> eliminarAplicacion(@PathVariable("codigo") Long codigo) {
		Aplicacion aplicacion = aplicacionServicio.buscarAplicacionPorCodigo(codigo);
		aplicacion.setEstado(EstadoEnum.INACTIVO.getDescripcion());
		aplicacionServicio.registrar(aplicacion);
		// Respuesta
		ResponseGenerico<Aplicacion> response = new ResponseGenerico<>();
		response.setObjeto(aplicacion);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_ELIMINADO);
		return response;
	}
}
