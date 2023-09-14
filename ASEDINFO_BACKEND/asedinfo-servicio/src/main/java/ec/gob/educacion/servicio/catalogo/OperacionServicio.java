package ec.gob.educacion.servicio.catalogo;

import java.util.List;
import ec.gob.educacion.modelo.catalogo.Operacion;

public interface OperacionServicio {
	/**
	 * Permite listar Operacion
	 * 
	 * @param null
	 * @return lista Operacion
	 */
	List<Operacion> listarTodosOperacion();

	/**
	 * Permite listar Operacion Activo
	 * 
	 * @param estado
	 * @return lista Operacion
	 */
	List<Operacion> listarOperacionActivo(String estado);

	/**
	 * Permite obtener Operacion
	 * 
	 * @param codigo
	 * @return Operacion
	 */
	Operacion buscarOperacionPorCodigo(Long codigo);

	/**
	 * Permite obtener lista Operacion
	 * 
	 * @param identificacion
	 * @return listaOperacion
	 */
	Operacion buscarOperacionPorNemonico(String nemonico);

	/**
	 * Permite registrar Operacion
	 * 
	 * @param Operacion
	 * @return Operacion
	 */
	Operacion registrar(Operacion Operacion);
	Operacion crearOperacion(Operacion operacion);

	List<Operacion> buscarPorNemonico(String nemonico);
	
}
