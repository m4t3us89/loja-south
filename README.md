# Loja South API

## Instalação
npm i

npm run dev


## Documentação
**Bse url:  https://loja-south.herokuapp.com/**



| Perfil  |        Token Acesso    |
| ------  |          ------        |
| Gerente | hlQ7dN5W5MwtEMj2OIa17a |
| Cliente | hlQ7dN5W5MwtEMj2OIa17b |

**Para todas as requisições é necessário informar o token de acesso no cabeçalho (Authorization).**

**Produto**
| Método  |   Path   | Body | Query |
| ------ | ------ |------ |------ |
| GET    | /product      |  -              |  offset={n}&limit={n}  |  
| GET    | /product/{id} |  -              | -                      |
| POST   | /product      | { name:Sting }  | -                      |
| PUT    | /product/{id} | { name:String } | -                      |
| DELETE | /product/{id} | -               | -                      |



