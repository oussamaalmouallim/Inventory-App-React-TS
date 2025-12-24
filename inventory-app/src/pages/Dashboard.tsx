/* ============================================
      FICHIER: src/pages/Dashboard.tsx (MISE À JOUR)
      ============================================ */

import React from 'react';
import { StatCard } from '../components/StatCard';
import { Badge } from '../components/Badge';
import { MonthlyRecap } from '../components/MonthlyRecap';

interface DashboardProps {
  selectedMonth: Date;
  onMonthChange: (date: Date) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ selectedMonth, onMonthChange }) => {
  const recentMovements = [
    { id: '#001', type: 'Entrée Stock', product: 'Module LED', qty: 10, date: '2025-12-21', status: 'success' as const },
    { id: '#002', type: 'Sortie Projet', product: 'Capteur DHT', qty: 5, date: '2025-12-20', status: 'success' as const },
    { id: '#003', type: 'Réservation', product: 'Arduino Nano', qty: 20, date: '2025-12-19', status: 'warning' as const },
  ];

  return (
    <>
      <div className="stats-grid">
        <StatCard label="Total Produits" value={124} />
        <StatCard label="Total Catégories" value={12} />
        <StatCard label="Total Orders" value={45} />
        <StatCard label="Total Users" value={8} />
      </div>

      {/* Section Calendrier du mois */}
      <MonthlyRecap month={selectedMonth} onMonthChange={onMonthChange} />

      <h2 style={{ marginBottom: 'var(--space-16)' }}>Derniers Mouvements</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Produit</th>
              <th>Quantité</th>
              <th>Date</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            {recentMovements.map((movement) => (
              <tr key={movement.id}>
                <td>{movement.id}</td>
                <td>{movement.type}</td>
                <td>{movement.product}</td>
                <td>{movement.qty}</td>
                <td>{movement.date}</td>
                <td>
                  <Badge variant={movement.status}>
                    {movement.status === 'success' ? 'Complété' : 'Standby'}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};