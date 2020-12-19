
class Emisor {
    constructor() {
        this.eventos = {};
    }
    
}
Emisor.prototype.on = function(type, listener){
    this.eventos[type] = this.eventos[type] || [];
    this.eventos[type].push(listener);
};
Emisor.prototype.emit = function (type){
    if(this.eventos[type]){
        this.eventos[type].forEach((listener) => listener());

    }
};
module.exports = Emisor;
