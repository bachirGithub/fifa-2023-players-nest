import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePlayerDto } from './create-player.dto';
import { IsNotEmpty,IsString,IsOptional,IsNumber } from "class-validator";


export class UpdatePlayerDto extends PartialType(CreatePlayerDto) {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    firstname: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    lastname: string
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    goal : Number
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    salary: Number
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    devise: string
    @ApiProperty()
    pictureURl: string
}
