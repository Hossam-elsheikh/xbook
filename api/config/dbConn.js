const mongoose = require('mongoose')
const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.DATABASE_URI)
    } catch (error) {
        console.log(err);
        
    }
}
module.exports = connectDB

