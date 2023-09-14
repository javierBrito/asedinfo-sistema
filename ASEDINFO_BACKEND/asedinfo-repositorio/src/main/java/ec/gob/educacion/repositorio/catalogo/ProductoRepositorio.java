package ec.gob.educacion.repositorio.catalogo;

import ec.gob.educacion.modelo.catalogo.Producto;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepositorio extends JpaRepository<Producto, Long> {

	@Query(nativeQuery = false, value = "select r from Producto r where r.modulo.nemonico = :nemonicoModulo and r.estado = 'A'")
	List<Producto> listarProductoActivo(@Param("nemonicoModulo") String nemonicoModulo);

	@Query(nativeQuery = false, value = "select r from Producto r where r.modulo.nemonico = :nemonicoModulo and r.descripcion like %:descripcion% and r.estado = 'A'")
	List<Producto> findByDescripcion(@Param("descripcion") String descripcion, @Param("nemonicoModulo") String nemonicoModulo);
	
	List<Producto> findByDescripcionAndEstado(String descripcion, String estado);

	Producto findByCodigo(Long codigo);
}
