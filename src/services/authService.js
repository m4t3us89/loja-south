import { setTimeout } from 'timers/promises'

export async function validateToken(token){

    //simulação
    //faço uma validação se o token é válido em um possível serviço de autenticação
    await setTimeout(1000)

    return new Promise((resolve,error)=>{
        //token gerente
        if(token == 'hlQ7dN5W5MwtEMj2OIa17a'){
            resolve( {
                name: 'Gerente da Silva',
                profile: 'M',
            })
        }

        //token cliente
        else if(token == 'hlQ7dN5W5MwtEMj2OIa17b'){
            resolve( {
                name: 'Cliente da Silva',
                profile: 'C',
                rules: []
            })
        }

        //token "outro papel"  adicionar, remover e alterar produto
        else if(token == 'hlQ7dN5W5MwtEMj2OIa17c'){
            resolve( {
                name: 'Outro da Silva',
                profile: 'A', 
                rules : ['C','U','D'] //permite criar, alterar e deletar produto(s)
            })
        }


        error({statusCode:401})
    })

}