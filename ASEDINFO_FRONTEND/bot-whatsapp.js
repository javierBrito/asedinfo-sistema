/**
 * Bot para whatsapp
 * web: https://kuatroestrellas.github.io/blog/
 * responde al hola mundo con un mensaje
 * requiere nodejs v12 o superior y las librerias qrcode-terminal y whatsapp-web.js
 * npm i qrcode-terminal whatsapp-web.js
**/
//alert("ppulgassss");
console.log("bot-whatsapp.js - 1");
const qrcode = require('qrcode-terminal');
console.log("bot-whatsapp.js - 2");
var codigo_postal_pais = "593";
console.log("bot-whatsapp.js - 3");
var numero_celular_envio_msg = "992752367"
//const numero_celular_envio_msg = "995038551"
//const numero_celular_envio_msg = "998782483"
var mensaje = "Es una prueba de envio de mensaje de notificacion de ASEDINFO"
console.log("bot-whatsapp.js - 4");

//Crea una sesión con whatsapp-web y la guarda localmente para autenticarse solo una vez por QR
const { Client, LocalAuth } = require('whatsapp-web.js');
console.log("bot-whatsapp.js - 5");
const client = new Client({
    authStrategy: new LocalAuth()
});

console.log("bot-whatsapp.js - 6");
//Genera el código qr para conectarse a whatsapp-web
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

console.log("bot-whatsapp.js - 7");
//Si la conexión es exitosa muestra el mensaje de conexión exitosa
client.on('ready', () => {
    console.log('Conexion exitosa nenes');

    let chatId = codigo_postal_pais + numero_celular_envio_msg + "@c.us";
    console.log("chatId = ", chatId);
    client.sendMessage(chatId, mensaje);

});

//Aquí sucede la magia, escucha los mensajes y aquí es donde se manipula lo que queremos que haga el bot
client.on('message', message => {
    console.log(message.body);
	if(message.body === 'hola mundo') {
		client.sendMessage(message.from, 'Hola soy un bot, mi creador esta ocupado ayudando a gohan a salvar la tierra');
	}
});

client.initialize();