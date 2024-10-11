const messageInput= document.getElementById("messageInput");
const sendBtn= document.getElementById("sendBtn")
const container= document.getElementById("container");

const client = new Paho.MQTT.Client('broker.hivemq.com', Number(8000), "icesiUserValens");
const topic= "icesitel"
//Listener de mensajes
client.onMessageArrived = (msg) => {
    console.log("Arrived!: "+msg.payloadString);
    container.innerHTML= container.innerHTML+`<p>${msg.payloadString}</p>`;
}

client.connect({onSuccess:() => {
    console.log("conectado!")
    client.subscribe(topic);
}});//se eecuta por que los parentesis estan asi

const sendMessage = (msg) => {
    message = new Paho.MQTT.Message(msg);
    message.destinationName = topic;// topic dnde se manda
    client.send(message);
};

sendBtn.addEventListener("click", (event)=>{
    event.preventDefault();// quitar la accion por defecto pq gas
    let messageText= messageInput.value;
    sendMessage(messageText);
});