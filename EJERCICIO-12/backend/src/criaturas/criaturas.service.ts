import { Injectable } from '@nestjs/common';

@Injectable()
export class CriaturasService {
  private criaturas = [
    { id: 1, nombre: 'Dragón', tipo: 'fuego', likes: 0 },
    { id: 2, nombre: 'Grifo', tipo: 'aire', likes: 0 },
  ];

  findAll() {
    return this.criaturas;
  }

  findOne(id: number) {
    return this.criaturas.find(c => c.id === id);
  }

  like(id: number) {
    const criatura = this.findOne(id);
    if (criatura) criatura.likes++;
    return criatura;
  }
}
