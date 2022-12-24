const socket = io("http://localhost:3000");
const messageFrom = document.getElementById("send-container");
const messageInput = document.getElementById("message-input");
const messageContainer = document.getElementById("message-container");

const name = prompt("What is your name?");
appendMessage("You joined");
socket.emit("new-user", name);

socket.on("chat-message", (data) => {
  appendMessage(`${data.name}: ${data.message}`);
});

socket.on("user-connected", (name) => {
  console.log(`user connected`, name);
  appendMessage(`${name} is connected`);
});

messageFrom.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value;
  appendMessage(`$You: ${message}`);
  socket.emit("send-chat-message", message);
  messageInput.value = "";
  console.log(message);
});

function appendMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageElement.classList.add("message");
  messageContainer.appendChild(messageElement);
}
