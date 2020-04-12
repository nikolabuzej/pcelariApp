const Kosnica=require('../models/Kosnica')

exports.getKosnice= async(req,res,next)=>{
    try {
        const kosnice=await Kosnica.find()

        return res.status(200).json({
            success:true,
            data:kosnice
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Sever error"
        })
    }
}
exports.getKosnica=async(req,res,next)=>{
    try {
        const kosnica=await Kosnica.findById(req.params.id)
        if(!kosnica){
            return res.status(404).json({
                success:false,
                message:'Nema kosnice'
            })
        }
        return res.status(200).json({
            success:true,
            data:kosnica
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Sever error"
        })
    }
}
exports.postPregled= async(req,res,next)=>{
    try{
        const kosnica=await Kosnica.findById(req.params.id)
        if(!kosnica){
            return res.status(404).json({
                success:false,
                message:'Nema kosnice'
            })
        }
        const pregled=req.body
         kosnica.pregledi.push(pregled)
         await kosnica.save()
        return res.status(201).json({
            success:true,
            data:kosnica
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Sever error"
        })
    }

}
exports.postKosnica= async(req,res,next)=>{
    try{
    const kosnica=await Kosnica.create(req.body)
    return res.status(201).json({
        success:true,
        data:kosnica
    })}
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Sever error",
            
        })
    }

}
exports.deleteKosnica=async(req,res,next)=>{
    try {
        const kosnica=await Kosnica.findById(req.params.id)
        if(!kosnica){
            return res.status(404).json({
                success:false,
                message:'Nema kosnice'
            })}
            await kosnica.remove()
            return res.status(200).json({
                success:true,
                data:{}
            })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Sever error"
        })
    }
}