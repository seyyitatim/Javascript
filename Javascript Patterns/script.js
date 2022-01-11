// // Module

// var Module = (function(){

//     //private member and function
//     let number = 0;

//     let increment = function(){
//         return ++number;
//     }

//     let decrement = function(){
//         return --number;
//     }

//     //public member and function
//     return {
//         increment,
//         decrement
//     }
// })();

// console.log(Module.increment());
// console.log(Module.increment());
// console.log(Module.decrement());

//------------------------------------------------------------------------------------------

// Example

// var ProductController = (function(){

//     const products = [];

//     const addProduct = function(product){
//         products.push(product);
//     }

//     const removeProduct = function(product){
//         var index = products.indexOf(product);
//         products.splice(index,1);
//     }

//     const getProducts = function(){
//         return products;
//     }

//     return {
//         addProduct,
//         removeProduct,
//         getProducts
//     };
// })();

// var datas = [
//     {name:"bmw",price:5000},
//     {name:"mercedes",price:7000},
//     {name:"opel",price:4000}
// ]

// ProductController.addProduct(datas[0]);
// ProductController.addProduct(datas[1]);
// ProductController.addProduct(datas[2]);
// ProductController.removeProduct(datas[0]);

// console.log(ProductController.getProducts());

//---------

// var datas = [
//     { name: "bmw", price: 5000 },
//     { name: "mercedes", price: 7000 },
//     { name: "opel", price: 4000 }
// ]

// var ProductController = (function (datas) {

//     const products = datas || [];

//     const addProduct = function (product) {
//         products.push(product);
//     }

//     const removeProduct = function (product) {
//         var index = products.indexOf(product);
//         products.splice(index, 1);
//     }

//     const getProducts = function () {
//         return products;
//     }

//     return {
//         addProduct,
//         removeProduct,
//         getProducts
//     };
// })(datas);


// ProductController.removeProduct(datas[0]);

// // console.log(ProductController.getProducts());

// var extended = (function (m) {

//     m.sayHi = function () {
//         console.log("hello from extended module");
//     }

//     return m;
// })(ProductController || {});

// extended.sayHi();
// console.log(extended.getProducts());

//------------------------------------------------------------------------------------------

// Singleton Pattern

// var Singleton = (function(){

//     var instance;

//     const createInstance = function(){
//         return {
//             randomNumber : Math.random()
//         }
//     }

//     return {
//         getInstance : function(){
//             if(instance == null){
//                 instance = createInstance();
//             }
//             return instance;
//         }
//     }
// })();

// const instance1 = Singleton.getInstance();
// const instance2 = Singleton.getInstance();

// console.log(instance1);
// console.log(instance2);


// var singleton = (function () {

//     var instance;

//     var ProductController = function () {

//         let cars = [
//             { name: "bmw", price: 5000 },
//             { name: "mercedes", price: 7000 },
//             { name: "opel", price: 4000 }
//         ];

//         const add = function (car) {
//             cars.push(car);
//         }

//         const get = function () {
//             return cars;
//         }

//         return {
//             add, get
//         };
//     }

//     return {
//         getInstance: function () {
//             if (!instance) {
//                 instance = new ProductController();
//             }
//             return instance;
//         }
//     };
// })();

// var instance1 = singleton.getInstance();
// var instance2 = singleton.getInstance();

// instance1.add({ name: "ford", price: 6000 });
// console.log(instance2.get());

//------------------------------------------------------------------------------------------

// Factory Pattern

function Factory(){

    this.createEmployee = function(type){

        var employee;

        if(type==='fulltime'){
            employee = new FullTime();    
        }else if(type==='parttime'){
            employee = new PartTime();
        } else if(type==='temporary'){
            employee = new Temporary();
        }
        employee.type = type;
        employee.say = function(){
            console.log(this.type + ' : saatlik ücreti : '+ this.hourly);
        }
        return employee;
    }
}

class FullTime{
    constructor() {
        this.hourly = "30TL";
    }
}
class PartTime{
    constructor() {
        this.hourly = "20TL";
    }
}
class Temporary{
    constructor() {
        this.hourly = "15TL";
    }
}
// var FullTime = function(){
//     this.hourly = '30TL';
// }

// var PartTime = function(){
//     this.hourly = '20TL';
// }

// var Temporary = function(){
//     this.hourly = '15TL';
// }

var factory = new Factory();

var employees = [];

employees.push(factory.createEmployee('fulltime'));
employees.push(factory.createEmployee('parttime'));
employees.push(factory.createEmployee('parttime'));
employees.push(factory.createEmployee('temporary'));
employees.push(factory.createEmployee('temporary'));
employees.push(factory.createEmployee('fulltime'));

employees.forEach(function(emp){
    emp.say();
})

