# Inventory App — TIS Stock Management System

A web-based inventory management application built with **React + TypeScript**, designed to digitize and streamline stock management operations for a company that previously had no digital tooling.

> **Live Demo:** [https://oussamaalmouallim.github.io/Inventory-App-React-TS/]


---

## 🧩 Overview

This application was built as a real-world solution for **TIS**, a company that needed to transition from manual/paper-based inventory tracking to a fully digital system. It covers the complete inventory lifecycle — from product and category management, to orders, movement history, QR scanning, and user access control.

---

## ✨ Features

| Module | Description |
|---|---|
| 🔐 **Authentication** | Role-based login (Admin, Technician, Sales) with demo accounts |
| 📊 **Dashboard** | Key stats (products, categories, orders, users) + monthly recap calendar |
| 📦 **Products** | View, add, edit and delete inventory items with SKU, category, stock and price |
| 🏷️ **Categories** | Manage product categories with product count tracking |
| 🛒 **Orders** | Project/order management with status tracking (Validated / Standby / In Progress) |
| 📜 **History** | Full movement log with box ID, technician, project destination and timestamp |
| 📅 **Calendar** | Monthly stock view — browse stock levels, entries and exits by month |
| 👥 **Users** | User management with role assignment and last login tracking |
| 📱 **QR Scanner** | Simulated QR scan workflow for stock entry and exit movements |

---

## 🛠️ Tech Stack

- **React 18** — UI framework
- **TypeScript** — Type safety across all components and pages
- **Vite** — Build tool and dev server
- **React Router DOM v6** — Client-side routing
- **CSS Custom Properties** — Design system with theming variables (no external UI library)
- **GitHub Pages** — Deployment via `gh-pages`

---

## 🗂️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Badge.tsx        # Status badge (success / warning / danger)
│   ├── CalendarFilter.tsx
│   ├── CalendarInventory.tsx
│   ├── Modal.tsx        # Generic modal wrapper
│   ├── MonthlyRecap.tsx # Monthly stats + mini calendar
│   ├── Sidebar.tsx      # Navigation sidebar
│   ├── StatCard.tsx     # KPI stat card
│   └── Topbar.tsx       # Top navigation bar
├── pages/               # Page-level components
│   ├── Calendar.tsx
│   ├── Categories.tsx
│   ├── Dashboard.tsx
│   ├── History.tsx
│   ├── Login.tsx
│   ├── Orders.tsx
│   ├── Products.tsx
│   ├── Scanner.tsx
│   └── Users.tsx
├── types/
│   └── index.ts         # Shared TypeScript types and interfaces
├── utiles/
│   └── validation.ts    # Form validation helpers
├── App.tsx              # Root component with page routing state
├── main.tsx             # App entry point
└── index.css            # Global styles and design tokens
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://oussamaalmouallim.github.io/Inventory-App-React-TS/
cd Inventory-App-React-TS

# Install dependencies
npm install

# Start development server
npm run dev
```

App runs at `http://localhost:5173`

### Demo Credentials

| Role | Email | Password |
|---|---|---|
| Admin | admin@tis.ma | admin123 |
| Technician | tech@tis.ma | tech123 |
| Sales | com@tis.ma | com123 |

---

## 🏗️ Build & Deploy

```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

Make sure `vite.config.ts` has:
```ts
export default defineConfig({
  base: '/Inventory-App-React-TS/',
  plugins: [react()],
})
```

---

## 🗺️ Roadmap

- [ ] Connect to a real backend (REST API or Supabase)
- [ ] Persistent data with a database (PostgreSQL / Firebase)
- [ ] Real QR code scanning with camera access
- [ ] Export reports to PDF / Excel
- [ ] Dark mode support
- [ ] Mobile responsive layout
- [ ] Cloud deployment (AWS / GCP / Vercel)
- [ ] CI/CD pipeline with GitHub Actions

---

## 🙋 Author

Built by **oussama al mouallim el kanouni** as a real-world digitization project for TIS.

- GitHub: https://github.com/oussamaalmouallim
- LinkedIn: https://www.linkedin.com/in/oussama-al-mouallim-el-kanouni-0064a9224/

---

## 📄 License

This project is for demonstration and portfolio purposes.