'use strict'

class Animal {
	constructor(species){
		this.species = species;
	} 
  eat(){
    console.log("Nom, nom, nom");
  }
  speak(){
    console.log(this.species + " makes a sound");
  }
}

class Dog extends Animal {
	constructor(name){
		super("Dog");
		this.name = name;
	}
	speak(){
		console.log(this.name + " says hello!");
	}
}

var critter = new Animal("dog");
console.log(critter.species);
critter.eat();
critter.speak();

var dog = new Dog("Molly");
console.log(dog.species);
dog.speak();