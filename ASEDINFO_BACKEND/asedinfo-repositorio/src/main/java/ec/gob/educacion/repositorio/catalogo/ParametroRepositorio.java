package ec.gob.educacion.repositorio.catalogo;

import ec.gob.educacion.modelo.catalogo.Parametro;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParametroRepositorio extends JpaRepository<Parametro, Long> {

	List<Parametro> findByEstadoOrderByCodigo(String estado);

	Parametro findByNemonico(String nemonico);
	
	List<Parametro> findByNemonicoAndEstado(String nemonico, String estado);

	Parametro findByCodigo(Long codigo);
}
