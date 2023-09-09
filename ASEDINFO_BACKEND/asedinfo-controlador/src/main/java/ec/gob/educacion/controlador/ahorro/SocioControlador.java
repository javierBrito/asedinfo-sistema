package ec.gob.educacion.controlador.ahorro;

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
import ec.gob.educacion.modelo.ahorro.Socio;
import ec.gob.educacion.servicio.ahorro.SocioServicio;
import ec.gob.educacion.venta.resources.EstadoEnum;

@RestController
@RequestMapping("ahorro/")
public class SocioControlador {

	@Autowired
	private SocioServicio socioServicio;

	@GetMapping(value = "listarTodosSocio")
	public ResponseGenerico<Socio> listarTodosSocio() {
		List<Socio> listaSocio = socioServicio.listarTodosSocio();
		// Respuesta
		ResponseGenerico<Socio> response = new ResponseGenerico<>();
		response.setListado(listaSocio);
		response.setTotalRegistros((long) listaSocio.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarSocioActivo")
	public ResponseGenerico<Socio> listarSocioActivo() {
		List<Socio> listaSocio = socioServicio.listarSocioActivo(EstadoEnum.ACTIVO.getDescripcion());
		// Respuesta
		ResponseGenerico<Socio> response = new ResponseGenerico<>();
		response.setListado(listaSocio);
		response.setTotalRegistros((long) listaSocio.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarSocioPorPersona/{codPersona}")
	public ResponseGenerico<Socio> listarSocioPorPersona(@PathVariable("codPersona") Long codPersona) {
		List<Socio> listaSocio = socioServicio.listarSocioPorPersona(codPersona);
		// Respuesta
		ResponseGenerico<Socio> response = new ResponseGenerico<>();
		response.setListado(listaSocio);
		response.setTotalRegistros((long) listaSocio.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	/**
	 * REST para obtener Socio
	 * 
	 * @return Socio
	 */
	@GetMapping(value = "buscarSocioPorCodigo/{codigo}")
	public ResponseGenerico<Socio> buscarSocioPorCodigo(@PathVariable("codigo") Long codigo) {
		Socio socio = socioServicio.buscarSocioPorCodigo(codigo);
		// Respuesta
		ResponseGenerico<Socio> response = new ResponseGenerico<>();
		response.setObjeto(socio);
		response.setTotalRegistros((long) (1));
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	/**
	 * REST para guardar o actualizar socio
	 * 
	 * @return guardar
	 */
	@PostMapping(value = "guardarSocio")
	public ResponseGenerico<Socio> guardarSocio(@RequestBody Socio socio) {
		socio = socioServicio.registrar(socio);
		// Respuesta
		ResponseGenerico<Socio> response = new ResponseGenerico<>();
		response.setObjeto(socio);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_CREADO);
		return response;
	}

	/**
	 * Metodo para eliminar (baja lógica) un registro
	 * 
	 * @return objeto response
	 */
	@DeleteMapping(value = "eliminarSocioPorId/{codigo}")
	public ResponseGenerico<Socio> eliminarSocio(@PathVariable("codigo") Long codigo) {
		Socio socio = socioServicio.buscarSocioPorCodigo(codigo);
		socio.setEstado(EstadoEnum.INACTIVO.getDescripcion());
		socioServicio.registrar(socio);
		// Respuesta
		ResponseGenerico<Socio> response = new ResponseGenerico<>();
		response.setObjeto(socio);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_ELIMINADO);
		return response;
	}
}
