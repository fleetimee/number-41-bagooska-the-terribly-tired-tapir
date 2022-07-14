# Brynhildr
<p align="center">
<a href="https://user-images.githubusercontent.com/45744788/178934617-15da5f5c-89cf-4fb1-8878-60e3dc99d4b3.png" target="blank"><img src="https://www.seekpng.com/png/full/8-82747_clipart-royalty-free-download-bonfire-clipart-watercolor-dark.png"  width="300" alt="Logo" /></a>
</p>

<p align="center">Backend aplikasi AKM yang dibuat menggunakan Express dan PostgreSQL</p>


## Usage
```
git clone https://github.com/fleetimee/solaire-demon.git
cd solaire-demon
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

Setelah berhasil terinput maka akan mendapatkan `no_pengajuan`, `tgl_pengajuan`, `nama_debitur`, `no_debitur`, serta `user` yang menginputkannya, Terlihat ada beberapa field yang masih kosong yang disiapkan untuk proses selanjutnya yang kemudian akan disatukan kedalam tabel proses pengajuan ini


## Api Endpoint

- /debiturs = Untuk menginputkan Data Debitur => Mendapatkan Nomer Debitur Secara Otomatis
- /fixeds = Formulir Pendapatan Tetap (Mengambil Nama Debitur dan Nomor Debitur dari tabel Debiturs)
- /non-fixeds = Fomulir Pendapatan Tidak Tetap



![image](https://user-images.githubusercontent.com/45744788/177477728-45037c0d-6a2f-41c7-8c7b-94a2586d1823.png)

API Documentation : [https://fleetime-sigma.herokuapp.com/api/](https://fleetime-sigma.herokuapp.com/api/)

Postman Collection :  [https://raw.githubusercontent.com/fleetimee/solaire-demon/master/postman.json](https://raw.githubusercontent.com/fleetimee/solaire-demon/master/postman.json)

## Webservice To-do

#### Debiturs Module
- [x] Search NIK
http://localhost:3000/debiturs/?s={"nik": "35250105109123133"}
- [x] Show Debiturs Table 
- [x] Full CRUD Debiturs Table with validation, pagination & filtering
- [x] Generate Nomer Debitur menggunakan UUID
- [x] Form Fixed Income dan Non Fixed Income beserta relasi dengan debiturs yang diinput
![image](https://user-images.githubusercontent.com/45744788/177475569-c54cb45a-6ff6-4aa4-b07b-66f278bc1356.png)

- [ ] Save data ke tabel pro-pengajuan (no_pengajuan,tgl_pengajuan,no_debitur,user_input,analis_kredit)

#### Upload Berkas Module
- [ ] Multipart form data menggunakan multer

#### Input Agunan Module
- [ ] Show Data Pengajuan Kredit 
- [ ] Input Analisa Kredit Karakter
- [ ] Input Analisa Bisnis

#### Final
- [ ] Tampilkan Summary
