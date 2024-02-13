import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthenticateDto } from './dto/authenticate.dto';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
import { compare } from 'bcryptjs'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepo: UsersRepository,
    private readonly jwtService: JwtService) {}

  async authenticate(autheticateDto: AuthenticateDto) {
    const { email, password } = autheticateDto;

    const user = await this.userRepo.findUnique({
      where: {email}
    });

    if(!user) {
      throw new UnauthorizedException('Invalid crendetials.');
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials.')
    }

    const accessToken = await this.jwtService.signAsync({ sub: user.id })

    return { accessToken }
  }
}
