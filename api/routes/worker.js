const router=require('express').Router();
let workercontroll=require('../controllers/worker')

router.get('/',(req,res)=>{
    workercontroll.list(req,res);
})

router.get('/:Name', (req,res)=>{
    workercontroll.search(req,res);
})

router.post('/',(req,res)=>{
    workercontroll.add(req,res);
})

router.delete('/:id',(req,res)=>{
    workercontroll.delete(req,res);
})
module.exports=router;