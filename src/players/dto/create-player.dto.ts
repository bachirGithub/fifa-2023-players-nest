import { IsNotEmpty,IsString } from "class-validator";

export class CreatePlayerDto {

    @IsNotEmpty()
    @IsString()
    firstname: string;
    lastname: string
    goal : Number
    salary: Number
    devise: string
    pictureURl: string
}
