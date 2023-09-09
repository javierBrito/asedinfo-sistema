package ec.gob.educacion.controlador.util;

/**
 * Constantes
 *
 * @author Javier Brito
 * @modify jbrito - 20211211
 * @version $Revision: 1.1 $
 * 
 */
public class Constantes {

	public static final String FORMATO_YY_MM_DD = "yyyy/mm/dd";
	public static final String REGISTRO_ACTIVO_NUM = "1";
	public static final String REGISTRO_INACTIVO_NUM = "0";
	public static final String REGISTRO_INSERT = "INS";
	public static final String REGISTRO_UPDATE = "UPD";

	//Credenciales para Carpeta
	//localhost
	public static final String nombreDirectorio = "D://upload//";
	//Desarrollo y Pre-produccion
	//public static final String UPLOADED_FOLDER = "sellobt";
	
	//Credenciales para FTP
	//localhost
	public static final String URL_FTP = "192.168.0.100";
	public static final String USUARIO_FTP = "jbrito";
	public static final String PASSWORD_FTP = "Dario0030.D";
	//Desarrollo y Pre-produccion
	/*
	public static final String URL_FTP = "10.200.10.16";
	public static final String USUARIO_FTP = "";
	public static final String PASSWORD_FTP = "";
	*/

	//Link para seguridades
	// desarrollo
	//public static final String URL_REST_SEGURIDAD = "http://10.200.10.15/serviciosEducacion-web/resources/ValidarUsuario/Seguridades/";
	//public static final String URL_REST_ROLES = "http://10.200.10.15/serviciosEducacion-web/resources/ValidacionUsuarioLdapSeguridadesJdc/ObtenerRecursosDeRol";
	 
	// pre-produccion
	public static final String URL_REST_SEGURIDAD = "https://pre-academico.educacion.gob.ec/serviciosEducacion-web/resources/ValidarUsuario/Seguridades/";
	public static final String URL_REST_ROLES = "https://pre-academico.educacion.gob.ec/serviciosEducacion-web/resources/ValidacionUsuarioLdapSeguridadesJdc/ObtenerRecursosDeRol";

	// produccion
	// public static final String URL_REST_SEGURIDAD =
	// "https://academico.educarecuador.gob.ec/serviciosEducacion-web/resources/ValidarUsuario/Seguridades/";
	// public static final String URL_REST_ROLES =
	// "https://academico.educarecuador.gob.ec/serviciosEducacion-web/resources/ValidacionUsuarioLdapSeguridadesJdc/ObtenerRecursosDeRol";
	
	public static final String CODIGO_RESPUESTA_OK = "Ok";
	public static final String CODIGO_RESPUESTA_ERR = "Error";
	public static final String MENSAJE_OK = "Respuesta exitosa";
	public static final String MENSAJE_ERR = "Respuesta erronea... ";
	public static final String MENSAJE_OK_CREADO = "Recurso creado exitosamente";
	public static final String MENSAJE_OK_ACTUALIZADO = "Recurso actualizado exitosamente";
	public static final String MENSAJE_OK_ELIMINADO = "Recurso eliminado exitosamente";
	public static final String MENSAJE_OK_NO_ENCONTRADO = "Recurso no encontrado";

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
