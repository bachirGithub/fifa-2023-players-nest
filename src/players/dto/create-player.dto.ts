import { IsNotEmpty,IsString,IsOptional } from "class-validator";

export class CreatePlayerDto {

    @IsNotEmpty()
    @IsString()
    firstname: string;
    lastname: string
    goal : Number
    salary: Number
    devise: string
    @IsOptional()
    pictureURl: string
}
