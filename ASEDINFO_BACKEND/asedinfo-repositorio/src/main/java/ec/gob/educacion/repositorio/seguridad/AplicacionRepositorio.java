package ec.gob.educacion.repositorio.seguridad;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ec.gob.educacion.modelo.DTO.AplicacionDTO;
import ec.gob.educacion.modelo.seguridad.Aplicacion;

@Repository
public interface AplicacionRepositorio extends JpaRepository<Aplicacion, Integer> {
	Aplicacion findByPrefijoAndEstado(@Param("prefijo") String prefijo, @Param("estado") String estado);

	List<Aplicacion> findByEstadoOrderByNombre(String estado);

	Aplicacion findByCodigo(Long codigo);

	@Query(value = "  SELECT new ec.gob.educacion.modelo.DTO.AplicacionDTO( a.codigo,a.prefijo, a.nombre, a.descripcion, a.url, a.estado,\r\n"
			+ "  a.tipo, r.descripcionRol, r.estadoRol, r.nombreRol) from Aplicacion a\r\n"
			+ "  inner join RolAplicacion r on r.aplicacion = a.codigo\r\n"
			+ "  inner join UsuarioRolAplicacion u on u.rolAplicacion = r.codigo\r\n"
			+ " inner join Usuario s on s.codigo = u.usuario" + "  where a.estado='A'\r\n"
			+ "  and r.estadoRol ='A'\r\n" + "  and r.aplicacion = a.codigo\r\n" + "  and a.prefijo =:prefijoApp\r\n"
			+ "  and s.codigo  =:usuarioCod\r\n" + "  and r.codigo =:codigoAplicacionRol\r\n"
			+ "  and a.codigo =:codigoAplicacion and u.fechaFinal is null")
	AplicacionDTO listaAplicaciones(@Param("usuarioCod") Long usuarioCod, @Param("prefijoApp") String prefijoApp,
			@Param("codigoAplicacionRol") Long codigoAplicacionRol, @Param("codigoAplicacion") Long codigoAplicacion);

	@Query(value = "  SELECT new ec.gob.educacion.modelo.DTO.AplicacionDTO( a.codigo,a.prefijo, a.nombre, a.descripcion, a.url, a.estado,\r\n"
			+ "  a.tipo, r.descripcionRol, r.estadoRol, r.nombreRol) from Aplicacion a\r\n"
			+ "  inner join RolAplicacion r on r.aplicacion = a.codigo\r\n"
			+ "  inner join UsuarioRolAplicacion u on u.rolAplicacion = r.codigo\r\n"
			+ " inner join Usuario s on s.codigo = u.usuario" + "  where a.estado='A'\r\n"
			+ "  and r.estadoRol ='A'\r\n" + "  and r.aplicacion = a.codigo\r\n"
			+ "  and s.codigo  =:codUsuario\r\n" + "  and r.codigo =:codigoAplicacionRol\r\n"
			+ "  and a.codigo =:codigoAplicacion and u.fechaFinal is null")
	AplicacionDTO listarAplicacion(@Param("codUsuario") Long codUsuario,
			@Param("codigoAplicacionRol") Long codigoAplicacionRol, @Param("codigoAplicacion") Long codigoAplicacion);

}
