
import {  listProduct, createProduct, showProduct, updateProduct  } from '../../services/productService.js'

describe('product service', ()=>{
    let _product = null
   
    test('create product', async ()=>{
        const product = await createProduct({name:'coca-cola'})
        _product = product
        expect(product.name).toBe('coca-cola')
    })

    test('list product', async()=>{
        const product = await listProduct()
        expect(product.length).toBe(1)
    })

    test('show product', async()=>{
      const product = await showProduct(_product._id)
      expect(product.toJSON()).toEqual(_product.toJSON())
    })
    
    test('update product', async()=>{
      const data = {name:'guarana jesus'}
      await updateProduct(_product._id, data)
      const product = await showProduct(_product._id)
      expect(product.name).toBe(data.name)
    })

})



