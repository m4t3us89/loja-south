


export default function(...allowed){
    return (req, res, next) => {
        const { userCredentials,  method } = req

        const profile = userCredentials.profile

        if(profile == 'M') next() //gerente tem acesso a todos os recursos

        if(!allowed.includes(profile)) next({statusCode:401})

        if(profile !== 'C')//para outros papeis, verifico se pode acessar o recurso atraves do verbo da requisição
            if(!userCredentials.can.includes(method)) next({statusCode:401})
        
        next()

    }
}