let grupo=require('../models/worker')
let crud=require('../../crud/crud');

module.exports={
    list:(req,res)=>{
        res.json( "Trabajadores:" + crud.list());
    },

    add:(req,res)=>{   
        console.log(req.body)
        let id=req.body.id;
        let name=req.body.name;
        let email=req.body.email;
        let phone=req.body.phone;
        let company=req.body.company;
        let occupation=req.body.occupation;
        let nuevo=new grupo(id,name,email,phone,company,occupation);
        crud.add(nuevo)
        res.json("Se añadio a: "+req.body.name+" id: "+req.body.id+" email:"+req.body.email+" phone :"+req.body.phone+" company: "+req.body.company+" occupation: "+req.body.occupation);
    },

    search:(req,res)=>{
        let name=req.body.name;
        let found=crud.search(name);
        if(found===null){
            res.json("No se encontró el Trabajador");
        }
        else{
            res.json("Se encontró a el Trabajador: "+ found.info());
        }
    
    },

    delete:(req,res)=>{
        let id=req.body.id;
        let erase=crud.delete(id);
        if(erase==null){
            res.json("No se encontro ,id:"+req.body.id)
        }
        else{
            res.json(`Se eliminó a '${delet.nombre}'`)
        }
    },
}
