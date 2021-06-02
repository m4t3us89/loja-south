## Loja South API

# Instalação
npm i
npm run dev


# Documentação
**Bse url:  https://loja-south.herokuapp.com/**

```sh

| Perfil |  Token Acesso |
| ------ | ------ |
| Gerente | hlQ7dN5W5MwtEMj2OIa17a |
| Cliente | hlQ7dN5W5MwtEMj2OIa17b |

**Para todas as requisições é necessário informar o token de acesso (Authorization)**

# produto
| ------ | ------ |
| GET    | /product |
| GET    | /product/{id} |
| POST   | /product
| PUT    | /product/{id} |
| DELETE | /product/{id} |

*Para perfil gerente no método get (listar) pode paginar a consulta utilizando as query params (offset e limit).
 
```
