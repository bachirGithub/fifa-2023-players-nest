import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayersService {



  create(createPlayerDto: CreatePlayerDto) {
    return {
      statusCode: 200,
      data: {
        id: expect.any(Number),
        firstname: "Soufiane",
        lastname: "Amrabat",
        goal:12,
        salary:2000,
        devise:"MAD",
        pictureURl:"https://upload.wikimedia.org/wikipedia/commons/e/e1/Hakim_Ziyech_2021.jpg"
      }
    }
    
  }


}
