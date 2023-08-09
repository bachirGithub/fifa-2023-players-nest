import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PlayersModule } from './players/players.module';
import { PrismaService } from './prisma/prisma.service';


@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService],
  imports: [PrismaModule, PlayersModule],
})
export class AppModule {}
