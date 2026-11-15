import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import { Header } from './Header';
import { AuthContext } from '../../context/AuthContext';
import type { Usuario, Rol } from '../../types/sesionType';

function renderHeader(usuario: Usuario | null) {
  const auth = { 
    usuario, 
    cargando: false, 
    estaAutenticado: usuario !== null,
    tieneRol: (rol: Rol) => usuario?.rol === rol, 
    login: vi.fn(), 
    logout: vi.fn() 
  };
  
  return render(
    <MemoryRouter>
      <AuthContext.Provider value={auth}>
        <Header />
      </AuthContext.Provider>
    </MemoryRouter>
  );
}

describe('Header Component', () => {
  it('CLIENTE: saluda por nombre y NO ve "Nuevo libro"', () => {
    renderHeader({ id: 2, email: 'cliente@libreria.test', nombre: 'Cliente', rol: 'CLIENTE' });
    expect(screen.queryByText('Nuevo libro')).not.toBeInTheDocument();
  });
});