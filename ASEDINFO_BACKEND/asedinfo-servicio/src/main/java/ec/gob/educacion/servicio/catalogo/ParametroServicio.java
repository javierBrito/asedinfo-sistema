package ec.gob.educacion.servicio.catalogo;

import java.util.List;
import ec.gob.educacion.modelo.catalogo.Parametro;

public interface ParametroServicio {
	/**
	 * Permite listar Parametro
	 * 
	 * @param null
	 * @return lista Parametro
	 */
	List<Parametro> listarTodosParametro();

	/**
	 * Permite listar Parametro Activo
	 * 
	 * @param estado
	 * @return lista Parametro
	 */
	List<Parametro> listarParametroActivo(String estado);

	/**
	 * Permite obtener Parametro
	 * 
	 * @param codigo
	 * @return Parametro
	 */
	Parametro buscarParametroPorCodigo(Long codigo);

	/**
	 * Permite obtener lista Parametro
	 * 
	 * @param identificacion
	 * @return listaParametro
	 */
	Parametro buscarParametroPorNemonico(String nemonico);

	/**
	 * Permite registrar Parametro
	 * 
	 * @param Parametro
	 * @return Parametro
	 */
	Parametro registrar(Parametro Parametro);
	Parametro crearParametro(Parametro parametro);

	List<Parametro> buscarPorNemonico(String nemonico);
	
}
