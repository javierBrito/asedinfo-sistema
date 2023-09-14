package ec.gob.educacion.servicio.catalogo;

import java.util.List;
import ec.gob.educacion.modelo.catalogo.Producto;

public interface ProductoServicio {
	/**
	 * Permite listar Transaccion
	 * 
	 * @param null
	 * @return lista Transaccion
	 */
	List<Producto> listarTodosProducto();

	/**
	 * Permite listar Transaccion Activo
	 * 
	 * @param estado
	 * @return lista Transaccion
	 */
	List<Producto> listarProductoActivo(String nemonicoModulo);

	/**
	 * Permite obtener Transaccion
	 * 
	 * @param codigo
	 * @return Transaccion
	 */
	Producto buscarProductoPorCodigo(Long codigo);

	/**
	 * Permite obtener lista Transaccion
	 * 
	 * @param descripcion
	 * @return listaProducto
	 */
	List<Producto> listarProductoPorDescripcion(String descripcion, String nemonicoModulo);

	/**
	 * Permite registrar Transaccion
	 * 
	 * @param Transaccion
	 * @return Transaccion
	 */
	Producto registrar(Producto Producto);
	Producto crearProducto(Producto producto);

	List<Producto> buscarPorDescripcion(String descripcion);
	
}
