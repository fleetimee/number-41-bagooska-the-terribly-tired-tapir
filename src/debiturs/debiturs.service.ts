import { GetDebiturFiltersDto } from './dto/get-debiturs-filter.dto';
import { DebiturStatus } from './debitur-status.enum';
import { Debitur } from './debitur.entity';
import { DebitursRepository } from './debiturs.repository';
import { CreateDebiturDto } from './dto/create-debitur.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DebitursService {
  constructor(
    @InjectRepository(DebitursRepository)
    private debiturRepository: DebitursRepository,
  ) {}

  getDebiturs(filterDebitur: GetDebiturFiltersDto): Promise<Debitur[]> {
    return this.debiturRepository.getDebiturs(filterDebitur);
  }

  createDebitur(createDebiturDto: CreateDebiturDto): Promise<Debitur> {
    /* Calling the createDebitur method in the debiturRepository. */
    return this.debiturRepository.createDebitur(createDebiturDto);
  }

  async getDebiturById(id: string): Promise<Debitur> {
    /* Finding the debitur by id. */
    const found = await this.debiturRepository.findOne(id);

    /* Throwing an error if the debitur is not found. */
    if (!found) {
      throw new NotFoundException(`Debitur with id ${id} not found`);
    }

    /* Returning the debitur object that we just created. */
    return found;
  }

  async deleteDebitur(id: string): Promise<void> {
    /* Deleting the debitur by id. */
    const result = await this.debiturRepository.delete(id);

    /* Checking if the result of the delete operation is 0. If it is, it means that the debitur with the id
    that we are trying to delete is not found. */
    if (result.affected === 0) {
      throw new NotFoundException(`Debitur with id ${id} not found`);
    }
  }

  async updateDebiturStatus(
    id: string,
    status: DebiturStatus,
  ): Promise<Debitur> {
    /* Getting the debitur by id. */
    const debitur = await this.getDebiturById(id);

    /* Updating the status of the debitur. */
    debitur.status = status;

    /* Saving the debitur object to the database. */
    await this.debiturRepository.save(debitur);

    /* Returning the debitur object that we just created. */
    return debitur;
  }
}
