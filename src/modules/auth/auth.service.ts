import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto.js';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor (private JwtService:JwtService){}
    login(credenciales :LoginAuthDto){
        let payload ={email:"admin@gmail.com", id:1}
        const token= this. JwtService.sign(payload)
        return{token:token};

    }
}
