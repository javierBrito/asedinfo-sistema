package ec.gob.educacion.controlador.venta;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ec.gob.educacion.controlador.util.Constantes;
import ec.gob.educacion.modelo.response.ResponseGenerico;
import ec.gob.educacion.modelo.venta.Cliente;
import ec.gob.educacion.servicio.venta.ClienteServicio;
import ec.gob.educacion.venta.resources.EstadoEnum;

@RestController
@RequestMapping("venta/")
public class ClienteControlador {

	@Autowired
	private ClienteServicio clienteServicio;

	@GetMapping(value = "listarTodosCliente")
	public ResponseGenerico<Cliente> listarTodosCliente() {
		List<Cliente> listaCliente = clienteServicio.listarTodosCliente();
		// Respuesta
		ResponseGenerico<Cliente> response = new ResponseGenerico<>();
		response.setListado(listaCliente);
		response.setTotalRegistros((long) listaCliente.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarClienteActivo")
	public ResponseGenerico<Cliente> listarClienteActivo() {
		List<Cliente> listaCliente = clienteServicio.listarClienteActivo(EstadoEnum.ACTIVO.getDescripcion());
		// Respuesta
		ResponseGenerico<Cliente> response = new ResponseGenerico<>();
		response.setListado(listaCliente);
		response.setTotalRegistros((long) listaCliente.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	@GetMapping(value = "listarClientePorPersona/{codPersona}")
	public ResponseGenerico<Cliente> listarClientePorPersona(@PathVariable("codPersona") Long codPersona) {
		List<Cliente> listaCliente = clienteServicio.listarClientePorPersona(codPersona);
		// Respuesta
		ResponseGenerico<Cliente> response = new ResponseGenerico<>();
		response.setListado(listaCliente);
		response.setTotalRegistros((long) listaCliente.size());
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	/**
	 * REST para obtener Socio
	 * 
	 * @return Socio
	 */
	@GetMapping(value = "buscarClientePorCodigo/{codigo}")
	public ResponseGenerico<Cliente> buscarClientePorCodigo(@PathVariable("codigo") Long codigo) {
		Cliente cliente = clienteServicio.buscarClientePorCodigo(codigo);
		// Respuesta
		ResponseGenerico<Cliente> response = new ResponseGenerico<>();
		response.setObjeto(cliente);
		response.setTotalRegistros((long) (1));
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK);
		return response;
	}

	/**
	 * REST para guardar o actualizar cliente
	 * 
	 * @return guardar
	 */
	@PostMapping(value = "guardarCliente")
	public ResponseGenerico<Cliente> guardarCliente(@RequestBody Cliente cliente) {
		cliente = clienteServicio.registrar(cliente);
		// Respuesta
		ResponseGenerico<Cliente> response = new ResponseGenerico<>();
		response.setObjeto(cliente);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_CREADO);
		return response;
	}

	/**
	 * Metodo para eliminar (baja lógica) un registro
	 * 
	 * @return objeto response
	 */
	@DeleteMapping(value = "eliminarClientePorId/{codigo}")
	public ResponseGenerico<Cliente> eliminarCliente(@PathVariable("codigo") Long codigo) {
		Cliente cliente = clienteServicio.buscarClientePorCodigo(codigo);
		cliente.setEstado(EstadoEnum.INACTIVO.getDescripcion());
		clienteServicio.registrar(cliente);
		// Respuesta
		ResponseGenerico<Cliente> response = new ResponseGenerico<>();
		response.setObjeto(cliente);
		response.setCodigoRespuesta(Constantes.CODIGO_RESPUESTA_OK);
		response.setMensaje(Constantes.MENSAJE_OK_ELIMINADO);
		return response;
	}
}
