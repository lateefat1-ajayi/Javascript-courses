//Four ways of creating objects

//1. Literal notation : not inheritable and not reusable , but readily available for use

const student = {
    name: "sloiu",
    age : 10,
    printAge: function (){
        console.log(`${this.name}'s age is ${this.age} `)
    }
}

console.log(student.printAge());

//2. Object constructor : It is same as literal notation, just that it helps to create object dynamically using "new Object()"

const person = new Object();

person.name = "Feranmi";
person.age = 30;

console.log(person)

//3. Construction function : This creates a blueprint and is reusable. But inheritance is likely complex to structure.

function car(name, colour, brand, horsePower){
    this.name = name;
    this.colour = colour;
    this.brand = brand;
    this.horsePower = horsePower;

}

car.prototype.printName = function(){
    console.log(`the car name is a ${this.name}`)
}

car.prototype.printColour = function(){
    console.log(`the car is ${this.colour}`)
}
const car1 = new car("toyota corolla", "white", "toyota", 200)
console.log(car1)

console.log(car1.printName());
console.log(car1.printColour())

//4. class : It is inheritable and reusable. It extends the functionality of constructor function
class House {
    constructor (type, color, address){
        this.type = type;

        this.color = color;

        this.address = address;
    }

    printHouseAddress(){
        console.log(`${this.address} is the address of the ${this.color} house`);
    }
}

const house1 = new House("duplex", "brown", "14, Pegamut Estate")
console.log(house1);
console.log(house1.printHouseAddress());

//Inheritance: it uses extend and a super keyword

class storeyBuilding extends House {
   
    constructor (type, color, address, height, windowSize){
        super(type, color, address)
        this.height = height;
        this.windowSize = windowSize
    }
    printHouseAddress(){
        console.log(`${this.address} is the address of the house with ${this.height} height`);
    }

    printType(){
        console.log(`${this.type} is the house type`);
    }
}

const newStoreyBuilding = new storeyBuilding("mansion", "white", "40, Unique Estate", 200, 16)

console.log(newStoreyBuilding);
console.log(newStoreyBuilding.printHouseAddress());
console.log(newStoreyBuilding.printType());


//CLASSWORK
