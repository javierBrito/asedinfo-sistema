package ec.gob.educacion.repositorio.catalogo;

import ec.gob.educacion.modelo.catalogo.Transaccion;

import java.util.Date;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TransaccionRepositorio extends JpaRepository<Transaccion, Long> {

	List<Transaccion> findByEstadoOrderByCodigo(String estado);

	@Query(nativeQuery = false, value = "select r from Transaccion r where r.modulo.nemonico = :nemonicoModulo and r.estado = 'A'")
	List<Transaccion> listarTransaccionActivo(@Param("nemonicoModulo") String nemonicoModulo);

	@Query(nativeQuery = false, value = "select r from Transaccion r where r.descripcion like %:descripcion% and r.estado = 'A'")
	List<Transaccion> findByDescripcion(@Param("descripcion") String descripcion);

	@Query(nativeQuery = false, value = "select r from Transaccion r where r.fechaInicio >= :fechaInicio and r.fechaInicio <= :fechaFin and r.estado = 'A'")
	List<Transaccion> listarTransaccionPorRangoFechas(@Param("fechaInicio") Date fechaInicio, @Param("fechaFin") Date fechaFin);

	@Query(nativeQuery = false, value = "select r from Transaccion r where (datediff(r.fechaFin, Now()) < 0 or datediff(fecha_fin, Now()) <= 5) and r.estado = 'A'")
	List<Transaccion> listarTransaccionACaducarse(@Param("numDias") int numDias);
	
	List<Transaccion> findByDescripcionAndEstado(String descripcion, String estado);

	Transaccion findByCodigo(Long codigo);
}
