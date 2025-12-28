async function translate() {
  const text = (document.getElementById("text") as HTMLInputElement).value;
  const lang = (document.getElementById("lang") as HTMLInputElement).value;

  const res = await fetch("http://localhost:3001/api/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, lang })
  });

  const data = await res.json();
  document.getElementById("output")!.innerText = data.translated;
}
