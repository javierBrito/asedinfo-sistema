package ec.gob.educacion.servicio.seguridad;

import java.util.List;

import ec.gob.educacion.modelo.seguridad.UsuarioRolAplicacion;

public interface UsuarioRolAplicacionServicio {
	/**
	 * Permite listar UsuarioRolAplicacion
	 * 
	 * @param null
	 * @return lista UsuarioRolAplicacion
	 */
	List<UsuarioRolAplicacion> listarTodosUsuarioRolAplicacion();

	/**
	 * Permite listar UsuarioRolAplicacion Activo
	 * 
	 * @param estado
	 * @return lista UsuarioRolAplicacion
	 */
	List<UsuarioRolAplicacion> listarUsuarioRolAplicacionActivo(String estado);

	/**
	 * Permite listar UsuarioRolAplicacion PorCodAplicacion
	 * 
	 * @param estado, codRolAplicacion
	 * @return lista UsuarioRolAplicacion
	 */
	List<UsuarioRolAplicacion> listarUsuarioRolAplicacionPorCodRolAplicacion(Long codRolAplicacion);

	/**
	 * Permite listar UsuarioRolAplicacion PorCodUsuario
	 * 
	 * @param estado
	 * @return lista UsuarioRolAplicacion
	 */
	List<UsuarioRolAplicacion> listarUsuarioRolAplicacionPorCodUsuario(Long codUsuario);

	/**
	 * Permite listar UsuarioRolAplicacion Por CodUsuario y CodAplicacion  
	 * 
	 * @param estado
	 * @return lista UsuarioRolAplicacion
	 */
	List<UsuarioRolAplicacion> listarUsuarioRolAplicacionPorCodUsuarioYCodAplicacion(Long codUsuario, Long codAplicacion);

	/**
	 * Permite listar UsuarioRolAplicacion Por CodUsuario y CodAplicacion  
	 * 
	 * @param estado
	 * @return lista UsuarioRolAplicacion
	 */
	List<UsuarioRolAplicacion> listarUsuarioRolAplicacionPorCodUsuarioYCodRolAplicacion(Long codUsuario, Long codRolAplicacion);

	/**
	 * Permite obtener UsuarioRolAplicacion
	 * 
	 * @param codigo
	 * @return UsuarioRolAplicacion
	 */
	UsuarioRolAplicacion buscarUsuarioRolAplicacionPorCodigo(Long codigo);

	/**
	 * Permite registrar UsuarioRolAplicacion
	 * 
	 * @param UsuarioRolAplicacion
	 * @return UsuarioRolAplicacion
	 */
	UsuarioRolAplicacion registrar(UsuarioRolAplicacion usuarioRolAplicacion);

	UsuarioRolAplicacion crearUsuarioRolAplicacion(UsuarioRolAplicacion usuarioRolAplicacion);

}
