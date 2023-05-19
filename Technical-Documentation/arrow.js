
// function Living (){
//     this.isAlive = true
// }

function Animal(legs, teeth){
this.eat = function(){
    console.log("eating..")
}
this.legs = legs;
this.teeth = teeth

}
// Animal.prototype.eat=function(){
//     console.log("eat");
// }
// console.log(Animal.prototype=Living.prototype)
// Animal.prototype = {}

// Animal.prototype.run = function(){
//     console.log("running...")
// }
const dog = new Animal(4,56);
dog.eat();
// dog.run();
console.log(dog.legs)
console.log(Animal.prototype.constructor, Animal.constructor, dog.constructor)


