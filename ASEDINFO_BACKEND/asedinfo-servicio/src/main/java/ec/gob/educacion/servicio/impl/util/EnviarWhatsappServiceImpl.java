package ec.gob.educacion.servicio.impl.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import ec.gob.educacion.modelo.DTO.ReporteDTO;
import ec.gob.educacion.servicio.util.EnviarWhatsappService;
import ec.gob.educacion.servicio.util.ReporteServicio;
import java.io.InputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

/*
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
*/
//import javax.ws.rs.client.Client;
//import javax.ws.rs.client.ClientBuilder;
//import javax.ws.rs.client.Entity;
//import javax.ws.rs.core.Response;

@Service
public class EnviarWhatsappServiceImpl implements EnviarWhatsappService {
	// Hacer la inyección de dependencia de JavaMailSender:
	@Lazy
	@Autowired
	private JavaMailSender javaMailSender;
	@Autowired
	private ReporteServicio reporteServicio;
	private String SEPARATOR = ",";
	private String QUOTE = "\"";

	// public static final String ACCOUNT_SID =
	// "ACb5c8350b86996f471a09a92c38bd3b6a";
	// public static final String AUTH_TOKEN = "14a8f2b5a8e835f6051abc576b7bad5b";
	// Find your Account Sid and Token at twilio.com/console
	public static final String ACCOUNT_SID = "ACb5c8350b86996f471a09a92c38bd3b6a";
	public static final String AUTH_TOKEN = "14a8f2b5a8e835f6051abc576b7bad5b";

	@SuppressWarnings("unused")
	@Override
	public String enviarWhatsapp(ReporteDTO reporteDTO) {
		try {
			// Obtener el reporte PDF en base64
			reporteDTO = reporteServicio.obtenerListaCaducadoHtml(reporteDTO);
			/*
			Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
			Message message = Message.creator(new com.twilio.type.PhoneNumber("whatsapp:+14155238886"),
					new com.twilio.type.PhoneNumber("whatsapp:+593992752367"),
					"Hello from your friendly neighborhood Java application!").create();
			*/
			return "OK";
		} catch (Exception e) {
			return "Error al enviar el correo: " + e.getMessage();
		}
	}

	@Override
	public String enviarWhatsappTwilio(ReporteDTO reporteDTO) {
		reporteDTO.setFrom("whatsapp:+14155238886");
		reporteDTO.setTo("whatsapp:+593" + reporteDTO.getTo().substring(1, 10));
		//Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
		// Message message = Message.creator(new
		// com.twilio.type.PhoneNumber("whatsapp:+593995038551"),
		// new com.twilio.type.PhoneNumber("whatsapp:+14155238886"),
		//Message message = Message.creator(new com.twilio.type.PhoneNumber(reporteDTO.getTo()),
		//		new com.twilio.type.PhoneNumber(reporteDTO.getFrom()),
		//		"Your appointment is coming up on July 21 at 3PM").create();
		//System.out.println(message.getSid());
		System.out.println("reporteDTO.getTo() = " + reporteDTO.getTo());
		System.out.println("reporteDTO.getFrom() = " + reporteDTO.getFrom());
		return "OK "; //+ message.getSid();
	}

	@Override
	public String enviarWhatsappOkhttp3(ReporteDTO reporteDTO) {
		reporteDTO.setFrom("whatsapp:+14155238886");
		reporteDTO.setTo("whatsapp:593" + reporteDTO.getTo().substring(1, 10));
		try {
			//////////////////////////////////////
			/*
			 * OkHttpClient client = new OkHttpClient(); MediaType mediaType =
			 * MediaType.parse("application/x-www-form-urlencoded"); RequestBody body =
			 * RequestBody.create(mediaType, "token=GA231013111308&to=" + reporteDTO.getTo()
			 * + "&body=WhatsApp API on UltraMsg.com works good&priority=10&referenceId=");
			 * Request request = new
			 * Request.Builder().url("https://api.ultramsg.com/instance19/messages/chat").
			 * post(body) .addHeader("content-type",
			 * "application/x-www-form-urlencoded").build(); Response response =
			 * client.newCall(request).execute(); //////////////////////////////////////
			 * System.out.println("===================");
			 * System.out.println(response.body().string());
			 */

			System.out.println("reporteDTO.getTo() = " + reporteDTO.getTo());
			System.out.println("reporteDTO.getFrom() = " + reporteDTO.getFrom());
			return "OK";
		} catch (Exception e) {
			return "Error";
		}
	}

