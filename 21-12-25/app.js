// console.log("hello world");

// let age = 18
// const promisOne = new Promise ((resolve , reject)=>{
//   setTimeout(() => {
//     if (age >= 18) {
//       resolve("ap age ja sakte hai")
//     }else{
//       reject("bacha hai tu0")
//     }
//   }, 2000);
// })

// promisOne.then((res)=>{
//   console.log("promise fulfilled");
//   console.log(res);
//   return res + " chaining"

// })
// .then((res)=>{
//   console.log("chaining then");
//   console.log(res);
  
// })
// .catch((err) =>{
//   console.log("promise rejected");
//   console.log(err);
  
// })
// .finally(()=>{
//   console.log("har jaga ata hai");
  
// })


function schoolfee(fee) {
  return new Promise((resolve , reject)=>{
    setTimeout(() => {
      if (fee >= 10000) {
      resolve("Admission Hogaya")
      }else{
        reject("Admission canceled")
      }
    }, 1000);
  })
}

schoolfee(1000)
.then((res)=>{
  console.log("Ap ka shukriya");
  console.log(res);
  return res + " chaining "
}).then((res)=>{
console.log("chaibning");
console.log(res);

})
.catch((err)=>{
  console.log("ap dusri school mai jaye");
  console.log(err);
  
})
.finally(()=>{
  console.log("mai har jaga ata hu mai badshah hu");
  
})