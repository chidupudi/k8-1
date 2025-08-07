import { useState } from 'react';
import './App.css';

const API_URL = 'http://localhost:4000';

function App() {
  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSend = async (service) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/${service}/ai`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });
      const data = await res.json();
      setResponses((prev) => ({ ...prev, [service]: data.reply || data.error }));
    } catch (err) {
      setResponses((prev) => ({ ...prev, [service]: 'Error contacting service' }));
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Simple AI Communication Client</h1>
      <input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Enter your message"
        style={{ width: '60%', marginBottom: 16 }}
      />
      <div style={{ marginBottom: 24 }}>
        <button onClick={() => handleSend('service1')} disabled={loading || !message}>Send to Service 1</button>
        <button onClick={() => handleSend('service2')} disabled={loading || !message} style={{ marginLeft: 8 }}>Send to Service 2</button>
        <button onClick={() => handleSend('service3')} disabled={loading || !message} style={{ marginLeft: 8 }}>Send to Service 3</button>
      </div>
      <div>
        <h3>Responses:</h3>
        <ul>
          <li><b>Service 1:</b> {responses.service1 || '-'}</li>
          <li><b>Service 2:</b> {responses.service2 || '-'}</li>
          <li><b>Service 3:</b> {responses.service3 || '-'}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
