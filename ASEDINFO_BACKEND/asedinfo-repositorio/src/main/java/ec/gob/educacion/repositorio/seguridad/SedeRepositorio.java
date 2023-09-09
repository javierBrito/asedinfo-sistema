package ec.gob.educacion.repositorio.seguridad;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import ec.gob.educacion.modelo.seguridad.Sede;

@Repository
public interface SedeRepositorio extends JpaRepository<Sede, Long> {
	List<Sede> findByEstado(String estado);
	
	@Query(nativeQuery = false, value = "select r from Sede r where r.sedeSuperior.codigo is null and r.estado = 'A' order by r.nombre")
	List<Sede> listarSedeSuperior();

	Sede findByCodigo(Long codigo);
}
