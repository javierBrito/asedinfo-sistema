package ec.gob.educacion.repositorio.seguridad;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ec.gob.educacion.modelo.seguridad.Usuario;

@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, Long> {
	
	@Query(nativeQuery = false, value = "select r from Usuario r where r.sede.codigo = :codSede and r.estado = 'A'")
	List<Usuario> listarUsuarioPorSede(@Param("codSede") Long codSede);

	List<Usuario> findByEstadoOrderByCodigo(String estado);

	//List<Usuario> findByIdentificacion(String identificacion);
	@Query(nativeQuery = false, value = "select r from Usuario r where r.persona.identificacion = :identificacion and r.estado = 'A'")
	List<Usuario> listarUsuarioPorIdentificacion(@Param("identificacion") String identificacion);

	Usuario findByCodigo(Long codigo);
	
	//List<Usuario> findByIdentificacionAndEstado(@Param("identificacion") String identificacion,
	//		@Param("estado") String estado);

	@Query(nativeQuery = true, value = "select \r\n" + " u.codigo,\r\n" 
			+ " p.identificacion,\r\n" + " c.clave,\r\n" + " u.estado, \r\n" 
			+ " concat(p.apellidos, ' ', p.nombres) as nombre, \r\n" + " u.cod_sede \r\n" 
			+ " from \r\n" + " seg_usuario u, seg_clave_usuario c, cat_persona p \r\n" 
			+ " where\r\n" + " p.identificacion = :identificacion and\r\n"
			+ " c.clave = :clave and\r\n" + " c.estado = 'A' and\r\n" 
			+ " u.codigo = c.cod_usuario and \r\n"
			+ " u.estado = 'A' and p.estado = 'A' ")
	List<Object[]> listaUsuario(@Param("identificacion") String identificacion, @Param("clave") String clave);

	@Query(nativeQuery = true, value = "select \r\n" + " u.codigo,\r\n" + "	p.identificacion,\r\n" + " p.cedula,\r\n"
			+ "	concat(p.apellidos, ' ', p.nombres) as nombre,\r\n" + "	u.cod_sede\r\n " 
			+ "from \r\n" + " seg_usuario u\r\n" 
			+ "	inner join seg_clave_usuario c on u.codigo = c.cod_usuario\r\n" 
			+ "	inner join cat_persona p on p.codigo = u.cod_persona\r\n" 
			+ "where\r\n"
			+ "	p.identificacion = :identificacion\r\n" 
			+ "	and c.clave = :clave\r\n" 
			+ "	and c.estado = 'A'\r\n"
			+ "	and u.estado = 'A'\r\n"
			+ "	and p.estado = 'A'")
	List<Object[]> listaRespuestaLogin(@Param("identificacion") String identificacion, @Param("clave") String clave);

	@Query(nativeQuery = false, value = "select r from Usuario r where r.persona.codigo = :codPersona and r.estado = 'A'")
	List<Usuario> listarUsuarioPorPersona(@Param("codPersona") Long codPersona);
	
}
