import { nanoid } from 'nanoid';
import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Pengajuan {
  // generate primary key from custom function
  @PrimaryColumn()
  id: string;

  @Column()
  status: string;

  @Column('date')
  tgl_submit: Date;

  @Column('date')
  tgl_review: Date;

  @BeforeInsert()
  beforeInsert() {
    this.id = customOutput();
  }
}

function customOutput() {
  // Prefix with 'P-' and generate 8 random characters
  return 'P-' + nanoid(4) + '-' + formatDate();
}

// format Date.now() to YYYY-MM-DD
function formatDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}${month}${day}`;
}
