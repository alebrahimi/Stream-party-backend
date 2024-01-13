import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Party } from './party.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne((type) => User, (user) => user.videos)
  user: User;

  @ManyToOne((type) => Party, (party) => party.messages)
  party: Party;
}
