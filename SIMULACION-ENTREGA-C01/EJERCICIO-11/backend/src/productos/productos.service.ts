import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductosService {
  private productos = [{ id: 1, nombre: 'Teclado', precio: 30 }];

  findAll() {
    return this.productos;
  }

  crear(producto: { nombre: string; precio: number }) {
    const nuevo = { id: this.productos.length + 1, ...producto };
    this.productos.push(nuevo);
    return nuevo;
  }
}
