import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { VideoService } from './video.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from './multer.config';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', multerConfig))
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<string> {
    return this.videoService.handleFileUpload(file);
  }
}
