import axios from 'axios';
import { useState } from 'react';

export default function RAGChatbot() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [model, setModel] = useState('gemini');
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer('Thinking...');

    try {
      // YE LINE SABSE IMPORTANT – EXACTLY AISI HI HONI CHAHIYE
      const res = await axios.post('http://localhost:4000/ask', {
        question: question,
        model: model
      });

      setAnswer(res.data.answer || 'No answer received');
    } catch (error: any) {
      console.error('Full error:', error);
      let errorMsg = 'Unknown error';
      if (error.response) {
        errorMsg = `Server error: ${error.response.status}`;
      } else if (error.message) {
        errorMsg = error.message;
      }
      setAnswer(`❌ ${errorMsg}\nCheck if backend is running on port 4000`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '40px', background: '#13132bff', borderRadius: '12px', margin: '20px 0' }}>
      <h2 style={{ color: '#7c3aed' }}>🤖 Ask the Physical AI Book</h2>
      
      <div style={{ margin: '15px 0' }}>
        <strong>Choose Model:</strong>{' '}
        <select value={model} onChange={(e) => setModel(e.target.value)}>
          <option value="gemini">Gemini</option>
          <option value="qwen">Qwen</option>
        </select>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && askAI()}
          placeholder="e.g., What is Physical AI?"
          style={{ flex: 1, padding: '12px', fontSize: '16px', borderRadius: '8px', border: '1px solid #050303ff' }}
          disabled={loading}
        />
        <button
          onClick={askAI}
          disabled={loading}
          style={{
            padding: '12px 24px',
            background: '#18171aff',
            color: 'black',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Wait...' : 'Ask'}
        </button>
      </div>

      {answer && (
        <div style={{ marginTop: '25px', padding: '20px', background: 'white', borderRadius: '10px', border: '1px solid #0c0808ff' }}>
  <strong style={{ color: '#000000' }}>Answer:</strong>
  <p style={{ marginTop: '10px', whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
    {answer}
  </p>
</div>
      )}
    </div>
  );
}