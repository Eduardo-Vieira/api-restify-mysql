module.exports = class {
    constructor(uid, name, type) {
        this.uid = uid;
        this.name = name;
        this.type = type;
    }
    toString(){
        return `String class => ${this.uid},${this.name},${this.type}`
    }
  }