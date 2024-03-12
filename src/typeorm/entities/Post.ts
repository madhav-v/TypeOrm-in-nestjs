import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity({ name: 'user_posts' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: String;

  @Column()
  description: String;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
