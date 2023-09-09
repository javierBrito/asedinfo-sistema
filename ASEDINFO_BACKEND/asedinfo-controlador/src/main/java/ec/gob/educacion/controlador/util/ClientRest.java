package ec.gob.educacion.controlador.util;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class ClientRest {

	public static final String RESPONSE_HTTP_CODE = "RESPONSE_HTTP_CODE";
	public static final String RESPONSE_JSON = "RESPONSE_JSON";
	public static OkHttpClient client = new OkHttpClient();
	public static final MediaType JSON = MediaType.parse("application/json; charset=utf-8");

	@SuppressWarnings("deprecation")
	public static Map<String, String> doPostRequest(String url, String json) {
		System.out.println("url:" + url + "json:" + json);
		String jsonResponse = "{}";
		RequestBody body = RequestBody.create(JSON, json);
		Request request = new Request.Builder()
				// .header("Auth-Token", Paymentez.getAuthToken(CODIGO_SERVER_DEV,
				// CLAVE_SERVER_DEV))
				.url(url).post(body).build();

		Response response = null;
		Map<String, String> mapResult = new HashMap<>(2);

		try {
			response = client.newCall(request).execute();
			jsonResponse = response.body().string();
			mapResult.put(RESPONSE_HTTP_CODE, "" + response.code());
			mapResult.put(RESPONSE_JSON, jsonResponse);
		} catch (IOException e) {
			e.printStackTrace();
		}
		System.out.println("final:" + mapResult);
		return mapResult;
	}

	@SuppressWarnings("deprecation")
	public static Map<String, Object> doPostRequestMenu(String url, String json) {
		System.out.println("urlM:" + url + "jsonM:" + json);
		String jsonResponseM = "{}";
		RequestBody bodyM = RequestBody.create(JSON, json);
		Request request = new Request.Builder()
				// .header("Auth-Token", Paymentez.getAuthToken(CODIGO_SERVER_DEV,
				// CLAVE_SERVER_DEV))
				.url(url).post(bodyM).build();

		Response response = null;
		Map<String, Object> mapResultM = new HashMap<>();

		try {
			response = client.newCall(request).execute();
			jsonResponseM = response.body().string();
			// mapResult.put(RESPONSE_HTTP_CODE, "" + response.code());
			mapResultM.put(RESPONSE_JSON, jsonResponseM);
		} catch (IOException e) {
			e.printStackTrace();
		}
		// System.out.println("final:"+ mapResultM);
		return mapResultM;
	}

}
