package ec.gob.educacion.servicio.impl.ahorro;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ec.gob.educacion.modelo.catalogo.Persona;
import ec.gob.educacion.modelo.ahorro.Socio;
import ec.gob.educacion.repositorio.ahorro.SocioRepositorio;
import ec.gob.educacion.servicio.catalogo.PersonaServicio;
import ec.gob.educacion.servicio.ahorro.SocioServicio;

@Service
public class SocioServicioImpl implements SocioServicio {

	@Autowired
	private SocioRepositorio socioRepositorio;
	@Autowired
	private PersonaServicio personaServicio;
	
	@Override
	public List<Socio> listarTodosSocio() {
		return socioRepositorio.findAll();
	}

	@Override
	public List<Socio> listarSocioActivo(String estado) {
		return socioRepositorio.findByEstadoOrderByCodigo(estado);
	}

	@Override
	public Socio buscarSocioPorCodigo(Long codigo) {
		return socioRepositorio.findByCodigo(codigo);
	}

	@Override
	public List<Socio> listarSocioPorPersona(Long codPersona) {
		return socioRepositorio.listarSocioPorPersona(codPersona);
	}

	@Override
	public Socio registrar(Socio socio) {
		if (socio.getCodPersona() != null && socio.getCodPersona() != 0) {
			Persona persona = new Persona();
			persona = personaServicio.buscarPersonaPorCodigo(socio.getCodPersona());
			if (persona != null) {
				socio.setPersona(persona);
			}
		}

		return socioRepositorio.save(socio);
	}
	
}
