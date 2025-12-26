
import React, { useState, useEffect } from 'react';

export const Scanner: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanMode, setScanMode] = useState<'entry' | 'exit' | null>(null);
  const [scanHistory, setScanHistory] = useState<{ sku: string; boxId: string; timestamp: string }[]>([
    { sku: 'SKU-001', boxId: 'BOX-12345', timestamp: '10:30:45' },
    { sku: 'SKU-002', boxId: 'BOX-12346', timestamp: '10:28:12' },
    { sku: 'SKU-003', boxId: 'BOX-12347', timestamp: '10:25:30' },
  ]);
  const [currentScan, setCurrentScan] = useState<{ sku: string; boxId: string; timestamp: string } | null>(null);

  const startScan = (mode: 'entry' | 'exit') => {
    setScanMode(mode);
    setIsScanning(true);
    setCurrentScan(null);
    simulateScan();
  };

  const stopScan = () => {
    setIsScanning(false);
    setScanMode(null);
  };

  const simulateScan = () => {
    if (!isScanning) return;

    const skus = ['SKU-001', 'SKU-002', 'SKU-003', 'SKU-004', 'SKU-005'];
    const boxes = ['BOX-12345', 'BOX-12346', 'BOX-12347', 'BOX-12348', 'BOX-12349'];

    const randomSku = skus[Math.floor(Math.random() * skus.length)];
    const randomBox = boxes[Math.floor(Math.random() * boxes.length)];
    const now = new Date();
    const timestamp = now.toLocaleTimeString('fr-FR');

    const scan = { sku: randomSku, boxId: randomBox, timestamp };
    setCurrentScan(scan);
    setScanHistory((prev) => [scan, ...prev.slice(0, 4)]);

    setTimeout(simulateScan, 4000);
  };

  return (
    <div className="scanner-container">
      <h2 style={{ marginBottom: 'var(--space-20)' }}>Scanner QR</h2>

      <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-card-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-20)', marginBottom: 'var(--space-20)' }}>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-16)' }}>Sélectionnez le mode de scan :</p>
        <div style={{ display: 'flex', gap: 'var(--space-12)' }}>
          <button className="btn btn--primary" onClick={() => startScan('entry')}>
            📥 Entrée Stock
          </button>
          <button className="btn btn--primary" onClick={() => startScan('exit')}>
            📤 Sortie Projet
          </button>
          <button className="btn btn--outline" onClick={stopScan}>
            ⏹️ Arrêter Scan
          </button>
        </div>
      </div>

      {isScanning && (
        <>
          <h3 style={{ marginBottom: 'var(--space-16)' }}>Résultats du Scan</h3>
          <div className="scanner-result">
            <div className="scanner-result-label">Mode:</div>
            <div className="scanner-result-value">{scanMode === 'entry' ? 'Entrée Stock' : 'Sortie Projet'}</div>
          </div>
          <div className="scanner-result" style={{ marginTop: 'var(--space-12)' }}>
            <div className="scanner-result-label">Contenu QR:</div>
            <div className="scanner-result-value">
              {currentScan ? `${currentScan.sku}|${currentScan.boxId}` : 'En attente de scan...'}
            </div>
          </div>
          <div className="scanner-result" style={{ marginTop: 'var(--space-12)' }}>
            <div className="scanner-result-label">Timestamp:</div>
            <div className="scanner-result-value">{currentScan?.timestamp || '--:--:--'}</div>
          </div>
          <div className="scanner-result" style={{ marginTop: 'var(--space-12)' }}>
            <div className="scanner-result-label">Derniers Scans:</div>
            <div id="scan-history" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text)', marginTop: 'var(--space-8)' }}>
              {scanHistory.map((scan, idx) => (
                <div key={idx} style={{ padding: '8px', background: 'var(--color-secondary)', borderRadius: '4px', marginBottom: '4px' }}>
                  {scan.sku} | {scan.boxId} | {scan.timestamp}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {!isScanning && (
        <div style={{ textAlign: 'center', padding: 'var(--space-32)', color: 'var(--color-text-secondary)' }}>
          <p>⚠️ Scanner désactivé. Cliquez sur un bouton mode pour démarrer.</p>
        </div>
      )}
    </div>
  );
};
