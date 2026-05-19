import { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ToastContext = createContext(null);

const typeStyles = {
  success: { border: 'border-gold/30', bg: 'bg-gold/5', text: 'text-gold', icon: '✓' },
  error: { border: 'border-red-500/30', bg: 'bg-red-500/5', text: 'text-red-400', icon: '✕' },
  info: { border: 'border-blue-500/30', bg: 'bg-blue-500/5', text: 'text-blue-400', icon: 'ℹ' },
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info', duration = 4000) => {
    const id = `toast_${Date.now()}`;
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed top-24 right-6 z-[100] flex flex-col gap-3 max-w-sm w-full pointer-events-none">
        <AnimatePresence>
          {toasts.map(toast => {
            const style = typeStyles[toast.type] || typeStyles.info;
            return (
              <motion.div
                key={toast.id}
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 40, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`pointer-events-auto luxury-card rounded-lg p-4 border ${style.border} ${style.bg}`}
              >
                <div className="flex items-start gap-3">
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full ${style.bg} ${style.text} flex items-center justify-center text-sm font-bold border ${style.border}`}>
                    {style.icon}
                  </span>
                  <p className={`text-sm font-light ${style.text} flex-1`}>{toast.message}</p>
                  <button
                    onClick={() => removeToast(toast.id)}
                    className="flex-shrink-0 text-text-muted hover:text-text-primary transition-colors text-xs"
                  >
                    &times;
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
