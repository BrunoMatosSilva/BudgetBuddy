import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class ResetDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  newPassword: string
}
