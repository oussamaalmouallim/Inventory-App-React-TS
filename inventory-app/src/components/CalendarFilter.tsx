import React from 'react';

interface CalendarFilterProps {
  selectedMonth: Date;
  onMonthChange: (date: Date) => void;
}

export const CalendarFilter: React.FC<CalendarFilterProps> = ({ selectedMonth, onMonthChange }) => {
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
            fontSize: '16px',
            color: 'var(--color-primary)',
          }}
        >
          ◀
        </button>
        <div style={{ fontSize: '13px', fontWeight: 600, textAlign: 'center' }}>
          {months[currentMonth]} {currentYear}
        </div>
        <button
          onClick={handleNextMonth}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            color: 'var(--color-primary)',
          }}
        >
          ▶
        </button>
      </div>

      {/* Grille des mois */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '4px',
        }}
      >
        {months.map((month, idx) => (
          <button
            key={month}
            onClick={() => handleMonthClick(idx)}
            style={{
              padding: '6px',
              borderRadius: '4px',
              border: idx === currentMonth ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
              background: idx === currentMonth ? 'rgba(var(--color-teal-500-rgb), 0.15)' : 'transparent',
              fontSize: '11px',
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
    </div>
  );
};