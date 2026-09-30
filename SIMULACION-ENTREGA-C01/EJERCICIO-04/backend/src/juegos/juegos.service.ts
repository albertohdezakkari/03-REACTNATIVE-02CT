import { Injectable } from '@nestjs/common';
@Injectable()
export class JuegosService{
 private juegos=[
  {id:1,nombre:'Zelda',genero:'aventura'},
  {id:2,nombre:'Forza',genero:'carreras'},
  {id:3,nombre:'Hades',genero:'accion'},
  {id:4,nombre:'Ori',genero:'aventura'}
 ];
 findAll(genero?:string){return genero?this.juegos.filter(j=>j.genero===genero):this.juegos;}
}