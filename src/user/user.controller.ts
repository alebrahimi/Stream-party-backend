import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';

import { VideoService } from 'src/video/video.service';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly videoService: VideoService,
  ) {}

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @UseGuards(JwtGuard)
  @Get(':id/comments')
  getUserComment(@Param('id') id: string) {
    return this.videoService.findUserVideos(id);
  }
}
