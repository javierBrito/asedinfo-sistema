package ec.gob.educacion.controlador.security;

import java.util.HashMap;
import java.util.Map;

public class SessionManager {

	private static final String IDENTIFICACION = "IDETIFICACION";
	private static final String CODIGO = "CODIGO";
	private static ThreadLocal<Map<String, Object>> threadLocal = new ThreadLocal<Map<String, Object>>();

	/**
	 * Metodo que guarda los datos en el hilo de sesion
	 * @param identificacion
	 * @param codigo
	 * @param fechaNacimiento
	 */
	public void setData(String identificacion, Long codigo) {
		Map<String, Object> map = threadLocal.get();
		map = new HashMap<String, Object>();
		threadLocal.set(map);
		map.put(IDENTIFICACION, identificacion);
		map.put(CODIGO, codigo);
	}

	public String getIdentificacion() {
		Map<String, Object> map = threadLocal.get();
		return map.get(IDENTIFICACION).toString();
	}

	public Long getCodigo() {
		Map<String, Object> map = threadLocal.get();
		return Long.parseLong(map.get(CODIGO).toString());
	}


}
