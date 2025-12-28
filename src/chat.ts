async function askAI() {
  const q = (document.getElementById("q") as HTMLInputElement).value;

  const res = await fetch("http://localhost:3001/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question: q })
  });

  const data = await res.json();
  document.getElementById("answer")!.innerText = data.answer;
}
