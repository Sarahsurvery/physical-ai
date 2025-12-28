export default function Settings() {
return (
<div style={{ padding: 40 }}>
<h2>Select AI Model</h2>
<button onClick={() => localStorage.setItem('model','gemini')}>Gemini</button>
<button onClick={() => localStorage.setItem('model','qwen')}>Qwen</button>
</div>
);
}