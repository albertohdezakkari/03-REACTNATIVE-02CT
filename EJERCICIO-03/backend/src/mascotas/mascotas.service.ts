import { Injectable } from '@nestjs/common';
@Injectable()
export class MascotasService{
 private mascotas=[{id:1,nombre:'Nala'},{id:2,nombre:'Luna'},{id:3,nombre:'Rocky'}];
 findOne(id:number){return this.mascotas.find(m=>m.id===id);}
}