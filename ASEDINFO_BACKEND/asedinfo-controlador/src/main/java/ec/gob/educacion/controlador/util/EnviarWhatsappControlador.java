package ec.gob.educacion.controlador.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ec.gob.educacion.modelo.DTO.ReporteDTO;
import ec.gob.educacion.modelo.response.ResponseGenerico;
import ec.gob.educacion.servicio.util.EnviarWhatsappService;

/**
 * Controlador envío de whatsapp
 * 
 * @author jbrito - 202230418
 */

@RestController
@RequestMapping("private/")
public class EnviarWhatsappControlador {
	@Autowired
	private EnviarWhatsappService enviarWhatsappService;

	/**
	 * REST para enviar mensaje en whatsapp con Twilio
	 * 
	 * @param datos del whatsapp: destinatario, asunto, el mensaje
	 */
	@RequestMapping(value = "enviarWhatsappTwilio", method = RequestMethod.POST)
	public ResponseGenerico<ReporteDTO> enviarWhatsappTwilio(@RequestBody @Validated ReporteDTO reporteDTO) {
		System.out.println("enviarWhatsappTwilio()...");

		ResponseGenerico<ReporteDTO> response = new ResponseGenerico<>();

		String respuesta = enviarWhatsappService.enviarWhatsappTwilio(reporteDTO);
		System.out.println("respuesta = " + respuesta);
		if (respuesta == "OK") {
			response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
			response.setMensaje(respuesta + "Se envío el mensaje al whatsapp => " + reporteDTO.getTo());
			response.setObjeto(null);
		} else {
			response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_ERR);
			response.setMensaje(respuesta);
		}

		return response;
	}

	/**
	 * REST para enviar mensaje en whatsapp con Okhttp3
	 * 
	 * @param datos del whatsapp: destinatario, asunto, el mensaje
	 */
	@RequestMapping(value = "enviarWhatsappOkhttp3", method = RequestMethod.POST)
	public ResponseGenerico<ReporteDTO> enviarWhatsappOkhttp3(@RequestBody @Validated ReporteDTO reporteDTO) {
		System.out.println("enviarWhatsappOkhttp3()...");

		ResponseGenerico<ReporteDTO> response = new ResponseGenerico<>();

		String respuesta = enviarWhatsappService.enviarWhatsappOkhttp3(reporteDTO);
		System.out.println("respuesta = " + respuesta);
		if (respuesta == "OK") {
			response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
			response.setMensaje(respuesta + "Se envío el mensaje al whatsapp => " + reporteDTO.getTo());
			response.setObjeto(null);
		} else {
			response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_ERR);
			response.setMensaje(respuesta);
		}

		return response;
	}

	/**
	 * REST para enviar mensaje en whatsapp con Api
	 * 
	 * @param datos del whatsapp: destinatario, asunto, el mensaje
	 */
	@RequestMapping(value = "enviarWhatsappApi", method = RequestMethod.POST)
	public ResponseGenerico<ReporteDTO> enviarWhatsappApi(@RequestBody @Validated ReporteDTO reporteDTO) {
		System.out.println("enviarWhatsappApi()...");

		ResponseGenerico<ReporteDTO> response = new ResponseGenerico<>();

		String respuesta = enviarWhatsappService.enviarWhatsappApi(reporteDTO);
		System.out.println("respuesta = " + respuesta);
		if (respuesta == "OK") {
			response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
			response.setMensaje(respuesta + "Se envío el mensaje al whatsapp => " + reporteDTO.getTo());
			response.setObjeto(null);
		} else {
			response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_ERR);
			response.setMensaje(respuesta);
		}

		return response;
	}

	/**
	 * REST para enviar mensaje en whatsapp con Api
	 * 
	 * @param datos del whatsapp: destinatario, asunto, el mensaje
	 */
	@RequestMapping(value = "enviarWhatsappDriver", method = RequestMethod.POST)
	public ResponseGenerico<ReporteDTO> enviarWhatsappDriver(@RequestBody @Validated ReporteDTO reporteDTO) {
		System.out.println("enviarWhatsappApi()...");

		ResponseGenerico<ReporteDTO> response = new ResponseGenerico<>();

		String respuesta = enviarWhatsappService.enviarWhatsappDriver(reporteDTO);
		System.out.println("respuesta = " + respuesta);
		if (respuesta == "OK") {
			response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
			response.setMensaje(respuesta + "Se envío el mensaje al whatsapp => " + reporteDTO.getTo());
			response.setObjeto(null);
		} else {
			response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_ERR);
			response.setMensaje(respuesta);
		}

		return response;
	}

	/**
	 * REST para enviar mensaje con whatsapp Api y Facebook
	 * 
	 * @param datos del whatsapp: destinatario, asunto, el mensaje
	 */
	@RequestMapping(value = "enviarWhatsappApiFacebook", method = RequestMethod.POST)
	public ResponseGenerico<ReporteDTO> enviarWhatsappApiFacebook(@RequestBody @Validated ReporteDTO reporteDTO) {
		System.out.println("enviarWhatsappApi()...");

		ResponseGenerico<ReporteDTO> response = new ResponseGenerico<>();

		String respuesta = enviarWhatsappService.enviarWhatsappApiFacebook(reporteDTO);
		System.out.println("respuesta = " + respuesta);
		if (respuesta == "OK") {
			response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
			response.setMensaje(respuesta + "Se envío el mensaje al whatsapp => " + reporteDTO.getTo());
			response.setObjeto(null);
		} else {
			response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_ERR);
			response.setMensaje(respuesta);
		}

		return response;
	}
}
