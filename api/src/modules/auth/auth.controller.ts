import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup';
import { IsPublic } from 'src/shared/decorators/IsPublic';
import { SigninDto } from './dto/signin';

@IsPublic()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signin(@Body() signinDto: SigninDto) {
    return this.authService.signin(signinDto)
  }

  @Post('signup')
  signup(@Body() signupDto: SignUpDto) {
    return this.authService.signup(signupDto);
  }
}
