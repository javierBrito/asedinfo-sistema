package ec.gob.educacion.repositorio.seguridad;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ec.gob.educacion.modelo.seguridad.UsuarioDetalleAccion;

@Repository
public interface UsuarioDetalleAccionRepositorio extends JpaRepository<UsuarioDetalleAccion, Long> {

}
