import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Video {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fileName: string;

  @Column()
  fileSize: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne((type) => User, (user) => user.videos)
  user: User;
}
