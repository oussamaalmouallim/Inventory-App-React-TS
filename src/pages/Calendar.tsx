import React, { useState } from 'react';
import { Badge } from '../components/Badge';

export const Calendar: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date(2025, 11)); // Décembre 2025

  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  const handlePrevMonth = () => {
    const newDate = new Date(selectedMonth);
    newDate.setMonth(newDate.getMonth() - 1);
    setSelectedMonth(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(selectedMonth);
    newDate.setMonth(newDate.getMonth() + 1);
    setSelectedMonth(newDate);
  };

  // Stock par mois (données de démo)
  const stockByMonth: Record<number, Array<{ sku: string; name: string; qty: number; entries: number; exits: number; status: 'success' | 'warning' | 'danger' }>> = {
    0: [ // Janvier
      { sku: 'SKU-001', name: 'Module LED RGB', qty: 45, entries: 12, exits: 5, status: 'success' },
      { sku: 'SKU-005', name: 'Résistance 1kΩ', qty: 320, entries: 80, exits: 12, status: 'success' },
    ],
    1: [ // Février
      { sku: 'SKU-002', name: 'Capteur DHT22', qty: 30, entries: 8, exits: 3, status: 'success' },
      { sku: 'SKU-003', name: 'Arduino Nano', qty: 15, entries: 5, exits: 2, status: 'warning' },
    ],
    2: [ // Mars
      { sku: 'SKU-001', name: 'Module LED RGB', qty: 50, entries: 20, exits: 8, status: 'success' },
      { sku: 'SKU-004', name: 'Fil de cuivre', qty: 180, entries: 40, exits: 20, status: 'warning' },
    ],
    11: [ // Décembre (current)
      { sku: 'SKU-001', name: 'Module LED RGB', qty: 45, entries: 10, exits: 8, status: 'success' },
      { sku: 'SKU-002', name: 'Capteur DHT22', qty: 30, entries: 6, exits: 5, status: 'success' },
      { sku: 'SKU-003', name: 'Arduino Nano', qty: 15, entries: 4, exits: 2, status: 'warning' },
      { sku: 'SKU-004', name: 'Fil de cuivre', qty: 200, entries: 50, exits: 15, status: 'success' },
    ],
  };

  const currentMonth = selectedMonth.getMonth();
  const currentYear = selectedMonth.getFullYear();
  const currentMonthStock = stockByMonth[currentMonth] || [];

  const getStatusBadge = (status: 'success' | 'warning' | 'danger') => {
    const labels: Record<string, string> = {
      'success': '✓ Bon Stock',
      'warning': '⚠ Stock Bas',
      'danger': '❌ Rupture',
    };
    return labels[status];
  };

  return (
    <>
      {/* Header avec navigation */}
      <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-card-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-24)', marginBottom: 'var(--space-24)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-24)' }}>
          <button
            onClick={handlePrevMonth}
            className="btn btn--outline"
            style={{ padding: 'var(--space-8) var(--space-12)' }}
          >
            ◀ Précédent
          </button>
          <h2 style={{ margin: 0, fontSize: 'var(--font-size-2xl)' }}>
            {months[currentMonth]} {currentYear}
          </h2>
          <button
            onClick={handleNextMonth}
            className="btn btn--outline"
            style={{ padding: 'var(--space-8) var(--space-12)' }}
          >
            Suivant ▶
          </button>
        </div>

        {/* Grille des mois pour sélection rapide */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 'var(--space-8)' }}>
          {months.map((month, idx) => (
            <button
              key={month}
              onClick={() => setSelectedMonth(new Date(selectedMonth.getFullYear(), idx))}
              style={{
                padding: 'var(--space-12)',
                borderRadius: 'var(--radius-base)',
                border: idx === currentMonth ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                background: idx === currentMonth ? 'rgba(var(--color-teal-500-rgb), 0.15)' : 'var(--color-background)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: idx === currentMonth ? 600 : 400,
                color: idx === currentMonth ? 'var(--color-primary)' : 'var(--color-text)',
                cursor: 'pointer',
                transition: 'all 150ms ease',
              }}
            >
              {month.slice(0, 3)}
            </button>
          ))}
        </div>
      </div>

      {/* Tableau du stock du mois */}
      <h3 style={{ marginBottom: 'var(--space-16)' }}>Stock - {months[currentMonth]} {currentYear}</h3>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>SKU</th>
              <th>Produit</th>
              <th>Quantité Totale</th>
              <th>Entrées du Mois</th>
              <th>Sorties du Mois</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            {currentMonthStock.length > 0 ? (
              currentMonthStock.map((item) => (
                <tr key={item.sku}>
                  <td><strong>{item.sku}</strong></td>
                  <td>{item.name}</td>
                  <td style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{item.qty}</td>
                  <td style={{ color: 'var(--color-success)' }}>↓ {item.entries}</td>
                  <td style={{ color: 'var(--color-warning)' }}>↑ {item.exits}</td>
                  <td>
                    <Badge variant={item.status}>
                      {getStatusBadge(item.status)}
                    </Badge>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', color: 'var(--color-text-secondary)' }}>
                  Aucune donnée pour ce mois
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Statistiques du mois */}
      {currentMonthStock.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'var(--space-16)', marginTop: 'var(--space-24)' }}>
          <div className="stat-card">
            <div className="stat-label">Total Produits</div>
            <div className="stat-value">{currentMonthStock.length}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Total Quantité</div>
            <div className="stat-value">{currentMonthStock.reduce((sum, item) => sum + item.qty, 0)}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Total Entrées</div>
            <div className="stat-value" style={{ color: 'var(--color-success)' }}>{currentMonthStock.reduce((sum, item) => sum + item.entries, 0)}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Total Sorties</div>
            <div className="stat-value" style={{ color: 'var(--color-warning)' }}>{currentMonthStock.reduce((sum, item) => sum + item.exits, 0)}</div>
          </div>
        </div>
      )}
    </>
  );
};