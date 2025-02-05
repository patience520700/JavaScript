// Objects
// key-value pairs in curly braces
const vehicle = {
    wheels: 4,
    engine: function () {
        return "Vrroooom!";
    }
}
const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () { 
    return "Whoooosh!";
};
console.log(car.engine());
console.log(car.wheels);
const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function () {
    return "Shhhhh...";
};
console.log(tesla.engine());