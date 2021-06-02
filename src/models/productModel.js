import mongoose from '../database/index.js'

import mongoosePaginate from 'mongoose-paginate'

const db = await mongoose()

const ProductSchema = new db.Schema({
    name: {
        type: String,
        required: [true, 'O nome do produto é obrigatório.' ]
        lowercase: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

ProductSchema.plugin(mongoosePaginate)
const Product  = db.model('Product', ProductSchema)

export default Product
