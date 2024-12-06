import { Controller, Inject, Param, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserAccessDto } from '../helpers/user.dto';

@Controller('users')
export class UsersController {

    @Inject() service: UsersService;

    @Post('access')
    handleAccess(@Param() params: UserAccessDto) {
        return this.service.handleAccess(params);
    }
}