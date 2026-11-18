
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { API_BASE } from '../../lib/api';

export default function AuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState('user1@example.com');
  const [password, setPassword] = useState('user1');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      router.push('/user');
    }
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, pass: password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw data;
      }

      const receivedToken = data.result.accessToken;
      localStorage.setItem('accessToken', receivedToken);
      router.push('/user');
    } catch (err: any) {
      setError(err?.message ?? 'Ошибка входа');
    }
  };

  return (
    <main style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      fontFamily: 'Arial, sans-serif',
    }}>
      <div style={{
        width: '100%',
        maxWidth: 400,
        background: '#fff',
        padding: 32,
        borderRadius: 14,
        boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
        boxSizing: 'border-box',
      }}>
        <h2 style={{
          margin: '0 0 8px',
          fontSize: 26,
          color: '#172033',
          textAlign: 'center',
        }}>
          Вход в аккаунт
        </h2>

        {error && (
          <div style={{
            color: '#b91c1c',
            background: '#fee2e2',
            border: '1px solid #fecaca',
            padding: 12,
            borderRadius: 8,
            marginBottom: 16,
            fontSize: 14,
          }}>
            {error}
          </div>
        )}

        <div style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: 8,
          padding: 12,
          marginBottom: 20,
        }}>
          <div style={{ fontSize: 13, color: '#475569', marginBottom: 10 }}>
            Быстрый выбор пользователя:
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            <button
              type="button"
              onClick={() => {
                setEmail('user1@example.com');
                setPassword('user1');
              }}
              style={quickButtonStyle}
            >
              User 1
            </button>

            <button
              type="button"
              onClick={() => {
                setEmail('user2@example.com');
                setPassword('user2');
              }}
              style={quickButtonStyle}
            >
              User 2
            </button>
          </div>
        </div>

        <form
          onSubmit={handleLogin}
          style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
        >
          <label style={labelStyle}>
            Email
            <input
              type="email"
              placeholder="Введите email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />
          </label>

          <label style={labelStyle}>
            Пароль
            <input
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
            />
          </label>

          <button type="submit" style={submitButtonStyle}>
            Войти
          </button>
        </form>
      </div>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '12px 14px',
  border: '1px solid #cbd5e1',
  borderRadius: 8,
  fontSize: 15,
  outline: 'none',
  background: '#fff',
  color: '#172033',
};

const labelStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 7,
  color: '#334155',
  fontSize: 14,
  fontWeight: 600,
};

const quickButtonStyle: React.CSSProperties = {
  flex: 1,
  padding: '9px 12px',
  background: '#fff',
  border: '1px solid #cbd5e1',
  borderRadius: 7,
  color: '#334155',
  cursor: 'pointer',
  fontSize: 14,
};

const submitButtonStyle: React.CSSProperties = {
  marginTop: 6,
  padding: 13,
  background: '#2563eb',
  color: '#fff',
  border: 'none',
  borderRadius: 8,
  fontSize: 16,
  fontWeight: 600,
  cursor: 'pointer',
};
