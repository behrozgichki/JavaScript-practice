const div = document.querySelector("#container")

fetch("https://api.freeapi.app/api/v1/public/randomusers")
  .then((res) => res.json())
  .then((res) => {
    // console.log(res.data.data[0].dob);
    const data = res.data.data;
    console.log(data);

    data.map((items) => {
      div.innerHTML += `<div class="user-card">
  <img 
    src="${items.picture.large}" 
    alt="User Photo"
    class="user-img"
  /> <div class="user-info">
    <h3>
      ${items.name.title} ${items.name.first} ${items.name.last}
    </h3>

    <p><strong>Email:</strong> ${items.email}</p>
    <p><strong>Cell:</strong> ${items.cell}</p>
  </div>
</div>`
    })

  })
  .catch((err) => {
    console.error(err);

  })