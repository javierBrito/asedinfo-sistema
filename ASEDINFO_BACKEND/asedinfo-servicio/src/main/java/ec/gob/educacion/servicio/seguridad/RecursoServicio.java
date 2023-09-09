package ec.gob.educacion.servicio.seguridad;

import java.util.List;

import ec.gob.educacion.modelo.seguridad.Recurso;

public interface RecursoServicio {
	/**
	 * Permite listar Recurso
	 * 
	 * @param null
	 * @return lista Recurso
	 */
	List<Recurso> listarTodosRecurso();

	/**
	 * Permite listar Recurso Activo
	 * 
	 * @param estado
	 * @return lista Recurso
	 */
	List<Recurso> listarRecursoActivo(String estado);

	/**
	 * Permite listar Recurso Activo
	 * 
	 * @param estado, codigoAplicacion
	 * @return lista Recurso
	 */
	List<Recurso> listarRecursoPorAplicacion(Long codigoAplicacion);

	/**
	 * Permite listar Recurso Padre
	 * 
	 * @param estado
	 * @return lista Recurso
	 */
	List<Recurso> listarRecursoPadre(Long codigoAplicacion);

	/**
	 * Permite obtener Recurso
	 * 
	 * @param codigo
	 * @return Recurso
	 */
	Recurso buscarRecursoPorCodigo(Long codigo);

	/**
	 * Permite registrar Recurso
	 * 
	 * @param Recurso
	 * @return Recurso
	 */
	Recurso registrar(Recurso Recurso);

	List<Recurso> obtenerRecursosPorCodigoRol(Long codigoRol);

	Recurso obtenerRecursoPorCodigo(Long codigoRecurso);

}
