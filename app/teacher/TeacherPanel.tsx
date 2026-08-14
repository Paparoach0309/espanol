"use client";

import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  createUser,
  deleteUser,
  formatExpiry,
  getUsers,
  isExpired,
  renewUser,
  updateUser,
  StoredUser,
} from "../../lib/usersStore";
import styles from "./teacher.module.css";

export default function TeacherPanel() {
  const { user, logout } = useAuth();
  const [users, setUsers] = useState<StoredUser[]>(() => getUsers());

  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newDays, setNewDays] = useState(30);

  const [editing, setEditing] = useState<string | null>(null);
  const [editUsername, setEditUsername] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [editDays, setEditDays] = useState(30);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const refresh = () => setUsers(getUsers());

  const handleCreate = async () => {
    if (!newUsername.trim() || !newPassword.trim()) {
      setError("Введи логин и пароль студента");
      return;
    }
    const days = Number(newDays) || 30;
    const res = await createUser({
      username: newUsername.trim(),
      password: newPassword,
      role: "student",
      validityDays: days,
    });
    if (!res.ok) {
      setError(res.error);
      return;
    }
    setError("");
    setMessage(
      `Студент «${newUsername.trim()}» создан (срок ${days} дней). Логин и пароль можно передать студенту.`
    );
    setNewUsername("");
    setNewPassword("");
    refresh();
  };

  const startEdit = (u: StoredUser) => {
    setEditing(u.username);
    setEditUsername(u.username);
    setEditPassword("");
    setEditDays(30);
  };

  const saveEdit = async (oldUsername: string) => {
    const patch: { username?: string; password?: string } = {};
    if (editUsername.trim() && editUsername.trim() !== oldUsername) {
      patch.username = editUsername.trim();
    }
    if (editPassword.trim()) {
      patch.password = editPassword;
    }

    if (Object.keys(patch).length > 0) {
      const res = await updateUser(oldUsername, patch);
      if (!res.ok) {
        setError(res.error);
        return;
      }
      setMessage(
        "Креды изменены — активная сессия пользователя будет сброшена."
      );
    }

    const days = Number(editDays);
    if (days > 0) {
      renewUser(patch.username || oldUsername, days);
      setMessage((m) => `${m} Срок продлён на ${days} дней.`);
    }

    setEditing(null);
    refresh();
  };

  const handleDelete = (username: string) => {
    if (username === user?.username) {
      setError("Нельзя удалить свой собственный аккаунт");
      return;
    }
    if (!window.confirm(`Удалить пользователя «${username}»?`)) return;
    deleteUser(username);
    setMessage(`Пользователь «${username}» удалён`);
    refresh();
  };

  const handleRenew = (username: string) => {
    renewUser(username, 30);
    setMessage(`Срок для «${username}» продлён на 30 дней`);
    refresh();
  };

  const renderRow = (u: StoredUser) => {
    const isSelf = u.username === user?.username;
    const expired = isExpired(u);

    if (editing === u.username) {
      return (
        <div className={`${styles.row} ${styles.editing}`} key={u.username}>
          <div className={styles.rowMain}>
            <div className={styles.rowHeader}>
              <strong>{u.username}</strong>
              <span className={styles.badge}>{u.role}</span>
            </div>
            <div className={styles.editFields}>
              <input
                value={editUsername}
                onChange={(e) => setEditUsername(e.target.value)}
                placeholder="Новый логин"
              />
              <input
                value={editPassword}
                onChange={(e) => setEditPassword(e.target.value)}
                placeholder="Новый пароль"
              />
              <input
                type="number"
                value={editDays}
                onChange={(e) => setEditDays(Number(e.target.value))}
                placeholder="Продлить на дней"
              />
            </div>
          </div>
          <div className={styles.rowActions}>
            <button
              className={styles.saveBtn}
              onClick={() => saveEdit(u.username)}
            >
              Сохранить
            </button>
            <button
              className={styles.ghostBtn}
              onClick={() => setEditing(null)}
            >
              Отмена
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className={styles.row} key={u.username}>
        <div className={styles.rowMain}>
          <div className={styles.rowHeader}>
            <strong>{u.username}</strong>
            <span className={styles.badge}>{u.role}</span>
          </div>
          <div className={styles.rowMeta}>
            <span className={expired ? styles.expired : undefined}>
              Срок: {formatExpiry(u.expiresAt)} {expired && "⚠️ истёк"}
            </span>
            <span>
              Создан: {new Date(u.createdAt).toLocaleString("ru-RU")}
            </span>
          </div>
        </div>
        <div className={styles.rowActions}>
          <button className={styles.ghostBtn} onClick={() => startEdit(u)}>
            Изменить
          </button>
          <button className={styles.ghostBtn} onClick={() => handleRenew(u.username)}>
            +30 дней
          </button>
          {!isSelf && (
            <button
              className={styles.dangerBtn}
              onClick={() => handleDelete(u.username)}
            >
              Удалить
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Панель преподавателя</h1>
        <p>
          Вы вошли как: <strong>{user?.username}</strong>
        </p>
        <button className={styles.logoutBtn} onClick={logout}>
          Выйти
        </button>
      </header>

      {message && <div className={styles.success}>{message}</div>}
      {error && <div className={styles.error}>{error}</div>}

      <section className={styles.card}>
        <h2>Выдать доступ студенту</h2>
        <p className={styles.hint}>
          Создайте логин и пароль — срок действия будет установлен
          автоматически. Через указанный срок доступ протухнет, и студенту нужно
          будет продление.
        </p>
        <div className={styles.createForm}>
          <input
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            placeholder="Логин студента"
          />
          <input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Пароль"
          />
          <input
            type="number"
            min={1}
            value={newDays}
            onChange={(e) => setNewDays(Number(e.target.value))}
            placeholder="Дней (по умолчанию 30)"
          />
          <button className={styles.saveBtn} onClick={handleCreate}>
            Создать студента
          </button>
        </div>
      </section>

      <section className={styles.card}>
        <h2>Пользователи</h2>
        <p className={styles.hint}>
          При смене логина/пароля активная сессия студента сразу сбрасывается —
          ему придётся войти заново.
        </p>
        <div className={styles.list}>{users.map(renderRow)}</div>
      </section>
    </div>
  );
}