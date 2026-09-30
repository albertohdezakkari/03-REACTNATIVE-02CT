import { Module } from '@nestjs/common';
import { HeroesController } from './heroes/heroes.controller';
import { HeroesService } from './heroes/heroes.service';
@Module({controllers:[HeroesController],providers:[HeroesService]})
export class AppModule {}