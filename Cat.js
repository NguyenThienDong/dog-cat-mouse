var Mouse = require('./Mouse')

function Cat() {
	this.stomach = [];
}

Cat.prototype.eat = function(animal){
	if(animal instanceof Mouse){
		this.stomach.push(Mouse);
	}else{
		throw new Error('Cat is not able to eat!')
	}
};

module.exports = Cat;