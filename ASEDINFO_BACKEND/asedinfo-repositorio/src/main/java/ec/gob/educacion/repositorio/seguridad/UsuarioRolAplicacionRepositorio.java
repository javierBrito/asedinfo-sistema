package ec.gob.educacion.repositorio.seguridad;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ec.gob.educacion.modelo.seguridad.UsuarioRolAplicacion;

@Repository
public interface UsuarioRolAplicacionRepositorio extends JpaRepository<UsuarioRolAplicacion, Long> {
	
	@Query(nativeQuery = false, value = "select r from UsuarioRolAplicacion r where r.rolAplicacion.codigo = :codRolAplicacion order by r.codigo")
	List<UsuarioRolAplicacion> listarUsuarioRolAplicacionPorCodRolAplicacion(@Param("codRolAplicacion") Long codRolAplicacion);

	@Query(nativeQuery = false, value = "select r from UsuarioRolAplicacion r where r.usuario.codigo = :codUsuario order by r.codigo")
	List<UsuarioRolAplicacion> listarUsuarioRolAplicacionPorCodUsuario(@Param("codUsuario") Long codUsuario);

	@Query(nativeQuery = false, value = "select r from UsuarioRolAplicacion r where r.usuario.codigo = :codUsuario and r.rolAplicacion.aplicacion.codigo = :codAplicacion and r.estado = 'A' order by r.codigo")
	List<UsuarioRolAplicacion> listarUsuarioRolAplicacionPorCodUsuarioYCodAplicacion(@Param("codUsuario") Long codUsuario, @Param("codAplicacion") Long codAplicacion);

	@Query(nativeQuery = false, value = "select r from UsuarioRolAplicacion r where r.usuario.codigo = :codUsuario and r.rolAplicacion.codigo = :codRolAplicacion order by r.codigo")
	List<UsuarioRolAplicacion> listarUsuarioRolAplicacionPorCodUsuarioYCodRolAplicacion(@Param("codUsuario") Long codUsuario, @Param("codRolAplicacion") Long codRolAplicacion);

	List<UsuarioRolAplicacion> findByEstadoOrderByCodigo(String estado);

	UsuarioRolAplicacion findByCodigo(Long codigo);
}
