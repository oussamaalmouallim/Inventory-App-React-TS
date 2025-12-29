import React from 'react';

interface MonthlyRecapProps {
  month: Date;
  onMonthChange: (date: Date) => void;
}

export const MonthlyRecap: React.FC<MonthlyRecapProps> = ({ month, onMonthChange }) => {
  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  const handlePrevMonth = () => {
    const newDate = new Date(month);
    newDate.setMonth(newDate.getMonth() - 1);
    onMonthChange(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(month);
    newDate.setMonth(newDate.getMonth() + 1);
    onMonthChange(newDate);
  };

  const currentMonth = month.getMonth();
  const currentYear = month.getFullYear();

  // Données de démo pour le mois
  const monthlyStats = {
    entries: 342,
    exits: 198,
    reservations: 45,
    movements: 585,
    avgDaily: 19,
  };

  // Jours du mois (simplifié)
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div
      style={{
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-card-border)',
        boxShadow: 'var(--shadow-sm)',
        padding: '20px',
        marginBottom: '24px',
      }}
    >
      {/* Header avec flèches */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
        }}
      >
        <button
          onClick={handlePrevMonth}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '18px',
            color: 'var(--color-primary)',
          }}
        >
          ◀
        </button>
        <h3 style={{ margin: 0, fontSize: '18px' }}>
          📅 {months[currentMonth]} {currentYear}
        </h3>
        <button
          onClick={handleNextMonth}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '18px',
            color: 'var(--color-primary)',
          }}
        >
          ▶
        </button>
      </div>

      {/* Stats du mois */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '12px',
          marginBottom: '16px',
        }}
      >
        <div style={{ background: 'rgba(var(--color-teal-500-rgb), 0.1)', padding: '12px', borderRadius: '8px' }}>
          <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>Entrées</div>
          <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-primary)' }}>{monthlyStats.entries}</div>
        </div>
        <div style={{ background: 'rgba(var(--color-orange-500-rgb), 0.1)', padding: '12px', borderRadius: '8px' }}>
          <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>Sorties</div>
          <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-warning)' }}>{monthlyStats.exits}</div>
        </div>
        <div style={{ background: 'rgba(var(--color-red-500-rgb), 0.1)', padding: '12px', borderRadius: '8px' }}>
          <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>Réservations</div>
          <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-error)' }}>{monthlyStats.reservations}</div>
        </div>
        <div style={{ background: 'rgba(var(--color-slate-500-rgb), 0.1)', padding: '12px', borderRadius: '8px' }}>
          <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>Moy./jour</div>
          <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-info)' }}>{monthlyStats.avgDaily}</div>
        </div>
      </div>

      {/* Mini calendrier horizontal des jours */}
      <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
        Activité par jour :
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fill, minmax(28px, 1fr))`,
          gap: '4px',
          maxHeight: '70px',
          overflowY: 'auto',
        }}
      >
        {daysArray.map((day) => (
          <div
            key={day}
            style={{
              width: '28px',
              height: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
              fontSize: '10px',
              fontWeight: 500,
              background:
                day % 5 === 0
                  ? 'rgba(var(--color-teal-500-rgb), 0.2)'
                  : day % 3 === 0
                    ? 'rgba(var(--color-orange-500-rgb), 0.15)'
                    : 'var(--color-secondary)',
              color:
                day % 5 === 0
                  ? 'var(--color-primary)'
                  : day % 3 === 0
                    ? 'var(--color-warning)'
                    : 'var(--color-text-secondary)',
              cursor: 'pointer',
              transition: 'all 150ms ease',
            }}
            title={`${day} ${months[currentMonth]}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};