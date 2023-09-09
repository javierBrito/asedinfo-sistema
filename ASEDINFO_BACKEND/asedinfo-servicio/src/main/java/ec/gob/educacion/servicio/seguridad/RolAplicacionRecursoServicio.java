package ec.gob.educacion.servicio.seguridad;

import java.util.List;

import ec.gob.educacion.modelo.seguridad.RolAplicacionRecurso;

public interface RolAplicacionRecursoServicio {
	/**
	 * Permite listar RolAplicacionRecurso
	 * 
	 * @param null
	 * @return lista RolAplicacionRecurso
	 */
	List<RolAplicacionRecurso> listarTodosRolAplicacionRecurso();

	/**
	 * Permite listar RolAplicacionRecurso Activo
	 * 
	 * @param estado
	 * @return lista RolAplicacionRecurso
	 */
	List<RolAplicacionRecurso> listarRolAplicacionRecursoActivo(String estado);

	/**
	 * Permite listar RolAplicacionRecurso Activo
	 * 
	 * @param estado, codigoRolAplicacion
	 * @return lista RolAplicacionRecurso
	 */
	List<RolAplicacionRecurso> listarRolAplicacionRecursoPorRolAplicacion(Long codigoRolAplicacion);

	/**
	 * Permite listar RolAplicacionRecurso por Aplicacion
	 * 
	 * @param estado, codigoAplicacion
	 * @return lista RolAplicacionRecurso
	 */
	List<RolAplicacionRecurso> listarRolAplicacionRecursoPorAplicacion(Long codigoAplicacion);

	/**
	 * Permite obtener RolAplicacionRecurso
	 * 
	 * @param codigo
	 * @return RolAplicacionRecurso
	 */
	RolAplicacionRecurso buscarRolAplicacionRecursoPorCodigo(Long codigo);

	/**
	 * Permite registrar RolAplicacionRecurso
	 * 
	 * @param RolAplicacionRecurso
	 * @return RolAplicacionRecurso
	 */
	RolAplicacionRecurso registrar(RolAplicacionRecurso RolAplicacionRecurso);

}
