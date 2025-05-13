const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 5000 });

let clients = [];

wss.on('connection', (ws) => {
  clients.push(ws);
  console.log('Client connected');

  ws.on('message', (message) => {
    // Broadcast to all clients
    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    clients = clients.filter(client => client !== ws);
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on ws://localhost:5000');
