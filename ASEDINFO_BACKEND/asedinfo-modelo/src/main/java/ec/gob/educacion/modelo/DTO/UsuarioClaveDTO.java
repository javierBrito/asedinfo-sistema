package ec.gob.educacion.modelo.DTO;

import java.util.List;

import ec.gob.educacion.modelo.seguridad.Sede;

public class UsuarioClaveDTO {

	private Long id;
	private String identificacion;
	private String resu;
	private String ssap;
	private String estado;
	private String nombre;
	private String estadoClave;
	private String observaciones;
	private String tipo;
	private String prefijoApp;
	private String nombreAplicacion;
	private Sede sede;
	private boolean accesoConcedido;
	private List<RolesAplicacionDTO> listaRolesAplicacion;
	// private List<Sede> listasede;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getIdentificacion() {
		return identificacion;
	}

	public void setIdentificacion(String identificacion) {
		this.identificacion = identificacion;
	}

	public String getResu() {
		return resu;
	}

	public void setResu(String resu) {
		this.resu = resu;
	}

	public String getSsap() {
		return ssap;
	}

	public void setSsap(String ssap) {
		this.ssap = ssap;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getEstadoClave() {
		return estadoClave;
	}

	public void setEstadoClave(String estadoClave) {
		this.estadoClave = estadoClave;
	}

	public String getObservaciones() {
		return observaciones;
	}

	public void setObservaciones(String observaciones) {
		this.observaciones = observaciones;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getPrefijoApp() {
		return prefijoApp;
	}

	public void setPrefijoApp(String prefijoApp) {
		this.prefijoApp = prefijoApp;
	}

	public String getNombreAplicacion() {
		return nombreAplicacion;
	}

	public void setNombreAplicacion(String nombreAplicacion) {
		this.nombreAplicacion = nombreAplicacion;
	}

	/*
	 * public Sede getSede() { return sede; } public void setSede(Sede sede) {
	 * this.sede = sede; }
	 */
	public boolean isAccesoConcedido() {
		return accesoConcedido;
	}

	public void setAccesoConcedido(boolean accesoConcedido) {
		this.accesoConcedido = accesoConcedido;
	}

	public List<RolesAplicacionDTO> getListaRolesAplicacion() {
		return listaRolesAplicacion;
	}

	public void setListaRolesAplicacion(List<RolesAplicacionDTO> listaRolesAplicacion) {
		this.listaRolesAplicacion = listaRolesAplicacion;
	}

	/*
	 * public List<Sede> getListasede() { return listasede; } public void
	 * setListasede(List<Sede> listasede) { this.listasede = listasede; }
	 */
	public Sede getSede() {
		return sede;
	}

	public void setSede(Sede sede) {
		this.sede = sede;
	}

}
