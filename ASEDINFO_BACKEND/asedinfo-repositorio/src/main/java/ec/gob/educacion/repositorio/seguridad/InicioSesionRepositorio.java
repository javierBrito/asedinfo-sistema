package ec.gob.educacion.repositorio.seguridad;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import ec.gob.educacion.modelo.seguridad.InicioSesion;

@Repository
public interface InicioSesionRepositorio extends JpaRepository<InicioSesion, Long> {
	@Query(nativeQuery = false, value = "select ise from InicioSesion ise where ise.fecha > '2023-01-01' order by ise.fecha desc")
	List<InicioSesion> listarTodosInicioSesion();

	InicioSesion findByCodigo(Long codigo);
}
