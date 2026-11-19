'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { API_BASE } from '../../lib/api';

export default function UserPage() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [profileData, setProfileData] = useState<any>(null);
  const [settingsData, setSettingsData] = useState<any>(null);
  const [errorStatus, setErrorStatus] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem('accessToken');

    if (!savedToken) {
      router.push('/auth');
      return;
    }

    setToken(savedToken);
    fetchProfile();
    fetchSettings();
  }, [router]);

  const clearState = () => {
    setErrorStatus(null);
    setProfileData(null);
    setSettingsData(null);
  };

  const fetchProfile = async (overrideToken?: string | null) => {
    clearState();

    const activeToken =
      overrideToken !== undefined
        ? overrideToken
        : localStorage.getItem('accessToken');

    try {
      const res = await fetch(`${API_BASE}/users/me`, {
        headers: {
          Authorization: `Bearer ${activeToken}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 401) {
          localStorage.removeItem('accessToken');
          setToken(null);
          router.push('/auth');
        }

        throw data;
      }

      setProfileData(data.result);
      setLoading(false);
    } catch (err: any) {
      setErrorStatus(err);
      setLoading(false);
    }
  };

  const fetchSettings = async () => {
    const activeToken = localStorage.getItem('accessToken');

    try {
      const res = await fetch(`${API_BASE}/users/me/settings`, {
        headers: {
          Authorization: `Bearer ${activeToken}`,
        },
      });

      const data = await res.json();

      if (!res.ok) throw data;

      setSettingsData(data.result);
    } catch (err: any) {
      setErrorStatus(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setToken(null);
    clearState();
    router.push('/auth');
  };

  if (loading) {
    return (
      <main style={pageStyle}>
        <div style={cardStyle}>
          <p style={{ textAlign: 'center', color: '#64748b' }}>
            Загрузка профиля...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main style={pageStyle}>
      <div style={cardStyle}>

        <section style={tokenBoxStyle}>
            {profileData && (
              <h2 style={titleStyle}>Привет, {profileData.displayName}!</h2>
            )}

            <button onClick={handleLogout} style={logoutButtonStyle}>
              Выйти
            </button>
        </section>

        {/* Ошибки */}
        {errorStatus && (
          <section style={errorBoxStyle}>
            <strong>Ошибка запроса</strong>
            <pre style={preStyle}>
              {JSON.stringify(errorStatus, null, 2)}
            </pre>
          </section>
        )}

        {/* Профиль */}
        {profileData && (
          <section style={dataBoxStyle}>
            <h3 style={sectionHeadingStyle}>
              <span style={{ color: '#16a34a' }}>●</span> Данные профиля
            </h3>

            <pre style={preStyle}>
              {JSON.stringify(profileData, null, 2)}
            </pre>
          </section>
        )}

        {/* Настройки */}
        {settingsData && (
          <section style={dataBoxStyle}>
            <h3 style={sectionHeadingStyle}>
              <span style={{ color: '#2563eb' }}>●</span> Настройки пользователя
            </h3>

            <pre style={preStyle}>
              {JSON.stringify(settingsData, null, 2)}
            </pre>
          </section>
        )}

        {!profileData && !settingsData && !errorStatus && (
          <p style={{ color: '#64748b', textAlign: 'center' }}>
            Данные не получены. Проверьте авторизацию.
          </p>
        )}
      </div>
    </main>
  );
}

const pageStyle: React.CSSProperties = {
  // padding: 20,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  fontFamily: 'Arial, sans-serif',
};

const cardStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: 650,
  background: '#fff',
  padding: 30,
  borderRadius: 14,
  boxShadow: '0 8px 30px rgba(0,0,0,0.07)',
  boxSizing: 'border-box',
};

const titleStyle: React.CSSProperties = {
  margin: 0,
  color: '#172033',
  fontSize: 25,
};

const subtitleStyle: React.CSSProperties = {
  color: '#64748b',
  fontSize: 14,
  marginTop: 8,
};

const tokenBoxStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#f8fafc',
  border: '1px solid #e2e8f0',
  borderRadius: 9,
  padding: 16,
  marginBottom: 20,
};

const sectionTitleStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 10,
  fontWeight: 600,
  fontSize: 14,
  color: '#334155',
  marginBottom: 16,
};

const tokenTextStyle: React.CSSProperties = {
  padding: 10,
  background: '#e2e8f0',
  borderRadius: 6,
  fontSize: 12,
  color: '#334155',
  wordBreak: 'break-all',
};

const buttonGroupStyle: React.CSSProperties = {
  display: 'flex',
  gap: 10,
  flexWrap: 'wrap',
  marginTop: 15,
};

const logoutButtonStyle: React.CSSProperties = {
  padding: '10px 18px',
  background: '#2563eb',
  color: '#fff',
  border: 'none',
  borderRadius: 7,
  cursor: 'pointer',
  fontSize: 14,
  fontWeight: 600,
};

const testButtonStyle: React.CSSProperties = {
  padding: '10px 18px',
  background: '#fff1f2',
  color: '#be123c',
  border: '1px solid #fecdd3',
  borderRadius: 7,
  cursor: 'pointer',
  fontSize: 14,
};

const dataBoxStyle: React.CSSProperties = {
  padding: 16,
  border: '1px solid #e2e8f0',
  borderRadius: 9,
  marginBottom: 18,
  background: '#fff',
  overflow: 'hidden',
};

const sectionHeadingStyle: React.CSSProperties = {
  fontSize: 17,
  color: '#334155',
  margin: '0 0 15px',
};

const errorBoxStyle: React.CSSProperties = {
  padding: 15,
  background: '#fff1f2',
  color: '#be123c',
  border: '1px solid #fecdd3',
  borderRadius: 9,
  marginBottom: 18,
};

const preStyle: React.CSSProperties = {
  fontSize: 13,
  whiteSpace: 'pre-wrap',
  overflowWrap: 'anywhere',
  color: '#334155',
  margin: 0,
};
