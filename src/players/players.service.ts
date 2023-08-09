import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PlayersService {

  constructor(private prisma: PrismaService) {
    
  }

  async create(createPlayerDto: CreatePlayerDto) {
    
    const createData = await this.prisma.player.create({
      data:{
       firstname: createPlayerDto.firstname,
       lastname:createPlayerDto.lastname,
       goal:Number(createPlayerDto.goal),
       salary:Number(createPlayerDto.salary),
       devise:createPlayerDto.devise,
       pictureURl:createPlayerDto.pictureURl
     },
     });
       
     return {
       statusCode: 200,
       data: createData,
     };
  }

  async findAll(page: number, limit: number) {
  
  }


}
