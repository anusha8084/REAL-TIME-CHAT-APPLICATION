import React, { useEffect, useState } from 'react';

function App() {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:5000');

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = (event) => {
      setMessages(prev => [...prev, event.data]);
    };

    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    setSocket(ws);

    return () => ws.close(); // Cleanup on unmount
  }, []);

  const sendMessage = () => {
    if (socket && input.trim() !== '') {
      socket.send(input);
      setInput('');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Real-Time Chat</h2>
      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div key={index} style={styles.message}>{msg}</div>
        ))}
      </div>
      <div style={styles.inputBox}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          style={styles.input}
          placeholder="Type a message"
        />
        <button onClick={sendMessage} style={styles.button}>Send</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'Arial',
  },
  chatBox: {
    border: '1px solid #ccc',
    padding: '10px',
    height: '300px',
    overflowY: 'scroll',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',
  },
  message: {
    marginBottom: '5px',
    padding: '5px 10px',
    backgroundColor: '#e1f5fe',
    borderRadius: '5px',
  },
  inputBox: {
    display: 'flex',
    gap: '10px',
  },
  input: {
    flexGrow: 1,
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default App;
