import mongoose from '../database/index.js'

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const Product  = mongoose.model('Product', ProductSchema)

export default Product