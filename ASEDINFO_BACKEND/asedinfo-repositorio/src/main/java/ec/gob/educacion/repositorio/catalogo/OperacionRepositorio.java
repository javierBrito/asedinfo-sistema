package ec.gob.educacion.repositorio.catalogo;

import ec.gob.educacion.modelo.catalogo.Operacion;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OperacionRepositorio extends JpaRepository<Operacion, Long> {

	List<Operacion> findByEstadoOrderByCodigo(String estado);

	Operacion findByNemonico(String nemonico);
	
	List<Operacion> findByNemonicoAndEstado(String nemonico, String estado);

	Operacion findByCodigo(Long codigo);
}
