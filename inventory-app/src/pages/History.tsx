/* ============================================
      FICHIER: src/pages/History.tsx
      ============================================ */

import React from 'react';

export const History: React.FC = () => {
  const movements = [
    { id: 'MOV-001', type: 'Entrée Stock', boxId: 'BOX-12345', product: 'Module LED RGB', destination: 'Atelier', timestamp: '2025-12-21 10:30', technician: 'Ahmed' },
    { id: 'MOV-002', type: 'Sortie Projet', boxId: 'BOX-12340', product: 'Capteur DHT22', destination: 'PRJ-001', timestamp: '2025-12-20 14:45', technician: 'Fatima' },
    { id: 'MOV-003', type: 'Réservation Standby', boxId: 'BOX-12350-12360', product: 'Arduino Nano (x10)', destination: 'PRJ-002', timestamp: '2025-12-19 09:00', technician: 'Mohamed' },
  ];

  return (
    <>
      <h2 style={{ marginBottom: 'var(--space-20)' }}>Historique des Mouvements</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID Mouvement</th>
              <th>Type</th>
              <th>ID Boîte</th>
              <th>Produit</th>
              <th>Projet / Destination</th>
              <th>Timestamp</th>
              <th>Technicien</th>
            </tr>
          </thead>
          <tbody>
            {movements.map((mov) => (
              <tr key={mov.id}>
                <td>{mov.id}</td>
                <td>{mov.type}</td>
                <td>{mov.boxId}</td>
                <td>{mov.product}</td>
                <td>{mov.destination}</td>
                <td>{mov.timestamp}</td>
                <td>{mov.technician}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};