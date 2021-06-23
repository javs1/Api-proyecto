class Worker {

        constructor(){
            this.data=new Array();
        }

        add(worker){
            this.data.push(worker);
        }
        
        list(){
            return JSON.stringify(this.data);
        }

        search(data){
            console.log(this.data)
            for(let i=0;i<this.data.length;i++){
                if (data==this.data[i].data)
                    return this.data[i];
            }
            return null;
        }

        delete(id){
            for(let i=0;i<this.data.length;i++){
                if (id==this.data[i].id)
                    return this.data[i];
            }
            return null;
        }
        
    }

module.exports=new Worker()