const routes = new Map([
    [
        '/product' , 
        {
            GET : ['M']
        }
    ] 
])

//método reponsável por tratar o acesso às rotas
export default function(req, res, next) {
      
      const { path, method }  = req

      console.log('path '  , path)
      console.log('verbo ' , method)
     
      const profile = req.userCredentials.profile;

      const rules = req.userCredentials.rules

      const isAuthorization = routes.get(path)[method].some(p=>profile === p)

      console.log(isAuthorization)
        
      if (!isAuthorization) 
        next({statusCode:401})
       

      next()
    
  }