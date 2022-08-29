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

<details>
<summary>Authentication</summary>

## Authentication

All API must use this authentication

Request :

-   base url: `https://`
-   Auth :
    -   username : "username"
    -   password : "password"
-   Header :
    -   tulaks : "tulaks"

</details>

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
		address: "string",
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
	address: "string",
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
		address: "string",
		image: "string",
	},
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
