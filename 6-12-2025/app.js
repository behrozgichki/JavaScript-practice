// console.log("Hello World");
// const head = document.querySelector("#head")
// function testing() {
//   console.log("clicked,,,");
  
// }
// head.addEventListener("click" , testing)

const img = document.querySelector("#img")
img.addEventListener("mouseover" , function () {
  console.log("Mouse Over");
  img.src = "https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940171g57vp25a8k.png"
  
})
img.addEventListener("mouseout" , function () {
  console.log("Mouse Out");
  img.src = "https://c8.alamy.com/comp/2A5C5XA/vector-3d-realistic-golden-off-light-bulb-icon-closeup-isolated-on-white-background-design-template-clipart-glowing-incandescent-filament-lamps-2A5C5XA.jpg"
  
})
// const email = document.querySelector("#email")
// const password = document.querySelector("#password")
// const form = document.querySelector("#form")

// form.addEventListener("submit" , function(event){
//   event.preventDefault()
//   console.log(email.value);
//   console.log(password.value);
  
// })
const input = document.querySelector("#input")
input.addEventListener("input" , function () {
  console.log("changed...." , input.value);
  
})