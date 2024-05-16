import express from 'express';
import config from './config/config';
import UserRoute from './users/UserRoute';
import db from './config/db';

const app = express();
app.use(express.json());

// app.get('/', (req, res)=>{
//     res.json({message:'App is working fine'})
// });
db();

app.use('/api/users', UserRoute);


app.listen(config.port, ()=>{
    console.log(`Server is running on port: ${config.port}`)
});