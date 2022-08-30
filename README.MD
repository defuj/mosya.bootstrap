<h1 align="center">
  <a href="https://github.com/defuj/mosya.bootstrap">
    Mosya - Mobil Syariah API DOC
  </a>
</h1>

<p align="center">
  <a href="https://getbootstrap.com/docs/4.6/getting-started/download/">
    <img src="https://img.shields.io/badge/Bootstrap-v4.6.2-informational?style=flat&logoColor=white"/>
  </a>

</p>

## Authentication

All API must use this authentication

Request :

-   base url: `https://`
-   Auth :
    -   username : "username"
    -   password : "password"
-   Header :
    -   tulaks : "tulaks"

## Login

Request :

-   Method : POST
-   Endpoint : `/auth/login`
-   Header :
    -   Content-Type: application/json
    -   Accept: application/json
-   Body :

```json5
{
	email: "string", //ex: user@mail.com
	password: "string",
}
```

Response :

```json5
{
	status: "boolean", //value : true or false
	message: "string",
	data: {
		id: "string",
		name: "string",
		email: "string",
		phone: "string",
		image: "string",
	},
}
```

## Register

Request :

-   Method : POST
-   Endpoint : `/auth/register`
-   Header :
    -   Content-Type: application/json
    -   Accept: application/json
-   Body :

```json5
{
	name: "string",
	email: "string",
	password: "string",
	phone: "string",
}
```

Response :

```json5
{
	status: "boolean", //value : true or false
	message: "string",
	data: {
		id: "string",
		name: "string",
		email: "string",
		phone: "string",
		image: "string",
	},
}
```

## Update Profile

Request :

-   Method : POST
-   Endpoint : `/auth/update_profile`
-   Body :

```json5
{
	id: "string",
	name: "string",
	phone: "string",
	image: "file",
}
```

Response :

```json5
{
	status: "boolean", //value : true or false
	message: "string",
	data: {
		id: "string",
		name: "string",
		email: "string",
		phone: "string",
		image: "string",
	},
}
```

## Update Password

Request :

-   Method : POST
-   Endpoint : `/auth/update_password`
-   Header :
    -   Content-Type: application/json
    -   Accept: application/json
-   Body :

```json5
{
	id: "string",
	password_old: "string",
	password_new: "string",
	password_confirm: "string",
}
```

Response :

```json5
{
	status: "boolean", //value : true or false
	message: "string",
}
```

## List Banner

Request :

-   Method : GET
-   Endpoint : `/banner/list`
-   Header :
    -   Content-Type: application/json
    -   Accept: application/json

Response :

```json5
{
	status: "boolean", //value : true or false
	message: "string",
	data: [
		{
			id: "string",
			image: "string", // the value is image url
			link: "string", // the value is link url
		},
		{
			id: "string",
			image: "string", // the value is image url
			link: "string", // the value is link url
		},
		{
			id: "string",
			image: "string", // the value is image url
			link: "string", // the value is link url
		},
	],
}
```

## List Brand (Merk Mobil)

Request :

-   Method : GET
-   Endpoint : `/brand/list`
-   Header :
    -   Content-Type: application/json
    -   Accept: application/json
-   Body :

```json5
{
	search: "string", // value : search by name (parameter is optional, just use for search)
}
```

Response :

```json5
{
	status: "boolean", //value : true or false
	message: "string",
	data: [
		{
			id: "string",
			name: "string",
		},
		{
			id: "string",
			name: "string",
		},
		{
			id: "string",
			name: "string",
		},
	],
}
```

## List Car

Request :

-   Method : GET
-   Endpoint : `/car/list`
-   Header :
    -   Content-Type: application/json
    -   Accept: application/json
-   Body :

```json5
{
	search: "string", // value : search keyword (parameter is optional, just use for search)
	color: "string", // value : flter by color name (parameter is optional, just use for filter)
	brand: "string", // value : filter by brand name (parameter is optional, just use for filter)
	fuel: "string", // value : Bensin, Solar, Listrik, Hybrid (parameter is optional, just use for filter)
	start_year: "string", // value : filter dengan tahun mulai (parameter is optional, just use for filter)
	end_year: "string", // value : filter dengan tahun akhir (parameter is optional, just use for filter)
	price_start: "string", // value : filter dengan harga mulai (parameter is optional, just use for filter)
	price_end: "string", // value : filter dengan harga akhir (parameter is optional, just use for filter)
}
```

Response :

```json5
{
	status: "boolean", //value : true or false
	message: "string",
	data: [
		{
			id: "string",
			name: "string", // the value is car name, ex: Honda Jazz
			brand: "string", // the value is brand name, ex: Honda
			color: "string", // the value is color name, ex: Black
			fuel: "string", // the value is fuel type, ex: Bensin
			year: "string", // the value is car year, ex: 2019
			price: "string", // the value is car price, ex: 1.000.000.000
			image: "string", // the value is car image url, ex: https://www.google.com/images/brand/brand.png
			description: "string", // the value is car description, ex: Honda Jazz adalah salah satu mobil terbaik di Indonesia
			plate_number: "string", // the value is car plate number, ex: B 12345
			status: "string", // the value is car status, ex: Available
		},
		{
			id: "string",
			name: "string", // the value is car name, ex: Honda Jazz
			brand: "string", // the value is brand name, ex: Honda
			color: "string", // the value is color name, ex: Black
			fuel: "string", // the value is fuel type, ex: Bensin
			year: "string", // the value is car year, ex: 2019
			price: "string", // the value is car price, ex: 1.000.000.000
			image: "string", // the value is car image url, ex: https://www.google.com/images/brand/brand.png
			description: "string", // the value is car description, ex: Honda Jazz adalah salah satu mobil terbaik di Indonesia
			plate_number: "string", // the value is car plate number, ex: B 12345
			status: "string", // the value is car status, ex: Available
		},
	],
}
```

## List History Booking

Request :

-   Method : GET
-   Endpoint : `/history/list`
-   Header :
    -   Content-Type: application/json
    -   Accept: application/json

Response :

```json5
{
	status: "boolean", //value : true or false
	message: "string",
	data: [
		{
			id: "string",
			date: "string",
			status: "string", // value : Belum Dibayar, Dibayar, Diverifikasi, Dibatalkan, Dalam Perjalanan, Selesai
			image: "string",
			name: "string",
			brand: "string",
			color: "string",
			year: "string",
		},
		{
			id: "string",
			date: "string",
			status: "string", // value : Belum Dibayar, Dibayar, Diverifikasi, Dibatalkan, Dalam Perjalanan, Selesai
			image: "string",
			name: "string",
			brand: "string",
			color: "string",
			year: "string",
		},
		{
			id: "string",
			date: "string",
			status: "string", // value : Belum Dibayar, Dibayar, Diverifikasi, Dibatalkan, Dalam Perjalanan, Selesai
			image: "string",
			name: "string",
			brand: "string",
			color: "string",
			year: "string",
		},
	],
}
```
