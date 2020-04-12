const express=require('express')
const {getKosnice, postKosnica,deleteKosnica, postPregled,getKosnica}=require('../controllers/Kosnice')

const router=express.Router()

router.route('/').get(getKosnice).post(postKosnica)
router.route('/:id').delete(deleteKosnica)
router.route('/addPregled/:id').post(postPregled)
router.route('/displayKosnica/:id').get(getKosnica)
module.exports=router