"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const success = login(username, password);
    if (success) {
      router.push("/");
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Login</h2>

      <input
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Entrar</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
