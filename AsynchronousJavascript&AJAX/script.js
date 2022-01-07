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