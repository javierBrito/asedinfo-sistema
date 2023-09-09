package ec.gob.educacion.servicio.impl.venta;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ec.gob.educacion.modelo.catalogo.Persona;
import ec.gob.educacion.modelo.venta.Cliente;
import ec.gob.educacion.repositorio.venta.ClienteRepositorio;
import ec.gob.educacion.servicio.catalogo.PersonaServicio;
import ec.gob.educacion.servicio.venta.ClienteServicio;

@Service
public class ClienteServicioImpl implements ClienteServicio {

	@Autowired
	private ClienteRepositorio clienteRepositorio;
	@Autowired
	private PersonaServicio personaServicio;
	
	@Override
	public List<Cliente> listarTodosCliente() {
		return clienteRepositorio.findAll();
	}

	@Override
	public List<Cliente> listarClienteActivo(String estado) {
		return clienteRepositorio.findByEstadoOrderByCodigo(estado);
	}

	@Override
	public Cliente buscarClientePorCodigo(Long codigo) {
		return clienteRepositorio.findByCodigo(codigo);
	}

	@Override
	public List<Cliente> listarClientePorPersona(Long codPersona) {
		return clienteRepositorio.listarClientePorPersona(codPersona);
	}

	@Override
	public Cliente registrar(Cliente cliente) {
		if (cliente.getCodPersona() != null && cliente.getCodPersona() != 0) {
			Persona persona = new Persona();
			persona = personaServicio.buscarPersonaPorCodigo(cliente.getCodPersona());
			if (persona != null) {
				cliente.setPersona(persona);
			}
		}

		return clienteRepositorio.save(cliente);
	}
	
}
