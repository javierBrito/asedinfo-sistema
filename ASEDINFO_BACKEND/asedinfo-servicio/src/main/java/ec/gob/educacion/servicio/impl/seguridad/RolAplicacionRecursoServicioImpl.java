package ec.gob.educacion.servicio.impl.seguridad;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ec.gob.educacion.modelo.seguridad.Recurso;
import ec.gob.educacion.modelo.seguridad.RolAplicacion;
import ec.gob.educacion.modelo.seguridad.RolAplicacionRecurso;
import ec.gob.educacion.repositorio.seguridad.RolAplicacionRecursoRepositorio;
import ec.gob.educacion.servicio.seguridad.RecursoServicio;
import ec.gob.educacion.servicio.seguridad.RolAplicacionRecursoServicio;
import ec.gob.educacion.servicio.seguridad.RolAplicacionServicio;

@Service
public class RolAplicacionRecursoServicioImpl implements RolAplicacionRecursoServicio {

	@Autowired
	private RolAplicacionRecursoRepositorio rolAplicacionRecursoRepositorio;
	@Autowired
	private RolAplicacionServicio rolAplicacionServicio;
	@Autowired
	private RecursoServicio recursoServicio;

	@Override
	public List<RolAplicacionRecurso> listarTodosRolAplicacionRecurso() {
		return rolAplicacionRecursoRepositorio.findAll();
	}

	@Override
	public List<RolAplicacionRecurso> listarRolAplicacionRecursoActivo(String estado) {
		System.out.println("estado = "+estado);
		return rolAplicacionRecursoRepositorio.findByEstadoOrderByCodigo(estado);
	}

	@Override
	public List<RolAplicacionRecurso> listarRolAplicacionRecursoPorRolAplicacion(Long codigoRolAplicacion) {
		return rolAplicacionRecursoRepositorio.listarRolAplicacionRecursoPorRolAplicacion(codigoRolAplicacion);
	}

	@Override
	public List<RolAplicacionRecurso> listarRolAplicacionRecursoPorAplicacion(Long codigoAplicacion) {
		return rolAplicacionRecursoRepositorio.listarRolAplicacionRecursoPorAplicacion(codigoAplicacion);
	}

	@Override
	public RolAplicacionRecurso buscarRolAplicacionRecursoPorCodigo(Long codigo) {
		return rolAplicacionRecursoRepositorio.findByCodigo(codigo);
	}

	@Override
	public RolAplicacionRecurso registrar(RolAplicacionRecurso rolAplicacionRecurso) {
		if (rolAplicacionRecurso.getCodigoRolAplicacion() != 0) {
			RolAplicacion rolAplicacion = new RolAplicacion();
			rolAplicacion = rolAplicacionServicio.buscarRolAplicacionPorCodigo(rolAplicacionRecurso.getCodigoRolAplicacion());
			if (rolAplicacion != null) {
				rolAplicacionRecurso.setRolAplicacion(rolAplicacion);
			}
		}

		if (rolAplicacionRecurso.getCodigoRecurso() != 0) {
			Recurso recurso = new Recurso();
			recurso = recursoServicio.buscarRecursoPorCodigo(rolAplicacionRecurso.getCodigoRecurso());
			if (recurso != null) {
				rolAplicacionRecurso.setRecurso(recurso);
			}
		}

		return rolAplicacionRecursoRepositorio.save(rolAplicacionRecurso);
	}
}
