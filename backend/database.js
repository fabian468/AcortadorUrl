import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://fabianaranda:Nijota-1993@cluster0.ftq6v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Db is connected'))
    .catch(err => console.log(err));