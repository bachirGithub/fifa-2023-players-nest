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

  it('should be defined now', () => {
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
        pictureURl: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Hakim_Ziyech_2021.jpg"
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
          pictureURl: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Hakim_Ziyech_2021.jpg"
        }
      });
    });
  });

});