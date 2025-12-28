import { useState } from 'react';


export default function Translator() {
const [t, setT] = useState('');
const [o, setO] = useState('');


async function translate() {
const r = await fetch('http://localhost:4000/ask', {
method: 'POST',
body: JSON.stringify({ type: 'translate', text: t, lang: 'Urdu' })
});
const d = await r.json();
setO(d.answer);
}


return (<div><input onChange={e=>setT(e.target.value)} /><button onClick={translate}>Translate</button><p>{o}</p></div>);
}
// export default function Translator() {
// const translate = async (text: string) => {
// await fetch('http://localhost:4000', { method: 'POST', body: JSON.stringify({ question: `Translate to Urdu: ${text}` }) });
// };
// return <button onClick={() => translate('Hello')}>Translate</button>;
// }

// export default function Translator() {
// const translate = async (text: string) => {
// await fetch('http://localhost:4000', { method: 'POST', body: JSON.stringify({ question: `Translate to Urdu: ${text}` }) });
// };
// return <button onClick={() => translate('Hello')}>Translate</button>;
// }


// // ---


// // 🔹 STEP 10: Run Project


// // ```bash
// // cd backend
// // node server.ts