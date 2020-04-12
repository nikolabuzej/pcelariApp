const mongoose=require('mongoose')

const connectDB= async()=>{
try {
    console.log(process.env.MONGO_URI)
    const conn= await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true
    })
    console.log(`Mongo DB connected ${conn.connection.host}`)
} catch (error) {
    console.log(`error ${error.message}`)
    process.exit(1)
}

}
module.exports=connectDB