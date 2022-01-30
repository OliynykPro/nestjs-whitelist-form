import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("reporter_post")
export class ReporterPostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: "" })
  name: string;

  @Column({ default: "" })
  surname: string;

  @Column({ default: "" })
  walletPublicKey: string;

  @Column({ default: "" })
  description: string;

  @Column({ default: "" })
  email: string;

  @Column({ default: "" })
  telegram: string;

  @Column({ default: "" })
  whatsapp: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;
}
