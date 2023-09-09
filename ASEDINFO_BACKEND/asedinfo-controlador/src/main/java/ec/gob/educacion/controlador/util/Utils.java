package ec.gob.educacion.controlador.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Utils {
	
	public static Date cambioFormatoFecha(Date date, String format){
		Date fecha = null ;
		SimpleDateFormat dt = new SimpleDateFormat(format);
	    try {
			fecha = dt.parse(String.valueOf(date));
	    } catch (ParseException e) {
			e.printStackTrace();
		}
	    return fecha;
	}
	
	public static Date cambioFormatoFechaTexto(String date, String format){
		Date fecha = null ;
		SimpleDateFormat dt = new SimpleDateFormat(format);
	    try {
			fecha = dt.parse(date);
	    } catch (ParseException e) {
			e.printStackTrace();
		}
	    return fecha;
	}
	
	public static String  generarNumeroIdentididad(Long codigoEstudiante,Long codigoSede) {
		String numeroIdentidad="PEN_"+String.format("%05d", codigoSede)+"_"+String.format("%06d", codigoEstudiante);
		return numeroIdentidad;
	}
	
	@SuppressWarnings("unused")
	public static Boolean esCuentaExpirada(String atributo) {
		Pattern pattern = Pattern.compile("([0-9]+).*");
		Matcher matcher_new = pattern.matcher(atributo);		
        for(int i = 0 ; i < matcher_new.groupCount(); i++) {
            matcher_new.find();
            long DIFF_NET_JAVA_FOR_DATES = 11644473600000L + 24 * 60 * 60 * 1000;
            long adAccountExpires= Long.parseLong(matcher_new.group());
            long milliseconds = (adAccountExpires / 10000) - DIFF_NET_JAVA_FOR_DATES;
            Date accountExpiresDate= new Date(milliseconds);

            GregorianCalendar Today = new GregorianCalendar();
            Date TodaysDate = Today.getTime();
           
            if(accountExpiresDate.before(TodaysDate)==true){
            	return Boolean.TRUE;
            }            
        }
        return Boolean.FALSE;
	}
	
	@SuppressWarnings("unused")
	public static String obtenerToken(Long codigo, String identificacion) {
		String token;
		
		Map<String, Object> claims = new HashMap<String, Object>();
		
		claims.put("codigo", codigo);
		claims.put("identificacion", identificacion);
		claims.put("jti", UUID.randomUUID());
		
		token = TokenUtil.createJWTWithCustomClaims("" + codigo, "enc", "enc", 3000000 , claims);
		
		return token;
	}

}

