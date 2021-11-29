console.log("Pirmasis git darbas")
const button=document.querySelector("button")
const box= document.querySelector(".box")

let trigger=true

button.onclick=()=> {
    trigger = !trigger
    if (trigger) {
        button.innerText = "Turn On"
        box.style.display = "block"
    } else {
        button.innerText = "Turn Off"
        box.style.display = "none"
    }
}