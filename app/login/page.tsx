"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const { user, login } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      router.replace("/");
    }
  }, [user, router]);

  const handleLogin = async () => {
    const result = await login(username, password);
    if (result === "invalid") {
      setError("Неверный логин или пароль");
    } else if (result === "expired") {
      setError("Срок действия аккаунта истёк. Обратитесь к преподавателю.");
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: "60px auto", padding: "0 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>Вход в систему</h2>

      <div
        style={{
          background: "#fff",
          padding: 24,
          borderRadius: 16,
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <input
          placeholder="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: 12,
            borderRadius: 10,
            border: "1px solid #ccc",
            fontSize: 16,
          }}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: 12,
            borderRadius: 10,
            border: "1px solid #ccc",
            fontSize: 16,
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            padding: 12,
            borderRadius: 10,
            border: "none",
            background: "linear-gradient(135deg,#667eea,#764ba2)",
            color: "#fff",
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Войти
        </button>

        {error && (
          <p style={{ color: "#dc2626", margin: 0, fontSize: 14 }}>{error}</p>
        )}
      </div>
    </div>
  );
}