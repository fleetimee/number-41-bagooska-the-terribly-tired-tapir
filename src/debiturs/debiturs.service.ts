import { Injectable } from '@nestjs/common';
import { Debitur, DebiturStatus } from './debitur.model';
/* Importing the uuid function from the uuidv4 package. */
import { uuid } from 'uuidv4';

@Injectable()
export class DebitursService {
  /* Declaring a private variable called debiturs and initializing it to an empty array. */
  private debiturs: Debitur[] = [];

  /**
   * It returns an array of Debitur objects
   * @returns An array of Debitur objects.
   */
  getallDebiturs(): Debitur[] {
    return this.debiturs;
  }

  /**
   * It creates a new debitur and adds it to the list of debiturs
   * @param {string} nama_debitur - string,
   * @param {string} alamat - string
   * @returns The debitur object
   */
  createDebitur(nama_debitur: string, alamat: string): Debitur {
    /* Creating a new debitur object and assigning it to the debitur variable. */
    const debitur: Debitur = {
      id: uuid(),
      nama_debitur,
      alamat,
      status: DebiturStatus.OPEN,
    };

    /* Adding the new debitur to the debiturs array. */
    this.debiturs.push(debitur);

    /* Returning the debitur object. */
    return debitur;
  }
}
