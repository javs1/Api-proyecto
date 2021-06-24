const router= require('express').Router();

let worker=require("./worker");
router.use("/worker",worker)

module.exports=router;