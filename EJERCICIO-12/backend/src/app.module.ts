import { Module } from '@nestjs/common';
import { CriaturasController } from './criaturas/criaturas.controller';
import { CriaturasService } from './criaturas/criaturas.service';
@Module({controllers:[CriaturasController],providers:[CriaturasService]})
export class AppModule {}