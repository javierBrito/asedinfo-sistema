package ec.gob.educacion.repositorio.venta;

import ec.gob.educacion.modelo.venta.Transaccion;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TransaccionRepositorio extends JpaRepository<Transaccion, Long> {

	List<Transaccion> findByEstadoOrderByCodigo(String estado);

	@Query(nativeQuery = false, value = "select r from Transaccion r where r.descripcion like %:descripcion% and r.estado = 'A'")
	List<Transaccion> findByDescripcion(@Param("descripcion") String descripcion);
	
	List<Transaccion> findByDescripcionAndEstado(String descripcion, String estado);

	Transaccion findByCodigo(Long codigo);
}
