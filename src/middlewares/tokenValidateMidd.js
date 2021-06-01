import { validateToken } from '../services/authService.js'

export default async function(req, res, next){

    try {

        const { authorization : token } = req.headers
        if(!token) throw ({statusCode:403})
        
        const userCredentials = await validateToken(token)
        
        req.userCredentials = userCredentials
        
        next()
    } catch (err) {
        const { statusCode } = err

        next({statusCode})
    }

}

