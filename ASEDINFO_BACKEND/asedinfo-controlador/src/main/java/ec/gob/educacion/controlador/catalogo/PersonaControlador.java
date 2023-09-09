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
import ec.gob.educacion.modelo.catalogo.Persona;
import ec.gob.educacion.venta.resources.EstadoEnum;
import ec.gob.educacion.servicio.catalogo.PersonaServicio;

@RestController
@RequestMapping("catalogo/")
public class PersonaControlador {

	@Autowired
	private PersonaServicio personaServicio;

	@GetMapping(value = "listarTodosPersona")
	public ResponseGenerico<Persona> listarTodosPersona() {
		List<Persona> listaPersona = personaServicio.listarTodosPersona();
		// Respuesta
		ResponseGenerico<Persona> response = new ResponseGenerico<>();
		response.setListado(listaPersona);
		response.setTotalRegistros((long) listaPersona.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarPersonaActivo")
	public ResponseGenerico<Persona> listarPersonaActivo() {
		List<Persona> listaPersona = personaServicio.listarPersonaActivo(EstadoEnum.ACTIVO.getDescripcion());
		// Respuesta
		ResponseGenerico<Persona> response = new ResponseGenerico<>();
		response.setListado(listaPersona);
		response.setTotalRegistros((long) listaPersona.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarPersonaPorIdentificacion/{identificacion}")
	public ResponseGenerico<Persona> listarPersonaPorAplicacion(@PathVariable("identificacion") String identificacion) {
		List<Persona> listaPersona = personaServicio.listarPersonaPorIdentificacion(identificacion);
		// Respuesta
		ResponseGenerico<Persona> response = new ResponseGenerico<>();
		response.setListado(listaPersona);
		response.setTotalRegistros((long) listaPersona.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	/**
	 * REST para obtener Persona
	 * 
	 * @return Persona
	 */
	@GetMapping(value = "buscarPersonaPorCodigo/{codigo}")
	public ResponseGenerico<Persona> buscarPersonaPorCodigo(@PathVariable("codigo") Long codigo) {
		Persona persona = personaServicio.buscarPersonaPorCodigo(codigo);
		// Respuesta
		ResponseGenerico<Persona> response = new ResponseGenerico<>();
		response.setObjeto(persona);
		response.setTotalRegistros((long) (1));
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	/**
	 * REST para guardar o actualizar persona
	 * 
	 * @return guardar
	 */
	@PostMapping(value = "guardarPersona")
	public ResponseGenerico<Persona> guardarPersona(@RequestBody Persona persona) {
		persona = personaServicio.registrar(persona);
		// Respuesta
		ResponseGenerico<Persona> response = new ResponseGenerico<>();
		response.setObjeto(persona);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_CREADO);
		return response;
	}

	/**
	 * Metodo para eliminar (baja lógica) un registro
	 * 
	 * @return objeto response
	 */
	@DeleteMapping(value = "eliminarPersonaPorId/{codigo}")
	public ResponseGenerico<Persona> eliminarPersona(@PathVariable("codigo") Long codigo) {
		Persona persona = personaServicio.buscarPersonaPorCodigo(codigo);
		persona.setEstado(EstadoEnum.INACTIVO.getDescripcion());
		personaServicio.registrar(persona);
		// Respuesta
		ResponseGenerico<Persona> response = new ResponseGenerico<>();
		response.setObjeto(persona);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_ELIMINADO);
		return response;
	}
}
