package ec.gob.educacion.modelo.DTO;

public class UsuarioAdDTO {
	
	private String  identificacion;
	private String  cedula;
	private String  nombre;
	private String  tipo;
	private String  mail;
	private String  observacion;
	private boolean accesoConcedido;
	
	public String getIdentificacion() {
		return identificacion;
	}
	public void setIdentificacion(String identificacion) {
		this.identificacion = identificacion;
	}
	public String getCedula() {
		return cedula;
	}
	public void setCedula(String cedula) {
		this.cedula = cedula;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getTipo() {
		return tipo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public String getObservacion() {
		return observacion;
	}
	public void setObservacion(String observacion) {
		this.observacion = observacion;
	}
	public boolean isAccesoConcedido() {
		return accesoConcedido;
	}
	public void setAccesoConcedido(boolean accesoConcedido) {
		this.accesoConcedido = accesoConcedido;
	}

}
