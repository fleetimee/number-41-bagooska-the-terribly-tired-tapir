export interface Debitur {
  id: string;
  nama_debitur: string;
  alamat: string;
  status: DebiturStatus;
}
export declare enum DebiturStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
