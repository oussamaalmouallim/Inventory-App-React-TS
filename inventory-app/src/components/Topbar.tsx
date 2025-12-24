import React from 'react';

interface TopbarProps {
  title: string;
}

export const Topbar: React.FC<TopbarProps> = ({ title }) => {
  return (
    <div className="topbar">
      <h1 className="topbar-title">{title}</h1>
      <div className="topbar-actions">
        <span style={{ color: 'var(--color-text-secondary)' }}>Connecté en tant que Admin</span>
      </div>
    </div>
  );
};