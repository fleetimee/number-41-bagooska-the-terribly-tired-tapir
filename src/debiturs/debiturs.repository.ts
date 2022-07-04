import { GetDebiturFiltersDto } from './dto/get-debiturs-filter.dto';
import { CreateDebiturDto } from './dto/create-debitur.dto';
import { Debitur } from './debitur.entity';
import { EntityRepository, Repository } from 'typeorm';
import { DebiturStatus } from './debitur-status.enum';

@EntityRepository(Debitur)
export class DebitursRepository extends Repository<Debitur> {
  async getDebiturs(debiturDto: GetDebiturFiltersDto): Promise<Debitur[]> {
    /* Destructuring the debiturDto object. */
    const { status, search, nik } = debiturDto;

    /* Creating a query builder object. */
    const query = this.createQueryBuilder('debitur');

    /* Checking if the status is defined. If it is defined, it will add a where clause to the query. */
    if (status) {
      /* Adding a where clause to the query. */
      query.andWhere('debitur.status = :status', { status });
    }

    /* Checking if the search is defined. If it is defined, it will add a where clause to the query. */
    if (search) {
      /* Adding a where clause to the query. */
      query.andWhere(
        '(debitur.nama_debitur ILIKE :search OR debitur.alamat ILIKE :search OR debitur.no_telp ILIKE :search OR debitur.no_seluler ILIKE :search OR debitur.email ILIKE :search)',
        { search: `%${search}%` },
      );
    }

    if (nik) {
      query.andWhere('debitur.nik = :nik', { nik });
    }

    /* Getting all the debiturs from the database. */
    const debiturs = await query.getMany();

    /* Returning the debiturs array. */
    return debiturs;
  }

  async createDebitur(createDebiturDto: CreateDebiturDto): Promise<Debitur> {
    // Destructuring the createDebiturDto
    const {
      nik,
      nama_debitur,
      alamat,
      tempat_lahir,
      tanggal_lahir,
      pekerjaan,
      instansi,
      agama,
      gender,
      no_telp,
      no_seluler,
      email,
      nama_ibu,
      relationship,
      nama_pasangan,
      pekerjaan_pasangan,
      tgl_lahir_pasangan,
      nik_pasangan,
      total_income,
      bidang_usaha,
      jumlah_tanggungan,
      provinsi,
      kabupaten,
      kelurahan,
      kecamatan,
      rt,
      rw,
      kode_pos,
    } = createDebiturDto;

    /* Creating a new debitur object. */
    const debitur = this.create({
      nik,
      nama_debitur,
      alamat,
      tempat_lahir,
      tanggal_lahir,
      pekerjaan,
      instansi,
      agama,
      gender,
      no_telp,
      no_seluler,
      email,
      nama_ibu,
      relationship,
      nama_pasangan,
      pekerjaan_pasangan,
      tgl_lahir_pasangan,
      nik_pasangan,
      total_income,
      bidang_usaha,
      jumlah_tanggungan,
      provinsi,
      kabupaten,
      kelurahan,
      kecamatan,
      rt,
      rw,
      kode_pos,
      status: DebiturStatus.OPEN,
    });

    /* Saving the debitur to the database. */
    await this.save(debitur);

    /* Returning the debitur object that we just created. */
    return debitur;
  }
}
