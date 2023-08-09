import { Test, TestingModule } from '@nestjs/testing';
import { PlayersService } from './players.service';

describe('PlayersService', () => {
  let service: PlayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayersService],
    }).compile();

    service = module.get<PlayersService>(PlayersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

   //first test for creating a player
   describe('createPlayer', () => {
    it('should return a new player with the given information and the satus', async () => {
      const newPlayer = await service.create({ 
        firstname: "Soufiane",
        lastname: "Amrabat",
        goal:12,
        salary:2000,
        devise:"MAD",
        pictureURl:"https://upload.wikimedia.org/wikipedia/commons/e/e1/Hakim_Ziyech_2021.jpg"
      });
      expect(newPlayer).toEqual({
        statusCode: 200,
        data: {
          id: expect.any(Number),
          firstname: "Soufiane",
          lastname: "Amrabat",
          goal:12,
          salary:2000,
          devise:"MAD",
          pictureURl:"https://upload.wikimedia.org/wikipedia/commons/e/e1/Hakim_Ziyech_2021.jpg",
          createdAt: expect.any(Date),
          updatedAt: expect.any(Date)
        }
      });
    });
  });

  ///findAll with pagination
  describe('pagination on findAll', () => {
    it('should return return all players with pagination', async () => {
      const response = await service.findAll(1,6);
      expect(response[0].lastname).toEqual('Iniesta');
    });
  });

});
