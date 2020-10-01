const uuidv4 = require('uuidv4');

module.exports = class {

    constructor(name, type, username, password, email, uid = null) {
        
        this.name = name;
        this.type = type;
        this.username = username;
        this.password = password;
        this.email = email;
        
        if(uid == null){
            this.uid = uuidv4.uuid();
        }else{
            this.uid = uid; 
        }
    }
  }