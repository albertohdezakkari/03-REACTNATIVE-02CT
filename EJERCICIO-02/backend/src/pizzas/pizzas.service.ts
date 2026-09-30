import { Injectable } from '@nestjs/common';
@Injectable()
export class PizzasService {
 private pizzas=[
  {id:1,nombre:'Margarita',precio:9,emoji:'🍕'},
  {id:2,nombre:'Pepperoni',precio:11,emoji:'🌶️'},
  {id:3,nombre:'Cuatro quesos',precio:12,emoji:'🧀'}
 ];
 findAll(){return this.pizzas;}
}