package ec.gob.educacion.repositorio.seguridad;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ec.gob.educacion.modelo.seguridad.UsuarioAplicacion;

@Repository
public interface UsuarioAplicacionRepositorio extends JpaRepository<UsuarioAplicacion, Long> {
	
	@Query(nativeQuery = false, value = "select r from UsuarioAplicacion r where r.aplicacion.codigo = :codAplicacion and r.estado = 'A' order by r.codigo")
	List<UsuarioAplicacion> listarUsuarioAplicacionPorCodAplicacion(@Param("codAplicacion") Long codAplicacion);

	@Query(nativeQuery = false, value = "select r from UsuarioAplicacion r where r.usuario.codigo = :codUsuario and r.estado = 'A' order by r.codigo")
	List<UsuarioAplicacion> listarUsuarioAplicacionPorCodUsuario(@Param("codUsuario") Long codUsuario);

	@Query(nativeQuery = false, value = "select r from UsuarioAplicacion r where r.usuario.codigo = :codUsuario and r.aplicacion.codigo = :codAplicacion and r.estado = 'A' order by r.codigo")
	List<UsuarioAplicacion> listarUsuarioAplicacionPorUsuarioYAplicacion(@Param("codUsuario") Long codUsuario, @Param("codAplicacion") Long codAplicacion);

	List<UsuarioAplicacion> findByEstadoOrderByCodigo(String estado);

	UsuarioAplicacion findByCodigo(Long codigo);
}
