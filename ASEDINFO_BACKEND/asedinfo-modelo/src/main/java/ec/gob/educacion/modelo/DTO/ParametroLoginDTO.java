package ec.gob.educacion.modelo.DTO;

public class ParametroLoginDTO {
	private String identificacion;
	private String clave;
	private String prefijoApp;
	
	public String getIdentificacion() {
		return identificacion;
	}
	public void setIdentificacion(String identificacion) {
		this.identificacion = identificacion;
	}
	public String getClave() {
		return clave;
	}
	public void setClave(String clave) {
		this.clave = clave;
	}
	public String getPrefijoApp() {
		return prefijoApp;
	}
	public void setPrefijoApp(String prefijoApp) {
		this.prefijoApp = prefijoApp;
	}
}
