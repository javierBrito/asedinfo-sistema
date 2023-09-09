package ec.gob.educacion.repositorio.catalogo;

import ec.gob.educacion.modelo.catalogo.Persona;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonaRepositorio extends JpaRepository<Persona, Long> {

	List<Persona> findByEstadoOrderByCodigo(String estado);

	List<Persona> findByIdentificacion(String identificacion);
	
	List<Persona> findByIdentificacionAndEstado(String identificacion, String estado);

	Persona findByCodigo(Long codigo);
}
