package ec.gob.educacion.servicio.seguridad;

import java.util.List;

import ec.gob.educacion.modelo.seguridad.Sede;


public interface SedeServicio {
	/**
	 * Permite listar Sede
	 * 
	 * @param null
	 * @return lista Sede
	 */
	List<Sede> listarTodosSede();

	/**
	 * Permite listar Sede Superior
	 * 
	 * @param null
	 * @return lista Sede Superior
	 */
	List<Sede> listarSedeSuperior();

	/**
	 * Permite listar Sede Activo
	 * 
	 * @param null
	 * @return lista Sede
	 */
	List<Sede> listarSedeActivo(String estado);

	/**
	 * Permite obtener Sede
	 * 
	 * @param codigo
	 * @return Sede
	 */
	Sede buscarSedePorCodigo(Long codigo);

	/**
	 * Permite registrar Sede
	 * 
	 * @param Sede
	 * @return Sede
	 */
	Sede registrar(Sede Sede);

}
