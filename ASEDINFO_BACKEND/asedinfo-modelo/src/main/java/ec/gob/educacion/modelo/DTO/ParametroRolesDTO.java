package ec.gob.educacion.modelo.DTO;

public class ParametroRolesDTO {
	private Long codigoUsuario;
	private String prefijoAplicacion;

	/**
	 * @return the codigoUsuario
	 */
	public Long getCodigoUsuario() {
		return codigoUsuario;
	}

	/**
	 * @param codigoUsuario the codigoUsuario to set
	 */
	public void setCodigoUsuario(Long codigoUsuario) {
		this.codigoUsuario = codigoUsuario;
	}

	/**
	 * @return the prefijoAplicacion
	 */
	public String getPrefijoAplicacion() {
		return prefijoAplicacion;
	}

	/**
	 * @param prefijoAplicacion the prefijoAplicacion to set
	 */
	public void setPrefijoAplicacion(String prefijoAplicacion) {
		this.prefijoAplicacion = prefijoAplicacion;
	}

}
