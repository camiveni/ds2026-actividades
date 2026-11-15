export interface Autor {
  id: number;
  nombre: string;
  nacionalidad: string;
}

export interface LibroCardProps {
  id: number;
  titulo: string;
  autor: Autor;
  imagen: string;
  precio?: number;
  disponible?: boolean;
  autorId?: number;
}