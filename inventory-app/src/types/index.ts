export type PageType = 'dashboard' | 'products' | 'categories' | 'orders' | 'history' | 'users' | 'scanner' | 'calendar';


export interface Product {
  sku: string;
  name: string;
  category: string;
  stock: number;
  price: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  productCount: number;
}

export interface Order {
  id: string;
  name: string;
  client: string;
  status: 'validated' | 'standby' | 'pending';
  date: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'technician' | 'stock-manager' | 'admin';
  status: 'active' | 'inactive';
  lastLogin: string;
}

export interface Movement {
  id: string;
  type: 'entry' | 'exit' | 'reservation';
  boxId: string;
  product: string;
  destination: string;
  timestamp: string;
  technician: string;
}

export interface ScanData {
  sku: string;
  boxId: string;
  timestamp: string;
}

export interface Toast {
  id: string;
  message: string;
  title?: string;  // ← Ajoute cette ligne si elle n'existe pas
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}


export interface FormErrors {
  [key: string]: string;
}