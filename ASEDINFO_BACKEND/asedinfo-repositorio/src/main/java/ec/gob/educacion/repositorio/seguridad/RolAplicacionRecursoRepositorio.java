package ec.gob.educacion.repositorio.seguridad;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ec.gob.educacion.modelo.seguridad.RolAplicacionRecurso;

@Repository
public interface RolAplicacionRecursoRepositorio extends JpaRepository<RolAplicacionRecurso, Long> {
	
	@Query(nativeQuery = false, value = "select r from RolAplicacionRecurso r where r.rolAplicacion.codigo = :codigoRolAplicacion and r.estado = 'A' order by r.codigo")
	List<RolAplicacionRecurso> listarRolAplicacionRecursoPorRolAplicacion(@Param("codigoRolAplicacion") Long codigoRolAplicacion);

	@Query(nativeQuery = false, value = "select r from RolAplicacionRecurso r where r.rolAplicacion.aplicacion.codigo = :codigoAplicacion and r.estado = 'A' order by r.codigo")
	List<RolAplicacionRecurso> listarRolAplicacionRecursoPorAplicacion(@Param("codigoAplicacion") Long codigoAplicacion);

	List<RolAplicacionRecurso> findByEstadoOrderByCodigo(String estado);

	RolAplicacionRecurso findByCodigo(Long codigo);
}
