const express=require('express')
const dotenv=require('dotenv')
const Kosnice=require('./routes/Kosnice')
const connectDB=require('./config/db')
const app=express()
dotenv.config({path:'./config/config.env'})
const PORT=process.env.PORT || 5000
connectDB()
app.use(express.json())
app.use('/api/kosnice',Kosnice)


app.listen(PORT,console.log('Server running....'))