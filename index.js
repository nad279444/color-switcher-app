function changeColor(e){
    document.body.style.background = `${e.target.id}`

}
const li = document.querySelectorAll(".round")
li.forEach((li => {
    li.addEventListener("click", changeColor)
}))
