package ec.gob.educacion.repositorio.seguridad;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ec.gob.educacion.modelo.seguridad.Recurso;

@Repository
public interface RecursoRepositorio extends JpaRepository<Recurso, Long> {
	
	@Query(nativeQuery = false, value = "select r from Recurso r where r.aplicacion.codigo = :codigoAplicacion and r.estado = 'A' order by r.nombre")
	List<Recurso> listarRecursoPorAplicacion(@Param("codigoAplicacion") Long codigoAplicacion);

	@Query(nativeQuery = false, value = "select r from Recurso r where r.aplicacion.codigo = :codigoAplicacion and r.padre.codigo is null and r.estado = 'A' order by r.nombre")
	List<Recurso> listarRecursoPadre(@Param("codigoAplicacion") Long codigoAplicacion);

	List<Recurso> findByEstadoOrderByCodigo(String estado);

	Recurso findByCodigo(Long codigo);

	@Query(nativeQuery = false, value = "select a from Recurso a where a.codigo = :codigoRecurso")
	Recurso obtenerRecurso(@Param("codigoRecurso") Long codigoRecurso);

	@Query(nativeQuery = false, value = "select a.recurso from RolAplicacionRecurso a where a.rolAplicacion.codigo = :codigoRol and a.estado = 'A'")
	List<Recurso> listaMenu(@Param("codigoRol") Long codigoRol);

}
