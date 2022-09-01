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
	limit: "string", // value : limit data (parameter is optional, just use for pagination) ex: 10
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
			model: "string", // the value is car name, ex: Honda Jazz
			brand: "string", // the value is brand name, ex: Honda
			color: "string", // the value is color name, ex: Black
			fuel: "string", // the value is fuel type, ex: Bensin
			year: "string", // the value is car year, ex: 2019
			price: "string", // the value is car price, ex: 1.000.000.000
			description: "string", // the value is car description, ex: Honda Jazz adalah salah satu mobil terbaik di Indonesia
			plate_number: "string", // the value is car plate number, ex: B 12345
			status: "string", // the value is car status, ex: Available
			kilometer: "string", // the value is car kilometer, ex: 100.000
			image: [
				"https://www.google.com/images/brand/brand.png",
				"https://www.google.com/images/brand/brand.png",
				"https://www.google.com/images/brand/brand.png",
				"https://www.google.com/images/brand/brand.png",
			]
			payments: [
				{
					id: "string",
					dp: "string", // the value is car cicilan dp, ex: Rp 20.400.000
					cicilan: "string", // the value is car cicilan, ex: Rp 4.973.000 X 48 bln
				},
				{
					id: "string",
					dp: "string", // the value is car cicilan dp, ex: Rp 20.400.000
					cicilan: "string", // the value is car cicilan, ex: Rp 4.973.000 X 48 bln
				},
				{
					id: "string",
					dp: "string", // the value is car cicilan dp, ex: Rp 20.400.000
					cicilan: "string", // the value is car cicilan, ex: Rp 4.973.000 X 48 bln
				},
			],
		},
	],
}
```

## List Catalog Car

Request :

-   Method : GET
-   Endpoint : `/car/catalog`
-   Header :
    -   Content-Type: application/json
    -   Accept: application/json

Response :

```json5
{
	status: "boolean", //value : true or false
	message: "string",
	data: {
		brand : "string",
		total: "string", // the value is total car, ex: 1 sd 99+, if value is > 100, then value is 99+
		cars: [ // list car, just 4 piece for every merk
			{
				id: "string",
				model: "string", // the value is car name, ex: Honda Jazz
				brand: "string", // the value is brand name, ex: Honda
				color: "string", // the value is color name, ex: Black
				fuel: "string", // the value is fuel type, ex: Bensin
				year: "string", // the value is car year, ex: 2019
				price: "string", // the value is car price, ex: 1.000.000.000
				description: "string", // the value is car description, ex: Honda Jazz adalah salah satu mobil terbaik di Indonesia
				plate_number: "string", // the value is car plate number, ex: B 12345
				status: "string", // the value is car status, ex: Available
				kilometer: "string", // the value is car kilometer, ex: 100.000
				image: [
					"https://www.google.com/images/brand/brand.png",
					"https://www.google.com/images/brand/brand.png",
					"https://www.google.com/images/brand/brand.png",
					"https://www.google.com/images/brand/brand.png",
				]
			},
			{
				id: "string",
				model: "string", // the value is car name, ex: Honda Jazz
				brand: "string", // the value is brand name, ex: Honda
				color: "string", // the value is color name, ex: Black
				fuel: "string", // the value is fuel type, ex: Bensin
				year: "string", // the value is car year, ex: 2019
				price: "string", // the value is car price, ex: 1.000.000.000
				description: "string", // the value is car description, ex: Honda Jazz adalah salah satu mobil terbaik di Indonesia
				plate_number: "string", // the value is car plate number, ex: B 12345
				status: "string", // the value is car status, ex: Available
				kilometer: "string", // the value is car kilometer, ex: 100.000
				image: [
					"https://www.google.com/images/brand/brand.png",
					"https://www.google.com/images/brand/brand.png",
					"https://www.google.com/images/brand/brand.png",
					"https://www.google.com/images/brand/brand.png",
				]
			},
			{
				id: "string",
				model: "string", // the value is car name, ex: Honda Jazz
				brand: "string", // the value is brand name, ex: Honda
				color: "string", // the value is color name, ex: Black
				fuel: "string", // the value is fuel type, ex: Bensin
				year: "string", // the value is car year, ex: 2019
				price: "string", // the value is car price, ex: 1.000.000.000
				description: "string", // the value is car description, ex: Honda Jazz adalah salah satu mobil terbaik di Indonesia
				plate_number: "string", // the value is car plate number, ex: B 12345
				status: "string", // the value is car status, ex: Available
				kilometer: "string", // the value is car kilometer, ex: 100.000
				image: [
					"https://www.google.com/images/brand/brand.png",
					"https://www.google.com/images/brand/brand.png",
					"https://www.google.com/images/brand/brand.png",
					"https://www.google.com/images/brand/brand.png",
				]
			},
			{
				id: "string",
				model: "string", // the value is car name, ex: Honda Jazz
				brand: "string", // the value is brand name, ex: Honda
				color: "string", // the value is color name, ex: Black
				fuel: "string", // the value is fuel type, ex: Bensin
				year: "string", // the value is car year, ex: 2019
				price: "string", // the value is car price, ex: 1.000.000.000
				description: "string", // the value is car description, ex: Honda Jazz adalah salah satu mobil terbaik di Indonesia
				plate_number: "string", // the value is car plate number, ex: B 12345
				status: "string", // the value is car status, ex: Available
				kilometer: "string", // the value is car kilometer, ex: 100.000
				image: [
					"https://www.google.com/images/brand/brand.png",
					"https://www.google.com/images/brand/brand.png",
					"https://www.google.com/images/brand/brand.png",
					"https://www.google.com/images/brand/brand.png",
				]
			},
		]
	},
	{
		merk : "string",
		total: "string", // the value is total car, ex: 1 sd 99+, if value is > 100, then value is 99+
		cars: [ // list car, just 4 piece for every merk
			{
				id: "string",
				model: "string", // the value is car name, ex: Honda Jazz
				brand: "string", // the value is brand name, ex: Honda
				color: "string", // the value is color name, ex: Black
				fuel: "string", // the value is fuel type, ex: Bensin
				year: "string", // the value is car year, ex: 2019
				price: "string", // the value is car price, ex: 1.000.000.000
				description: "string", // the value is car description, ex: Honda Jazz adalah salah satu mobil terbaik di Indonesia
				plate_number: "string", // the value is car plate number, ex: B 12345
				status: "string", // the value is car status, ex: Available
				kilometer: "string", // the value is car kilometer, ex: 100.000
				image: [
					"https://www.google.com/images/brand/brand.png",
					"https://www.google.com/images/brand/brand.png",
					"https://www.google.com/images/brand/brand.png",
					"https://www.google.com/images/brand/brand.png",
				]
			},
			{
				id: "string",
				model: "string", // the value is car name, ex: Honda Jazz
				brand: "string", // the value is brand name, ex: Honda
				color: "string", // the value is color name, ex: Black
				fuel: "string", // the value is fuel type, ex: Bensin
				year: "string", // the value is car year, ex: 2019
				price: "string", // the value is car price, ex: 1.000.000.000
				description: "string", // the value is car description, ex: Honda Jazz adalah salah satu mobil terbaik di Indonesia
				plate_number: "string", // the value is car plate number, ex: B 12345
				status: "string", // the value is car status, ex: Available
				kilometer: "string", // the value is car kilometer, ex: 100.000
				image: [
					"https://www.google.com/images/brand/brand.png",
					"https://www.google.com/images/brand/brand.png",
					"https://www.google.com/images/brand/brand.png",
					"https://www.google.com/images/brand/brand.png",
				]
			},
			{
				id: "string",
				model: "string", // the value is car name, ex: Honda Jazz
				brand: "string", // the value is brand name, ex: Honda
				color: "string", // the value is color name, ex: Black
				fuel: "string", // the value is fuel type, ex: Bensin
				year: "string", // the value is car year, ex: 2019
				price: "string", // the value is car price, ex: 1.000.000.000
				description: "string", // the value is car description, ex: Honda Jazz adalah salah satu mobil terbaik di Indonesia
				plate_number: "string", // the value is car plate number, ex: B 12345
				status: "string", // the value is car status, ex: Available
				kilometer: "string", // the value is car kilometer, ex: 100.000
				image: [
					"https://www.google.com/images/brand/brand.png",
					"https://www.google.com/images/brand/brand.png",
					"https://www.google.com/images/brand/brand.png",
					"https://www.google.com/images/brand/brand.png",
				]
			},
			{
				id: "string",
				model: "string", // the value is car name, ex: Honda Jazz
				brand: "string", // the value is brand name, ex: Honda
				color: "string", // the value is color name, ex: Black
				fuel: "string", // the value is fuel type, ex: Bensin
				year: "string", // the value is car year, ex: 2019
				price: "string", // the value is car price, ex: 1.000.000.000
				description: "string", // the value is car description, ex: Honda Jazz adalah salah satu mobil terbaik di Indonesia
				plate_number: "string", // the value is car plate number, ex: B 12345
				status: "string", // the value is car status, ex: Available
				kilometer: "string", // the value is car kilometer, ex: 100.000
				image: [
					"https://www.google.com/images/brand/brand.png",
					"https://www.google.com/images/brand/brand.png",
					"https://www.google.com/images/brand/brand.png",
					"https://www.google.com/images/brand/brand.png",
				]
			},
		]
	}
}
```

## Detail Car

Request :

-   Method : GET
-   Endpoint : `/car/detail`
-   Header :
    -   Content-Type: application/json
    -   Accept: application/json
-   Body :

```json5
{
	id: "string", // value : car id
}
```

Response :

```json5
{
	status: "boolean", //value : true or false
	message: "string",
	data: {
		id: "string",
		model: "string", // the value is car name, ex: Honda Jazz
		brand: "string", // the value is brand name, ex: Honda
		color: "string", // the value is color name, ex: Black
		fuel: "string", // the value is fuel type, ex: Bensin
		year: "string", // the value is car year, ex: 2019
		price: "string", // the value is car price, ex: 1.000.000.000
		description: "string", // the value is car description, ex: Honda Jazz adalah salah satu mobil terbaik di Indonesia
		plate_number: "string", // the value is car plate number, ex: B 12345
		status: "string", // the value is car status, ex: Available
		kilometer: "string", // the value is car kilometer, ex: 100.000
		image: [
			"https://www.google.com/images/brand/brand.png",
			"https://www.google.com/images/brand/brand.png",
			"https://www.google.com/images/brand/brand.png",
			"https://www.google.com/images/brand/brand.png",
		]
		payments: [
			{
				id: "string",
				dp: "string", // the value is car cicilan dp, ex: Rp 20.400.000
				cicilan: "string", // the value is car cicilan, ex: Rp 4.973.000 X 48 bln
			},
			{
				id: "string",
				dp: "string", // the value is car cicilan dp, ex: Rp 20.400.000
				cicilan: "string", // the value is car cicilan, ex: Rp 4.973.000 X 48 bln
			},
			{
				id: "string",
				dp: "string", // the value is car cicilan dp, ex: Rp 20.400.000
				cicilan: "string", // the value is car cicilan, ex: Rp 4.973.000 X 48 bln
			},
		],
	}
}
```

## List History Booking

Request :

-   Method : GET
-   Endpoint : `/history/list`
-   Header :
    -   Content-Type: application/json
    -   Accept: application/json
-   Body :

```json5
{
	id: "string", // value : user id
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
			date: "string",
			status: "string", // value : Belum Dibayar, Dibayar, Diverifikasi, Dibatalkan, Dalam Perjalanan, Selesai
			image: "string", // the value is car image, ex: https://www.google.com/images/brand/brand.png
			model: "string", // the value is car name, ex: Honda Jazz
			brand: "string", // the value is brand name, ex: Honda
			color: "string", // the value is color name, ex: Black
			year: "string", // the value is car year, ex: 2019
		},
		{
			id: "string",
			date: "string",
			status: "string", // value : Belum Dibayar, Dibayar, Diverifikasi, Dibatalkan, Dalam Perjalanan, Selesai
			image: "string", // the value is car image, ex: https://www.google.com/images/brand/brand.png
			model: "string", // the value is car name, ex: Honda Jazz
			brand: "string", // the value is brand name, ex: Honda
			color: "string", // the value is color name, ex: Black
			year: "string", // the value is car year, ex: 2019
		},
		{
			id: "string",
			date: "string",
			status: "string", // value : Belum Dibayar, Dibayar, Diverifikasi, Dibatalkan, Dalam Perjalanan, Selesai
			image: "string", // the value is car image, ex: https://www.google.com/images/brand/brand.png
			model: "string", // the value is car name, ex: Honda Jazz
			brand: "string", // the value is brand name, ex: Honda
			color: "string", // the value is color name, ex: Black
			year: "string", // the value is car year, ex: 2019
		},
	],
}
```

## Detail History Booking

Request :

-   Method : GET
-   Endpoint : `/history/detail`
-   Header :
    -   Content-Type: application/json
    -   Accept: application/json
-   Body :

```json5
{
	user_id: "string", // value : user id
	id: "string", // value : history id
}
```

Response :

```json5
{
	status: "boolean", //value : true or false
	message: "string",
	data: {
		id: "string",
		code: "string", // the value is history code, ex: #92929379938
		date: "string", // the value is booking date, ex: 2019-01-01
		status: "string", // value : Belum Dibayar, Dibayar, Diverifikasi, Dibatalkan, Dalam Perjalanan, Selesai
		car: {
			id: "string",
			model: "string", // the value is car name, ex: Honda Jazz
			brand: "string", // the value is brand name, ex: Honda
			color: "string", // the value is color name, ex: Black
			fuel: "string", // the value is fuel type, ex: Bensin
			year: "string", // the value is car year, ex: 2019
			price: "string", // the value is car price, ex:
		},
		address: {
			name: "string", // the value is user name, ex: John Doe
			phone: "string", // the value is user phone, ex: 081234567890
			email: "string", // the value is user email, ex: user@domain.com
			address: "string", // the value is user address, ex: Jl. Kebon Jeruk No. 1
		},
		payment: {
			payment_method: "string", // the value is payment method, ex: Cicilan
			booking_fee: "string", // the value is booking fee, ex: Rp 200.000
			code_uniq: "string", // the value is code uniq, ex: Rp 751
			total_payment: "string", // the value is total price, ex: Rp 200.751
		},
	},
}
```

## Tracking History

Request :

-   Method : GET
-   Endpoint : `/history/tracking`
-   Header :
    -   Content-Type: application/json
    -   Accept: application/json
-   Body :

```json5
{
	user_id: "string", // value : user id
	id: "string", // value : history id
}
```

Response :

```json5
{
	status: "boolean", //value : true or false
	message: "string",
	data: {
		id: "string",
		code: "string", // the value is history code, ex: #92929379938
		date: "string", // the value is booking date, ex: 2019-01-01
		tracking: [
			{
				date: "string", // the value is tracking date, ex: Sabtu, 20 Agustus 2022
				time: "string", // the value is tracking time, ex: 10:00
				description: "string", // the value is tracking description, ex: Mobil telah diterima penerima.
			},
			{
				date: "string", // the value is tracking date, ex: Sabtu, 20 Agustus 2022
				time: "string", // the value is tracking time, ex: 10:00
				description: "string", // the value is tracking description, ex: Mobil telah diterima penerima.
			},
			{
				date: "string", // the value is tracking date, ex: Sabtu, 20 Agustus 2022
				time: "string", // the value is tracking time, ex: 10:00
				description: "string", // the value is tracking description, ex: Mobil telah diterima penerima.
			},
		],
	},
}
```

## Confirm Car is Arrived

Request :

-   Method : GET
-   Endpoint : `/history/confirm`
-   Header :
    -   Content-Type: application/json
    -   Accept: application/json
-   Body :

```json5
{
	user_id: "string", // value : user id
	id: "string", // value : history id
}
```

Response :

```json5
{
	status: "boolean", //value : true or false
	message: "string",
}
```

## Booking - Create Booking Code/ID

Request :

-   Method : POST
-   Endpoint : `/booking/create`
-   Body :

```json5
{
	id: "string",
	id_car: "string", // value : car id
	name: "string",
	address: "string",
	phone: "string",
	name_2: "string",
}
```

Response :

```json5
{
	status: "boolean", //value : true or false
	message: "string",
	code: "string", // the value is booking code, ex: #92929379938
}
```

## Booking - Upload Image (ID CARD,FAMILLY CARD,ID CARD 2)

Request :

-   Method : POST
-   Endpoint : `/booking/upload`
-   Body :

```json5
{
	id: "string",
	card_id: "file",
	card_familly: "file",
	card_id_2: "file",
}
```

Response :

```json5
{
	status: "boolean", //value : true or false
	message: "string",
}
```
