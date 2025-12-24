import { useState, useCallback } from 'react';
import { Toast } from '../types';

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((
    type: 'success' | 'error' | 'warning' | 'info',
    title: string,
    message: string
  ) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, type, title, message }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const success = useCallback(
    (title: string, message: string) => addToast('success', title, message),
    [addToast]
  );

  const error = useCallback(
    (title: string, message: string) => addToast('error', title, message),
    [addToast]
  );

  const warning = useCallback(
    (title: string, message: string) => addToast('warning', title, message),
    [addToast]
  );

  return { toasts, removeToast, success, error, warning };
};