package ec.gob.educacion.venta.resources;

public class Constantes {
	public static final Character ESTADO_REGISTRO_ACTIVO = '1';
	public static final Character ESTADO_REGISTRO_INACTIVO = '0';
	public static final String ESTADO_CAMBIAR_CLAVE = "cambiarclave";
	public static final String CUENTA_LOCAL = "@educacion.local";
	
	//OTROS AMBIENTES
	public static final String SERVIDOR_AD = "ldap://10.200.6.107:389";
	//public static final String SERVIDOR_AD = "ldap://10.200.6.103:389";
	//LOCAl
	//public static final String SERVIDOR_AD = "ldap://10.2.30.71:389";
	//TEST
	//public static final String SERVIDOR_AD = "ldap://10.200.6.102:389";
	
	public static final String UNCHECKED = "unchecked";	
	public static final String REGISTRO_ACTIVO = "A";	
	public static final String REGISTRO_INACTIVO = "I";	
	public static final String SI = "SI";	
	public static final String NO = "NO";	
	public static final String PREFIJO_APLICACION_SEGURIDADES = "SEG";
	public static final String DIRECTORIO_BUSQUEDA_LDAP_DOCENTES = "OU=Docentes,OU=Usuarios,DC=educacion,DC=local";
	public static final String DIRECTORIO_BUSQUEDA_LDAP_USUARIOS_GENERAL = "OU=Usuarios,DC=educacion,DC=local";
	
	//Para acceder remotamente si estan en un mismo servidor
	public static final String URL_SEGURIDADES = "seguridades-educacion-ear/seguridades-educacion-ejb";
	
	public static int NUMERO_PROVINCIAS_ECUADOR = 24;	
	public static int LONGITUD_CEDULA = 10;	
	public static int LONGITUD_AMIE = 8;	
	public static int ESTADO_INSTITUCION_ADM_ACTIVA = 1;
	public static int NUMERO_MAXIMO_COLUMNAS_ARCHIVO_CARGA_MASIVA_ROLES = 1;
	public static int NUMERO_MAXIMO_COLUMNAS_ARCHIVO_ACTUALIZACION_USUARIOS = 2;
	
	public static String TIPO_REGISTRO_APLICACION = "A";
	public static String TIPO_REGISTRO_APLICACION_CARGA_MASIVA = "M";
	
	public static int TIPO_ACCION_CREACION = 1;
	public static int TIPO_ACCION_ACTUALIZACION = 2;
	public static int TIPO_ACCION_ASIGNACION_APLICACION_ROLES = 5;
	public static int TIPO_ACCION_INACTIVACION = 4;
	public static int TIPO_ACCION_ACTIVACION = 3;
	public static int TIPO_ACCION_ASIGNACION_MASIVA_ROLES = 6;	
	
	public static boolean ESTADO_SIN_ASIGNACION = false;
	
	public static final int TIEMPO_MAXIMO_INACTIVIDAD_MILISEGUNDOS = 600000; //10 minutos 10 * 60000
	
	public static final String ESTADO_SI = "S";	
	public static final String ESTADO_NO = "N";
	public static final String RECURSO_NOMBRE_RECURSO = "Recursos";
	public static final String RECURSO_NOMBRE_RECURSO_POR_ROL = "Recursos por Rol";
	public static final String RECURSO_INACTIVACION_ROLES = "Inactivación de Roles";
	public static final String RECURSO_ASIGNACION_MASIVA_ROLES = "Asignaci\u00f3n masiva de Roles";
	
	public static final String CARACTER_SALTO_LINEA = "\n";
	public static final String CARACTER_PUNTO_Y_COMA = ";";
	public static final String CARACTER_PLECA = "|";
	public static final String CARACTER_COMA = ",";
	
	public static final String DESCRIPCION_ACTIVACION_MASIVA_USUARIOS = "Activaci\u00f3n";
	public static final String DESCRIPCION_INACTIVACION_MASIVA_USUARIOS = "Inactivaci\u00f3n";
	public static final String DESCRIPCION_ACTUALIZACION_MASIVA_USUARIOS = "Actualizaci\u00f3n";
	
	public static final String TIPO_DOCENTE_LDAP = "Docente";
	public static final String TIPO_RECTOR_LDAP = "Rector";
	public static final String NUMERO_TELEFONO_DEFECTO = "9999999999";
	public static final String MEDIO_SOLICITUD = "Servicio web";
}
