# Copiar la imagen del jdk 1.8
FROM openjdk:8-jdk-alpine

# Copiar librerias para el funcionamiento de la imagen a crear. 
RUN apk -U upgrade --update && \
    apk add curl && \
    apk add ttf-dejavu

# Crear el directorio /opt
RUN mkdir -p /opt

# Copiar el archivo war al directorio creado.
COPY asedinfo-controlador.war /opt

# Puerto de salida para la ejecución
EXPOSE 8080

# Ejecucción de la aplicación con el comando java -jar.
ENTRYPOINT ["java","-jar","/opt/asedinfo-controlador.war"]
