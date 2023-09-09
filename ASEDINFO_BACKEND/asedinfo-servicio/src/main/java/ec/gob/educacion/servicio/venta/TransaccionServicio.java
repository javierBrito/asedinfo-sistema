package ec.gob.educacion.servicio.venta;

import java.util.List;
import ec.gob.educacion.modelo.venta.Transaccion;

public interface TransaccionServicio {
	/**
	 * Permite listar Transaccion
	 * 
	 * @param null
	 * @return lista Transaccion
	 */
	List<Transaccion> listarTodosTransaccion();

	/**
	 * Permite listar Transaccion Activo
	 * 
	 * @param estado
	 * @return lista Transaccion
	 */
	List<Transaccion> listarTransaccionActivo(String estado);

	/**
	 * Permite obtener Transaccion
	 * 
	 * @param codigo
	 * @return Transaccion
	 */
	Transaccion buscarTransaccionPorCodigo(Long codigo);

	/**
	 * Permite obtener lista Transaccion
	 * 
	 * @param descripcion
	 * @return listaTransaccion
	 */
	List<Transaccion> listarTransaccionPorDescripcion(String descripcion);

	/**
	 * Permite registrar Transaccion
	 * 
	 * @param Transaccion
	 * @return Transaccion
	 */
	Transaccion registrar(Transaccion Transaccion);
	Transaccion crearTransaccion(Transaccion transaccion);

	List<Transaccion> buscarPorDescripcion(String descripcion);
	
}
