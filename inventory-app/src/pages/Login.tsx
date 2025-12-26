
import React, { useState } from 'react';

interface LoginProps {
  onLoginSuccess: (role: 'admin' | 'technician' | 'sales') => void;
}

export const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('admin@triis.ma');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Login très simple en local, basé sur ta maquette
    if (email === 'admin@triis.ma' && password === 'admin123') {
      onLoginSuccess('admin');
      return;
    }
    if (email === 'tech@triis.ma' && password === 'tech123') {
      onLoginSuccess('technician');
      return;
    }
    if (email === 'com@triis.ma' && password === 'com123') {
      onLoginSuccess('sales');
      return;
    }

    setError('Identifiants invalides. Vérifiez l’email et le mot de passe.');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #f5f5f5, #ffffff)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div style={{ maxWidth: 420, width: '100%' }}>
        {/* Logo + titre */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 24, color: '#d82323', letterSpacing: 1 }}>
            TRIIS
          </div>
          <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: '#777' }}>
            CONTROL EVERYTHING
          </div>
          <h1 style={{ marginTop: 24, marginBottom: 4, fontSize: 24 }}>Gestion de Stock</h1>
          <p style={{ color: '#67727e', fontSize: 14 }}>
            Connectez-vous pour accéder au système
          </p>
        </div>

        {/* Card de login */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: 16,
            boxShadow: '0 16px 40px rgba(15,23,42,0.12)',
            padding: 32,
            border: '1px solid #f1f1f1',
          }}
        >
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 16 }}>
              <label
                style={{
                  display: 'block',
                  marginBottom: 6,
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="votre.email@triis.ma"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: 8,
                  border: '1px solid #d4d4d8',
                  fontSize: 14,
                  outline: 'none',
                }}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label
                style={{
                  display: 'block',
                  marginBottom: 6,
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                Mot de passe
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: 8,
                  border: '1px solid #d4d4d8',
                  fontSize: 14,
                  outline: 'none',
                }}
              />
            </div>

            {error && (
              <div
                style={{
                  marginBottom: 12,
                  fontSize: 13,
                  color: '#b91c1c',
                  background: '#fee2e2',
                  borderRadius: 8,
                  padding: '8px 10px',
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              style={{
                width: '100%',
                marginTop: 8,
                padding: '10px 16px',
                borderRadius: 999,
                border: 'none',
                background: '#e02424',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: 15,
                cursor: 'pointer',
              }}
            >
              Se connecter
            </button>
          </form>

          {/* Comptes de démo */}
          <div
            style={{
              marginTop: 24,
              fontSize: 13,
              color: '#6b7280',
            }}
          >
            <div style={{ marginBottom: 8, fontWeight: 500 }}>Comptes de démonstration :</div>
            <div
              style={{
                background: '#fef2f2',
                borderRadius: 8,
                padding: '6px 10px',
                marginBottom: 4,
                fontSize: 13,
              }}
            >
              <span style={{ color: '#b91c1c', fontWeight: 600 }}>Admin:</span>{' '}
              admin@triis.ma / admin123
            </div>
            <div
              style={{
                background: '#eff6ff',
                borderRadius: 8,
                padding: '6px 10px',
                marginBottom: 4,
                fontSize: 13,
              }}
            >
              <span style={{ color: '#1d4ed8', fontWeight: 600 }}>Technicien:</span>{' '}
              tech@triis.ma / tech123
            </div>
            <div
              style={{
                background: '#ecfdf3',
                borderRadius: 8,
                padding: '6px 10px',
                fontSize: 13,
              }}
            >
              <span style={{ color: '#15803d', fontWeight: 600 }}>Commercial:</span>{' '}
              com@triis.ma / com123
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
