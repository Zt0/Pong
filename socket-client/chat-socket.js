const socket = io("http://localhost:3000")
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

@Injectable()
export class ChatService {
constructor(private socket: String) {
}
sendChat(message) {
  this.socket.emit('chat', message);
}
receiveChat(){
  return this.socket.fromEvent('chat');
}
getUsers(){
  return this.socket.fromEvent('users');
}
}

























const message = document.getElementById('message');
const messages = document.getElementById('messages');

const handleSubmitNewMessage = () => {
  socket.emit('message', { data: message.value })
}

socket.on('message', ({ data }) => {
  handleNewMessage(data);
})

const handleNewMessage = (message) => {
  messages.appendChild(buildNewMessage(message));
}

const buildNewMessage = (message) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(message))
  return li;
}
