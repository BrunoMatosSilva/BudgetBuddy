import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class ForgetDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string
}
