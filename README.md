# Backend AKM menggunakan Express

### Usage
```
git clone https://github.com/fleetimee/solaire-demon.git
cd solaire-demon
Edit src/app.module for postgres configuration
yarn start:dev
```
### Kesulitan
Siang mas Bima saya masih bingung untuk menyimpan data penghasilan tetap dan penghasilan tidak tetap

![image](https://user-images.githubusercontent.com/45744788/177489337-331da4a7-d4cb-4cdd-9211-a49004864277.png)

Seperti schema diatas tiap form penghasilan tetap dan tidak tetap memiliki nomor debitur dan nama debitur
Untuk memasukkan ke tabel pro_pengajuan dan mengenerate nomor pengajuan itu bagaimana ya 

Terima Kasih
```
Response penghasilan tetap : 

{
  "data": [
    {
      "id": 1,
      "jenis_pengajuan": "ADENDUM",
      "plafon_fasilitas": "50000",
      "jenis_penggunaan": "MODAL_KERJA",
      "tujuan_penggunaan": "Main Slot",
      "jangka_waktu": "2021-07-10",
      "penghasilan_pemohon": "1500000",
      "potongan_gaji": "500000",
      "sisa_penghasilan": "121212122",
      "nama_pejabat_penanggung_jawab": "Superman",
      "jabatan_pejabat_penanggung_jawab": "Diamond",
      "nama_pejabat_pemotong_gaji": "Batman",
      "jabatan_pejabat_pemotong_gaji": "Legend",
      "no_rekening": "5848454545454",
      "plafon_kredit": "100000000",
      "tanggal_mulai_kredit": "2021-07-10",
      "jangka_waktu_kredit": "2021-07-10",
      "debitur": {
        "id": 1,
        "no_debitur": "e9db6866-dd36-4e90-b476-f7de4527c7c5",
        "nama_debitur": "Novian Andika"
      }
    }
  ],
  "count": 1,
  "total": 1,
  "page": 1,
  "pageCount": 1
}
```

### Api Endpoint

- /debiturs = Untuk menginputkan Data Debitur => Mendapatkan Nomer Debitur Secara Otomatis
- /fixeds = Formulir Pendapatan Tetap (Mengambil Nama Debitur dan Nomor Debitur dari tabel Debiturs)
- /non-fixeds = Fomulir Pendapatan Tidak Tetap



![image](https://user-images.githubusercontent.com/45744788/177477728-45037c0d-6a2f-41c7-8c7b-94a2586d1823.png)

API Documentation : [https://fleetime-sigma.herokuapp.com/api/](https://fleetime-sigma.herokuapp.com/api/)
Postman Collection :  [https://raw.githubusercontent.com/fleetimee/solaire-demon/master/postman.json](https://raw.githubusercontent.com/fleetimee/solaire-demon/master/postman.json)

### Webservice To-do

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
