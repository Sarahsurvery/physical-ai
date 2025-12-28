import { useState } from 'react';

export default function Translator() {
  const [text, setText] = useState('');
  const [out, setOut] = useState('');

  async function translate() {
    const res = await fetch('http://localhost:4000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        type: 'translate',
        text,
        lang: 'Urdu',
        model: localStorage.getItem('model'),
        user: localStorage.getItem('user'),
      })
    });

    const data = await res.json();
    setOut(data.answer);
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>Translator</h2>
      <textarea onChange={e => setText(e.target.value)} />
      <br />
      <button onClick={translate}>Translate</button>
      <p>{out}</p>
    </div>
  );
}
