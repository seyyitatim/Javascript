// // Array

// const data = [
//     { name: "IPhone 8", price: 3000 },
//     { name: "IPhone 7", price: 2500 },
//     { name: "IPhone 6", price: 2000 },
//     { name: "IPhone 5", price: 1500 }
// ]
// let phones = data.map(function(phone){
//     return phone;
// });
// let prices = data.map(function(phone){
//     return phone.price;
// })
// console.log(phones);
// console.log(prices);

//------------------------------------------------------------------------------------------


// // Object Literals

// // ES5'te class yok ama bu şekilde tanımlayarak class gibi kullanabiliriz.
// //Yöntem 1
// function Person(name,yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function(){
//         return new Date().getFullYear() - yearOfBirth;
//     }
// }
// // Yöntem 2
// let Person = function(name,yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function(){
//         return new Date().getFullYear() - yearOfBirth;
//     }
// }
// let seyyit = new Person("seyyit",1997,"computer engineer");

// console.log(seyyit.name);
// console.log(seyyit.yearOfBirth);
// console.log(seyyit.job);
// console.log(seyyit.calculateAge())

//------------------------------------------------------------------------------------------

// // Prototype
// function Person(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function () {
//     return new Date().getFullYear() - this.yearOfBirth;
// }

// let seyyit = new Person("seyyit",1997,"computer engineer");

// console.log(seyyit);
// console.log(seyyit.calculateAge());

//------------------------------------------------------------------------------------------

// function Employee(name, salary) {
//     if (!(this instanceof Employee)) {
//         return new Employee(name, salary);
//     }

//     this.name = name;
//     this.salary = salary;
// }

// Employee.prototype.calculateSalary = function () {
//     var month = new Date().getMonth() + 1;
//     var tax = 0, total = 0;
//     var total = this.salary * month;

//     if (total <= 20000) {
//         tax = total * 0.2;
//     }
//     else if (total > 20000 && total <= 30000) {
//         tax = total * 0.25;
//     }
//     else {
//         tax = total * 0.3;
//     }

//     return {
//         tax: tax,
//         paid: total - tax
//     }
// }

// var emp1 = Employee("Yiğit", 3000);
// var emp1_salary = emp1.calculateSalary();
// console.log(`${emp1.name} isimli personel toplam ${emp1_salary.tax} vergi kesintisi ile ${emp1_salary.paid} maaş almıştır.`);

// var emp2 = new Employee("Can", 4000);
// var emp2_salary = emp2.calculateSalary();
// console.log(`${emp2.name} isimli personel toplam ${emp2_salary.tax} vergi kesintisi ile ${emp2_salary.paid} maaş almıştır.`);

//------------------------------------------------------------------------------------------

// // Prototypal Inheritance

// function Person(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function () {
//     return new Date().getFullYear() - this.yearOfBirth;
// }

// let Teacher = function (name, yearOfBirth, job, subject) {
//     Person.call(this, name, yearOfBirth, job); // sıralamanın önemi var
//     this.subject = subject;
// }

// // Inherit the Person prototype methods
// Teacher.prototype = Object.create(Person.prototype);

// // set Teacher constructor
// Teacher.prototype.constructor = Teacher;

// Teacher.prototype.greeting = function () {
//     return "hello my name is" + this.name;
// }


// let emel = new Teacher("emel", 1989, "teacher", "math");

// console.log(emel)
// console.log(emel.calculateAge())

//------------------------------------------------------------------------------------------

// // callback function

// var val1, val2;

// function MultipleByTwo(a, b, c, callback) {
//     var arr = [];
//     if (callback && typeof callback === "function") {
//         for (let i = 0; i < 3; i++) {
//             arr[i] = callback(arguments[i] * 2);
//         }
//     } else {
//         for (let i = 0; i < 3; i++) {
//             arr[i] = arguments[i] * 2;
//         }
//     }
//     return arr;
// }

// function addOne(a) {
//     return a + 1;
// }

// val1 = MultipleByTwo(10, 20, 30, addOne);
// val2 = MultipleByTwo(10, 20, 30);

// console.log(val1);
// console.log(val2);

//------------------------------------------------------------------------------------------

// // Immediate Functions

// // Bir fonskiyonun sadece site yüklendiğin de bir kez çalışmasını istediğimizde kullabiliriz.
// // 2 farklı kullanımı mevcut

// // (function(){})()

// // (function(){}())

// (function () {
//     var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     var today = new Date();
//     var msg = `Welcome. Today is ${days[today.getDay()]}`;

//     console.log(msg);
// }())


//     (function (name) {
//         var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//         var today = new Date();
//         var msg = `Welcome ${name}. Today is ${days[today.getDay()]}`;

//         console.log(msg);
//     })("Seyyit");

//------------------------------------------------------------------------------------------

// Getter & Setter
// var person = {
//     name: "Seyyit",
//     surname: "Atım",

//     getFullName: function () {
//         return `${this.name} ${this.surname}`;
//     },

//     setFullName: function (value) {
//         var parts = value.split(" ");
//         this.name = parts[0];
//         this.surname = parts[1];
//     }
// }

// person.setFullName("ali veli")
// console.log(person.getFullName());
// console.log(person);

// var person = {
//     name: "Seyyit",
//     surname: "Atım",

//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },

//     set fullName(value) {
//         var parts = value.split(" ");
//         this.name = parts[0];
//         this.surname = parts[1];
//     }
// }
// person.fullName = "Ali Veli";
// console.log(person.fullName);
// console.log(person);


//------------------------------------------------------------------------------------------

// Call, Apply & Bind

// var welcome = function () {
//     console.log("Welcome " + this.name);
// }

// var welcome = function (a, b) {
//     console.log("Welcome " + this.name + ". Are you interested in " + a + " and " + b);
// }

// var yigit = { name: "yiğit" };
// var emel = { name: "emel" }

// without parameters

// welcome.call(yigit);

// welcome.apply(emel);

// welcomeYigit = welcome.bind(yigit);
// welcomeYigit();

// welcome.call(yigit, "asp.net", "angular");

// welcome.apply(emel,["java","react"]);

// welcomeYigit = welcome.bind(yigit);
// welcomeYigit("python","vue");

//Example

// var num = {
//     min: 0,
//     max: 100,
//     checkNumericRange: function (value) {
//         if (typeof value !== "number") {
//             return false;
//         } else {
//             return value >= this.min && value <= this.max;
//         }
//     }
// }

// console.log(num.checkNumericRange(60));
// console.log(num.checkNumericRange(120));


// var num1 = {
//     min: 30,
//     max: 75
// }

// console.log(num.checkNumericRange.call(num1,40));
// console.log(num.checkNumericRange.apply(num1,[90]));

// checkNumber = num.checkNumericRange.bind(num1);
// console.log(checkNumber(80));
// console.log(checkNumber(50));
