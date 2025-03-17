import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://isca-back.onrender.com/email", { email });

      alert("E-mail enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar e-mail", error);
      alert("Erro ao enviar e-mail. Tente novamente.");
    }
  };

  return (
    <>
      <div>
        <h3>Para assistir ao vídeo, informe seu email válido</h3>
        <p>
          <i>É importante que você forneça um email válido!</i>
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="btn"
            type="submit"
            value="Prosseguir para o vídeo"
          />
        </form>
      </div>
    </>
  );
}

export default App;
