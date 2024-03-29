import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNumber, IsNumberString, IsString } from 'class-validator';

export class UploadVideoDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class UpdateUserDto extends PartialType(UploadVideoDto) {}
