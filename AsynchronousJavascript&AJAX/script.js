// How to use AJAX

// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         console.log(xhr.responseText);
//     }
// }

// xhr.onprogress = function(){
//     console.log("on progressing");
// }

// xhr.open("GET","msg.txt",true); // if you want to make it async, choose true.
// xhr.send();

// console.log("hello")

// xhr.open("GET","msg.txt",false); // if you want to make it async, choose true.
// xhr.send();

// console.log("hello")

//------------------------------------------------------------------------------------------

// document.querySelector("#getEmployee").addEventListener("click", () => {
//     var loadImage = document.querySelector("#loading");
//     loadImage.style.display = "block";

//     setTimeout(() => {
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", "employees.json", true);

//         xhr.onprogress = function () {
//             document.querySelector("#loading")
//         }
//         xhr.onload = function () {
//             if (this.status === 200) {
//                 let employees = JSON.parse(this.responseText);

//                 let html = `
//                     <tr>
//                         <td>${employees[0].firstName}</td>
//                         <td>${employees[0].lastName}</td>
//                         <td>${employees[0].age}</td>
//                         <td>${employees[0].retired}</td>
//                     </tr>`;

//                 document.querySelector("#employees").innerHTML = html;
//                 loadImage.style.display = "none";
//             }
//         }

//         xhr.send();
//     }, 2000);
// })

// document.querySelector("#getEmployees").addEventListener("click", loadEmployees);

// function loadEmployees() {
//     var loadImage = document.querySelector("#loading");
//     loadImage.style.display = "block";

//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "employees.json", true);

//     xhr.onload = function () {
//         if (this.status === 200) {
//             document.querySelector("#employees").innerHTML = "";

//             let employees = JSON.parse(this.responseText);

//             var html = "";
//             employees.forEach(employee => {
//                 html += `
//                 <tr>
//                     <td>${employee.firstName}</td>
//                     <td>${employee.lastName}</td>
//                     <td>${employee.age}</td>
//                     <td>${employee.retired}</td>
//                 </tr>`;


//             });
//             loadImage.style.display = "none";
//             document.querySelector("#employees").innerHTML = html;
//         }
//     }

//     xhr.send();
// }

//------------------------------------------------------------------------------------------

// Asynchronous Programming with callback

// var products = [
//     { id: 1, name: "samsung S8", price: 3000 },
//     { id: 2, name: "samsung S7", price: 2000 },
//     { id: 3, name: "samsung S6", price: 1000 }
// ]

// function addProduct(prd, callback) {
//     setTimeout(() => {
//         products.push(prd);
//         callback();
//     }, 2000);
// }

// function getProducts() {
//     setTimeout(() => {
//         products.forEach(p => {
//             console.log(p.name);
//         })
//     }, 1000)
// }

// addProduct({ id: 4, name: "samsung S5", price: 500 }, getProducts);

//--------

// var products = [
//     { id: 1, name: "samsung S8", price: 3000 },
//     { id: 2, name: "samsung S7", price: 2000 },
//     { id: 3, name: "samsung S6", price: 1000 }
// ]

// let added = false;

// function addProduct(prd, callback) {
//     if (added) {
//         setTimeout(() => {
//             products.push(prd);
//             callback(null, prd);
//         }, 2000);
//     } else {
//         callback("500", prd)
//     }
// }

// function getProducts() {
//     setTimeout(() => {
//         products.forEach(p => {
//             console.log(p.name);
//         })
//     }, 1000)
// }

// addProduct({ id: 4, name: "samsung S5", price: 500 }, function (err, data) {
//     if (err) {
//         console.log("Hata: " + err);
//     } else {
//         console.log(data);
//     }
// });

//------------------------------------------------------------------------------------------

// Promise

// var products = [
//     { id: 1, name: "samsung S8", price: 3000 },
//     { id: 2, name: "samsung S7", price: 2000 },
//     { id: 3, name: "samsung S6", price: 1000 }
// ]

// function addProduct(prd) {

//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             products.push(prd);
//             let added = true;
//             if (added) {
//                 resolve();
//             } else {
//                 reject("Hata: 400");
//             }
//         }, 2000);
//     });
// }

// function getProducts() {
//     setTimeout(() => {
//         products.forEach(p => {
//             console.log(p.name);
//         })
//     }, 1000)
// }

// addProduct({ id: 4, name: "samsung S5", price: 500 })
//     .then(getProducts)
//     .catch(err => {
//         console.log(err);
//     })

//---------------------------------------------------------------------------------------

//Promise Example

// new Promise(function (resolve, reject) {

//     let added = true;
//     setTimeout(function () {
//         if (added) {
//             resolve(5);
//         } else {
//             reject("hata");
//         }
//     })
// }).then(function (value) {
//     console.log(value);
//     return value * value;
// }).then(function (value) {
//     console.log(value);
//     return value * value;
// });

//---------------------------------------------------------------------------------------

// Fetch Api

// Text
// function getText(){
//     fetch("msg.txt")
//     .then(response =>{
//         return response.text();
//     }).then(data=>{
//         console.log(data);
//     }).catch(error=>{
//         console.log(error);
//     })
// }

// getText();

// Json
// function getJson(){
//     fetch("employees.json")
//     .then(response =>{
//         return response.json();
//     }).then(data=>{
//         console.log(data);
//     }).catch(error=>{
//         console.log(error);
//     })
// }

// getJson();

// External Api
// function getExternalApi() {
//     fetch("https://randomuser.me/api/")
//         .then(response => {
//             return response.json();
//         }).then(data => {
//             console.log(data.results);
//         }).catch(error => {
//             console.log(error);
//         })
// }

// getExternalApi();

// function postExternalApi() {

//     var url = "https://jsonplaceholder.typicode.com/posts";

//     var data = {
//         method: "POST",
//         body: JSON.stringify({
//             userId: 1,
//             title: "sample title",
//             body: "sample body"
//         }),
//         headers: new Headers({
//             "content-type": "application/json"
//         })
//     };

//     fetch(url, data)
//         .then(res => {
//             console.log(res);
//         });
// }

// postExternalApi();

let merhaba = "asd"

`${console.log(merhaba)}`