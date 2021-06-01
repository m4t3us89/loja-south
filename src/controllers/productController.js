

export async function list(req,res, next){

    try{

        res.status(200).json({
            message: 'list success',
            data: []
        })
    }catch(err){
        next(err)
    }

}


export async function show(req,res, next){

    try{

        res.status(200).json({
            message: 'show success',
            data : {}
        })
    }catch(err){
        next(err)
    }


}


export async function create(req,res, next){

    try{

        res.status(201).json({
            message: 'created success',
            data: {}
        })
    }catch(err){
        next(err)
    }


}


export async function update(req,res, next){

    try{

        res.status(200).send({
            message: 'updated success'
        })
    }catch(err){
        next(err)
    }


}


export async function remove(req,res, next){

    try{

        res.status(200).send({
            message: 'deleted success'
        })
    }catch(err){
        next(err)
    }


}