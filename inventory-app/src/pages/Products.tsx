
import React, { useState } from 'react';
import { Badge } from '../components/Badge';
import { Modal } from '../components/Modal';

export const Products: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    { sku: 'SKU-001', name: 'Module LED RGB', category: 'Électronique', stock: 45, price: '12.50 MAD' },
    { sku: 'SKU-002', name: 'Capteur DHT22', category: 'Capteurs', stock: 30, price: '8.75 MAD' },
    { sku: 'SKU-003', name: 'Arduino Nano', category: 'Contrôleurs', stock: 15, price: '25.00 MAD' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Produit ajouté! (À intégrer avec le backend)');
    setIsModalOpen(false);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-20)' }}>
        <h2>Gestion des Produits</h2>
        <button className="btn btn--primary" onClick={() => setIsModalOpen(true)}>
          + Ajouter Produit
        </button>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>SKU</th>
              <th>Nom</th>
              <th>Catégorie</th>
              <th>Stock</th>
              <th>Prix</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.sku}>
                <td>{product.sku}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.stock}</td>
                <td>{product.price}</td>
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
        id="addProductModal"
        title="Ajouter un Produit"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">SKU</label>
            <input type="text" className="form-control" placeholder="Ex: SKU-004" />
          </div>
          <div className="form-group">
            <label className="form-label">Nom du Produit</label>
            <input type="text" className="form-control" placeholder="Ex: Module LED RGB" />
          </div>
          <div className="form-group">
            <label className="form-label">Catégorie</label>
            <select className="form-control">
              <option>Électronique</option>
              <option>Capteurs</option>
              <option>Contrôleurs</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Prix</label>
            <input type="number" className="form-control" placeholder="Ex: 25.50" step="0.01" />
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