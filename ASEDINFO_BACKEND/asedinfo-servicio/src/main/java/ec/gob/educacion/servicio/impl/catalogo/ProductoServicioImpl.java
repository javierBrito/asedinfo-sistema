package ec.gob.educacion.servicio.impl.catalogo;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ec.gob.educacion.modelo.catalogo.Producto;
import ec.gob.educacion.repositorio.catalogo.ProductoRepositorio;
import ec.gob.educacion.servicio.catalogo.ProductoServicio;
import ec.gob.educacion.venta.resources.Constantes;

@Service
public class ProductoServicioImpl implements ProductoServicio {

	@Autowired
	private ProductoRepositorio productoRepositorio;

	@Override
	public List<Producto> listarTodosProducto() {
		return productoRepositorio.findAll();
	}

	@Override
	public List<Producto> listarProductoActivo(String estado) {
		return productoRepositorio.findByEstadoOrderByCodigo(estado);
	}

	@Override
	public Producto buscarProductoPorCodigo(Long codigo) {
		return productoRepositorio.findByCodigo(codigo);
	}

	@Override
	public List<Producto> listarProductoPorDescripcion(String descripcion) {
		return productoRepositorio.findByDescripcion(descripcion);
	}

	@Override
	public List<Producto> buscarPorDescripcion(String descripcion) {
		return productoRepositorio.findByDescripcionAndEstado(descripcion, Constantes.REGISTRO_ACTIVO);
	}

	@Override
	public Producto registrar(Producto producto) {
		return productoRepositorio.save(producto);
	}

	@Override
	public Producto crearProducto(Producto producto) {
		return productoRepositorio.save(producto);
	}
	
}
