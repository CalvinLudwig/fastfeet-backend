<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="https://raw.githubusercontent.com/Rocketseat/bootcamp-gostack-desafio-02/master/.github/logo.png" width="300px" />
</h1>

### Endpoints

<hr>

`
POST /sessions
`

Responsible for API authentication.

  Required params:

- email
- password

If success, you will receive a JsonWebToken. Use it on requests that require authentication.

<hr>

`
POST /recipients
`

<b>Authentication required</b>

Recipient registration.

Required params:

- name
- street_address
- number (integer)
- city
- state
- postal_code (integer)
  
Optional params:

- complement

<hr>

`
PUT /recipients/{recipient_id}
`

<b>Authentication required</b>

Recipient update.

Optional params:

- name
- street_address
- number (integer)
- city
- state
- postal_code (integer)
- complement