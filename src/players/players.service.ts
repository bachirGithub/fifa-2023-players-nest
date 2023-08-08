import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
// import { PrismaService } from 'src/prisma/prisma.service';
// import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlayersService {

    // constructor(private prisma: PrismaService) {
    
    // }

    async create(createPlayerDto: CreatePlayerDto) {

        // const createData = await this.prisma.player.create({
        //     data:{
        //      firstname: createPlayerDto.firstname,
        //      lastname:createPlayerDto.lastname,
        //      goal:Number(createPlayerDto.goal),
        //      salary:Number(createPlayerDto.salary),
        //      devise:createPlayerDto.devise,
        //      pictureURl:createPlayerDto.pictureURl
        //    },
        //    });
             
           return {
             statusCode: 200,
             data: { 
                id: 1,
                firstname: "Soufiane",
                lastname: "Amrabat",
                goal:12,
                salary:2000,
                devise:"MAD",
                pictureURl:"https://upload.wikimedia.org/wikipedia/commons/e/e1/Hakim_Ziyech_2021.jpg"
              },
           };
    
    }
  
}
