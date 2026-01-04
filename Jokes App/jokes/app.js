const div = document.querySelector("#div")
const btn = document.querySelector("#btn")
const jokes = []


btn.addEventListener("click" , (e)=>{
  e.preventDefault()
  fetch("https://api.freeapi.app/api/v1/public/randomjokes/joke/random")
.then((res)=> res.json())
.then((res)=>{
  console.log(res);
  const data = res.data
   const jokeCard = document.createElement("div");
      jokeCard.classList.add("joke-card");
    jokeCard.innerHTML+= `
    <h3>${data.content}</h3>
    `;
     div.prepend(jokeCard);
    
  })
  .catch((err)=>{
  console.error(err);
  
})
});


    