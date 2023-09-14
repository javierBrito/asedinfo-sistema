package ec.gob.educacion.servicio.impl.catalogo;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ec.gob.educacion.modelo.catalogo.Modulo;
import ec.gob.educacion.modelo.catalogo.Operacion;
import ec.gob.educacion.repositorio.catalogo.OperacionRepositorio;
import ec.gob.educacion.servicio.catalogo.ModuloServicio;
import ec.gob.educacion.servicio.catalogo.OperacionServicio;
import ec.gob.educacion.venta.resources.Constantes;

@Service
public class OperacionServicioImpl implements OperacionServicio {

	@Autowired
	private OperacionRepositorio operacionRepositorio;
	@Autowired
	private ModuloServicio moduloServicio;

	@Override
	public List<Operacion> listarTodosOperacion() {
		return operacionRepositorio.findAll();
	}

	@Override
	public List<Operacion> listarOperacionActivo(String estado) {
		return operacionRepositorio.findByEstadoOrderByCodigo(estado);
	}

	@Override
	public Operacion buscarOperacionPorCodigo(Long codigo) {
		return operacionRepositorio.findByCodigo(codigo);
	}

	@Override
	public Operacion buscarOperacionPorNemonico(String nemonico) {
		return operacionRepositorio.findByNemonico(nemonico);
	}

	@Override
	public List<Operacion> buscarPorNemonico(String nemonico) {
		return operacionRepositorio.findByNemonicoAndEstado(nemonico, Constantes.REGISTRO_ACTIVO);
	}

	@Override
	public Operacion registrar(Operacion operacion) {
		if (operacion.getCodModulo() != 0) {
			Modulo modulo = new Modulo();
			modulo = moduloServicio.buscarModuloPorCodigo(operacion.getCodModulo());
			if (modulo != null) {
				operacion.setModulo(modulo);
			}
		}
		return operacionRepositorio.save(operacion);
	}

	@Override
	public Operacion crearOperacion(Operacion operacion) {
		return operacionRepositorio.save(operacion);
	}
	
}
