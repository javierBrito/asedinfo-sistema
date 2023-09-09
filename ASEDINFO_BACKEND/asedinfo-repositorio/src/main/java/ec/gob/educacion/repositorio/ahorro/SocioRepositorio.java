package ec.gob.educacion.repositorio.ahorro;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ec.gob.educacion.modelo.ahorro.Socio;

@Repository
public interface SocioRepositorio extends JpaRepository<Socio, Long> {

	List<Socio> findByEstadoOrderByCodigo(String estado);

	@Query(nativeQuery = false, value = "select r from Socio r where r.persona.codigo = :codPersona and r.estado = 'A'")
	List<Socio> listarSocioPorPersona(@Param("codPersona") Long codPersona);

	Socio findByCodigo(Long codigo);
}
