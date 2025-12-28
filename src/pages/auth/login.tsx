// import { useState } from 'react';


export default function Login() {
function login() {
localStorage.setItem('user', 'student');
alert('Login Successful');
}


return (
<div style={{ padding: 40 }}>
<h2>Login</h2>
<button onClick={login}>Login</button>
</div>
);
}
// import { useState } from 'react';


// export default function Login() {
// const [email, setEmail] = useState('');


// const login = () => {
// localStorage.setItem('user', email);
// alert('Login Successful');
// };


// return (
// <div style={{ padding: 40 }}>
// <h2>Login</h2>
// <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
// <button onClick={login}>Login</button>
// </div>
// );
// }