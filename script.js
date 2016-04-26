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

// Bonus

class Pit extends Dog {
 	constructor(weight) {
 		super("Molly");
 		this.job = "herding and guarding";
 		this.breed = "Guarding";
 		if (weight < 20) {
 			console.log("Increase weight");
 		}
 	}
}

class Chihuahua extends Dog {
 	constructor(weight) {
 		super("Polly");
 		this.job = "being a pal";
 		this.breed = "Companion";
 		if (weight < 7) {
 			console.log("Increase weight");
 		}
	}
}

var critter = new Animal("dog");
console.log(critter.species);
critter.eat();
critter.speak();

var dog = new Dog("Molly");
console.log(dog.species);
dog.speak();

var myDog = new Pit(15);