	@Override
	public String enviarWhatsappApi(ReporteDTO reporteDTO) {
		reporteDTO.setFrom("whatsapp:+14155238886");
		reporteDTO.setTo("whatsapp:593" + reporteDTO.getTo().substring(1, 10));
		try {
			// String token = "Generar_token";
			String token = reporteDTO.getToken();
			String api = "https://script.google.com/macros/s/AKfycbyoBhxuklU5D3LTguTcYAS85klwFINHxxd-FroauC4CmFVvS0ua/exec";
			String payload = "{\"op\" : \"registermessage\", " + "\"token_qr\": \"" + token + "\"," + "\"mensajes\" : ["
					+ "{\"numero\": \"593992752367\",\"mensaje\": \"Pruebas whatsapp desde java 20231013\"}]}";
			// + "{\"numero\": \"51986321853\",\"url\":
			// \"http://www.africau.edu/images/default/sample.pdf\"}, "
			// + "{\"numero\": \"51986321853\",\"url\":
			// \"https://as01.epimg.net/meristation/imagenes/2021/06/04/noticias/1622794682_038694_1622794767_noticia_normal.jpg\"},
			// "
			// + "{\"numero\": \"51986321853\",\"imagenbase64\":
			// \"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\"}]}";
			/*
			Client client = ClientBuilder.newClient();
			System.out.println("" + payload);
			Response post = client.target(api).request().post(Entity.json("" + payload));
			String responseJson = post.readEntity(String.class);
			System.out.println("Estatus: " + post.getStatus());
			if (post.getStatus() == 302) {
				if (post.getLocation() == null) {
					System.out.println("Location: " + responseJson);
				} else {
					String uri = post.getLocation().toString();
					System.out.println("uri = " + uri);
					Response get = client.target(uri).request().get();
					System.out.println("String.class = " + String.class);
					responseJson = get.readEntity(String.class);
				}
			}
			System.out.println("" + responseJson);
			*/

			return "OK";
		} catch (Exception e) {
			return "Error";
		}
	}

	@SuppressWarnings("deprecation")
	@Override
	public String enviarWhatsappDriver(ReporteDTO reporteDTO) {
		reporteDTO.setFrom("whatsapp:+14155238886");
		reporteDTO.setTo("whatsapp:593" + reporteDTO.getTo().substring(1, 10));
		/*
		 * // Obtenemos la ubicacion de nuestro programa String localPath = null; try {
		 * localPath = new File(".").getCanonicalPath(); } catch (IOException e) { //
		 * TODO Auto-generated catch block e.printStackTrace(); }
		 * System.out.println("localPath = "+localPath); // Declaramos el buffer que
		 * almacenna cada linea del excel BufferedReader br = null; // Leemos el
		 * chromedriver que esta en la misma direccion del programa
		 * System.setProperty("webdriver.chrome.driver", localPath +
		 * "\\chromedriver.exe"); // Inicializamos ls opciones de chrome ChromeOptions
		 * optionsGoo = new ChromeOptions(); // Permitimos la propiedad no-sandbox para
		 * evitar problemas en linux //optionsGoo.addArguments("--no-sandbox"); //
		 * Deshabilitamos las notificaciones
		 * //optionsGoo.addArguments("--disable-notifications"); // Guardamos la sesion
		 * en la carpeta chromeWA optionsGoo.addArguments("--user-data-dir=" + localPath
		 * + "\\chromeWA"); // Instanciamos un nuevo chromedriver ChromeDriver driver =
		 * new ChromeDriver(optionsGoo); try { // Leemos los contactos del archivo csv
		 * br = new BufferedReader(new FileReader(localPath + "\\Contactos.csv")); //
		 * Leemos una linea String line = br.readLine(); // Si la linea no esta vacia
		 * seguimos leyendo while (null != line) { // Determinamos el separador de
		 * campos que es la coma String[] fields = line.split(SEPARATOR); // Eliminamos
		 * el texto sobrante al final fields = removeTrailingQuotes(fields); //
		 * Obtenemos el nombre del contacto String contacto = fields[0]; // Obtenemos el
		 * numero del contacto String numero = fields[1]; // Obtenemos el mensaje del
		 * contacto String mensaje = fields[2]; try { // Abrimos whatsapp web con el
		 * numero de telefono a enviar driver.get(
		 * "https://web.whatsapp.com/send/?phone=" + numero +
		 * "&text&type=phone_number&app_absent=0"); // Declaramos el tiempo de espera
		 * WebDriverWait wait = new WebDriverWait(driver, 5000); // Esperamos que cargue
		 * wait.until(ExpectedConditions.elementToBeClickable( By.xpath(
		 * "//*[@id=\"main\"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]/p")
		 * )); // Escribimos el mensaje driver.findElement( By.xpath(
		 * "//*[@id=\"main\"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]/p")
		 * ) .sendKeys(mensaje); // Esperamos 1 segundo pausa(1000); // Precionamos
		 * enter driver.findElement( By.xpath(
		 * "//*[@id=\"main\"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]/p")
		 * ) .sendKeys(Keys.ENTER); pausa(1000); // Leemos una nueva linea line =
		 * br.readLine(); } catch (Exception e) { //JOptionPane.showMessageDialog(null,
		 * e.toString()); } } } catch (Exception e) { } finally { if (null != br) { try
		 * { br.close(); } catch (IOException ex) {
		 * //Logger.getLogger(NewJFrame.class.getName()).log(Level.SEVERE, null, ex);
		 * System.out.println("IOException ex"); } } }
		 */
		return "OK";

	}

