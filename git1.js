console.log("Pirmasis git darbas")

const button=document.querySelector("button")
const box=document.querySelector(".box")


document.getElementsByClassName("box").innerHTML=Math.random()


let x = 0

//document.getElementById("demo").innerHTML = x;

button.onclick=()=> {
    x = Math.floor((Math.random() * 10) + 1)
   console.log("click adnaka", x)

}



// ++++++++++++++++++++++++++++++++++++
// let trigger=true
//
// button.onclick=()=> {
//     trigger = !trigger
//     if (trigger) {
//         button.innerText = "Turn On"
//         box.style.display = "block"
//     } else {
//         button.innerText = "Turn Off"
//         box.style.display = "none"
//     }
// }