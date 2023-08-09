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
     }
     });
       
     return {
       statusCode: 201,
       data: createData,
     };
    
  }

  async findAll(page: number, limit: number) { 
    
    const skip = (page - 1) * limit;

    const [items, totalCount] = await Promise.all([
      this.prisma.player.findMany({
        skip,
        take: limit,
      }),
      this.prisma.player.count(),
    ]);
   const players = items.map( item => {
    return {
        id: item.id,
        firstname: item.firstname,
        lastname: item.lastname,
        goal: item.goal,
        salary: item.salary+' '+ item.devise,
    }
   })
   
    return {
      players,
      totalCount,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page,
      statusCode: 200,
    };
    
  }



}
