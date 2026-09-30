import { Module } from '@nestjs/common';
import { MascotasController } from './mascotas/mascotas.controller';
import { MascotasService } from './mascotas/mascotas.service';
@Module({controllers:[MascotasController],providers:[MascotasService]})
export class AppModule {}