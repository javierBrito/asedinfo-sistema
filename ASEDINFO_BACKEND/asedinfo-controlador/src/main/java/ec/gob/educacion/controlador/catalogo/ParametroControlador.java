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
import ec.gob.educacion.modelo.catalogo.Parametro;
import ec.gob.educacion.venta.resources.EstadoEnum;
import ec.gob.educacion.servicio.catalogo.ParametroServicio;

@RestController
@RequestMapping("catalogo/")
public class ParametroControlador {

	@Autowired
	private ParametroServicio parametroServicio;

	@GetMapping(value = "listarTodosParametro")
	public ResponseGenerico<Parametro> listarTodosParametro() {
		List<Parametro> listaParametro = parametroServicio.listarTodosParametro();
		// Respuesta
		ResponseGenerico<Parametro> response = new ResponseGenerico<>();
		response.setListado(listaParametro);
		response.setTotalRegistros((long) listaParametro.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarParametroActivo")
	public ResponseGenerico<Parametro> listarParametroActivo() {
		List<Parametro> listaParametro = parametroServicio.listarParametroActivo(EstadoEnum.ACTIVO.getDescripcion());
		// Respuesta
		ResponseGenerico<Parametro> response = new ResponseGenerico<>();
		response.setListado(listaParametro);
		response.setTotalRegistros((long) listaParametro.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "buscarParametroPorNemonico/{nemonico}")
	public ResponseGenerico<Parametro> buscarParametroPorNemonico(@PathVariable("nemonico") String nemonico) {
		Parametro parametro = parametroServicio.buscarParametroPorNemonico(nemonico);
		// Respuesta
		ResponseGenerico<Parametro> response = new ResponseGenerico<>();
		response.setObjeto(parametro);
		response.setTotalRegistros((long) 1L);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	/**
	 * REST para obtener Parametro
	 * 
	 * @return Parametro
	 */
	@GetMapping(value = "buscarParametroPorCodigo/{codigo}")
	public ResponseGenerico<Parametro> buscarParametroPorCodigo(@PathVariable("codigo") Long codigo) {
		Parametro parametro = parametroServicio.buscarParametroPorCodigo(codigo);
		// Respuesta
		ResponseGenerico<Parametro> response = new ResponseGenerico<>();
		response.setObjeto(parametro);
		response.setTotalRegistros((long) (1));
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	/**
	 * REST para guardar o actualizar parametro
	 * 
	 * @return guardar
	 */
	@PostMapping(value = "guardarParametro")
	public ResponseGenerico<Parametro> guardarParametro(@RequestBody Parametro parametro) {
		parametro = parametroServicio.registrar(parametro);
		// Respuesta
		ResponseGenerico<Parametro> response = new ResponseGenerico<>();
		response.setObjeto(parametro);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_CREADO);
		return response;
	}

	/**
	 * Metodo para eliminar (baja lógica) un registro
	 * 
	 * @return objeto response
	 */
	@DeleteMapping(value = "eliminarParametroPorId/{codigo}")
	public ResponseGenerico<Parametro> eliminarParametro(@PathVariable("codigo") Long codigo) {
		Parametro parametro = parametroServicio.buscarParametroPorCodigo(codigo);
		parametro.setEstado(EstadoEnum.INACTIVO.getDescripcion());
		parametroServicio.registrar(parametro);
		// Respuesta
		ResponseGenerico<Parametro> response = new ResponseGenerico<>();
		response.setObjeto(parametro);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_ELIMINADO);
		return response;
	}
}
