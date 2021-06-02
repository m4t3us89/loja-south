import Product from '../models/productModel.js'


export function createProduct(product){

    return Product.create(product)

}


export function listProduct(){

    return Product.find()

}


export async function showProduct(_id){

    if(!_id) throw new Error(`ID não informado.`)

    await Product.exists( { _id } )
    return Product.findOne({ _id })

}


export async function updateProduct(_id, product){

    if(!_id) throw new Error(`ID não informado.`)
    await Product.exists( { _id } )
    return Product.updateOne( { _id }, product)

}


export async function deleteProduct(_id){

    if(!_id) throw new Error(`ID não informado.`)
    await Product.exists( { _id } )
    return Product.deleteOne( {_id} )

}



