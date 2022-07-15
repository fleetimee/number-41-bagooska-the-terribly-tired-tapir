# Brynhildr
<p align="center">
<a href="https://user-images.githubusercontent.com/45744788/178934617-15da5f5c-89cf-4fb1-8878-60e3dc99d4b3.png" target="blank"><img src="https://www.seekpng.com/png/full/8-82747_clipart-royalty-free-download-bonfire-clipart-watercolor-dark.png"  width="300" alt="Logo" /></a>
</p>

<p align="center">Brynhildr merupakan backend aplikasi AKM yang dibuat menggunakan Express dan PostgreSQL</p>
<p align="center">
<a href="#" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="#" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>


## Prerequisite
- Node 16.16.0 or higher
- PostgreSQL 10+


## Usage
```
git clone https://github.com/fleetimee/solaire-demon.git

cd brynhildr

make database in postgresql

Edit src/app.module for postgres configuration

yarn start:dev
```
## Entity Relation Diagram
![webservice - public](https://user-images.githubusercontent.com/45744788/178937450-48649997-0f66-414f-99ef-fe662f787f56.png)

<p align="center" >Click gambar untuk lebih jelas</p>

## Alur jalannya API
Buat **User** berikut dengan **Rolenya**.

`localhost:3000/users`
<details>
  <summary>Users response</summary>

```
Request :
{
    "username": "fleetime",
    "password": "1234567890",
    "roles": [{
        "name": "Admin"
    }]
}
```
```
Response : 
{
  "id": 3,
  "username": "fleetime",
  "createdAt": "2022-07-14T08:50:45.512Z",
  "roles": [
    {
      "id": 6,
      "name": "Admin"
    }
  ],
  "createdBy": null,
  "updatedBy": null
}
```
</details>

Buat **Debitur** dengan menyertakan ***createdById***, disini **no_debitur** akan otomatis ter-generate oleh sistem.

`localhost:3000/debiturs`
<details>
<summary>Debiturs response</summary>

```
Request : 
{
    "nik": "500000",
    "nama_debitur": "Sonia Eka P",
    "alamat": "Jln Affandi No 20",
    "tempat_lahir": "Yogyakarta",
    "tanggal_lahir": "1994-11-09",
    "pekerjaan": "Customer Service",
    "agama": "Islam",
    "gender": "Perempuan",
    "no_telp": "084545245454",
    "no_seluler": "0828783232",
    "instansi": "Swasta",
    "email": "soniaekap2@gmail.com",
    "nama_ibu": "Dunno",
    "relationship": "Menikah",
    "nama_pasangan": "Novian Andika",
    "pekerjaan_pasangan": "Software Developer",
    "tgl_lahir_pasangan": "1997-09-04",
    "tempat_lahir_pasangan": "Jakarta",
    "nik_pasangan": 54545454,
    "total_income": "9999999999",
    "bidang_usaha": "Jasa Pengiriman",
    "jumlah_tanggungan": "0",
    "provinsi": "Daerah Istimewa Yogyakarta",
    "kabupaten": "Sleman",
    "kecamatan": "Depok",
    "kelurahan": "Condongcatur",
    "rt": "01",
    "rw": "05",
    "kode_pos": "14045",
    "createdBy": 3
}
```

```
Response : 
[
  {
    "id": 5,
    "no_debitur": "c7a613bb-cd08-4ec4-844b-d5b6117ce4ce",
    "nik": "500000",
    "nama_debitur": "Sonia Eka P",
    "alamat": "Jln Affandi No 20",
    "tempat_lahir": "Yogyakarta",
    "tanggal_lahir": "1994-11-09",
    "pekerjaan": "Customer Service",
    "instansi": "Swasta",
    "agama": "Islam",
    "gender": "Perempuan",
    "no_telp": "084545245454",
    "no_seluler": "0828783232",
    "email": "soniaekap2@gmail.com",
    "nama_ibu": "Dunno",
    "relationship": "Menikah",
    "nama_pasangan": "Novian Andika",
    "pekerjaan_pasangan": "Software Developer",
    "tgl_lahir_pasangan": "1997-09-04",
    "tempat_lahir_pasangan": "Jakarta",
    "nik_pasangan": 54545454,
    "total_income": "9999999999",
    "bidang_usaha": "Jasa Pengiriman",
    "jumlah_tanggungan": 0,
    "provinsi": "Daerah Istimewa Yogyakarta",
    "kabupaten": "Sleman",
    "kecamatan": "Depok",
    "kelurahan": "Condongcatur",
    "rt": 1,
    "rw": 5,
    "kode_pos": 14045,
    "nonfixed": [],
    "fixed": [],
    "createdBy": {
      "id": 3,
      "username": "fleetime",
      "password": "$2b$10$UPO7pzponNYGMELi/kXAI.miIY3qVcBeDpJR1k6VNOTHnWhrjlDNu",
      "createdAt": "2022-07-14T08:50:45.512Z"
    }
  }
]
```
</details>

Setelah membuat `debitur` dan mendapatkan `nomor debitur`, kemudian petugas akan memilih mau di-inputkan kemana, ada 2 path yaitu **Pengajuan Penghasilan Tetap** dan **Pengajuan Penghasilan Tidak Tetap**, tiap debitur **dapat mensubmit banyak pengajuan**. disini kami memberi nama `fixed` untuk **penghasilan tetap** dan `nonfixed` untuk **penghasilan tidak tetap**. Disini juga diinputkan `createdBy` dan juga `debitur` agar bisa berelasi dengan `debitur` serta `user` yang menginput.

`localhost:3000/fixeds`
<details>
<summary>Fixed response</summary>

```
Request :
{
    "jenis_pengajuan": "BARU",
    "plafon_fasilitas": "1000000",
    "jenis_penggunaan": "INVESTASI",
    "tujuan_penggunaan": "Membeli hewan qurban",
    "jangka_waktu": "5 Bulan",
    "penghasilan_pemohon": "250000",
    "potongan_gaji": "10000",
    "sisa_penghasilan": "230000",
    "nama_pejabat_penanggung_jawab": "Evil La Twin",
    "jabatan_pejabat_penanggung_jawab": "Platinum",
    "nama_pejabat_pemotong_gaji": "Eldlich",
    "jabatan_pejabat_pemotong_gaji": "Gold",
    "no_rekening": "552454212",
    "tanggal_mulai_kredit": "2022-06-11",
    "jangka_waktu_kredit": "1 Tahun",
    "plafon_kredit": "10000000",
    "debitur": "5",
    "createdBy": 3
}
```
```
Response : 
{
  "id": 33,
  "jenis_pengajuan": "BARU",
  "plafon_fasilitas": "1000000",
  "jenis_penggunaan": "INVESTASI",
  "tujuan_penggunaan": "Membeli hewan qurban",
  "jangka_waktu": "5 Bulan",
  "penghasilan_pemohon": "250000",
  "potongan_gaji": "10000",
  "sisa_penghasilan": "230000",
  "nama_pejabat_penanggung_jawab": "Evil La Twin",
  "jabatan_pejabat_penanggung_jawab": "Platinum",
  "nama_pejabat_pemotong_gaji": "Eldlich",
  "jabatan_pejabat_pemotong_gaji": "Gold",
  "no_rekening": "552454212",
  "plafon_kredit": "10000000",
  "tanggal_mulai_kredit": "2022-06-11",
  "jangka_waktu_kredit": "1 Tahun",
  "is_approved": false,
  "submission": [],
  "debitur": {
    "id": 5,
    "no_debitur": "c7a613bb-cd08-4ec4-844b-d5b6117ce4ce",
    "nama_debitur": "Sonia Eka P"
  },
  "createdBy": {
    "id": 3,
    "username": "fleetime"
  }
}
```
</details>

`localhost:3000/nonfixeds`
<details>
<summary>Nonfixed response</summary>

```
Request : 
{
    "jenis_pengajuan": "ADENDUM",
    "plafon_fasilitas": 2500,
    "jenis_penggunaan": "KONSUMSI",
    "tujuan_penggunaan": "Bermain Slot",
    "jangka_waktu": "6 Bulan",
    "no_rekening": 8545454545,
    "plafon_kredit": 2001000,
    "tanggal_mulai_kredit": "2022-05-21",
    "jangka_waktu_kredit": "8 Bulan",
    "debitur": 5,
    "createdBy": 3
}
```

```
Response :
{
  "id": 27,
  "jenis_pengajuan": "ADENDUM",
  "plafon_fasilitas": "2500",
  "jenis_penggunaan": "KONSUMSI",
  "tujuan_penggunaan": "Bermain Slot",
  "jangka_waktu": "6 Bulan",
  "no_rekening": "8545454545",
  "plafon_kredit": "2001000",
  "tanggal_mulai_kredit": "2022-05-21",
  "jangka_waktu_kredit": "8 Bulan",
  "is_approved": false,
  "debitur": {
    "id": 5,
    "no_debitur": "c7a613bb-cd08-4ec4-844b-d5b6117ce4ce",
    "nama_debitur": "Sonia Eka P"
  },
  "submission": [],
  "createdBy": {
    "id": 3,
    "username": "fleetime"
  },
  "updatedBy": null
} 
```
</details>

Setelah menginput penghasilan tetap / tidak tetap, ada kolom `is_approved` dengan tipe data boolean yang di defaultkan menjadi false karena masih belum disetujui. Untuk melanjutkan ke proses selanjutnya yaitu Proses Pengajuan atau disini kami namai `submission`. Tujuan endpoint `submission` ini adalah untuk men-approve pengajuan debitur yang tadi dan di konversi menjadi no_pengajuan dan tanggal_pengajuan beserta yang lainnya seperti (upload file, analisis bisnis, analisis karakter, serta agunan atau collateral).

`localhost:3000/submissions/`
<details>
<summary>Submissions response</summary>

```
Request :
{
    "createdBy": 3,
    "fixed": [{
        "id": 33,
        "is_approved": true
    }]
}
```

```
Response : 
{
  "id": 10,
  "no_pengajuan": "2970316707",
  "tgl_pengajuan": "2022-07-14",
  "nonfixed": [],
  "fixed": [
    {
      "id": 33,
      "jenis_pengajuan": "BARU",
      "plafon_fasilitas": "1000000",
      "jenis_penggunaan": "INVESTASI",
      "tujuan_penggunaan": "Membeli hewan qurban",
      "jangka_waktu": "5 Bulan",
      "penghasilan_pemohon": "250000",
      "potongan_gaji": "10000",
      "sisa_penghasilan": "230000",
      "nama_pejabat_penanggung_jawab": "Evil La Twin",
      "jabatan_pejabat_penanggung_jawab": "Platinum",
      "nama_pejabat_pemotong_gaji": "Eldlich",
      "jabatan_pejabat_pemotong_gaji": "Gold",
      "no_rekening": "552454212",
      "plafon_kredit": "10000000",
      "tanggal_mulai_kredit": "2022-06-11",
      "jangka_waktu_kredit": "1 Tahun",
      "is_approved": true,
      "debitur": {
        "id": 5,
        "no_debitur": "c7a613bb-cd08-4ec4-844b-d5b6117ce4ce",
        "nik": "500000",
        "nama_debitur": "Sonia Eka P"
      }
    }
  ],
  "collateral": null,
  "business_analysis": null,
  "character_analysis": null,
  "uploads": [],
  "createdBy": {
    "id": 3,
    "username": "fleetime"
  }
}
```
</details>

Setelah berhasil terinput maka akan mendapatkan `no_pengajuan`, `tgl_pengajuan`, `nama_debitur`, `no_debitur`, serta `user` yang menginputkannya, Terlihat ada beberapa field yang masih kosong yang disiapkan untuk proses selanjutnya yang kemudian akan disatukan kedalam tabel proses pengajuan ini dengan menggunakan `PATCH` request. Disini tabel `submission` sudah berelasi ManyToOne dengan tabel `collateral` atau agunan, `business_analysis` dan `character_analysis`, sehingga tabel `submission` memiliki 1 masing masing data dari 3 tabel diatas, sebaliknya 3 tabel diatas memiliki banyak submission dengan relasi OneToMany dengan tabel `submission`. Untuk men-insert kebanyak tabel sekaligus dengan sekali save, maka digunakan metode Cascading Insert.

`localhost:3000/submissions/:id`
<details>
<summary>Patching proses pengajuan request</summary>

```
Request : 
{
    "character_analysis": {
        "ulet_dalam_bisnis": 75,
        "flexible_kaku": 65,
        "kreatif_inovatif": 87,
        "jujur_dlm_bisnis": 95,
        "deskripsi_karakter": "Consequat erat rebum odio est sit dolor sea amet sed eirmod ipsum eu eirmod dolor no et ut invidunt nostrud est stet euismod clita voluptua tempor ipsum rebum et sit consetetur tempor tation kasd dolore erat diam labore sed eirmod feugiat et vero adipiscing diam consequat sanctus ut enim voluptua",
        "createdById": 3
    },
    "collateral": {
        "barang_agunan": "Mobil",
        "asuransi": "takimata iriure erat nulla est lobortis volutpat kasd",
        "nilai_agunan": 100000,
        "bukti_agunan": "Lorem ipsum",
        "ijin_milik": "magna hendrerit labore velit placerat",
        "deskripsi_agunan": "Consetetur ut sed ut feugait dolor labore eirmod est magna sadipscing elitr labore ipsum labore sanctus nonumy velit magna takimata invidunt magna hendrerit labore velit placerat no dolore dolores diam et sadipscing commodo voluptua consequat gubergren voluptua takimata elitr amet et amet no voluptua in stet doming nulla et sanctus",
        "createdBy": 3
    },
    "business_analysis": {
        "omset_penjualan": "erat nulla est lobortis volutpat kasd",
        "harga_bersaing": "lorem lorem delenit ut dolore et",
        "persaingan": "sed at et elitr at sadipscing",
        "lokasi": "strategis",
        "kualitas": "bagus",
        "deskripsi_bisnis": "Kasd accusam sea accusam iriure enim est elitr et sed sadipscing veniam nonumy lorem nonumy illum gubergren quod vel sea aliquam consetetur imperdiet aliquip et tempor tempor ut diam ipsum rebum sadipscing et stet option iriure voluptua sed sed consetetur nonumy sit consetetur takimata rebum amet clita ex et consetetur",
        "createdBy": 3
    }
    
}
```
```
Response : 
{
  "id": 10,
  "no_pengajuan": "2970316707",
  "tgl_pengajuan": "2022-07-14",
  "nonfixed": [],
  "fixed": [
    {
      "id": 33,
      "jenis_pengajuan": "BARU",
      "plafon_fasilitas": "1000000",
      "jenis_penggunaan": "INVESTASI",
      "tujuan_penggunaan": "Membeli hewan qurban",
      "jangka_waktu": "5 Bulan",
      "penghasilan_pemohon": "250000",
      "potongan_gaji": "10000",
      "sisa_penghasilan": "230000",
      "nama_pejabat_penanggung_jawab": "Evil La Twin",
      "jabatan_pejabat_penanggung_jawab": "Platinum",
      "nama_pejabat_pemotong_gaji": "Eldlich",
      "jabatan_pejabat_pemotong_gaji": "Gold",
      "no_rekening": "552454212",
      "plafon_kredit": "10000000",
      "tanggal_mulai_kredit": "2022-06-11",
      "jangka_waktu_kredit": "1 Tahun",
      "is_approved": true,
      "debitur": {
        "id": 5,
        "no_debitur": "c7a613bb-cd08-4ec4-844b-d5b6117ce4ce",
        "nik": "500000",
        "nama_debitur": "Sonia Eka P"
      }
    }
  ],
  "collateral": {
    "id": 7,
    "barang_agunan": "Mobil",
    "asuransi": "takimata iriure erat nulla est lobortis volutpat kasd",
    "nilai_agunan": "100000",
    "bukti_agunan": "Lorem ipsum",
    "ijin_milik": "magna hendrerit labore velit placerat",
    "deskripsi_agunan": "Consetetur ut sed ut feugait dolor labore eirmod est magna sadipscing elitr labore ipsum labore sanctus nonumy velit magna takimata invidunt magna hendrerit labore velit placerat no dolore dolores diam et sadipscing commodo voluptua consequat gubergren voluptua takimata elitr amet et amet no voluptua in stet doming nulla et sanctus",
    "created_at": "2022-07-15T01:28:59.231Z",
    "updated_at": "2022-07-15T01:28:59.231Z"
  },
  "business_analysis": {
    "id": 4,
    "omset_penjualan": "erat nulla est lobortis volutpat kasd",
    "harga_bersaing": "lorem lorem delenit ut dolore et",
    "persaingan": "sed at et elitr at sadipscing",
    "lokasi": "strategis",
    "kualitas": "bagus",
    "deskripsi_bisnis": "Kasd accusam sea accusam iriure enim est elitr et sed sadipscing veniam nonumy lorem nonumy illum gubergren quod vel sea aliquam consetetur imperdiet aliquip et tempor tempor ut diam ipsum rebum sadipscing et stet option iriure voluptua sed sed consetetur nonumy sit consetetur takimata rebum amet clita ex et consetetur"
  },
  "character_analysis": {
    "id": 22,
    "ulet_dalam_bisnis": 75,
    "flexible_kaku": 65,
    "kreatif_inovatif": 87,
    "jujur_dlm_bisnis": 95,
    "deskripsi_karakter": "Consequat erat rebum odio est sit dolor sea amet sed eirmod ipsum eu eirmod dolor no et ut invidunt nostrud est stet euismod clita voluptua tempor ipsum rebum et sit consetetur tempor tation kasd dolore erat diam labore sed eirmod feugiat et vero adipiscing diam consequat sanctus ut enim voluptua"
  },
  "uploads": [],
  "createdBy": {
    "id": 3,
    "username": "fleetime"
  }
}
```

</details>

Untuk upload berkas disini kami menggunakan multer package dari Express, hasil upload file akan masuk ke `uploads/files` di root project folder, untuk upload files menggunakan relasi ManyToOne ke `submission` sehingga dalam pengajuan akan ada banyak file.

`localhost:3000/uploads`
<details>
<summary>Upload response berhasil</summary>

```
Request : 
```
![image](https://user-images.githubusercontent.com/45744788/179131426-b745a309-0299-4115-a157-1fa6754300ef.png)

```
Response : 
{
  "message": "File berhasil diupload",
  "filePath": "http://localhost:3000/uploads/files/04d70b1013910a34d1491051c32826a5183.pdf"
}
```

</details>

Jika file yang diupload bukan pdf, docx, atau doc maka akan throw error seperti ini, karena sudah ada regex exceptionnya untuk menghandle error tersebut
<details>
<summary>Upload response gagal</summary>

![image](https://user-images.githubusercontent.com/45744788/179132373-88794f01-5783-4bae-94d0-defc20d86e4b.png)

```
Response : 
{
  "statusCode": 400,
  "message": "File bukan pdf/docx/doc",
  "error": "Bad Request"
}
```
</details>

Maka jika sudah semua proses dijalankan field submissionnya sudah lengkap dah terisi semua
<details>
<summary>Final Result</summary>

```
{
  "data": [
    {
      "id": 10,
      "no_pengajuan": "2970316707",
      "tgl_pengajuan": "2022-07-14",
      "nonfixed": [],
      "fixed": [
        {
          "id": 33,
          "jenis_pengajuan": "BARU",
          "plafon_fasilitas": "1000000",
          "jenis_penggunaan": "INVESTASI",
          "tujuan_penggunaan": "Membeli hewan qurban",
          "jangka_waktu": "5 Bulan",
          "penghasilan_pemohon": "250000",
          "potongan_gaji": "10000",
          "sisa_penghasilan": "230000",
          "nama_pejabat_penanggung_jawab": "Evil La Twin",
          "jabatan_pejabat_penanggung_jawab": "Platinum",
          "nama_pejabat_pemotong_gaji": "Eldlich",
          "jabatan_pejabat_pemotong_gaji": "Gold",
          "no_rekening": "552454212",
          "plafon_kredit": "10000000",
          "tanggal_mulai_kredit": "2022-06-11",
          "jangka_waktu_kredit": "1 Tahun",
          "is_approved": true,
          "debitur": {
            "id": 5,
            "no_debitur": "c7a613bb-cd08-4ec4-844b-d5b6117ce4ce",
            "nik": "500000",
            "nama_debitur": "Sonia Eka P"
          }
        }
      ],
      "collateral": {
        "id": 7,
        "barang_agunan": "Mobil",
        "asuransi": "takimata iriure erat nulla est lobortis volutpat kasd",
        "nilai_agunan": "100000",
        "bukti_agunan": "Lorem ipsum",
        "ijin_milik": "magna hendrerit labore velit placerat",
        "deskripsi_agunan": "Consetetur ut sed ut feugait dolor labore eirmod est magna sadipscing elitr labore ipsum labore sanctus nonumy velit magna takimata invidunt magna hendrerit labore velit placerat no dolore dolores diam et sadipscing commodo voluptua consequat gubergren voluptua takimata elitr amet et amet no voluptua in stet doming nulla et sanctus",
        "created_at": "2022-07-15T01:28:59.231Z",
        "updated_at": "2022-07-15T01:28:59.231Z"
      },
      "business_analysis": {
        "id": 4,
        "omset_penjualan": "erat nulla est lobortis volutpat kasd",
        "harga_bersaing": "lorem lorem delenit ut dolore et",
        "persaingan": "sed at et elitr at sadipscing",
        "lokasi": "strategis",
        "kualitas": "bagus",
        "deskripsi_bisnis": "Kasd accusam sea accusam iriure enim est elitr et sed sadipscing veniam nonumy lorem nonumy illum gubergren quod vel sea aliquam consetetur imperdiet aliquip et tempor tempor ut diam ipsum rebum sadipscing et stet option iriure voluptua sed sed consetetur nonumy sit consetetur takimata rebum amet clita ex et consetetur"
      },
      "character_analysis": {
        "id": 22,
        "ulet_dalam_bisnis": 75,
        "flexible_kaku": 65,
        "kreatif_inovatif": 87,
        "jujur_dlm_bisnis": 95,
        "deskripsi_karakter": "Consequat erat rebum odio est sit dolor sea amet sed eirmod ipsum eu eirmod dolor no et ut invidunt nostrud est stet euismod clita voluptua tempor ipsum rebum et sit consetetur tempor tation kasd dolore erat diam labore sed eirmod feugiat et vero adipiscing diam consequat sanctus ut enim voluptua"
      },
      "uploads": [
        {
          "id": 17,
          "files": "109c9c499bcca584a4f103d202cfde7e78.pdf",
          "createdDate": "2022-07-15T01:56:58.616Z",
          "updatedDate": "2022-07-15T01:56:58.616Z"
        },
        {
          "id": 18,
          "files": "04d70b1013910a34d1491051c32826a5183.pdf",
          "createdDate": "2022-07-15T02:03:34.130Z",
          "updatedDate": "2022-07-15T02:03:34.130Z"
        }
      ],
      "createdBy": {
        "id": 3,
        "username": "fleetime"
      }
    }
  ],
  "count": 1,
  "total": 1,
  "page": 1,
  "pageCount": 1
}
```
</details>




## Api Endpoint

API Documentation : [https://fleetime-sigma.herokuapp.com/api/](http://localhost:3000/api/)

Postman Collection :  [https://raw.githubusercontent.com/fleetimee/solaire-demon/master/postman.json](https://raw.githubusercontent.com/fleetimee/solaire-demon/master/postman.json)

## Checklist

#### Pengajuan Kredit
- [x] Input NIK dan Search API menggunakan query params
- [x] CRUD Data Debitur
- [x] Pengajuan Kredit
- [x] Form Penghasilan Tetap
- [x] Form Penghasilan Tidak Tetap
- [x] Input Data Pengajuan di Tabel proses pengajuan

#### Upload Berkas
- [x] Multipart form data menggunakan multer
- [x] Hubungkan dengan nomor pengajuan
- [x] Upload single file
- [ ] Upload multiple files

#### Input Agunan 
- [x] Hubungkan dengan nomor pengajuan
- [x] Show Data Pengajuan Kredit 
- [x] Cascade Insert Agunan dengan Proses Pengajuan

#### Analisa Pengajuan Kredit
- [x] Hubungkan dengan nomor pengajuan
- [x] Input Analisa Bisnis
- [x] Input Analisa Karakter
- [x] Cascade Insert dengan Proses Pengajuan

#### Summary
- [x] Tampilkan summary

#### Authentication
- [ ] Add Otentifikasi 
- [ ] Add Role Based Access Control

