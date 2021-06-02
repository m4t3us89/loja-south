import { config } from 'dotenv'
config()

import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongo Connection Error:'));
db.once('open', ()=>console.log('Mongo Connected'));

export default mongoose