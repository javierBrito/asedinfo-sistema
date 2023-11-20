package ec.gob.educacion.servicio.util;

import ec.gob.educacion.modelo.DTO.ReporteDTO;

/**
 * Interfaz 
 * 
 * @author Gabriel Avalos
 *
 */
public interface EnviarWhatsappService {

	String enviarWhatsapp(ReporteDTO reporteDTO);

	String enviarWhatsappTwilio(ReporteDTO reporteDTO);
	
	String enviarWhatsappOkhttp3(ReporteDTO reporteDTO);
	
	String enviarWhatsappApi(ReporteDTO reporteDTO);
	
	String enviarWhatsappDriver(ReporteDTO reporteDTO);
	
	String enviarWhatsappApiFacebook(ReporteDTO reporteDTO);
}
