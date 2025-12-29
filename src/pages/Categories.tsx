
import React, { useState } from 'react';
import { Modal } from '../components/Modal';

export const Categories: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { name: 'Électronique', description: 'Composants électroniques divers', productCount: 25 },
    { name: 'Capteurs', description: 'Capteurs de température, humidité, etc.', productCount: 15 },
    { name: 'Contrôleurs', description: 'Microcontrôleurs et cartes de développement', productCount: 10 },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Catégorie ajoutée! (À intégrer avec le backend)');
    setIsModalOpen(false);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-20)' }}>
        <h2>Gestion des Catégories</h2>
        <button className="btn btn--primary" onClick={() => setIsModalOpen(true)}>
          + Ajouter Catégorie
        </button>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Description</th>
              <th>Produits</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat.name}>
                <td>{cat.name}</td>
                <td>{cat.description}</td>
                <td>{cat.productCount}</td>
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
        id="addCategoryModal"
        title="Ajouter une Catégorie"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Nom de la Catégorie</label>
            <input type="text" className="form-control" placeholder="Ex: Électronique" />
          </div>
          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea className="form-control" placeholder="Description de la catégorie" rows={3}></textarea>
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