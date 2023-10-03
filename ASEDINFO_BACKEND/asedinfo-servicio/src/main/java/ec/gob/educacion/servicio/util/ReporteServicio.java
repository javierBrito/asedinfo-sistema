package ec.gob.educacion.servicio.util;

import ec.gob.educacion.modelo.DTO.ReporteDTO;

public interface ReporteServicio {
	/**
	 * Permite obtener reporte Inscripción
	 * 
	 * @param ReporteDTO
	 * @return reporte generado Inscripción
	 */
	ReporteDTO obtenerReporteInscripcion(ReporteDTO reporteDTO);

	/**
	 * Permite obtener reporte de lista de caducados
	 * 
	 * @param ReporteDTO
	 * @return reporte generado Inscripción
	 */
	ReporteDTO obtenerListaCaducadoHtml(ReporteDTO reporteDTO);
}
