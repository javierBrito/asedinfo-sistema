package ec.gob.educacion.modelo.response;

import java.util.List;

/**
 * ResponseGenerico class
 * 
 * @version $Revision: 1 $
 *
 */
public class ResponseGenerico<T> {

	private String codigoRespuesta;
	private String mensaje;
	private T objeto;
	private List<T> listado;
	private Long totalRegistros;

	public String getCodigoRespuesta() {
		return codigoRespuesta;
	}

	public void setCodigoRespuesta(String codigoRespuesta) {
		this.codigoRespuesta = codigoRespuesta;
	}

	public String getMensaje() {
		return mensaje;
	}

	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}

	public T getObjeto() {
		return objeto;
	}

	public void setObjeto(T objeto) {
		this.objeto = objeto;
	}

	public List<T> getListado() {
		return listado;
	}

	public void setListado(List<T> listado) {
		this.listado = listado;
	}

	public Long getTotalRegistros() {
		return totalRegistros;
	}

	public void setTotalRegistros(Long totalRegistros) {
		this.totalRegistros = totalRegistros;
	}

}
