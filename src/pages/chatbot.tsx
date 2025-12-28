import React, { useState } from 'react';


export default function Chatbot() {
const [question, setQuestion] = useState('');
const [answer, setAnswer] = useState('');


async function askAI() {
const res = await fetch('http://localhost:4000', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
type: 'chat',
question: question,
model: localStorage.getItem('model') || 'gemini',
user: localStorage.getItem('user') // 'default_user',
})
});


const data = await res.json();
setAnswer(data.answer);
}


return (
<div style={{ padding: 40 }}>
<h1>🤖 Ask Physical AI Book</h1>
<input
style={{ width: '70%' }}
placeholder="Ask from book"
onChange={e => setQuestion(e.target.value)}
/>
<br /><br />
<button onClick={askAI}>Ask</button>
<p>{answer}</p>
</div>
);
}