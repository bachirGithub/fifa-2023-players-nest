import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
// import {getStorage, ref, getDownloadURL, uploadBytesResumable} from 'firebase/storage'
// import { initializeApp } from "firebase/app";
// import config from '../config/firebase-config';
// import multer from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiProperty } from '@nestjs/swagger';
import { extname } from 'path';
import { diskStorage } from 'multer';

@Controller('players')
export class PlayersController {
  
  constructor(private readonly playersService: PlayersService) {


  }

  @Post()
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playersService.create(createPlayerDto);
  }

  @Get()
  async findAll(@Query('page') page = 1, @Query('limit') limit = 10) {
    return await this.playersService.findAll(page,limit);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playersService.update(+id, updatePlayerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playersService.remove(+id);
  }

  @ApiProperty()
  @Post('upload-image')
  @UseInterceptors(FileInterceptor('image',{
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, callback) => {
        const uniqueSuffix =
          Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        const filename = `${uniqueSuffix}${ext}`;
        callback(null, filename);
      },
    }),
  }))
  async uploadImage(@UploadedFile() file) {
      return {
          message: 'Photo sauvegardée avec succès'
      }


    
  }

}
