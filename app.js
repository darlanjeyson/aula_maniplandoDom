// let h1 = document.getElementsByTagName("h1")
// let h2 = document.getElementsByTagName("h2")
// let h3 = documento.getElementsByTagName("h3")


// let titulo2 = document.querySelector(".titulo2")
// let titulo3 = document.querySelector("#titulo3")
// let titulo = document.querySelector("h1")


// titulo.innerText = "Olá mundo"
// titulo2.innerText = "Olá mundo"
// titulo3.innerText = "Olá mundo"


// let div = document.querySelector("div")
// div.innerHTML = "<h1> É o Laion, não tem jeito </h1>"

// titulo.classList.add("title1")
// titulo2.classList.add("title2")
// titulo3.classList.add("title3")


// titulo.classList.remove("title1")
// titulo2.classList.remove("title2")
// titulo3.classList.remove("title3")


// let button = document.querySelector("button")

// function renderTitle (){
//     let h1 = document.querySelector("h1")
//     h1.innerText = "Presta atenção Iago"
// }

// button.addEventListener("click", renderTitle)

let icon = document.querySelector("#icon")
function darkmode() {
    let body = document.querySelector("body")
    let sectionIcon = document.querySelector("#teste")
    let icon = document.querySelector("#icon")
    body.classList.toggle("body-darkmode")
    sectionIcon.classList.toggle("section-darkmode")
    icon.classList.toggle("icon-class")
}

icon.addEventListener("click", darkmode)