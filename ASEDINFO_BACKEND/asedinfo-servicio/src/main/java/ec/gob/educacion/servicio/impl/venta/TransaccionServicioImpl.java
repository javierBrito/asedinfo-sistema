package ec.gob.educacion.servicio.impl.venta;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ec.gob.educacion.modelo.venta.Transaccion;
import ec.gob.educacion.repositorio.venta.TransaccionRepositorio;
import ec.gob.educacion.servicio.venta.TransaccionServicio;
import ec.gob.educacion.venta.resources.Constantes;

@Service
public class TransaccionServicioImpl implements TransaccionServicio {

	@Autowired
	private TransaccionRepositorio transaccionRepositorio;

	@Override
	public List<Transaccion> listarTodosTransaccion() {
		return transaccionRepositorio.findAll();
	}

	@Override
	public List<Transaccion> listarTransaccionActivo(String estado) {
		return transaccionRepositorio.findByEstadoOrderByCodigo(estado);
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
	public Transaccion registrar(Transaccion transaccion) {
		return transaccionRepositorio.save(transaccion);
	}

	@Override
	public Transaccion crearTransaccion(Transaccion transaccion) {
		return transaccionRepositorio.save(transaccion);
	}
	
}
