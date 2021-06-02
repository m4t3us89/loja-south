import { createProduct, listProduct, showProduct, deleteProduct, updateProduct} from '../services/productService.js'

export async function list(req,res, next){

    try{

        const products = await listProduct()

        res.status(200).json({
            message: 'list success',
            data: products
        })
    }catch(err){
        next({statusCode:400,message:err})
    }

}


export async function show(req,res, next){

    try{

        const id = req.params.id

        const product = await showProduct(id)

        res.status(200).json({
            message: 'show success',
            data : product
        })
    }catch(err){
        next({statusCode:400,message:err})
    }


}


export async function create(req,res, next){

    try{
        const data = req.body

        const product = await createProduct(data)

        res.status(201).json({
            message: 'created success',
            data: product
        })
    }catch(err){
        next({statusCode:400,message:err})
    }


}


export async function update(req,res, next){

    try{

        const data = req.body

        const id = req.params.id

        await updateProduct(id, data)

        res.status(200).send({
            message: 'updated success'
        })
    }catch(err){
        next({statusCode:400,message:err})
    }


}


export async function remove(req,res, next){

    try{

        const id = req.params.id

        await deleteProduct(id)

        res.status(200).send({
            message: 'deleted success'
        })
    }catch(err){
        next({statusCode:400,message:err})
    }


}