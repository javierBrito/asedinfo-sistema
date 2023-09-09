package ec.gob.educacion.servicio.impl.catalogo;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ec.gob.educacion.modelo.catalogo.Persona;
import ec.gob.educacion.repositorio.catalogo.PersonaRepositorio;
import ec.gob.educacion.servicio.catalogo.PersonaServicio;
import ec.gob.educacion.venta.resources.Constantes;

@Service
public class PersonaServicioImpl implements PersonaServicio {

	@Autowired
	private PersonaRepositorio personaRepositorio;

	@Override
	public List<Persona> listarTodosPersona() {
		return personaRepositorio.findAll();
	}

	@Override
	public List<Persona> listarPersonaActivo(String estado) {
		return personaRepositorio.findByEstadoOrderByCodigo(estado);
	}

	@Override
	public Persona buscarPersonaPorCodigo(Long codigo) {
		return personaRepositorio.findByCodigo(codigo);
	}

	@Override
	public List<Persona> listarPersonaPorIdentificacion(String identificacion) {
		return personaRepositorio.findByIdentificacion(identificacion);
	}

	@Override
	public List<Persona> buscarPorIdentificacion(String identificacion) {
		return personaRepositorio.findByIdentificacionAndEstado(identificacion, Constantes.REGISTRO_ACTIVO);
	}

	@Override
	public Persona registrar(Persona persona) {
		return personaRepositorio.save(persona);
	}

	@Override
	public Persona crearPersona(Persona persona) {
		return personaRepositorio.save(persona);
	}
	
}
