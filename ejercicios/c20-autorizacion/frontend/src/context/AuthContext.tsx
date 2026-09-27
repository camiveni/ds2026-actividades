import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Usuario, Credenciales, Rol } from '../types/sesionType';
import { apiFetch } from '../services/api';
import { obtenerToken, guardarToken, borrarToken } from '../services/sesion';

interface AuthContextType {
  usuario: Usuario | null;
  cargando: boolean;
  estaAutenticado: boolean;
  tieneRol: (rol: Rol) => boolean;
  login: (credenciales: Credenciales) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [cargando, setCargando] = useState<boolean>(obtenerToken() !== null);

  const logout = () => {
    borrarToken();
    setUsuario(null);
  };

  useEffect(() => {
    if (!obtenerToken()) return;

    apiFetch<Usuario>('/auth/yo')
      .then(setUsuario)
      .catch(() => borrarToken())
      .finally(() => setCargando(false));
  }, []);

  // Evento global para cierre de sesión ante 401 con token (Paso 5)
  useEffect(() => {
    window.addEventListener('sesion-expirada', logout);
    return () => window.removeEventListener('sesion-expirada', logout);
  }, []);

  const login = async (credenciales: Credenciales) => {
    const data = await apiFetch<{ token: string; usuario: Usuario }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credenciales),
    });
    guardarToken(data.token);
    setUsuario(data.usuario);
  };

  const estaAutenticado = usuario !== null;
  const tieneRol = (rol: Rol) => usuario?.rol === rol;

  return (
    <AuthContext.Provider
      value={{ usuario, cargando, estaAutenticado, tieneRol, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
}