"use client";

import { useAuth } from "../../context/AuthContext";

export default function TeacherPanel() {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: 40 }}>
      <h2>Панель преподавателя</h2>
      <p>Вы вошли как: {user?.username}</p>
      <button onClick={logout}>Выйти</button>
    </div>
  );
}
