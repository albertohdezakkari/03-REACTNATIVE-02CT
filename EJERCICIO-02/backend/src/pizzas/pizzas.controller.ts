import { Controller,Get } from '@nestjs/common';
import { PizzasService } from './pizzas.service';
@Controller('pizzas')
export class PizzasController{
 constructor(private readonly service:PizzasService){}
 @Get() findAll(){return this.service.findAll();}
}