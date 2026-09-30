import { Module } from '@nestjs/common';
import { PizzasController } from './pizzas/pizzas.controller';
import { PizzasService } from './pizzas/pizzas.service';
@Module({controllers:[PizzasController],providers:[PizzasService]})
export class AppModule {}