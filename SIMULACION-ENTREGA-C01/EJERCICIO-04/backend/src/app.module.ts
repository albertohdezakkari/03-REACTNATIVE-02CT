import { Module } from '@nestjs/common';
import { JuegosController } from './juegos/juegos.controller';
import { JuegosService } from './juegos/juegos.service';
@Module({controllers:[JuegosController],providers:[JuegosService]})
export class AppModule {}