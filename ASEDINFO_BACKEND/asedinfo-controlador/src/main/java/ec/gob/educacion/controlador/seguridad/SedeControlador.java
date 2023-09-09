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
import ec.gob.educacion.modelo.seguridad.Sede;
import ec.gob.educacion.servicio.seguridad.SedeServicio;
import ec.gob.educacion.venta.resources.EstadoEnum;

@RestController
@RequestMapping("seguridad/")
public class SedeControlador {

	@Autowired
	private SedeServicio sedeServicio;

	@GetMapping(value = "listarTodosSede")
	public ResponseGenerico<Sede> listarTodosSede() {
		List<Sede> listaSede = sedeServicio.listarTodosSede();
		// Respuesta
		ResponseGenerico<Sede> response = new ResponseGenerico<>();
		response.setListado(listaSede);
		response.setTotalRegistros((long) listaSede.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarSedeActivo")
	public ResponseGenerico<Sede> listarSedeActivo() {
		List<Sede> listaSede = sedeServicio.listarSedeActivo(EstadoEnum.ACTIVO.getDescripcion());
		// Respuesta
		ResponseGenerico<Sede> response = new ResponseGenerico<>();
		response.setListado(listaSede);
		response.setTotalRegistros((long) listaSede.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarSedeSuperior")
	public ResponseGenerico<Sede> listarSedeSuperior() {
		List<Sede> listaSede = sedeServicio.listarSedeSuperior();
		// Respuesta
		ResponseGenerico<Sede> response = new ResponseGenerico<>();
		response.setListado(listaSede);
		response.setTotalRegistros((long) listaSede.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	/**
	 * REST para obtener Sede
	 * 
	 * @return Sede
	 */
	@GetMapping(value = "buscarSedePorCodigo/{codigo}")
	public ResponseGenerico<Sede> buscarSedePorCodigo(@PathVariable("codigo") Long codigo) {
		Sede sede = sedeServicio.buscarSedePorCodigo(codigo);
		// Respuesta
		ResponseGenerico<Sede> response = new ResponseGenerico<>();
		response.setObjeto(sede);
		response.setTotalRegistros((long) (1));
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}
	
	 /** REST para guardar o actualizar sede
	 * 
	 * @return guardar
	 */
	@PostMapping(value = "guardarSede")
	public ResponseGenerico<Sede> guardarSede(@RequestBody Sede sede) {
		sede = sedeServicio.registrar(sede);
		// Respuesta
		ResponseGenerico<Sede> response = new ResponseGenerico<>();
		response.setObjeto(sede);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_CREADO);
		return response;
	}

	/**
	 * Metodo para eliminar (baja lógica) un registro
	 * 
	 * @return objeto response
	 */
	@DeleteMapping(value = "eliminarSedePorId/{codigo}")
	public ResponseGenerico<Sede> eliminarSede(@PathVariable("codigo") Long codigo) {
		Sede sede = sedeServicio.buscarSedePorCodigo(codigo);
		System.out.println("sede = "+sede);
		sede.setEstado(EstadoEnum.INACTIVO.getDescripcion());
		sedeServicio.registrar(sede);
		// Respuesta
		ResponseGenerico<Sede> response = new ResponseGenerico<>();
		response.setObjeto(sede);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_ELIMINADO);
		return response;
	}
}