	// Quitamos las lineas finales
	private String[] removeTrailingQuotes(String[] fields) {

		String result[] = new String[fields.length];

		for (int i = 0; i < result.length; i++) {
			result[i] = fields[i].replaceAll("^" + QUOTE, "").replaceAll(QUOTE + "$", "");
		}
		return result;
	}

	// Funcion que espera un tiempo
	public void pausa(long sleeptime) {
		try {
			Thread.sleep(sleeptime);
		} catch (InterruptedException ex) {
		}
	}

	@Override
	public String enviarWhatsappApiFacebook(ReporteDTO reporteDTO) {
		reporteDTO.setFrom("whatsapp:+14155238886");
		reporteDTO.setTo("whatsapp:593" + reporteDTO.getTo().substring(1, 10));
		try {
			// TOKEN QUE NOS DA FACEBOOK
			String token = "EAAKbGMG7bRwBOzcfePwyjwWhWO8vAwJBgFyCkd7AmZCrS9zUp8oGEweaxauE2UB787vZAbU322QbZANdDYXzU8pcsLQZCAZB5nZCdjRhBF68JmISCwRwJ79DRlmZC4AYzSpkreQCuFk7RrvOZBcbjB0ehD5FZCzEqWMFNBzQRyqH30Yw9Fpq6ZClsQ4SCvaSYK";
			// NUESTRO NÚMERO DE TELÉFONO
			String telefono = "593992752367";
			// IDENTIFICADOR DE NÚMERO DE TELÉFONO DE DONDE SE ENVÍA EL MENSAJE
			String idNumero = "147385015125426";
			// COLOCAMOS LA URL PARA ENVIAR EL MENSAJE
			URL url = new URL("https://graph.facebook.com/v15.0/" + idNumero + "/messages");
			// INICIALIZAMOS EL CONTENEDOR DEL ENVIO
			HttpURLConnection httpConn = (HttpURLConnection) url.openConnection();
			// EL TIPO DE ENVIO DE DATOS VA A SER VIA POST
			httpConn.setRequestMethod("POST");
			// CODIGO DE AUTORIZACION DE JAVA
			httpConn.setRequestProperty("Authorization", "Bearer " + token);
			// DEFINIMOS QUE LOS DATOS SERAN TRATADOS COMO JSON
			httpConn.setRequestProperty("Content-Type",
					"application/json; application/x-www-form-urlencoded; charset=UTF-8");
			// PREPARAMOS Y ENVIAMOS EL JSON
			httpConn.setDoOutput(true);
			OutputStreamWriter writer = new OutputStreamWriter(httpConn.getOutputStream());
			writer.write("{ " + "\"messaging_product\": \"whatsapp\", " + "\"to\": \"" + telefono + "\", "
					+ "\"type\": \"template\", " + "\"template\": " + "  { \"name\": \"hello_world\", "
					+ "    \"language\": { \"code\": \"en_US\" } " + "  } " + "}");
			// LIMPIAMOS LOS DATOS
			writer.flush();
			// CERRAMOS LOS DATOS
			writer.close();
			// CERRAMOS LA CONEXION
			httpConn.getOutputStream().close();
			// RECIBIMOS EL RESULTADO DEL ENVIO
			InputStream responseStream = httpConn.getResponseCode() / 100 == 2 ? httpConn.getInputStream()
					: httpConn.getErrorStream();
			Scanner s = new Scanner(responseStream).useDelimiter("\\A");
			// OBTENEMOS LOS RESULTADOS
			String respuesta = s.hasNext() ? s.next() : "";
			System.out.println(respuesta);
			
			return "OK";
		} catch (Exception e) {
			return "Error";
		}
	}

}
