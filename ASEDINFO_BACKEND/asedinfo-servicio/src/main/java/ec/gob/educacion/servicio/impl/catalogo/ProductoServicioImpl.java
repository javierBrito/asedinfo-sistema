package ec.gob.educacion.servicio.impl.catalogo;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ec.gob.educacion.modelo.catalogo.Modulo;
import ec.gob.educacion.modelo.catalogo.Producto;
import ec.gob.educacion.repositorio.catalogo.ProductoRepositorio;
import ec.gob.educacion.servicio.catalogo.ModuloServicio;
import ec.gob.educacion.servicio.catalogo.ProductoServicio;
import ec.gob.educacion.venta.resources.Constantes;

@Service
public class ProductoServicioImpl implements ProductoServicio {

	@Autowired
	private ProductoRepositorio productoRepositorio;
	@Autowired
	private ModuloServicio moduloServicio;

	@Override
	public List<Producto> listarTodosProducto() {
		return productoRepositorio.findAll();
	}

	@Override
	public List<Producto> listarProductoActivo(String nemonicoModulo) {
		return productoRepositorio.listarProductoActivo(nemonicoModulo);
	}

	@Override
	public Producto buscarProductoPorCodigo(Long codigo) {
		return productoRepositorio.findByCodigo(codigo);
	}

	@Override
	public List<Producto> listarProductoPorDescripcion(String descripcion, String nemonicoModulo) {
		return productoRepositorio.findByDescripcion(descripcion, nemonicoModulo);
	}

	@Override
	public List<Producto> buscarPorDescripcion(String descripcion) {
		return productoRepositorio.findByDescripcionAndEstado(descripcion, Constantes.REGISTRO_ACTIVO);
	}

	@Override
	public Producto registrar(Producto producto) {
		if (producto.getCodModulo() != 0) {
			Modulo modulo = new Modulo();
			modulo = moduloServicio.buscarModuloPorCodigo(producto.getCodModulo());
			if (modulo != null) {
				producto.setModulo(modulo);
			}
		}
		return productoRepositorio.save(producto);
	}

	@Override
	public Producto crearProducto(Producto producto) {
		return productoRepositorio.save(producto);
	}
	
}
