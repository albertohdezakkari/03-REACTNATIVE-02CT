import { Controller, Get, Param, Patch } from '@nestjs/common';
import { CriaturasService } from './criaturas.service';

@Controller('criaturas')
export class CriaturasController {
  constructor(private readonly service: CriaturasService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(Number(id));
  }

  @Patch(':id/like')
  darLike(@Param('id') id: string) {
    return this.service.like(Number(id));
  }
}
