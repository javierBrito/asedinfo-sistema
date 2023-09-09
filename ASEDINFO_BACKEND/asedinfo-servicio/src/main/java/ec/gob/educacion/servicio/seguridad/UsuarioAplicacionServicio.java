package ec.gob.educacion.servicio.seguridad;

import java.util.List;

import ec.gob.educacion.modelo.seguridad.UsuarioAplicacion;

public interface UsuarioAplicacionServicio {
	/**
	 * Permite listar UsuarioAplicacion
	 * 
	 * @param null
	 * @return lista UsuarioAplicacion
	 */
	List<UsuarioAplicacion> listarTodosUsuarioAplicacion();

	/**
	 * Permite listar UsuarioAplicacion Activo
	 * 
	 * @param estado
	 * @return lista UsuarioAplicacion
	 */
	List<UsuarioAplicacion> listarUsuarioAplicacionActivo(String estado);

	/**
	 * Permite listar UsuarioAplicacion Activo
	 * 
	 * @param estado, codAplicacion
	 * @return lista UsuarioAplicacion
	 */
	List<UsuarioAplicacion> listarUsuarioAplicacionPorCodAplicacion(Long codAplicacion);

	/**
	 * Permite listar UsuarioAplicacion Padre
	 * 
	 * @param estado
	 * @return lista UsuarioAplicacion
	 */
	List<UsuarioAplicacion> listarUsuarioAplicacionPorCodUsuario(Long codUsuario);

	/**
	 * Permite listar UsuarioAplicacion Padre
	 * 
	 * @param estado
	 * @return lista UsuarioAplicacion
	 */
	List<UsuarioAplicacion> listarUsuarioAplicacionPorUsuarioYAplicacion(Long codUsuario, Long codAplicacion);

	/**
	 * Permite obtener UsuarioAplicacion
	 * 
	 * @param codigo
	 * @return UsuarioAplicacion
	 */
	UsuarioAplicacion buscarUsuarioAplicacionPorCodigo(Long codigo);

	/**
	 * Permite registrar UsuarioAplicacion
	 * 
	 * @param UsuarioAplicacion
	 * @return UsuarioAplicacion
	 */
	UsuarioAplicacion registrar(UsuarioAplicacion UsuarioAplicacion);

}
