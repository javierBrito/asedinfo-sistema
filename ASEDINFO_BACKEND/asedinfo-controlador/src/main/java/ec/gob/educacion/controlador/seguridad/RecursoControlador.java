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
import ec.gob.educacion.modelo.seguridad.Recurso;
import ec.gob.educacion.servicio.seguridad.RecursoServicio;
import ec.gob.educacion.venta.resources.EstadoEnum;

@RestController
@RequestMapping("seguridad/")
public class RecursoControlador {

	@Autowired
	private RecursoServicio recursoServicio;

	@GetMapping(value = "listarTodosRecurso")
	public ResponseGenerico<Recurso> listarTodosRecurso() {
		List<Recurso> listaRecurso = recursoServicio.listarTodosRecurso();
		// Respuesta
		ResponseGenerico<Recurso> response = new ResponseGenerico<>();
		response.setListado(listaRecurso);
		response.setTotalRegistros((long) listaRecurso.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarRecursoActivo")
	public ResponseGenerico<Recurso> listarRecursoActivo() {
		List<Recurso> listaRecurso = recursoServicio.listarRecursoActivo(EstadoEnum.ACTIVO.getDescripcion());
		// Respuesta
		ResponseGenerico<Recurso> response = new ResponseGenerico<>();
		response.setListado(listaRecurso);
		response.setTotalRegistros((long) listaRecurso.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarRecursoPorAplicacion/{codigoAplicacion}")
	public ResponseGenerico<Recurso> listarRecursoPorAplicacion(@PathVariable("codigoAplicacion") Long codigoAplicacion) {
		List<Recurso> listaRecurso = recursoServicio.listarRecursoPorAplicacion(codigoAplicacion);
		// Respuesta
		ResponseGenerico<Recurso> response = new ResponseGenerico<>();
		response.setListado(listaRecurso);
		response.setTotalRegistros((long) listaRecurso.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarRecursoPadre/{codigoAplicacion}")
	public ResponseGenerico<Recurso> listarRecursoPadre(@PathVariable("codigoAplicacion") Long codigoAplicacion) {
		List<Recurso> listaRecurso = recursoServicio.listarRecursoPadre(codigoAplicacion);
		// Respuesta
		ResponseGenerico<Recurso> response = new ResponseGenerico<>();
		response.setListado(listaRecurso);
		response.setTotalRegistros((long) listaRecurso.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	/**
	 * REST para obtener Recurso
	 * 
	 * @return Recurso
	 */
	@GetMapping(value = "buscarRecursoPorCodigo/{codigo}")
	public ResponseGenerico<Recurso> buscarRecursoPorCodigo(@PathVariable("codigo") Long codigo) {
		Recurso recurso = recursoServicio.buscarRecursoPorCodigo(codigo);
		// Respuesta
		ResponseGenerico<Recurso> response = new ResponseGenerico<>();
		response.setObjeto(recurso);
		response.setTotalRegistros((long) (1));
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}
	
	 /** REST para guardar o actualizar recurso
	 * 
	 * @return guardar
	 */
	@PostMapping(value = "guardarRecurso")
	public ResponseGenerico<Recurso> guardarRecurso(@RequestBody Recurso recurso) {
		recurso = recursoServicio.registrar(recurso);
		// Respuesta
		ResponseGenerico<Recurso> response = new ResponseGenerico<>();
		response.setObjeto(recurso);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_CREADO);
		return response;
	}

	/**
	 * Metodo para eliminar (baja lógica) un registro
	 * 
	 * @return objeto response
	 */
	@DeleteMapping(value = "eliminarRecursoPorId/{codigo}")
	public ResponseGenerico<Recurso> eliminarRecurso(@PathVariable("codigo") Long codigo) {
		Recurso recurso = recursoServicio.buscarRecursoPorCodigo(codigo);
		recurso.setEstado(EstadoEnum.INACTIVO.getDescripcion());
		recursoServicio.registrar(recurso);
		// Respuesta
		ResponseGenerico<Recurso> response = new ResponseGenerico<>();
		response.setObjeto(recurso);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_ELIMINADO);
		return response;
	}
}
