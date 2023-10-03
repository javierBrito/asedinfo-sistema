package ec.gob.educacion.servicio.util;

import ec.gob.educacion.modelo.DTO.ReporteDTO;

/**
 * Interfaz 
 * 
 * @author Gabriel Avalos
 *
 */
public interface EnviarCorreoService {

	String enviarCorreoAux(ReporteDTO reporteDTO);
	
	String enviarCorreo(ReporteDTO reporteDTO);
}
