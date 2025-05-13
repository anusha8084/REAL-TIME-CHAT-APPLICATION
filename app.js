import React, { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:3001');

    ws.current.onmessage = async (event) => {
      let message;
      if (event.data instanceof Blob) {
        message = await event.data.text(); // Convert Blob to text
      } else {
        message = event.data;
      }
      setMessages(prev => [...prev, message]);
    };

    return () => {
      if (ws.current) ws.current.close();
    };
  }, []);

  const sendMessage = () => {
    if (input.trim() !== '') {
      ws.current.send(input);
      setInput('');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>💬 Real-Time Chat</h2>
      <div style={styles.chatBox}>
        {messages.map((msg, idx) => (
          <div key={idx} style={styles.message}>{msg}</div>
        ))}
      </div>
      <div style={styles.inputArea}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          style={styles.input}
          placeholder="Type your message"
        />
        <button onClick={sendMessage} style={styles.button}>Send</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: 20,
    maxWidth: 600,
    margin: '50px auto',
    border: '1px solid #ddd',
    borderRadius: 10,
    backgroundColor: '#fdfdfd',
    boxShadow: '0 0 10px rgba(0,0,0,0.05)'
  },
  header: {
    textAlign: 'center',
    marginBottom: 20
  },
  chatBox: {
    border: '1px solid #ccc',
    borderRadius: 5,
    padding: 10,
    height: 300,
    overflowY: 'auto',
    backgroundColor: '#f9f9f9',
    marginBottom: 10
  },
  message: {
    padding: '5px 0',
    borderBottom: '1px solid #eee',
    fontSize: 14
  },
  inputArea: {
    display: 'flex',
    gap: 10
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    border: '1px solid #ccc',
    borderRadius: 5
  },
  button: {
    padding: '10px 20px',
    fontSize: 16,
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer'
  }
};

export default App;
