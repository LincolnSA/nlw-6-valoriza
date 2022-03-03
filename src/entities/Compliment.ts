import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Tag } from "./Tag";
import { User } from "./User";

/**
 * Entidade Compliment
 * Modelo representativo da tabela 'compliments' do banco de dados
 */

@Entity("compliments")
class Compliment {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_sender: string;

  @JoinColumn({ name: "user_sender" }) //referencia a entity User
  @ManyToOne(() => User) //tipo de ralacionamento (muitos pra um)
  userSender: User;

  @Column()
  user_receiver: string;

  @JoinColumn({ name: "user_receiver" }) //referencia a entity User
  @ManyToOne(() => User) //tipo de ralacionamento (muitos pra um)
  userReceiver: User;

  @Column()
  tag_id: string;

  @JoinColumn({ name: "tag_id" }) //referencia a entity Tag
  @ManyToOne(() => Tag) //tipo de ralacionamento (muitos pra um)
  tag: Tag;

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;

  /**
   * Deixa a responsabilidade da criacao do id para a aplicacao e
   * nao ao banco de dados
   */
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
export { Compliment };
