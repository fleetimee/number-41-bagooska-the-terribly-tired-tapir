# Backend AKM menggunakan Express

### Api Endpoint

- /debiturs = Untuk menginputkan Data Debitur => Mendapatkan Nomer Debitur Secara Otomatis
- /fixeds = Formulir Pendapatan Tetap (Mengambil Nama Debitur dan Nomor Debitur dari tabel Debiturs)
- /non-fixeds = Fomulir Pendapatan Tidak Tetap

![image](https://user-images.githubusercontent.com/45744788/177477728-45037c0d-6a2f-41c7-8c7b-94a2586d1823.png)

API Documentation : [https://fleetime-sigma.herokuapp.com/api/](https://fleetime-sigma.herokuapp.com/api/)

### Webservice To-do

#### Debiturs Module
- [x] Search NIK
http://localhost:3000/debiturs/?s={"nik": "35250105109123133"}
![image](https://user-images.githubusercontent.com/45744788/177474338-552caba1-03ad-46a9-b5d4-5f11337d1b28.png)
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
