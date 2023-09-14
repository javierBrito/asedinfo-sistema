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
import ec.gob.educacion.modelo.catalogo.Modulo;
import ec.gob.educacion.venta.resources.EstadoEnum;
import ec.gob.educacion.servicio.catalogo.ModuloServicio;

@RestController
@RequestMapping("catalogo/")
public class ModuloControlador {

	@Autowired
	private ModuloServicio moduloServicio;

	@GetMapping(value = "listarTodosModulo")
	public ResponseGenerico<Modulo> listarTodosModulo() {
		List<Modulo> listaModulo = moduloServicio.listarTodosModulo();
		// Respuesta
		ResponseGenerico<Modulo> response = new ResponseGenerico<>();
		response.setListado(listaModulo);
		response.setTotalRegistros((long) listaModulo.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarModuloActivo")
	public ResponseGenerico<Modulo> listarModuloActivo() {
		List<Modulo> listaModulo = moduloServicio.listarModuloActivo(EstadoEnum.ACTIVO.getDescripcion());
		// Respuesta
		ResponseGenerico<Modulo> response = new ResponseGenerico<>();
		response.setListado(listaModulo);
		response.setTotalRegistros((long) listaModulo.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "buscarModuloPorNemonico/{nemonico}")
	public ResponseGenerico<Modulo> buscarModuloPorNemonico(@PathVariable("nemonico") String nemonico) {
		Modulo modulo = moduloServicio.buscarModuloPorNemonico(nemonico);
		// Respuesta
		ResponseGenerico<Modulo> response = new ResponseGenerico<>();
		response.setObjeto(modulo);
		response.setTotalRegistros((long) 1L);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	/**
	 * REST para obtener Modulo
	 * 
	 * @return Modulo
	 */
	@GetMapping(value = "buscarModuloPorCodigo/{codigo}")
	public ResponseGenerico<Modulo> buscarModuloPorCodigo(@PathVariable("codigo") Long codigo) {
		Modulo modulo = moduloServicio.buscarModuloPorCodigo(codigo);
		// Respuesta
		ResponseGenerico<Modulo> response = new ResponseGenerico<>();
		response.setObjeto(modulo);
		response.setTotalRegistros((long) (1));
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	/**
	 * REST para guardar o actualizar modulo
	 * 
	 * @return guardar
	 */
	@PostMapping(value = "guardarModulo")
	public ResponseGenerico<Modulo> guardarModulo(@RequestBody Modulo modulo) {
		modulo = moduloServicio.registrar(modulo);
		// Respuesta
		ResponseGenerico<Modulo> response = new ResponseGenerico<>();
		response.setObjeto(modulo);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_CREADO);
		return response;
	}

	/**
	 * Metodo para eliminar (baja lógica) un registro
	 * 
	 * @return objeto response
	 */
	@DeleteMapping(value = "eliminarModuloPorId/{codigo}")
	public ResponseGenerico<Modulo> eliminarModulo(@PathVariable("codigo") Long codigo) {
		Modulo modulo = moduloServicio.buscarModuloPorCodigo(codigo);
		modulo.setEstado(EstadoEnum.INACTIVO.getDescripcion());
		moduloServicio.registrar(modulo);
		// Respuesta
		ResponseGenerico<Modulo> response = new ResponseGenerico<>();
		response.setObjeto(modulo);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_ELIMINADO);
		return response;
	}
}
