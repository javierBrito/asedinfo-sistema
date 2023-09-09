package ec.gob.educacion.repositorio.seguridad;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ec.gob.educacion.modelo.seguridad.ClaveUsuario;

@Repository
public interface ClaveRepositorio extends JpaRepository<ClaveUsuario, Long> {

}
