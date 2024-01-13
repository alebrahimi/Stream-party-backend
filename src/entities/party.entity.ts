import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Message } from './message.entity';

@Entity()
export class Party {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne((type) => Message, (message) => message.party)
  messages: Message;
}
