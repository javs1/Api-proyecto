class Worker{

    constructor(id,name,email,phone,company,occupation){
        this.id=id;
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.company=company;
        this.occupation=occupation;
    }

    info(){
        return this.id + this.name + this.email + this.phone + this.company + this.occupation;
    }

}

module.exports=Worker;