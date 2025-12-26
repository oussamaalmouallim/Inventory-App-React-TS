import React from 'react';
import type { PageType } from '../types';

interface SidebarProps {
  activePage: PageType;
  onPageChange: (page: PageType) => void;
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activePage, onPageChange, onLogout }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'products', label: 'Produits', icon: '📦' },
    { id: 'categories', label: 'Catégories', icon: '🏷️' },
    { id: 'orders', label: 'Orders', icon: '🛒' },
    { id: 'history', label: 'Historique', icon: '📜' },
    { id: 'calendar', label: 'Calendrier', icon: '📅' },
    { id: 'users', label: 'Users', icon: '👥' },
    { id: 'scanner', label: 'Scanner QR', icon: '📱' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">📦 Inventory</div>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <li key={item.id} className="nav-item">
            <button
              className={`nav-link ${activePage === item.id ? 'active' : ''}`}
              onClick={() => onPageChange(item.id as PageType)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </nav>
      <div className="sidebar-footer">
        <button
          className="btn btn--outline btn--sm"
          style={{ width: '100%' }}
          onClick={onLogout}
        >
          🚪 Logout
        </button>
      </div>
    </aside>
  );
};