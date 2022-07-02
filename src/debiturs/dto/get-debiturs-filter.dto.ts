import { DebiturStatus } from '../debitur.model';

export class GetDebiturFiltersDto {
  status?: DebiturStatus;
  search?: string;
}
