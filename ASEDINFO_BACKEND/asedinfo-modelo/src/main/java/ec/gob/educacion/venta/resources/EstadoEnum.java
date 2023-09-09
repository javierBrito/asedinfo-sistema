package ec.gob.educacion.venta.resources;

public enum EstadoEnum {
	
	INACTIVO(0, "I"), 
	ACTIVO(1, "A");

	private int codigo;
	private String descripcion;

	private EstadoEnum(int codigo, String descripcion) {
		this.codigo = codigo;
		this.descripcion = descripcion;
	}

	public int getCodigo() {
		return codigo;
	}

	public String getDescripcion() {
		return descripcion;
	}
	
}
