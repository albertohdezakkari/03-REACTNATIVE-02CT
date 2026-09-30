import { Controller,Get } from '@nestjs/common';
@Controller('mensaje') export class MensajeController{@Get() get(){return {texto:'Conectado con NestJS'};}}