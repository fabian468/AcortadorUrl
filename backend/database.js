import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.SRV_CONNECT_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Db is connected'))
    .catch(err => console.log(err));
