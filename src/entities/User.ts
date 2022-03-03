import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Exclude } from "class-transformer";

/**
 * Entidade User
 * Modelo representativo da tabela 'users' do banco de dados
 */

@Entity("users")
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  /**
   * Removendo o password para retorno
   */
  @Exclude()
  @Column()
  password: string;

  @Column()
  admin: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

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

export { User };
