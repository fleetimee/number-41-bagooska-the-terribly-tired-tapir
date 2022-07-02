import { GetDebiturFiltersDto } from './dto/get-debiturs-filter.dto';
import { CreateDebiturDto } from './dto/create-debitur.dto';
import { Injectable } from '@nestjs/common';
import { Debitur, DebiturStatus } from './debitur.model';
/* Importing the uuid function from the uuidv4 package. */
import { v4 as uuid } from 'uuid';

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
   * It returns the debitur object whose id matches the id argument
   * @param {string} id - The id of the debitur we want to find.
   * @returns The debitur object with the id that matches the id passed in.
   */
  getDebiturById(id: string) {
    return this.debiturs.find((debitur) => debitur.id === id);
  }

  getDebiturWithFilters(filterDto: GetDebiturFiltersDto): Debitur[] {
    const { status, search } = filterDto;

    // define a temporary array to store the filtered tasks
    let debiturs = this.getallDebiturs();

    // if status is defined, filter the tasks by status
    if (status) {
      debiturs = debiturs.filter((debitur) => debitur.status === status);
    }

    // if search is defined, filter the tasks by search term
    if (search) {
      debiturs = debiturs.filter((debitur) => {
        if (
          debitur.nama_debitur.includes(search) ||
          debitur.alamat.includes(search)
        ) {
          return true;
        } else {
          return false;
        }
      });
    }

    // return the filtered tasks
    return debiturs;
  }

  /**
   * It finds the index of the debitur with the given id, then removes it from the debiturs array
   * @param {string} id - The id of the debitur to be deleted.
   */
  deleteDebitur(id: string) {
    const debiturIndex = this.debiturs.findIndex(
      (debitur) => debitur.id === id,
    );
    this.debiturs.splice(debiturIndex, 1);
  }

  /**
   * It creates a new debitur and adds it to the list of debiturs
   * @param {string} nama_debitur - string,
   * @param {string} alamat - string
   * @returns The debitur object
   */
  createDebitur(createDebiturDto: CreateDebiturDto): Debitur {
    /* Destructuring the createDebiturDto object. */
    const { nama_debitur, alamat } = createDebiturDto;

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

  /**
   * It takes an id and a status, finds the task with the given id, and updates its status
   * @param {string} id - The id of the task to update.
   * @param {DebiturStatus} status - DebiturStatus
   * @returns The task object
   */
  updateDebiturStatus(id: string, status: DebiturStatus) {
    const task = this.getDebiturById(id);
    task.status = status;
    return task;
  }
}
