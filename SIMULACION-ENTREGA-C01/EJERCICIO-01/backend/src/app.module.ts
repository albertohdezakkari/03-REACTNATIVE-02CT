import { Module } from '@nestjs/common';
import { HolaController } from './hola/hola.controller';
@Module({ controllers:[HolaController] })
export class AppModule {}