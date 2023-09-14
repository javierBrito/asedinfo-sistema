package ec.gob.educacion.servicio.catalogo;

import java.util.List;
import ec.gob.educacion.modelo.catalogo.Modulo;

public interface ModuloServicio {
	/**
	 * Permite listar Modulo
	 * 
	 * @param null
	 * @return lista Modulo
	 */
	List<Modulo> listarTodosModulo();

	/**
	 * Permite listar Modulo Activo
	 * 
	 * @param estado
	 * @return lista Modulo
	 */
	List<Modulo> listarModuloActivo(String estado);

	/**
	 * Permite obtener Modulo
	 * 
	 * @param codigo
	 * @return Modulo
	 */
	Modulo buscarModuloPorCodigo(Long codigo);

	/**
	 * Permite obtener lista Modulo
	 * 
	 * @param identificacion
	 * @return listaModulo
	 */
	Modulo buscarModuloPorNemonico(String nemonico);

	/**
	 * Permite registrar Modulo
	 * 
	 * @param Modulo
	 * @return Modulo
	 */
	Modulo registrar(Modulo Modulo);
	Modulo crearModulo(Modulo modulo);

	List<Modulo> buscarPorNemonico(String nemonico);
	
}
