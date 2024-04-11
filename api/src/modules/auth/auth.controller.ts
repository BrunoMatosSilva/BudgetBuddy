import { Body, Controller, HttpCode, HttpStatus, Post, Put } from '@nestjs/common'
import { AuthService } from './auth.service'
import { IsPublic } from 'src/shared/decorators/IsPublic'
import { ActiveUserId } from 'src/shared/decorators/ActiveUserId'
import { isResetPassword } from 'src/shared/decorators/IsResetPassword'
import { SigninDto } from './dto/signin'
import { SignUpDto } from './dto/signup'
import { ForgetDto } from './dto/forget'
import { ResetDto } from './dto/reset'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @Post('signin')
  signin(@Body() signinDto: SigninDto) {
    const { email, password } = signinDto
    return this.authService.signin({ email, password })
  }

  @IsPublic()
  @Post('signup')
  signup(@Body() signupDto: SignUpDto) {
    return this.authService.signup(signupDto)
  }

  @IsPublic()
  @HttpCode(HttpStatus.NO_CONTENT)
  @Post('forget-password')
  forgetPassword(@Body() forgetPassword: ForgetDto) {
    return this.authService.forgetPassword(forgetPassword)
  }

  @isResetPassword()
  @HttpCode(HttpStatus.NO_CONTENT)
  @Put('reset-password')
  resetPassword(@ActiveUserId() userId: string, @Body() resetPasswordDto: ResetDto) {
    return this.authService.resetPassword(userId, resetPasswordDto)
  }
}
