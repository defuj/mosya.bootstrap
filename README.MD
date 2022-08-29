<h1 align="center">
  <a href="https://github.com/defuj/mosya.bootstrap">
    Mosya - Mobil Syariah API DOC
  </a>
</h1>

<p align="center">
  <a href="https://github.com/defuj/moza/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Mosya - Mobil Syariah is released under the MIT license." />
  </a>
  <a href="https://getbootstrap.com/docs/4.6/getting-started/download/">
    <img src="https://img.shields.io/badge/Bootstrap-v4.6.2-informational?style=flat&logoColor=white"/>
  </a>

</p>

# API Spec for agen

## Authentication

All API must use this authentication

Request :

-   base url: http://124.158.169.186:8080
-   base_url_image: https://assetsmoza.pakeaplikasi.com/
-   Auth :
    -   username : "!array-smd2021"
    -   password : "be677fab93e92122d10851df008a3098187a298051eb1403e6d88e7f31a55a41"
-   Header :
    -   tulaks : "53a206a7fcfc80eac70514297ba3b112fff958a1bace234b0a16a6f4ed17403a"

## :heavy_check_mark: SIGN

Request :

-   Method : POST
-   Endpoint : `api/auth/sign`
-   Header :
    -   Content-Type: application/json
    -   Accept: application/json
-   Body :

```json5
{
	user: "string", //example : 6282245672763 or user@mail.com
	password: "string",
}
```

Response :

```json5
{
	status: "boolean", //value : true or false
	message: "string",
	user_id: "integer",
}
```

## :heavy_check_mark: Check Email/Phone Number is available

Request :

-   Method : POST
-   Endpoint : `api/auth/check`
-   Header :
    -   Content-Type: application/json
    -   Accept: application/json
-   Body :

```json5
{
	user: "string,unique", //example : 6282245672763 or user@mail.com
	type: "string", //value : email or phone
}
```

Response :

```json5
{
	status: "boolean", //value : true or false
	type: "string", //example : 6282245672763 or user@mail.com
	message: "string",
}
```
