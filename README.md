<p align="center">
<a href="https://user-images.githubusercontent.com/45744788/178934617-15da5f5c-89cf-4fb1-8878-60e3dc99d4b3.png" target="blank"><img src="https://user-images.githubusercontent.com/45744788/178934617-15da5f5c-89cf-4fb1-8878-60e3dc99d4b3.png"  width="1000" alt="Logo" /></a>
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
Buat User berikut dengan Rolenya
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

Buat Debitur dengan menyertakan createdById
`http://localhost:3000/debiturs`
<details>
<summary>Debiturs response</summary>

```
Request : 
```

```
Response : 
```
</details>



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
