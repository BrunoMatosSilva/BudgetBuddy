import { ConflictException, Injectable, UnauthorizedException, ServiceUnavailableException } from '@nestjs/common';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
import { compare, hash } from 'bcryptjs'
import { JwtService } from '@nestjs/jwt'
import { SignUpDto } from './dto/signup';
import { SigninDto } from './dto/signin';
import { env } from 'src/shared/config/env';
import { ResetDto } from './dto/reset';
import { ForgetDto } from './dto/forget';
import { MailService } from '../mail/mail.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepo: UsersRepository,
    private mailService: MailService,
    private readonly jwtService: JwtService) {}

  async signin(signinDto: SigninDto) {
    const { email, password } = signinDto;

    const user = await this.usersRepo.findUnique({
      where: {email}
    });

    if(!user) {
      throw new UnauthorizedException('Invalid crendetials.');
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials.')
    }

    const accessToken = await this.generateAccessToken(user.id)

    return { accessToken }
  }

  async signup(signupUpDto: SignUpDto) {
    const { name, email, password } = signupUpDto;

    const emailTaken = await this.usersRepo.findUnique({
      where: {email}
    })

    if(emailTaken){
      throw new ConflictException("This email is already in use.")
    }

    const hashedPassword = await hash(password, 12);

    const user = await this.usersRepo.create({
        data: {
          name,
          email,
          password: hashedPassword,
          categories: {
            createMany: {
              data: [
                  // Income
                  { name: 'Salário', icon: 'salary', type: 'INCOME' },
                  { name: 'Outro', icon: 'other', type: 'INCOME' },
                  // Expense
                  { name: 'Casa', icon: 'home', type: 'EXPENSE' },
                  { name: 'Alimentação', icon: 'food', type: 'EXPENSE' },
                  { name: 'Educação', icon: 'education', type: 'EXPENSE' },
                  { name: 'Lazer', icon: 'fun', type: 'EXPENSE' },
                  { name: 'Mercado', icon: 'grocery', type: 'EXPENSE' },
                  { name: 'Roupas', icon: 'clothes', type: 'EXPENSE' },
                  { name: 'Transporte', icon: 'transport', type: 'EXPENSE' },
                  { name: 'Viagem', icon: 'travel', type: 'EXPENSE' },
              ],
            }
          }
        },
      });

      const accessToken = await this.generateAccessToken(user.id)

      return { accessToken }
  }

  async forgetPassword(forgetPasswordDto: ForgetDto) {
    const { email } = forgetPasswordDto

    const user = await this.usersRepo.findUnique({
      where: { email },
    })

    if (!user) {
      throw new UnauthorizedException('Invalid email.')
    }

    const resetToken = await this.generateResetPasswordToken(user.id)

    try {
      await this.mailService.send({
        to: email,
        subject: 'Recuperação de senha - BudgetBuddy',
        msg: resetToken,
        isRecoverPass: true
      },)
    } catch {
      throw new ServiceUnavailableException('Error during email send.')
    }
  }

  async resetPassword(userId: string, resetPasswordDto: ResetDto) {
    const { newPassword } = resetPasswordDto

    const hashedNewPassword = await hash(newPassword, 12)

    await this.usersRepo.update({
      where: { id: userId },
      data: { password: hashedNewPassword }
    })
  }

  private generateAccessToken(userId: string) {
    return this.jwtService.signAsync({ sub: userId })
  }

  private generateResetPasswordToken(userId: string) {
    return this.jwtService.signAsync(
      { sub: userId },
      { secret: env.resetPasswordJwtSecret, expiresIn: 300 })
  }
}
