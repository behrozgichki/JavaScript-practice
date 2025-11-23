// const user = {
//   name : "Behroz",
//   email : "behrozgichki9@gmail.com",
//   age : 17 ,
//   greetUser (){
//     return `hello ${this.firstname}`
//   }
// }
// delete user.name
// user.firstname = "Behroz"
// user.lastname = "Gichki"
// console.log(user.greetUser());
//  console.log(user);
//  Q2
const userName = document.querySelector("#name")
const email = document.querySelector("#email")
const age = document.querySelector("#age")
const city = document.querySelector("#city")
function formVal (){

  
  const obj = {
  name : userName.value,
  email : email.value,
  age : age.value,
  city : city.value 
  }
  console.log(obj);

  
}
// const username = document.querySelector('#name');
// const age = document.querySelector('#age');
// const city = document.querySelector('#city');
// const email = document.querySelector('#email');
// function getValue(){
//     const obj = {
//         name: username.value,
//         email: email.value,
//         city: city.value,
//         age: age.value
//     }
//     console.log(obj);
// }