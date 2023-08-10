import { Test, TestingModule } from '@nestjs/testing';
import { PlayersService } from './players.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClient } from '@prisma/client';

describe('PlayersService', () => {
  let service: PlayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayersService,PrismaService],
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
      expect(newPlayer.statusCode).toEqual(201);
    });
  });

  //test for listing players
  describe('playersList', () => {
    it('should return all the players from the DB', async () => {
      const playersList = await service.findAll(1,6);
      expect(playersList.players[0].firstname).toBe('Andres');
    });
  });

  //test for update a player
  describe('updatingPlayer', () => {
    it('should return a confirmation message', async () => {
      const newPlayer = await service.update(7,{ 
        firstname: "Soufiane",
        lastname: "Amrabat",
        goal:12,
        salary:2000,
        devise:"MAD",
        pictureURl: ""
      });
      expect(newPlayer.message).toEqual("Informations sauvegardée avec succès");
    });
  });

   //test for suppression a player
   describe('supprimerPlayer', () => {
    it('should return a confirmation message', async () => {
      const removePlayer = await service.remove(30);
      expect(removePlayer.message).toEqual("Joueur supprimé avec succès");
    });
  });

});
