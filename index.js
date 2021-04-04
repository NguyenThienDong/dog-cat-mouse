var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var dog = new Dog();
var cat = new Cat();
var mouse = new Mouse('Mikey');

try{
	cat.eat(dog);
}catch{
	console.log('Error while a cat eat a dog! ');
}

console.log(cat);