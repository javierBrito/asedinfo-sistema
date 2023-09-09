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
import ec.gob.educacion.modelo.seguridad.UsuarioAplicacion;
import ec.gob.educacion.servicio.seguridad.UsuarioAplicacionServicio;
import ec.gob.educacion.venta.resources.EstadoEnum;

@RestController
@RequestMapping("seguridad/")
public class UsuarioAplicacionControlador {

	@Autowired
	private UsuarioAplicacionServicio usuarioAplicacionServicio;

	@GetMapping(value = "listarTodosUsuarioAplicacion")
	public ResponseGenerico<UsuarioAplicacion> listarTodosUsuarioAplicacion() {
		List<UsuarioAplicacion> listaUsuarioAplicacion = usuarioAplicacionServicio.listarTodosUsuarioAplicacion();
		// Respuesta
		ResponseGenerico<UsuarioAplicacion> response = new ResponseGenerico<>();
		response.setListado(listaUsuarioAplicacion);
		response.setTotalRegistros((long) listaUsuarioAplicacion.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarUsuarioAplicacionActivo")
	public ResponseGenerico<UsuarioAplicacion> listarUsuarioAplicacionActivo() {
		List<UsuarioAplicacion> listaUsuarioAplicacion = usuarioAplicacionServicio.listarUsuarioAplicacionActivo(EstadoEnum.ACTIVO.getDescripcion());
		// Respuesta
		ResponseGenerico<UsuarioAplicacion> response = new ResponseGenerico<>();
		response.setListado(listaUsuarioAplicacion);
		response.setTotalRegistros((long) listaUsuarioAplicacion.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarUsuarioAplicacionPorCodAplicacion/{codAplicacion}")
	public ResponseGenerico<UsuarioAplicacion> listarUsuarioAplicacionPorCodAplicacion(@PathVariable("codAplicacion") Long codAplicacion) {
		List<UsuarioAplicacion> listaUsuarioAplicacion = usuarioAplicacionServicio.listarUsuarioAplicacionPorCodAplicacion(codAplicacion);
		// Respuesta
		ResponseGenerico<UsuarioAplicacion> response = new ResponseGenerico<>();
		response.setListado(listaUsuarioAplicacion);
		response.setTotalRegistros((long) listaUsuarioAplicacion.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarUsuarioAplicacionPorCodUsuario/{codUsuario}")
	public ResponseGenerico<UsuarioAplicacion> listarUsuarioAplicacionPorCodUsuario(@PathVariable("codUsuario") Long codUsuario) {
		List<UsuarioAplicacion> listaUsuarioAplicacion = usuarioAplicacionServicio.listarUsuarioAplicacionPorCodUsuario(codUsuario);
		// Respuesta
		ResponseGenerico<UsuarioAplicacion> response = new ResponseGenerico<>();
		response.setListado(listaUsuarioAplicacion);
		response.setTotalRegistros((long) listaUsuarioAplicacion.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarUsuarioAplicacionPorUsuarioYAplicacion/{codUsuario}/{codAplicacion}")
	public ResponseGenerico<UsuarioAplicacion> listarUsuarioAplicacionPorUsuarioYAplicacion(@PathVariable("codUsuario") Long codUsuario, @PathVariable("codAplicacion") Long codAplicacion) {
		List<UsuarioAplicacion> listaUsuarioAplicacion = usuarioAplicacionServicio.listarUsuarioAplicacionPorUsuarioYAplicacion(codUsuario, codAplicacion);
		// Respuesta
		ResponseGenerico<UsuarioAplicacion> response = new ResponseGenerico<>();
		response.setListado(listaUsuarioAplicacion);
		response.setTotalRegistros((long) listaUsuarioAplicacion.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	/**
	 * REST para obtener UsuarioAplicacion
	 * 
	 * @return UsuarioAplicacion
	 */
	@GetMapping(value = "buscarUsuarioAplicacionPorCodigo/{codigo}")
	public ResponseGenerico<UsuarioAplicacion> buscarUsuarioAplicacionPorCodigo(@PathVariable("codigo") Long codigo) {
		UsuarioAplicacion usuarioAplicacion = usuarioAplicacionServicio.buscarUsuarioAplicacionPorCodigo(codigo);
		// Respuesta
		ResponseGenerico<UsuarioAplicacion> response = new ResponseGenerico<>();
		response.setObjeto(usuarioAplicacion);
		response.setTotalRegistros((long) (1));
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}
	
	 /** REST para guardar o actualizar usuarioAplicacion
	 * 
	 * @return guardar
	 */
	@PostMapping(value = "guardarUsuarioAplicacion")
	public ResponseGenerico<UsuarioAplicacion> guardarUsuarioAplicacion(@RequestBody UsuarioAplicacion usuarioAplicacion) {
		usuarioAplicacion = usuarioAplicacionServicio.registrar(usuarioAplicacion);
		// Respuesta
		ResponseGenerico<UsuarioAplicacion> response = new ResponseGenerico<>();
		response.setObjeto(usuarioAplicacion);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_CREADO);
		return response;
	}

	/**
	 * Metodo para eliminar (baja lógica) un registro
	 * 
	 * @return objeto response
	 */
	@DeleteMapping(value = "eliminarUsuarioAplicacionPorId/{codigo}")
	public ResponseGenerico<UsuarioAplicacion> eliminarUsuarioAplicacion(@PathVariable("codigo") Long codigo) {
		UsuarioAplicacion usuarioAplicacion = usuarioAplicacionServicio.buscarUsuarioAplicacionPorCodigo(codigo);
		usuarioAplicacion.setEstado(EstadoEnum.INACTIVO.getDescripcion());
		usuarioAplicacionServicio.registrar(usuarioAplicacion);
		// Respuesta
		ResponseGenerico<UsuarioAplicacion> response = new ResponseGenerico<>();
		response.setObjeto(usuarioAplicacion);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_ELIMINADO);
		return response;
	}
}
