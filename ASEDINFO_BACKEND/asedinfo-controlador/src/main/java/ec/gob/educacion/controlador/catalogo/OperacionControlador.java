package ec.gob.educacion.controlador.catalogo;

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
import ec.gob.educacion.modelo.catalogo.Operacion;
import ec.gob.educacion.venta.resources.EstadoEnum;
import ec.gob.educacion.servicio.catalogo.OperacionServicio;

@RestController
@RequestMapping("catalogo/")
public class OperacionControlador {

	@Autowired
	private OperacionServicio operacionServicio;

	@GetMapping(value = "listarTodosOperacion")
	public ResponseGenerico<Operacion> listarTodosOperacion() {
		List<Operacion> listaOperacion = operacionServicio.listarTodosOperacion();
		// Respuesta
		ResponseGenerico<Operacion> response = new ResponseGenerico<>();
		response.setListado(listaOperacion);
		response.setTotalRegistros((long) listaOperacion.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarOperacionActivo")
	public ResponseGenerico<Operacion> listarOperacionActivo() {
		List<Operacion> listaOperacion = operacionServicio.listarOperacionActivo(EstadoEnum.ACTIVO.getDescripcion());
		// Respuesta
		ResponseGenerico<Operacion> response = new ResponseGenerico<>();
		response.setListado(listaOperacion);
		response.setTotalRegistros((long) listaOperacion.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "buscarOperacionPorNemonico/{nemonico}")
	public ResponseGenerico<Operacion> buscarOperacionPorNemonico(@PathVariable("nemonico") String nemonico) {
		Operacion operacion = operacionServicio.buscarOperacionPorNemonico(nemonico);
		// Respuesta
		ResponseGenerico<Operacion> response = new ResponseGenerico<>();
		response.setObjeto(operacion);
		response.setTotalRegistros((long) 1L);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	/**
	 * REST para obtener Operacion
	 * 
	 * @return Operacion
	 */
	@GetMapping(value = "buscarOperacionPorCodigo/{codigo}")
	public ResponseGenerico<Operacion> buscarOperacionPorCodigo(@PathVariable("codigo") Long codigo) {
		Operacion operacion = operacionServicio.buscarOperacionPorCodigo(codigo);
		// Respuesta
		ResponseGenerico<Operacion> response = new ResponseGenerico<>();
		response.setObjeto(operacion);
		response.setTotalRegistros((long) (1));
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	/**
	 * REST para guardar o actualizar operacion
	 * 
	 * @return guardar
	 */
	@PostMapping(value = "guardarOperacion")
	public ResponseGenerico<Operacion> guardarOperacion(@RequestBody Operacion operacion) {
		operacion = operacionServicio.registrar(operacion);
		// Respuesta
		ResponseGenerico<Operacion> response = new ResponseGenerico<>();
		response.setObjeto(operacion);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_CREADO);
		return response;
	}

	/**
	 * Metodo para eliminar (baja lógica) un registro
	 * 
	 * @return objeto response
	 */
	@DeleteMapping(value = "eliminarOperacionPorId/{codigo}")
	public ResponseGenerico<Operacion> eliminarOperacion(@PathVariable("codigo") Long codigo) {
		Operacion operacion = operacionServicio.buscarOperacionPorCodigo(codigo);
		operacion.setEstado(EstadoEnum.INACTIVO.getDescripcion());
		operacionServicio.registrar(operacion);
		// Respuesta
		ResponseGenerico<Operacion> response = new ResponseGenerico<>();
		response.setObjeto(operacion);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_ELIMINADO);
		return response;
	}
}
