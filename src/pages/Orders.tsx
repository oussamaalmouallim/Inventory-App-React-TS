
import React from 'react';
import { Badge } from '../components/Badge';

export const Orders: React.FC = () => {
  const orders = [
    { id: 'PRJ-001', name: 'Installation Thermique', client: 'Maison Durable', status: 'success' as const, date: '2025-12-15' },
    { id: 'PRJ-002', name: 'Système d\'Arrosage Automatique', client: 'Jardin Intelligent', status: 'warning' as const, date: '2025-12-18' },
    { id: 'PRJ-003', name: 'Moniteur Qualité Air', client: 'Bureau Écologique', status: 'danger' as const, date: '2025-12-20' },
  ];

  return (
    <>
      <h2 style={{ marginBottom: 'var(--space-20)' }}>Commandes / Projets</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID Projet</th>
              <th>Nom</th>
              <th>Client</th>
              <th>Statut</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.client}</td>
                <td>
                  <Badge variant={order.status}>
                    {order.status === 'success' ? 'Validé' : order.status === 'warning' ? 'Standby' : 'En cours'}
                  </Badge>
                </td>
                <td>{order.date}</td>
                <td>
                  <button className="btn btn--sm btn--outline">Voir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};