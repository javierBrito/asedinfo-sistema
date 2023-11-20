package ec.gob.educacion.servicio.impl.catalogo;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ec.gob.educacion.modelo.catalogo.Parametro;
import ec.gob.educacion.repositorio.catalogo.ParametroRepositorio;
import ec.gob.educacion.servicio.catalogo.ParametroServicio;
import ec.gob.educacion.venta.resources.Constantes;

@Service
public class ParametroServicioImpl implements ParametroServicio {

	@Autowired
	private ParametroRepositorio parametroRepositorio;

	@Override
	public List<Parametro> listarTodosParametro() {
		return parametroRepositorio.findAll();
	}

	@Override
	public List<Parametro> listarParametroActivo(String estado) {
		return parametroRepositorio.findByEstadoOrderByCodigo(estado);
	}

	@Override
	public Parametro buscarParametroPorCodigo(Long codigo) {
		return parametroRepositorio.findByCodigo(codigo);
	}

	@Override
	public Parametro buscarParametroPorNemonico(String nemonico) {
		return parametroRepositorio.findByNemonico(nemonico);
	}

	@Override
	public List<Parametro> buscarPorNemonico(String nemonico) {
		return parametroRepositorio.findByNemonicoAndEstado(nemonico, Constantes.REGISTRO_ACTIVO);
	}

	@Override
	public Parametro registrar(Parametro parametro) {
		return parametroRepositorio.save(parametro);
	}

	@Override
	public Parametro crearParametro(Parametro parametro) {
		return parametroRepositorio.save(parametro);
	}
	
}
