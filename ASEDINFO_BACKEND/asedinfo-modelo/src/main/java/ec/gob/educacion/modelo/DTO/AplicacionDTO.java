package ec.gob.educacion.modelo.DTO;

public class AplicacionDTO {

	private Long codigo;
	private String prefijo;
	private String nombre;
	private String descripcion;
	private String url;
	private String tipo;
	private String nombreRol;
	private String descripcionRol;
	private String estado;
	private String estadoRol;

	public AplicacionDTO() {
	}

	public AplicacionDTO(Long codigo, String prefijo, String nombre, String descripcion, String url, String estado,
			String tipo, String descripcionRol, String estadoRol, String nombreRol) {
		this.codigo = codigo;
		this.prefijo = prefijo;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.url = url;
		this.estado = estado;
		this.tipo = tipo;
		this.descripcionRol = descripcionRol;
		this.estadoRol = estadoRol;
		this.nombreRol = nombreRol;
	}

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public String getPrefijo() {
		return prefijo;
	}

	public void setPrefijo(String prefijo) {
		this.prefijo = prefijo;
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

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getNombreRol() {
		return nombreRol;
	}

	public void setNombreRol(String nombreRol) {
		this.nombreRol = nombreRol;
	}

	public String getDescripcionRol() {
		return descripcionRol;
	}

	public void setDescripcionRol(String descripcionRol) {
		this.descripcionRol = descripcionRol;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getEstadoRol() {
		return estadoRol;
	}

	public void setEstadoRol(String estadoRol) {
		this.estadoRol = estadoRol;
	}
}
