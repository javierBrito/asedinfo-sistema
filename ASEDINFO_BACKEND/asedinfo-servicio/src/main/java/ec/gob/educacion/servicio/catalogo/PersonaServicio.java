package ec.gob.educacion.servicio.catalogo;

import java.util.List;
import ec.gob.educacion.modelo.catalogo.Persona;

public interface PersonaServicio {
	/**
	 * Permite listar Persona
	 * 
	 * @param null
	 * @return lista Persona
	 */
	List<Persona> listarTodosPersona();

	/**
	 * Permite listar Persona Activo
	 * 
	 * @param estado
	 * @return lista Persona
	 */
	List<Persona> listarPersonaActivo(String estado);

	/**
	 * Permite obtener Persona
	 * 
	 * @param codigo
	 * @return Persona
	 */
	Persona buscarPersonaPorCodigo(Long codigo);

	/**
	 * Permite obtener lista Persona
	 * 
	 * @param identificacion
	 * @return listaPersona
	 */
	List<Persona> listarPersonaPorIdentificacion(String identificacion);

	/**
	 * Permite registrar Persona
	 * 
	 * @param Persona
	 * @return Persona
	 */
	Persona registrar(Persona Persona);
	Persona crearPersona(Persona persona);

	List<Persona> buscarPorIdentificacion(String identificacion);
	
}
