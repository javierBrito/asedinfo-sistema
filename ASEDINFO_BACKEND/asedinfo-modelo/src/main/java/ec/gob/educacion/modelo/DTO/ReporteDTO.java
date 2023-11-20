package ec.gob.educacion.modelo.DTO;

import java.util.List;

public class ReporteDTO {

	private String cedula;
	private String apellidoNombre;
	private String fechaNacimiento;
	private String edad;

	// DatosCorreoVO
	private String from;
	private String to;
	private String subject;
	private String text;
	private String nombreArchivo;
	private List<String> listaStringBase64;
	private byte[] reporteByte;
	private String token;

	public ReporteDTO() {
		super();
	}

	public String getCedula() {
		return cedula;
	}

	public void setCedula(String cedula) {
		this.cedula = cedula;
	}

	public String getApellidoNombre() {
		return apellidoNombre;
	}

	public void setApellidoNombre(String apellidoNombre) {
		this.apellidoNombre = apellidoNombre;
	}

	public String getFechaNacimiento() {
		return fechaNacimiento;
	}

	public void setFechaNacimiento(String fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}

	public String getEdad() {
		return edad;
	}

	public void setEdad(String edad) {
		this.edad = edad;
	}

	public String getFrom() {
		return from;
	}

	public void setFrom(String from) {
		this.from = from;
	}

	public String getTo() {
		return to;
	}

	public void setTo(String to) {
		this.to = to;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getNombreArchivo() {
		return nombreArchivo;
	}

	public void setNombreArchivo(String nombreArchivo) {
		this.nombreArchivo = nombreArchivo;
	}

	public List<String> getListaStringBase64() {
		return listaStringBase64;
	}

	public void setListaStringBase64(List<String> listaStringBase64) {
		this.listaStringBase64 = listaStringBase64;
	}

	public byte[] getReporteByte() {
		return reporteByte;
	}

	public void setReporteByte(byte[] reporteByte) {
		this.reporteByte = reporteByte;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
}
