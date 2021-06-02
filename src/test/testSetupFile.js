import { config } from 'dotenv'
config()

import mongoose from 'mongoose'


beforeAll(done =>{
  mongoose.connect(process.env.MONGO_TEST_SUITE, (err)=>{done()})
}) 

afterAll(done => {
  function clearDB() {
    for (let i in mongoose.connection.collections) {
      mongoose.connection.collections[i].remove(function() {});
    }
    mongoose.disconnect()
    done()
  }
  clearDB()
})