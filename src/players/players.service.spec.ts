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
        pictureURl: ""
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
          pictureURl:""
        }
      });
    });
  });

  //first test for creating a player
  describe('playersList', () => {
    it('should return all the players from the DB', async () => {
      const playersList = await service.findAll(1,6);
      expect(playersList[0].firstname).toBe('Andreas');
    });
  });

});
