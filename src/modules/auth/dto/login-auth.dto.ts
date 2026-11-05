import{IsEmail, IsNotEmpty,MaxLength, MinLength} from "class-validator";
import { user } from "../interfaces/user.interfaces.js";

export class LoginAuthDto implements user{
    @IsEmail()
    @IsNotEmpty()
    email:string;
    @MinLength(6)
    @MaxLength(25)
    @IsNotEmpty()
    password:string;
}
