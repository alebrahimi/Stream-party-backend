import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Video } from '../entities/video.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VideoService {
  constructor() {}

  findUserVideos(userId: string) {
    return ['Vid 1', 'vid 2'];
  }

  handleFileUpload(file: Express.Multer.File): string {
    // this.videoRepo.create({
    //   fileName: file.originalname,
    //   fileSize: file.size,
    // });
    return `File ${file.originalname} uploaded successfully.`;
  }
}
