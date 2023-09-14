package ec.gob.educacion.repositorio.catalogo;

import ec.gob.educacion.modelo.catalogo.Modulo;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ModuloRepositorio extends JpaRepository<Modulo, Long> {

	List<Modulo> findByEstadoOrderByCodigo(String estado);

	Modulo findByNemonico(String nemonico);
	
	List<Modulo> findByNemonicoAndEstado(String nemonico, String estado);

	Modulo findByCodigo(Long codigo);
}
