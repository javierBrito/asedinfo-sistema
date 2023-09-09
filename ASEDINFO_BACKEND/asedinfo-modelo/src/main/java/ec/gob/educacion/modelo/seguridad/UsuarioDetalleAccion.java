package ec.gob.educacion.modelo.seguridad;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "seg_usuario_detalle_accion")
public class UsuarioDetalleAccion implements java.io.Serializable {
	private static final long serialVersionUID = 4276997527799111216L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "codigo", unique = true, nullable = false, precision = 10, scale = 0)
	private Long codigo;

	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "cod_usuario")
	private Usuario usuario;

	@Column(name = "tipo_registro")
	private String tipoRegistro;

	@Column(name = "solicitado")
	private String solicitado;

	@Column(name = "ip")
	private String ip;
	
	@Column(name = "tipo_accion")
	private int tipoAccion;

	@Temporal(TemporalType.TIMESTAMP)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss.SSS", locale = "es-EC", timezone = "America/Lima")
	@Column(name = "fecha_accion", length = 23)
	private Date fechaAccion;
	
	@Transient
	private Long codUsuario;

	public UsuarioDetalleAccion() {
	}

	public UsuarioDetalleAccion(Long codigo, Usuario usuario, String tipoRegistro, String solicitado, String ip,
			int tipoAccion) {
		this.codigo = codigo;
		this.usuario = usuario;
		this.tipoRegistro = tipoRegistro;
		this.solicitado = solicitado;
		this.ip = ip;
		this.tipoAccion = tipoAccion;
	}

	public Long getCodigo() {
		return this.codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public Usuario getUsuario() {
		return this.usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public String getTipoRegistro() {
		return tipoRegistro;
	}

	public void setTipoRegistro(String tipoRegistro) {
		this.tipoRegistro = tipoRegistro;
	}

	public String getSolicitado() {
		return solicitado;
	}

	public void setSolicitado(String solicitado) {
		this.solicitado = solicitado;
	}

	public String getIp() {
		return ip;
	}

	public void setIp(String ip) {
		this.ip = ip;
	}

	public int getTipoAccion() {
		return tipoAccion;
	}

	public void setTipoAccion(int tipoAccion) {
		this.tipoAccion = tipoAccion;
	}
	public Date getFechaAccion() {
		return fechaAccion;
	}

	public void setFechaAccion(Date fechaAccion) {
		this.fechaAccion = fechaAccion;
	}

	public Long getCodUsuario() {
		if (this.usuario != null) {
			codUsuario = this.usuario.getCodigo();
		}
		return codUsuario;
	}

	public void setCodUsuario(Long codUsuario) {
		this.codUsuario = codUsuario;
	}
}
