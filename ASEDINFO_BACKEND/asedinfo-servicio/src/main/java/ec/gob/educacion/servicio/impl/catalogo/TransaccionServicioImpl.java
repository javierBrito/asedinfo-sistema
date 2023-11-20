package ec.gob.educacion.servicio.impl.catalogo;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ec.gob.educacion.modelo.catalogo.Modulo;
import ec.gob.educacion.modelo.catalogo.Producto;
import ec.gob.educacion.modelo.catalogo.Transaccion;
import ec.gob.educacion.modelo.venta.Cliente;
import ec.gob.educacion.repositorio.catalogo.TransaccionRepositorio;
import ec.gob.educacion.servicio.catalogo.ModuloServicio;
import ec.gob.educacion.servicio.catalogo.ProductoServicio;
import ec.gob.educacion.servicio.catalogo.TransaccionServicio;
import ec.gob.educacion.servicio.venta.ClienteServicio;
import ec.gob.educacion.venta.resources.Constantes;

@Service
public class TransaccionServicioImpl implements TransaccionServicio {

	@Autowired
	private TransaccionRepositorio transaccionRepositorio;
	@Autowired
	private ModuloServicio moduloServicio;
	@Autowired
	private ClienteServicio clienteServicio;
	@Autowired
	private ProductoServicio productoServicio;

	private SimpleDateFormat formatoFecha = new SimpleDateFormat("yyyy-MM-dd");

	@Override
	public List<Transaccion> listarTodosTransaccion() {
		return transaccionRepositorio.findAll();
	}

	@Override
	public List<Transaccion> listarTransaccionActivo(String nemonicoModulo) {
		return transaccionRepositorio.listarTransaccionActivo(nemonicoModulo);
	}

	@Override
	public Transaccion buscarTransaccionPorCodigo(Long codigo) {
		return transaccionRepositorio.findByCodigo(codigo);
	}

	@Override
	public List<Transaccion> listarTransaccionPorDescripcion(String descripcion) {
		return transaccionRepositorio.findByDescripcion(descripcion);
	}

	@Override
	public List<Transaccion> buscarPorDescripcion(String descripcion) {
		return transaccionRepositorio.findByDescripcionAndEstado(descripcion, Constantes.REGISTRO_ACTIVO);
	}

	@Override
	public List<Transaccion> listarTransaccionPorRangoFechas(String fechaInicio, String fechaFin) {
		try {
			// Transformar fecha tipo String a fecha tipo Date
			Date fechaInicioDate = formatoFecha.parse(fechaInicio);
			Date fechaFinDate = formatoFecha.parse(fechaFin);
			return transaccionRepositorio.listarTransaccionPorRangoFechas(fechaInicioDate, fechaFinDate);
		} catch (ParseException e) {
			System.out.println("Problemas en el servicio, error = "+e.getMessage());
			return null;
		}
	}

	@Override
	public List<Transaccion> listarTransaccionACaducarse(int numDias) {
		return transaccionRepositorio.listarTransaccionACaducarse(numDias);
	}

	@Override
	public Transaccion registrar(Transaccion transaccion) {
		if (transaccion.getCodModulo() != 0) {
			Modulo modulo = new Modulo();
			modulo = moduloServicio.buscarModuloPorCodigo(transaccion.getCodModulo());
			if (modulo != null) {
				transaccion.setModulo(modulo);
			}
		}
		if (transaccion.getCodCliente() != 0) {
			Cliente cliente = new Cliente();
			cliente = clienteServicio.buscarClientePorCodigo(transaccion.getCodCliente());
			if (cliente != null) {
				transaccion.setCliente(cliente);
			}
		}
		if (transaccion.getCodProducto() != 0) {
			Producto producto = new Producto();
			producto = productoServicio.buscarProductoPorCodigo(transaccion.getCodProducto());
			if (producto != null) {
				transaccion.setProducto(producto);
			}
		}

		return transaccionRepositorio.save(transaccion);
	}

	@Override
	public Transaccion crearTransaccion(Transaccion transaccion) {
		return transaccionRepositorio.save(transaccion);
	}
	
}
