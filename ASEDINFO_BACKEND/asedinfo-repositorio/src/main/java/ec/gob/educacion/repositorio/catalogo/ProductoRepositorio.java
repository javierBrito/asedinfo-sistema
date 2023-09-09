package ec.gob.educacion.repositorio.catalogo;

import ec.gob.educacion.modelo.catalogo.Producto;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepositorio extends JpaRepository<Producto, Long> {

	List<Producto> findByEstadoOrderByCodigo(String estado);

	@Query(nativeQuery = false, value = "select r from Producto r where r.descripcion like %:descripcion% and r.estado = 'A'")
	List<Producto> findByDescripcion(@Param("descripcion") String descripcion);
	
	List<Producto> findByDescripcionAndEstado(String descripcion, String estado);

	Producto findByCodigo(Long codigo);
}
