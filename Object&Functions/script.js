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

