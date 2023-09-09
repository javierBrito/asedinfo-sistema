package ec.gob.educacion.servicio.seguridad;

import java.util.List;

import ec.gob.educacion.modelo.DTO.RolesAplicacionDTO;
import ec.gob.educacion.modelo.seguridad.Aplicacion;
import ec.gob.educacion.modelo.seguridad.RolAplicacion;

public interface RolAplicacionServicio {
	/**
	 * Permite listar RolAplicacion
	 * 
	 * @param null
	 * @return lista RolAplicacion
	 */
	List<RolAplicacion> listarTodosRolAplicacion();

	/**
	 * Permite listar RolAplicacion Activo
	 * 
	 * @param estado
	 * @return lista RolAplicacion
	 */
	List<RolAplicacion> listarRolAplicacionActivo(String estadoRol);

	/**
	 * Permite listar RolAplicacion Activo
	 * 
	 * @param estado, codAplicacion
	 * @return lista RolAplicacion
	 */
	List<RolAplicacion> listarRolAplicacionPorCodAplicacion(Long codAplicacion);

	/**
	 * Permite obtener RolAplicacion
	 * 
	 * @param codigo
	 * @return RolAplicacion
	 */
	RolAplicacion buscarRolAplicacionPorCodigo(Long codigo);

	/**
	 * Permite registrar RolAplicacion
	 * 
	 * @param RolAplicacion
	 * @return RolAplicacion
	 */
	RolAplicacion registrar(RolAplicacion RolAplicacion);

	RolAplicacion buscarRolAplicacionNombre(Aplicacion aplicacion, String nombre);

	List<RolesAplicacionDTO> listaRolesAplicaciones(Long codUsuario, String prefijoApp);

	List<RolesAplicacionDTO> listarRolAplicacion(Long codUsuario);

}
