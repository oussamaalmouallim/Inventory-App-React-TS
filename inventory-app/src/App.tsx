import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import { Dashboard } from './pages/Dashboard';
import { Products } from './pages/Products';
import { Categories } from './pages/Categories';
import { Orders } from './pages/Orders';
import { History } from './pages/History';
import { Users } from './pages/Users';
import { Scanner } from './pages/Scanner';
import { Login } from './pages/Login';
import { Calendar } from './pages/Calendar';
import './index.css';

type PageType = 'dashboard' | 'products' | 'categories' | 'orders' | 'history' | 'users' | 'scanner' | 'calendar';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentRole, setCurrentRole] = useState<'admin' | 'technician' | 'sales' | null>(null);
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

  const handleLoginSuccess = (role: 'admin' | 'technician' | 'sales') => {
    setIsAuthenticated(true);
    setCurrentRole(role);
  };

  const handleLogout = () => {
    if (window.confirm('Êtes-vous sûr de vouloir vous déconnecter?')) {
      setIsAuthenticated(false);
      setCurrentRole(null);
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
        selectedMonth={selectedMonth}
        onMonthChange={setSelectedMonth}
      />
      <div className="main-content">
        <Topbar title={pageInfo.title} />
        <div className="content-area">{pageInfo.component}</div>
      </div>
    </div>
  );
}

export default App;