import { Module } from '@nestjs/common';
import { MensajeController } from './mensaje/mensaje.controller';
@Module({controllers:[MensajeController],providers:[]})
export class AppModule {}