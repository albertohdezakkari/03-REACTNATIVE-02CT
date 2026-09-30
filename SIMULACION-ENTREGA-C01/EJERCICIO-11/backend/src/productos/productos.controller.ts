import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private readonly service: ProductosService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  crear(@Body() producto: { nombre: string; precio: number }) {
    return this.service.crear(producto);
  }
}
