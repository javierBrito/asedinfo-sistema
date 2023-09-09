package ec.gob.educacion.modelo.DTO;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class RolesMenuDTO {

	private Long codigo;
	private AplicacionDTO aplicacion;

	private String nombre;
	private String descripcion;
	private String estado;
	private String estadoActivo;

	private String asignado;
	private String enumRolSeguridad;
	private String asignadoAdministrador;
	private Long cod_aplicacion;

	private List<MenuDTO> menu = new ArrayList<MenuDTO>(0);

	public RolesMenuDTO() {

	}

	public String getEstadoActivo() {
		return estadoActivo;
	}

	public void setEstadoActivo(String estadoActivo) {
		this.estadoActivo = estadoActivo;
	}

	public String getAsignado() {
		return asignado;
	}

	public void setAsignado(String asignado) {
		this.asignado = asignado;
	}

	public String getEnumRolSeguridad() {
		return enumRolSeguridad;
	}

	public void setEnumRolSeguridad(String enumRolSeguridad) {
		this.enumRolSeguridad = enumRolSeguridad;
	}

	public String getAsignadoAdministrador() {
		return asignadoAdministrador;
	}

	public void setAsignadoAdministrador(String asignadoAdministrador) {
		this.asignadoAdministrador = asignadoAdministrador;
	}

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public AplicacionDTO getAplicacion() {
		return aplicacion;
	}

	public void setAplicacion(AplicacionDTO aplicacion) {
		this.aplicacion = aplicacion;
	}

	@JsonIgnore
	public Long getCod_aplicacion() {
		return cod_aplicacion;
	}

	public void setCod_aplicacion(Long cod_aplicacion) {
		this.cod_aplicacion = cod_aplicacion;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public List<MenuDTO> getMenu() {
		return menu;
	}

	public void setMenu(List<MenuDTO> menu) {
		this.menu = menu;
	}

}
