import "./App.css";
import { useState } from "react";
import axios from "axios";
import { BounceLoader } from "react-spinners";

function App() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("https://isca-back.onrender.com/email", { email });

      alert("E-mail enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar e-mail", error);
      alert("Erro ao enviar e-mail. Tente novamente.");
    }
    setLoading(false);
  };

  return (
    <>
      <div>
        <h3>Para assistir ao vídeo, informe seu email válido</h3>
        <p>
          <i>É importante que você forneça um email válido!</i>
        </p>
        {loading && (
          <p className="spinner">
            <BounceLoader color="#0d65e9" />
          </p>
        )}
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
            disabled={loading}
            value="Prosseguir para o vídeo"
          />
        </form>
      </div>
    </>
  );
}

export default App;
