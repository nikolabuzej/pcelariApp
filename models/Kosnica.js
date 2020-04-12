const mongoose=require('mongoose')
const MaticaSchema=new mongoose.Schema({
    boja:{
        type:String,
        default:'Nema'},
    opis:{type:String,
        default:'Nema'}
})
const PreglediSchema=new mongoose.Schema({
    opis:String,
    datum:{
        type:Date,
        default:Date.now
    }
})
const KosnicaSchema= new mongoose.Schema({
    tip:{
        type:String,
        trim:true,
        required:true
    },
    broj:{
        type:Number,
        required:true,
        unique:true
    },
    brojNastavaka:{
        type:Number,
        default:0
    },
    poreklo:{
        type:String,
        default:'Nepoznato'
    },
    opis:{
        type:String,
        default:'Nema Opisa'
    },
    datum:{
        type:Date,
        default:Date.now
    },
    matica:MaticaSchema,
    pregledi:[PreglediSchema]

})
module.exports=mongoose.model('Kosnica',KosnicaSchema)