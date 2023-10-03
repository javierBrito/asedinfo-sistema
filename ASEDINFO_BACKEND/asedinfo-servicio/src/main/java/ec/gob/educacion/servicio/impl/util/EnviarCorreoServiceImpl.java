package ec.gob.educacion.servicio.impl.util;

import java.util.Base64;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import ec.gob.educacion.modelo.DTO.ReporteDTO;
import ec.gob.educacion.servicio.util.EnviarCorreoService;
import ec.gob.educacion.servicio.util.ReporteServicio;

@Service
public class EnviarCorreoServiceImpl implements EnviarCorreoService {
	// Hacer la inyección de dependencia de JavaMailSender:
	@Lazy
	@Autowired
	private JavaMailSender javaMailSender;
	@Autowired
	private ReporteServicio reporteServicio;

	@Override
	public String enviarCorreoAux(ReporteDTO reporteDTO) {
		try {
			// Obtener el reporte PDF en base64
			reporteDTO = reporteServicio.obtenerListaCaducadoHtml(reporteDTO);

			MimeMessage mimeMessage = javaMailSender.createMimeMessage();
			MimeMessageHelper mimeMessageHelper;
			mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
			mimeMessageHelper.setFrom(reporteDTO.getFrom());
			mimeMessageHelper.setTo(reporteDTO.getTo());
			mimeMessageHelper.setText(reporteDTO.getText(), true);
			mimeMessageHelper.setSubject(reporteDTO.getSubject());

			// Sending the mail
			javaMailSender.send(mimeMessage);
			
			return "OK";
		} catch (Exception e) {
			return "Error al enviar el correo: " + e.getMessage();
		}
	}

	@Override
	public String enviarCorreo(ReporteDTO reporteDTO) {
		try {
			// Obtener el reporte PDF en base64
			reporteDTO = reporteServicio.obtenerReporteInscripcion(reporteDTO);
			
			MimeMessage mimeMessage = javaMailSender.createMimeMessage();
			MimeMessageHelper mimeMessageHelper;
			mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
			mimeMessageHelper.setFrom(reporteDTO.getFrom());
			mimeMessageHelper.setTo(reporteDTO.getTo());
			mimeMessageHelper.setText(reporteDTO.getText(), true);
			mimeMessageHelper.setSubject(reporteDTO.getSubject());

			// Adjuntar el archivo en caso de que exista
			if (reporteDTO.getListaStringBase64().get(0) != null) {
			    byte[] archivoPDF = Base64.getDecoder().decode(reporteDTO.getListaStringBase64().get(0));

			    // Adicionar archivo PDF
			    mimeMessageHelper.addAttachment(reporteDTO.getNombreArchivo(), new ByteArrayResource(archivoPDF));
			}

			// Enviar correo
			javaMailSender.send(mimeMessage);
			return "OK";
		} catch (Exception e) {
			return "Error al enviar el correo con adjunto: " + e.getMessage();
		}
	}

}
