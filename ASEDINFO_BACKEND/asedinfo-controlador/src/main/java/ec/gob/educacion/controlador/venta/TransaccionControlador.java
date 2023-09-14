package ec.gob.educacion.controlador.venta;

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
import ec.gob.educacion.modelo.venta.Transaccion;
import ec.gob.educacion.venta.resources.EstadoEnum;
import ec.gob.educacion.servicio.venta.TransaccionServicio;

@RestController
@RequestMapping("venta/")
public class TransaccionControlador {

	@Autowired
	private TransaccionServicio transaccionServicio;

	@GetMapping(value = "listarTodosTransaccion")
	public ResponseGenerico<Transaccion> listarTodosTransaccion() {
		List<Transaccion> listaTransaccion = transaccionServicio.listarTodosTransaccion();
		// Respuesta
		ResponseGenerico<Transaccion> response = new ResponseGenerico<>();
		response.setListado(listaTransaccion);
		response.setTotalRegistros((long) listaTransaccion.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarTransaccionActivo")
	public ResponseGenerico<Transaccion> listarTransaccionActivo() {
		List<Transaccion> listaTransaccion = transaccionServicio.listarTransaccionActivo(EstadoEnum.ACTIVO.getDescripcion());
		// Respuesta
		ResponseGenerico<Transaccion> response = new ResponseGenerico<>();
		response.setListado(listaTransaccion);
		response.setTotalRegistros((long) listaTransaccion.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarTransaccionPorDescripcion/{descripcion}")
	public ResponseGenerico<Transaccion> listarTransaccionPorDescripcion(@PathVariable("descripcion") String descripcion) {
		List<Transaccion> listaTransaccion = transaccionServicio.listarTransaccionPorDescripcion(descripcion);
		// Respuesta
		ResponseGenerico<Transaccion> response = new ResponseGenerico<>();
		response.setListado(listaTransaccion);
		response.setTotalRegistros((long) listaTransaccion.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	/**
	 * REST para obtener Transaccion
	 * 
	 * @return Transaccion
	 */
	@GetMapping(value = "buscarTransaccionPorCodigo/{codigo}")
	public ResponseGenerico<Transaccion> buscarTransaccionPorCodigo(@PathVariable("codigo") Long codigo) {
		Transaccion transaccion = transaccionServicio.buscarTransaccionPorCodigo(codigo);
		// Respuesta
		ResponseGenerico<Transaccion> response = new ResponseGenerico<>();
		response.setObjeto(transaccion);
		response.setTotalRegistros((long) (1));
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	/**
	 * REST para guardar o actualizar transaccion
	 * 
	 * @return guardar
	 */
	@PostMapping(value = "guardarTransaccion")
	public ResponseGenerico<Transaccion> guardarTransaccion(@RequestBody Transaccion transaccion) {
		transaccion = transaccionServicio.registrar(transaccion);
		// Respuesta
		ResponseGenerico<Transaccion> response = new ResponseGenerico<>();
		response.setObjeto(transaccion);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_CREADO);
		return response;
	}

	/**
	 * Metodo para eliminar (baja lógica) un registro
	 * 
	 * @return objeto response
	 */
	@DeleteMapping(value = "eliminarTransaccionPorId/{codigo}")
	public ResponseGenerico<Transaccion> eliminarTransaccion(@PathVariable("codigo") Long codigo) {
		Transaccion transaccion = transaccionServicio.buscarTransaccionPorCodigo(codigo);
		transaccion.setEstado(EstadoEnum.INACTIVO.getDescripcion());
		transaccionServicio.registrar(transaccion);
		// Respuesta
		ResponseGenerico<Transaccion> response = new ResponseGenerico<>();
		response.setObjeto(transaccion);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_ELIMINADO);
		return response;
	}
}
