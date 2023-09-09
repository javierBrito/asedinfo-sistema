package ec.gob.educacion.servicio.ahorro;

import java.util.List;
import ec.gob.educacion.modelo.ahorro.Socio;

public interface SocioServicio {
	/**
	 * Permite listar Socio
	 * 
	 * @param null
	 * @return lista Socio
	 */
	List<Socio> listarTodosSocio();

	/**
	 * Permite listar Socio Activo
	 * 
	 * @param estado
	 * @return lista Socio
	 */
	List<Socio> listarSocioActivo(String estado);

	/**
	 * Permite obtener Socio
	 * 
	 * @param codigo
	 * @return Socio
	 */
	Socio buscarSocioPorCodigo(Long codigo);

	/**
	 * Permite obtener lista Socio
	 * 
	 * @param codPersona
	 * @return listaSocio
	 */
	List<Socio> listarSocioPorPersona(Long codPersona);

	/**
	 * Permite registrar Socio
	 * 
	 * @param Socio
	 * @return Socio
	 */
	Socio registrar(Socio Socio);

}
