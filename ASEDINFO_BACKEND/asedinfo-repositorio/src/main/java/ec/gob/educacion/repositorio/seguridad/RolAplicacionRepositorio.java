package ec.gob.educacion.repositorio.seguridad;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ec.gob.educacion.modelo.seguridad.Aplicacion;
import ec.gob.educacion.modelo.seguridad.RolAplicacion;

@Repository
public interface RolAplicacionRepositorio extends JpaRepository<RolAplicacion, Long> {
	
	@Query(nativeQuery = false, value = "select r from RolAplicacion r where r.aplicacion.codigo = :codAplicacion and r.estadoRol = 'A' order by r.nombreRol")
	List<RolAplicacion> listarRolAplicacionPorAplicacion(@Param("codAplicacion") Long codAplicacion);

	List<RolAplicacion> findByEstadoRolOrderByCodigo(String estadoRol);

	RolAplicacion findByCodigo(Long codigo);

	RolAplicacion findByAplicacionAndNombreRolAndEstadoRol(@Param("aplicacion") Aplicacion aplicacion,
			@Param("nombreRol") String nombre, @Param("estadoRol") String estado);

	@Query(nativeQuery = true, value = "select seg_rol_aplicacion.codigo, seg_rol_aplicacion.cod_aplicacion, seg_rol_aplicacion.nombre, \r\n"
			+ "seg_rol_aplicacion.descripcion, seg_rol_aplicacion.estado, seg_rol_aplicacion.enum_rol_seg, seg_rol_aplicacion.fec_inactivacion \r\n"
			+ "from seg_rol_aplicacion, seg_aplicacion, seg_usuario_rol_aplicacion\r\n"
			+ "where seg_aplicacion.prefijo=:prefijoApp \r\n" + "and seg_aplicacion.estado ='A'\r\n"
			+ "and seg_rol_aplicacion.cod_aplicacion = seg_aplicacion.codigo \r\n"
			+ "and seg_rol_aplicacion.estado = 'A'\r\n" + "and seg_usuario_rol_aplicacion.cod_usuario = :codUsuario\r\n"
			+ "and seg_usuario_rol_aplicacion.cod_rol_aplicacion = seg_rol_aplicacion.codigo\r\n"
			+ "and seg_usuario_rol_aplicacion.fecha_final is null")
	List<Object[]> listaRolesAplicaciones(@Param("codUsuario") Long codUsuario, @Param("prefijoApp") String prefijoApp);


	@Query(nativeQuery = true, value = "select seg_rol_aplicacion.codigo, seg_rol_aplicacion.cod_aplicacion, seg_rol_aplicacion.nombre, \r\n"
			+ "seg_rol_aplicacion.descripcion, seg_rol_aplicacion.estado, seg_rol_aplicacion.enum_rol_seg, seg_rol_aplicacion.fec_inactivacion \r\n"
			+ "from seg_rol_aplicacion, seg_aplicacion, seg_usuario_rol_aplicacion\r\n"
			+ "where seg_aplicacion.estado ='A'\r\n"
			+ "and seg_rol_aplicacion.cod_aplicacion = seg_aplicacion.codigo \r\n"
			+ "and seg_rol_aplicacion.estado = 'A'\r\n" + "and seg_usuario_rol_aplicacion.cod_usuario = :codUsuario\r\n"
			+ "and seg_usuario_rol_aplicacion.cod_rol_aplicacion = seg_rol_aplicacion.codigo\r\n"
			+ "and seg_usuario_rol_aplicacion.fecha_final is null")
	List<Object[]> listarRolAplicacion(@Param("codUsuario") Long codUsuario);
}
