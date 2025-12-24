/* ============================================
      FICHIER: src/pages/Users.tsx
      ============================================ */

import React, { useState } from 'react';
import { Badge } from '../components/Badge';
import { Modal } from '../components/Modal';

export const Users: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const users = [
    { name: 'Ahmed Mansouri', email: 'ahmed@inventory.ma', role: 'Technicien', status: 'active' as const, lastLogin: '2025-12-21 08:15' },
    { name: 'Fatima Benali', email: 'fatima@inventory.ma', role: 'Gestionnaire Stock', status: 'active' as const, lastLogin: '2025-12-21 07:45' },
    { name: 'Admin Principal', email: 'admin@inventory.ma', role: 'Administrateur', status: 'active' as const, lastLogin: '2025-12-21 09:30' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Utilisateur ajouté! (À intégrer avec le backend)');
    setIsModalOpen(false);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-20)' }}>
        <h2>Gestion des Utilisateurs</h2>
        <button className="btn btn--primary" onClick={() => setIsModalOpen(true)}>
          + Ajouter Utilisateur
        </button>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Rôle</th>
              <th>Statut</th>
              <th>Dernière Connexion</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.email}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <Badge variant={user.status === 'active' ? 'success' : 'danger'}>
                    {user.status === 'active' ? 'Actif' : 'Inactif'}
                  </Badge>
                </td>
                <td>{user.lastLogin}</td>
                <td>
                  <button className="btn btn--sm btn--outline">Éditer</button>
                  <button className="btn btn--sm btn--outline" style={{ marginLeft: '4px' }}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        id="addUserModal"
        title="Ajouter un Utilisateur"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Nom Complet</label>
            <input type="text" className="form-control" placeholder="Ex: Jean Dupont" />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Ex: jean@inventory.ma" />
          </div>
          <div className="form-group">
            <label className="form-label">Rôle</label>
            <select className="form-control">
              <option>Technicien</option>
              <option>Gestionnaire Stock</option>
              <option>Administrateur</option>
            </select>
          </div>
          <div className="modal-actions">
            <button type="button" className="btn btn--outline" onClick={() => setIsModalOpen(false)}>
              Annuler
            </button>
            <button type="submit" className="btn btn--primary">
              Ajouter
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};