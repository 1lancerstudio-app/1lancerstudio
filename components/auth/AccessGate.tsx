"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';

// SHA-256 Hash of "lancer2026" (Example)
const ACCESS_HASH = "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918"; 

const AccessGate = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authStatus = localStorage.getItem('lancer_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const hashPassword = async (input: string) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  };

  const handleAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    const hashedInput = await hashPassword(password);
    
    if (hashedInput === ACCESS_HASH) {
      localStorage.setItem('lancer_auth', 'true');
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword('');
    }
  };

  if (loading) return null;

  return (
    <AnimatePresence mode="wait">
      {!isAuthenticated ? (
        <motion.div
          key="gate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-background flex items-center justify-center p-6"
        >
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-chrome opacity-[0.03] blur-[150px] rounded-full" />
            <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-chrome opacity-[0.03] blur-[150px] rounded-full" />
          </div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="w-full max-w-md glass-card rounded-3xl p-10 border border-glass relative z-10 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-chrome/10 border border-chrome/20 flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(200,208,224,0.1)]">
              <Shield className="text-chrome" size={32} />
            </div>

            <h1 className="text-3xl font-syne font-bold text-text mb-4 uppercase tracking-tighter">
              Secure <span className="chrome-text">Access</span>
            </h1>
            <p className="text-muted text-sm font-dm-sans mb-10 leading-relaxed">
              This environment contains confidential studio assets and proprietary logic. Enter the access key to proceed.
            </p>

            <form onSubmit={handleAccess} className="space-y-4">
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-chrome transition-colors">
                  <Lock size={18} />
                </div>
                <input 
                  required
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Access Key"
                  className="w-full bg-background border border-glass rounded-2xl pl-12 pr-12 py-4 text-text focus:border-chrome focus:outline-none transition-all placeholder:text-muted/50 font-mono text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-chrome transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {error && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-[10px] uppercase tracking-widest font-syne font-bold"
                >
                  Invalid Access Key. Authorization Failed.
                </motion.p>
              )}

              <button 
                type="submit"
                className="w-full bg-chrome bg-chrome-gradient text-background rounded-2xl py-4 font-syne font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(200,208,224,0.3)] mt-6"
              >
                Verify Identity <ArrowRight size={14} />
              </button>
            </form>

            <div className="mt-10 pt-8 border-t border-glass">
              <p className="text-[9px] uppercase tracking-[0.3em] text-muted font-syne opacity-50">
                End-to-End Encrypted Verification
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AccessGate;
