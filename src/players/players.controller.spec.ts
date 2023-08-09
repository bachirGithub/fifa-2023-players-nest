import { Test, TestingModule } from '@nestjs/testing';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';

describe('PlayersController', () => {
  let controller: PlayersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayersController],
      providers: [PlayersService],
    }).compile();

    controller = module.get<PlayersController>(PlayersController);
  });

  it('should get all players', async() => {
    const response = await controller.findAll();

    // Andres is the first in the list
    expect(response[0].firstname).toEqual('Andres');
  });

});
