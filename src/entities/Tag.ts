import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { Expose } from "class-transformer";

/**
 * Entidade Tag
 * Modelo representativo da tabela 'tags' do banco de dados
 */

@Entity("tags")
class Tag {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  /**
   * Quando for expor essa entidade para a aplicacao
   * adicionar um novo campo que nao esta no banco de dados e sim somente na aplicacao
   */
  @Expose({ name: "name_custom" })
  nameCustom(): string {
    return `#${this.name}`;
  }

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

export { Tag };
