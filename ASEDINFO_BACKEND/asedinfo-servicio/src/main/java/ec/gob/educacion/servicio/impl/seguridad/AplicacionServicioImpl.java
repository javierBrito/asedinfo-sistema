package ec.gob.educacion.servicio.impl.seguridad;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ec.gob.educacion.modelo.DTO.AplicacionDTO;
import ec.gob.educacion.modelo.seguridad.Aplicacion;
import ec.gob.educacion.repositorio.seguridad.AplicacionRepositorio;
import ec.gob.educacion.servicio.seguridad.AplicacionServicio;
import ec.gob.educacion.venta.resources.Constantes;

@Service
public class AplicacionServicioImpl implements AplicacionServicio {

	@Autowired
	private AplicacionRepositorio aplicacionRepositorio;

	@Override
	public List<Aplicacion> listarTodosAplicacion() {
		return aplicacionRepositorio.findAll();
	}

	@Override
	public List<Aplicacion> listarAplicacionActivo(String estado) {
		return aplicacionRepositorio.findByEstadoOrderByNombre(estado);
	}

	@Override
	public Aplicacion buscarAplicacionPorPrefijo(String prefijo, String estado) {
		return aplicacionRepositorio.findByPrefijoAndEstado(prefijo, estado);
	}
		
	@Override
	public Aplicacion buscarAplicacionPorCodigo(Long codigo) {
		return aplicacionRepositorio.findByCodigo(codigo);
	}
	
	@Override
	public Aplicacion registrar(Aplicacion aplicacion) {
		return aplicacionRepositorio.save(aplicacion);
	}

	@Override
	public Aplicacion buscarAplicacionPorPrefijo(String prefijo) {
		return aplicacionRepositorio.findByPrefijoAndEstado(prefijo, Constantes.REGISTRO_ACTIVO);
	}

	@Override
	public AplicacionDTO listaAplicaciones(Long usuarioCod, String prefijoApp, Long codigo, Long codigoAplicacion) {
		return aplicacionRepositorio.listaAplicaciones(usuarioCod, prefijoApp, codigo, codigoAplicacion);
	}

	@Override
	public AplicacionDTO listarAplicacion(Long codUsuario, Long codigo, Long codigoAplicacion) {
		return aplicacionRepositorio.listarAplicacion(codUsuario, codigo, codigoAplicacion);
	}

}
