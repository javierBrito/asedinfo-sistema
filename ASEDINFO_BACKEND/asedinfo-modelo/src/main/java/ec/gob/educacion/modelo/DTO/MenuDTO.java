package ec.gob.educacion.modelo.DTO;

import java.util.ArrayList;
import java.util.List;

public class MenuDTO {

	private Long codigo;
	private String nombre;
	private String descripcion;
	private String url;
	private Long nivel;
	private Long codigoRecursoPadre;

	private List<MenuDTO> recursosHijos = new ArrayList<MenuDTO>(0);

	/**
	 * @return the codigo
	 */
	public Long getCodigo() {
		return codigo;
	}

	/**
	 * @param codigo the codigo to set
	 */
	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	/**
	 * @return the nombre
	 */
	public String getNombre() {
		return nombre;
	}

	/**
	 * @param nombre the nombre to set
	 */
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	/**
	 * @return the descripcion
	 */
	public String getDescripcion() {
		return descripcion;
	}

	/**
	 * @param descripcion the descripcion to set
	 */
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	/**
	 * @return the url
	 */
	public String getUrl() {
		return url;
	}

	/**
	 * @param url the url to set
	 */
	public void setUrl(String url) {
		this.url = url;
	}

	/**
	 * @return the nivel
	 */
	public Long getNivel() {
		return nivel;
	}

	/**
	 * @param nivel the nivel to set
	 */
	public void setNivel(Long nivel) {
		this.nivel = nivel;
	}

	/**
	 * @return the recursosHijos
	 */
	public List<MenuDTO> getRecursosHijos() {
		return recursosHijos;
	}

	/**
	 * @param recursosHijos the recursosHijos to set
	 */
	public void setRecursosHijos(List<MenuDTO> recursosHijos) {
		this.recursosHijos = recursosHijos;
	}

	/**
	 * @return the codigoRecursoPadre
	 */
	public Long getCodigoRecursoPadre() {
		return codigoRecursoPadre;
	}

	/**
	 * @param codigoRecursoPadre the codigoRecursoPadre to set
	 */
	public void setCodigoRecursoPadre(Long codigoRecursoPadre) {
		this.codigoRecursoPadre = codigoRecursoPadre;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((codigo == null) ? 0 : codigo.hashCode());
		result = prime * result + ((descripcion == null) ? 0 : descripcion.hashCode());
		return result;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#equals(java.lang.Object)
	 */
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		MenuDTO other = (MenuDTO) obj;
		if (codigo == null) {
			if (other.codigo != null)
				return false;
		} else if (!codigo.equals(other.codigo))
			return false;
		if (descripcion == null) {
			if (other.descripcion != null)
				return false;
		} else if (!descripcion.equals(other.descripcion))
			return false;

		return true;
	}

}
