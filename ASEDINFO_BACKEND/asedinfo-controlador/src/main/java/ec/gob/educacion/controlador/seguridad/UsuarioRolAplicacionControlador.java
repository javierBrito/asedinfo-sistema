package ec.gob.educacion.controlador.seguridad;

import java.util.Date;
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
import ec.gob.educacion.modelo.seguridad.UsuarioRolAplicacion;
import ec.gob.educacion.servicio.seguridad.UsuarioRolAplicacionServicio;
import ec.gob.educacion.venta.resources.EstadoEnum;

@RestController
@RequestMapping("seguridad/")
public class UsuarioRolAplicacionControlador {

	@Autowired
	private UsuarioRolAplicacionServicio usuarioRolAplicacionServicio;

	@GetMapping(value = "listarTodosUsuarioRolAplicacion")
	public ResponseGenerico<UsuarioRolAplicacion> listarTodosUsuarioRolAplicacion() {
		List<UsuarioRolAplicacion> listaUsuarioRolAplicacion = usuarioRolAplicacionServicio.listarTodosUsuarioRolAplicacion();
		// Respuesta
		ResponseGenerico<UsuarioRolAplicacion> response = new ResponseGenerico<>();
		response.setListado(listaUsuarioRolAplicacion);
		response.setTotalRegistros((long) listaUsuarioRolAplicacion.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarUsuarioRolAplicacionActivo")
	public ResponseGenerico<UsuarioRolAplicacion> listarUsuarioRolAplicacionActivo() {
		List<UsuarioRolAplicacion> listaUsuarioRolAplicacion = usuarioRolAplicacionServicio.listarUsuarioRolAplicacionActivo(EstadoEnum.ACTIVO.getDescripcion());
		// Respuesta
		ResponseGenerico<UsuarioRolAplicacion> response = new ResponseGenerico<>();
		response.setListado(listaUsuarioRolAplicacion);
		response.setTotalRegistros((long) listaUsuarioRolAplicacion.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}
	
	@GetMapping(value = "listarUsuarioRolAplicacionPorCodRolAplicacion/{codRolAplicacion}")
	public ResponseGenerico<UsuarioRolAplicacion> listarUsuarioRolAplicacionPorCodRolAplicacion(@PathVariable("codRolAplicacion") Long codRolAplicacion) {
		List<UsuarioRolAplicacion> listaUsuarioRolAplicacion = usuarioRolAplicacionServicio.listarUsuarioRolAplicacionPorCodRolAplicacion(codRolAplicacion);
		// Respuesta
		ResponseGenerico<UsuarioRolAplicacion> response = new ResponseGenerico<>();
		response.setListado(listaUsuarioRolAplicacion);
		response.setTotalRegistros((long) listaUsuarioRolAplicacion.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarUsuarioRolAplicacionPorCodUsuario/{codUsuario}")
	public ResponseGenerico<UsuarioRolAplicacion> listarUsuarioRolAplicacionPorCodUsuario(@PathVariable("codUsuario") Long codUsuario) {
		List<UsuarioRolAplicacion> listaUsuarioRolAplicacion = usuarioRolAplicacionServicio.listarUsuarioRolAplicacionPorCodUsuario(codUsuario);
		// Respuesta
		ResponseGenerico<UsuarioRolAplicacion> response = new ResponseGenerico<>();
		response.setListado(listaUsuarioRolAplicacion);
		response.setTotalRegistros((long) listaUsuarioRolAplicacion.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarUsuarioRolAplicacionPorCodUsuarioYCodAplicacion/{codUsuario}/{codAplicacion}")
	public ResponseGenerico<UsuarioRolAplicacion> listarUsuarioRolAplicacionPorCodUsuarioYCodAplicacion(@PathVariable("codUsuario") Long codUsuario, @PathVariable("codAplicacion") Long codAplicacion) {
		List<UsuarioRolAplicacion> listaUsuarioRolAplicacion = usuarioRolAplicacionServicio.listarUsuarioRolAplicacionPorCodUsuarioYCodAplicacion(codUsuario, codAplicacion);
		// Respuesta
		ResponseGenerico<UsuarioRolAplicacion> response = new ResponseGenerico<>();
		response.setListado(listaUsuarioRolAplicacion);
		response.setTotalRegistros((long) listaUsuarioRolAplicacion.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarUsuarioRolAplicacionPorCodUsuarioYCodRolAplicacion/{codUsuario}/{codRolAplicacion}")
	public ResponseGenerico<UsuarioRolAplicacion> listarUsuarioRolAplicacionPorCodUsuarioYCodRolAplicacion(@PathVariable("codUsuario") Long codUsuario, @PathVariable("codRolAplicacion") Long codRolAplicacion) {
		List<UsuarioRolAplicacion> listaUsuarioRolAplicacion = usuarioRolAplicacionServicio.listarUsuarioRolAplicacionPorCodUsuarioYCodRolAplicacion(codUsuario, codRolAplicacion);
		// Respuesta
		ResponseGenerico<UsuarioRolAplicacion> response = new ResponseGenerico<>();
		response.setListado(listaUsuarioRolAplicacion);
		response.setTotalRegistros((long) listaUsuarioRolAplicacion.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	/**
	 * REST para obtener UsuarioRolAplicacion
	 * 
	 * @return UsuarioRolAplicacion
	 */
	@GetMapping(value = "buscarUsuarioRolAplicacionPorCodigo/{codigo}")
	public ResponseGenerico<UsuarioRolAplicacion> buscarUsuarioRolAplicacionPorCodigo(@PathVariable("codigo") Long codigo) {
		UsuarioRolAplicacion usuarioRolAplicacion = usuarioRolAplicacionServicio.buscarUsuarioRolAplicacionPorCodigo(codigo);
		// Respuesta
		ResponseGenerico<UsuarioRolAplicacion> response = new ResponseGenerico<>();
		response.setObjeto(usuarioRolAplicacion);
		response.setTotalRegistros((long) (1));
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}
	
	 /** REST para guardar o actualizar usuarioRolAplicacion
	 * 
	 * @return guardar
	 */
	@PostMapping(value = "guardarUsuarioRolAplicacion")
	public ResponseGenerico<UsuarioRolAplicacion> guardarUsuarioRolAplicacion(@RequestBody UsuarioRolAplicacion usuarioRolAplicacion) {
		usuarioRolAplicacion = usuarioRolAplicacionServicio.registrar(usuarioRolAplicacion);
		// Respuesta
		ResponseGenerico<UsuarioRolAplicacion> response = new ResponseGenerico<>();
		response.setObjeto(usuarioRolAplicacion);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_CREADO);
		return response;
	}

	/**
	 * Metodo para eliminar (baja lógica) un registro
	 * 
	 * @return objeto response
	 */
	@DeleteMapping(value = "eliminarUsuarioRolAplicacionPorId/{codigo}")
	public ResponseGenerico<UsuarioRolAplicacion> eliminarUsuarioRolAplicacion(@PathVariable("codigo") Long codigo) {
		UsuarioRolAplicacion usuarioRolAplicacion = usuarioRolAplicacionServicio.buscarUsuarioRolAplicacionPorCodigo(codigo);
		usuarioRolAplicacion.setEstado(EstadoEnum.INACTIVO.getDescripcion());
		usuarioRolAplicacion.setFechaFinal(new Date());
		usuarioRolAplicacionServicio.registrar(usuarioRolAplicacion);
		// Respuesta
		ResponseGenerico<UsuarioRolAplicacion> response = new ResponseGenerico<>();
		response.setObjeto(usuarioRolAplicacion);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_ELIMINADO);
		return response;
	}
}
