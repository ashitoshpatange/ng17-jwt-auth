import config  from './config';
import mongoose from 'mongoose';


const db = async ()=>{
    await mongoose.connect(config.mongoUrl as string)
    .then(()=>{
        console.log('Database connected successfully.');
    })
    .catch((error)=>{
        console.log('Error connecting to Mongo database: ', error)
    })
}

export default db;