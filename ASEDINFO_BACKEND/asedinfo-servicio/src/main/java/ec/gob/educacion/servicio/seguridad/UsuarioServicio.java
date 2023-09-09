package ec.gob.educacion.servicio.seguridad;

import java.util.List;
import ec.gob.educacion.modelo.DTO.LoginDTO;
import ec.gob.educacion.modelo.seguridad.ClaveUsuario;
import ec.gob.educacion.modelo.seguridad.Usuario;
import ec.gob.educacion.modelo.seguridad.UsuarioDetalleAccion;

public interface UsuarioServicio {
	/**
	 * Permite listar Usuario
	 * 
	 * @param null
	 * @return lista Usuario
	 */
	List<Usuario> listarTodosUsuario();

	/**
	 * Permite listar Usuario Activo
	 * 
	 * @param estado
	 * @return lista Usuario
	 */
	List<Usuario> listarUsuarioActivo(String estado);

	/**
	 * Permite obtener lista Socio
	 * 
	 * @param codPersona
	 * @return listaCliente
	 */
	List<Usuario> listarUsuarioPorPersona(Long codPersona);

	/**
	 * Permite listar Usuario Activo
	 * 
	 * @param estado, codigoAplicacion
	 * @return lista Usuario
	 */
	List<Usuario> listarUsuarioPorSede(Long codigoSede);

	/**
	 * Permite obtener Usuario
	 * 
	 * @param codigo
	 * @return Usuario
	 */
	Usuario buscarUsuarioPorCodigo(Long codigo);

	/**
	 * Permite obtener lista Usuario
	 * 
	 * @param identificacion
	 * @return listaUsuario
	 */
	List<Usuario> listarUsuarioPorIdentificacion(String identificacion);

	/**
	 * Permite registrar Usuario
	 * 
	 * @param Usuario
	 * @return Usuario
	 */
	Usuario registrar(Usuario Usuario);

	//List<Usuario> buscarPorIdentificacion(String identificacion);

	List<LoginDTO> listaRespuestaLogin(String identificacion, String clave);

	Usuario crearUsuario(Usuario usuario);

	ClaveUsuario crearClaveUsuario(Usuario usuario, String claveEncriptada);

	UsuarioDetalleAccion crearUsuarioDetalleAccion(Usuario usuario, Integer tipo);
}
