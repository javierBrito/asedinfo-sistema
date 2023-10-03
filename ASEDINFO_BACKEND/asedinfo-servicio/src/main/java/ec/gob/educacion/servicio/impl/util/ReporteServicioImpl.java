package ec.gob.educacion.servicio.impl.util;

import ec.gob.educacion.modelo.DTO.ReporteDTO;
import ec.gob.educacion.modelo.DTO.UsuarioAdDTO;
import ec.gob.educacion.modelo.catalogo.Transaccion;
import ec.gob.educacion.servicio.catalogo.TransaccionServicio;
import ec.gob.educacion.servicio.util.ReporteServicio;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import net.sf.jasperreports.engine.util.JRLoader;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReporteServicioImpl implements ReporteServicio {
	@Autowired
	private TransaccionServicio transaccionServicio;
	// Tratar valores de parámetros
	private String urlBackground;

	private SimpleDateFormat formatoFecha = new SimpleDateFormat("dd-MM-yyyy");
	
	private List<UsuarioAdDTO> listaCaducarse = null;

	@Override
	public ReporteDTO obtenerReporteInscripcion(ReporteDTO reporteDTO) {
		// Mostrar imagen del fondo del título, según el ambiente
		urlBackground = "./reportes/Fondo.png";

		// Instanciar clase transaccion
		// JubAspirante jubAspirante =
		// aspiranteService.buscarAspirantePorCedula(reporteDTO.getCedula());
		//List<Transaccion> listaTransaccion = transaccionServicio.listarTransaccionACaducarse(5);
		// Para pasar el reporte pdf en base 64
		List<String> listaStringBase64 = new ArrayList<>();

		try {
			Map<String, Object> parametro = new HashMap<String, Object>();
			parametro.put("urlBackground", urlBackground);

			// Pasar variables normales tipo String. (En irepot se lo define como:
			// java.util.String)
			// parametro.put("apellidoNombre", reporteDTO.getApellidoNombre());
			// parametro.put("fechaNacimiento", reporteDTO.getFechaNacimiento());
			// parametro.put("edad", reporteDTO.getEdad());

			// Mapear registro, pasarlo como parametro. (En irepot se lo define como:
			// java.util.Map)
			// Map<String, String> jubAspiranteMap = BeanUtils.describe(null);
			// parametro.put("jubAspirante", jubAspiranteMap);
			// Convertir List/recordset a JRBeanCollectionDataSource. (En irepot se lo
			// define como: net.sf.jasperreports.engine.data.JRBeanCollectionDataSource)
			JRBeanCollectionDataSource listaCaducarseJRBean = new JRBeanCollectionDataSource(
					listaCaducarse);
			parametro.put("listaCaducarse", listaCaducarseJRBean);

			JasperReport jasperReport = (JasperReport) JRLoader
					.loadObject(getClass().getResourceAsStream("/reportes/listaCaducarse.jasper"));
			// Para data source
			List<Object> reportList = new ArrayList<Object>();
			reportList.add("0");
			JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(reportList);
			
			//JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parametro, new JREmptyDataSource());
			JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parametro, dataSource);

			// Para obtener el reporte y bajar
			reporteDTO.setReporteByte(JasperExportManager.exportReportToPdf(jasperPrint));

			// Para obtener el reporte y enviar como adjunto
			listaStringBase64.add(Base64.getEncoder().encodeToString(reporteDTO.getReporteByte()));
			reporteDTO.setListaStringBase64(listaStringBase64);
		} catch (Exception e) {
			System.out.println("ERROR al generar el PDF. e.getMessage() = " + e.getMessage());
		}

		return reporteDTO;
	}

	@Override
	public ReporteDTO obtenerListaCaducadoHtml(ReporteDTO reporteDTO) {
		// Instanciar clase transaccion para obtener la lista
		List<Transaccion> listaTransaccionCaducarse = transaccionServicio.listarTransaccionACaducarse(5);
		
		// Encabezado de la tabla
		String tablaHtml = 
				" <table align='center' border='4'>" +
				" <tr> " +   
				" 	<th> Nombre </th> " + 
				" 	<th> Identificación </th> " +
				" 	<th> Fecha Inicio </th> " +
				" 	<th> Fecha Fin </th> " +
				" </tr> ";
				
		if (listaTransaccionCaducarse.size() > 0) {
			for (Transaccion transaccion : listaTransaccionCaducarse) {
				// Se construye la tabla con cada fila de la lista
				tablaHtml = tablaHtml + " <tr> ";
				tablaHtml = tablaHtml + " <td><font color='blue'> ";
				tablaHtml = tablaHtml + transaccion.getCliente().getPersona().getNombres() + " " +transaccion.getCliente().getPersona().getApellidos();
				tablaHtml = tablaHtml + " </font></td> ";
				tablaHtml = tablaHtml + " <td><font color='brown'> ";
				tablaHtml = tablaHtml + transaccion.getCliente().getPersona().getIdentificacion();
				tablaHtml = tablaHtml + " </font></td> ";
				tablaHtml = tablaHtml + " <td><font color='green'> ";
				tablaHtml = tablaHtml + formatoFecha.format(transaccion.getFechaInicio());
				tablaHtml = tablaHtml + " </font></td> ";
				tablaHtml = tablaHtml + " <td><font color='red'> ";
				tablaHtml = tablaHtml + formatoFecha.format(transaccion.getFechaFin());
				tablaHtml = tablaHtml + " </font></td> ";
				tablaHtml = tablaHtml + " </tr> ";
			}
		}
		reporteDTO.setText(tablaHtml);

		return reporteDTO;
	}
}
