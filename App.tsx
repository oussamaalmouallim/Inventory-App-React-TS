import React, { useState } from 'react';
import { Sidebar } from './inventory-app/src/components/Sidebar';
import { Topbar } from './inventory-app/src/components/Topbar';
import { Dashboard } from './inventory-app/src/pages/Dashboard';
import { Products } from './inventory-app/src/pages/Products';
import { Categories } from './inventory-app/src/pages/Categories';
import { Orders } from './inventory-app/src/pages/Orders';
import { History } from './inventory-app/src/pages/History';
import { Users } from './inventory-app/src/pages/Users';
import { Scanner } from './inventory-app/src/pages/Scanner';
import { Login } from './inventory-app/src/pages/Login';
import { Calendar } from './inventory-app/src/pages/Calendar';
import './index.css';

type PageType = 'dashboard' | 'products' | 'categories' | 'orders' | 'history' | 'users' | 'scanner' | 'calendar';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<Date>(new Date());

  const pageConfig: Record<PageType, { title: string; component: React.ReactNode }> = {
    dashboard: { title: '📊 Dashboard', component: <Dashboard selectedMonth={selectedMonth} onMonthChange={setSelectedMonth} /> },
    products: { title: '📦 Produits', component: <Products /> },
    categories: { title: '🏷️ Catégories', component: <Categories /> },
    orders: { title: '🛒 Orders', component: <Orders /> },
    history: { title: '📜 Historique', component: <History /> },
    calendar: { title: '📅 Calendrier', component: <Calendar /> },
    users: { title: '👥 Users', component: <Users /> },
    scanner: { title: '📱 Scanner QR', component: <Scanner /> },
  };

  const handleLoginSuccess = (_role: 'admin' | 'technician' | 'sales') => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    if (window.confirm('Êtes-vous sûr de vouloir vous déconnecter?')) {
      setIsAuthenticated(false);
      setCurrentPage('dashboard');
    }
  };

  if (!isAuthenticated) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  const pageInfo = pageConfig[currentPage];

  return (
    <div className="app-container">
      <Sidebar
        activePage={currentPage}
        onPageChange={setCurrentPage}
        onLogout={handleLogout}
      />
      <div className="main-content">
        <Topbar title={pageInfo.title} />
        <div className="content-area">{pageInfo.component}</div>
      </div>
    </div>
  );
}

export default App;