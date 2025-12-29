
import React from 'react';

interface CalendarInventoryProps {
  selectedMonth: Date;
  onMonthChange: (date: Date) => void;
}

export const CalendarInventory: React.FC<CalendarInventoryProps> = ({ selectedMonth, onMonthChange }) => {
  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  const handlePrevMonth = () => {
    const newDate = new Date(selectedMonth);
    newDate.setMonth(newDate.getMonth() - 1);
    onMonthChange(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(selectedMonth);
    newDate.setMonth(newDate.getMonth() + 1);
    onMonthChange(newDate);
  };

  const handleMonthClick = (monthIndex: number) => {
    const newDate = new Date(selectedMonth);
    newDate.setMonth(monthIndex);
    onMonthChange(newDate);
  };

  const currentMonth = selectedMonth.getMonth();
  const currentYear = selectedMonth.getFullYear();

  // Produits filtrés par mois (données de démo)
  const inventoryByMonth = {
    0: [  // Janvier
      { sku: 'SKU-001', name: 'Module LED RGB', qty: 45, entries: 12, exits: 5 },
      { sku: 'SKU-005', name: 'Résistance 1kΩ', qty: 320, entries: 80, exits: 12 },
    ],
    1: [  // Février
      { sku: 'SKU-002', name: 'Capteur DHT22', qty: 30, entries: 8, exits: 3 },
      { sku: 'SKU-003', name: 'Arduino Nano', qty: 15, entries: 5, exits: 2 },
    ],
    11: [ // Décembre (current)
      { sku: 'SKU-001', name: 'Module LED RGB', qty: 45, entries: 10, exits: 8 },
      { sku: 'SKU-002', name: 'Capteur DHT22', qty: 30, entries: 6, exits: 5 },
      { sku: 'SKU-003', name: 'Arduino Nano', qty: 15, entries: 4, exits: 2 },
      { sku: 'SKU-004', name: 'Fil de cuivre', qty: 200, entries: 50, exits: 15 },
    ],
  };

  const currentMonthInventory = inventoryByMonth[currentMonth as keyof typeof inventoryByMonth] || [];

  return (
    <div
      style={{
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-card-border)',
        padding: '12px',
        marginBottom: '16px',
      }}
    >
      {/* Header avec flèches */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '10px',
        }}
      >
        <button
          onClick={handlePrevMonth}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            color: 'var(--color-primary)',
          }}
        >
          ◀
        </button>
        <div style={{ fontSize: '12px', fontWeight: 600, textAlign: 'center', flex: 1 }}>
          {months[currentMonth]} {currentYear}
        </div>
        <button
          onClick={handleNextMonth}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            color: 'var(--color-primary)',
          }}
        >
          ▶
        </button>
      </div>

      {/* Grille des mois (petit format) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '3px',
          marginBottom: '12px',
          paddingBottom: '10px',
          borderBottom: '1px solid var(--color-card-border)',
        }}
      >
        {months.map((month, idx) => (
          <button
            key={month}
            onClick={() => handleMonthClick(idx)}
            style={{
              padding: '4px',
              borderRadius: '3px',
              border: idx === currentMonth ? '1.5px solid var(--color-primary)' : '1px solid var(--color-border)',
              background: idx === currentMonth ? 'rgba(var(--color-teal-500-rgb), 0.15)' : 'transparent',
              fontSize: '10px',
              fontWeight: idx === currentMonth ? 600 : 400,
              color: idx === currentMonth ? 'var(--color-primary)' : 'var(--color-text-secondary)',
              cursor: 'pointer',
              transition: 'all 150ms ease',
            }}
          >
            {month.slice(0, 3)}
          </button>
        ))}
      </div>

      {/* Titre de l'inventaire */}
      <div
        style={{
          fontSize: '11px',
          fontWeight: 600,
          color: 'var(--color-text)',
          marginBottom: '8px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}
      >
        📦 Inventaire
      </div>

      {/* Liste des produits du mois */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          maxHeight: '200px',
          overflowY: 'auto',
        }}
      >
        {currentMonthInventory.length > 0 ? (
          currentMonthInventory.map((item) => (
            <div
              key={item.sku}
              style={{
                background: 'var(--color-secondary)',
                borderRadius: '4px',
                padding: '8px',
                fontSize: '11px',
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: '3px', color: 'var(--color-text)' }}>
                {item.sku}
              </div>
              <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '3px' }}>
                {item.name}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}>
                <span style={{ color: 'var(--color-primary)' }}>📊 {item.qty}</span>
                <span style={{ color: 'var(--color-success)' }}>↓ {item.entries}</span>
                <span style={{ color: 'var(--color-warning)' }}>↑ {item.exits}</span>
              </div>
            </div>
          ))
        ) : (
          <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', textAlign: 'center', padding: '8px' }}>
            Aucun produit ce mois
          </div>
        )}
      </div>
    </div>
  );
};