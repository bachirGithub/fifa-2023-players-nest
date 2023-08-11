import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PlayersModule } from './players/players.module';
import { PrismaService } from './prisma/prisma.service';
import { MulterModule } from '@nestjs/platform-express';


@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService],
  imports: [PrismaModule, 
            PlayersModule, 
            MulterModule.register({dest: './uploads'})],
})
export class AppModule {}
