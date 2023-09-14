package ec.gob.educacion.servicio.impl.catalogo;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ec.gob.educacion.modelo.catalogo.Modulo;
import ec.gob.educacion.repositorio.catalogo.ModuloRepositorio;
import ec.gob.educacion.servicio.catalogo.ModuloServicio;
import ec.gob.educacion.venta.resources.Constantes;

@Service
public class ModuloServicioImpl implements ModuloServicio {

	@Autowired
	private ModuloRepositorio moduloRepositorio;

	@Override
	public List<Modulo> listarTodosModulo() {
		return moduloRepositorio.findAll();
	}

	@Override
	public List<Modulo> listarModuloActivo(String estado) {
		return moduloRepositorio.findByEstadoOrderByCodigo(estado);
	}

	@Override
	public Modulo buscarModuloPorCodigo(Long codigo) {
		return moduloRepositorio.findByCodigo(codigo);
	}

	@Override
	public Modulo buscarModuloPorNemonico(String nemonico) {
		return moduloRepositorio.findByNemonico(nemonico);
	}

	@Override
	public List<Modulo> buscarPorNemonico(String nemonico) {
		return moduloRepositorio.findByNemonicoAndEstado(nemonico, Constantes.REGISTRO_ACTIVO);
	}

	@Override
	public Modulo registrar(Modulo modulo) {
		return moduloRepositorio.save(modulo);
	}

	@Override
	public Modulo crearModulo(Modulo modulo) {
		return moduloRepositorio.save(modulo);
	}
	
}
