package ec.gob.educacion.controlador.seguridad;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ec.gob.educacion.controlador.util.Constantes;
import ec.gob.educacion.modelo.response.ResponseGenerico;
import ec.gob.educacion.modelo.seguridad.InicioSesion;
import ec.gob.educacion.servicio.seguridad.InicioSesionServicio;

@RestController
@RequestMapping("seguridad/")
public class InicioSesionControlador {

	@Autowired
	private InicioSesionServicio inicioSesionServicio;

	@GetMapping(value = "listarTodosInicioSesion")
	public ResponseGenerico<InicioSesion> listarTodosInicioSesion() {
		List<InicioSesion> listaInicioSesion = inicioSesionServicio.listarTodosInicioSesion();
		// Respuesta
		ResponseGenerico<InicioSesion> response = new ResponseGenerico<>();
		response.setListado(listaInicioSesion);
		response.setTotalRegistros((long) listaInicioSesion.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	/**
	 * REST para obtener InicioSesion
	 * 
	 * @return InicioSesion
	 */
	@GetMapping(value = "buscarInicioSesionPorCodigo/{codigo}")
	public ResponseGenerico<InicioSesion> buscarInicioSesionPorCodigo(@PathVariable("codigo") Long codigo) {
		InicioSesion inicioSesion = inicioSesionServicio.buscarInicioSesionPorCodigo(codigo);
		// Respuesta
		ResponseGenerico<InicioSesion> response = new ResponseGenerico<>();
		response.setObjeto(inicioSesion);
		response.setTotalRegistros((long) (1));
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}
	
	 /** REST para guardar o actualizar inicioSesion
	 * 
	 * @return guardar
	 */
	@PostMapping(value = "guardarInicioSesion")
	public ResponseGenerico<InicioSesion> guardarInicioSesion(@RequestBody InicioSesion inicioSesion) {
		inicioSesion = inicioSesionServicio.registrar(inicioSesion);
		// Respuesta
		ResponseGenerico<InicioSesion> response = new ResponseGenerico<>();
		response.setObjeto(inicioSesion);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_CREADO);
		return response;
	}
}
