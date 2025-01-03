import { Body, Controller, HttpStatus, Inject, Param, Post, Res } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserAccessDto } from '../helpers/user.dto';
import { MessagePattern } from '@nestjs/microservices';
import { Response } from 'express';

@Controller('users')
export class UsersController {

    @Inject() service: UsersService;

    @Post('access')
    async handleAccess(@Body() params: UserAccessDto, @Res() res: Response) {
        const data = await this.service.handleAccess(params);
        return res.status(HttpStatus.OK).send(data);
    }

    @MessagePattern('USER_ACCESS_CHAT') 
    async access(data) {
        
        console.log('USER_ACCESS_CHAT usercotrollers...');
    }

    /* @MessagePattern(CHAT_USER_CHECK_EXISTS)
    chatExists() {
        console.log('chat exists');
    } */
}
