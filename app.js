
// Object Literals, Pseudo Classes and Methods 

let person1 = {
    myName: 'Garrett', 
    sayHello() {
        console.log(`Hello my name is ${this.myName}`)
    }
}

let person2 = {
    myName: 'Jake', 
    sayHello() {
        console.log(`Hello my name is ${this.myName}`)
    }
}

let person3 = {
    myName: 'Josh', 
    sayHello() {
        console.log(`Hello my name is ${this.myName}`)
    }
}

let person4 = {
    myName: 'Gabriel', 
    sayHello() {
        console.log(`Hello my name is ${this.myName}`)
    }
}

let person5 = {
    myName: 'Heather', 
    sayHello() {
        console.log(`Hello my name is ${this.myName}`)
    }
}

// person1.sayHello()
// person2.sayHello()
// person3.sayHello()
// person4.sayHello()
// person5.sayHello()


function Person(name, city, age) {
this.name = name;
this.city = city;
this.age = age;
}

Person.prototype.Introduction = function() {
    console.log(`${this.name}`)
}


// let Garrett = new Person('Garrett', 'Jasper', 21);
let Jake = new Person('Jake', 'Birmingham', 25);


Jake.Introduction()
// let Josh = new Person('Josh', 'Birmingham', 27);


// Introduction(Garrett.name, Garrett.city, Garrett.age)

class Friend {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
         this.age = age;
    }
   
    Introduction = () => {
        console.log(`Hi my name is ${this.name}, i live in ${this.city}, and i am ${this.age} years old!`)
    }
    
}


let Garrett = new Friend('Garrett', 'Jasper', 21);

Garrett.Introduction()

// Inheritance

class Vehicle {
    constructor(typeOfVehicle, wheels, manufacturer) {
        this.wheels = wheels;
        this.typeOfVehicle = typeOfVehicle
        this.manufacturer = manufacturer;
    }
    aboutVehicle() {
        console.log(`This vehicle is a ${this.typeOfVehicle} made by ${this.manufacturer}. it has ${this.wheels} wheels.`)
    }
}


let GarrettsCoolHondaCivic = new Vehicle('Civic', 4, 'Honda')

GarrettsCoolHondaCivic.aboutVehicle()

class Truck extends Vehicle {
    constructor(typeOfVehicle, wheels, manufacturer, doors, truckBed) {
        super(typeOfVehicle, wheels, manufacturer)
        this.doors = doors;
        this.truckBed = truckBed
    }
    aboutVehicle() {
        if (this.truckBed == true) {
        console.log(`This vehicle is a ${this.typeOfVehicle} made by ${this.manufacturer}. it has ${this.wheels} wheels and ${this.doors} doors. and it does have a truck bed!`)
    } else {
        console.log(`This vehicle is a ${this.typeOfVehicle} made by ${this.manufacturer}. it has ${this.wheels} wheels and ${this.doors} doors. and it does not have a truck bed!`)
    }
}
}

let ToyotaTacoma = new Truck('Truck', 4, 'Toyota', 2, true)
let badTruck = new Truck('Truck', 4, 'Toyota', 2, false)

badTruck.aboutVehicle()
ToyotaTacoma.aboutVehicle()


class Sedan extends Vehicle {
    constructor(typeOfVehicle, wheels, manufacturer, doors, size, mpg) {
        super(typeOfVehicle, wheels, manufacturer)
        this.doors = doors;
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(`This vehicle is a ${this.typeOfVehicle} made by ${this.manufacturer}. it has ${this.wheels} wheels and ${this.doors} doors. it is a ${this.size} ${this.typeOfVehicle}, and gets ${this.mpg} Miles per gallon! `)
    }
}

let GarrettsCivic = new Sedan('Sedan', 4, 'Honda', 4, 'medium', 31);

GarrettsCivic.aboutVehicle()

class Motorcycle extends Vehicle {
    constructor (typeOfVehicle, wheels, manufacturer, handlebars, doors) {
        super(typeOfVehicle, wheels, manufacturer)
        this.handlebars = handlebars;
        this.doors = doors;
    }
    aboutVehicle() {
        if (this.handlebars == true) {
            console.log(`This vehicle is a ${this.typeOfVehicle} made by ${this.manufacturer}. it has ${this.wheels} wheels and ${this.doors} doors. it does have handlebars`)
        } else {
            console.log(`This vehicle is a ${this.typeOfVehicle} made by ${this.manufacturer}. it has ${this.wheels} wheels and ${this.doors} doors. it does not have handlebars`)
        }
    }
}


let harley = new Motorcycle('Motorcycle', 2, 'Harley Davidson', true, 0)
let oopsnobars = new Motorcycle('Motorcycle', 2, 'Harley Davidson', false, 0)


harley.aboutVehicle()
oopsnobars.aboutVehicle()