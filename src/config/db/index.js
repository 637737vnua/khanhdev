const mongoose = require('mongoose');
async function connect(){
    try{
        await mongoose.connect('mongodb+srv://duykhanh:@12345@cluster0.ngzah.mongodb.net/poco?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
         });
        console.log("Connect successfully!!!");
    }catch (error) {
        console.log("Connect failure!!!");
    }
} 
module.exports = { connect };