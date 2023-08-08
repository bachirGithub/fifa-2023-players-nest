import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PlayersModule } from './players/players.module';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PrismaModule, PlayersModule],
})
export class AppModule {}
