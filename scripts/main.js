// 1. Quand pour la première fois, l'utilisateur arrive, il est confronté à un formulaire dans lequel il va indiquer son surnom et une URL en absolu et un bouton envoyer sera présent

// 2. Quand il va appuyer sur envoyer, le panneau du formulaire s'en va et laisse sa place à une sorte de panneau qui indique qu'il est loggé avec la référence à son surnom qui est indiquée ainsi que l'URL en absolu qui est utilisée pour afficher son avatar

// 3. Si l'utilisateur clique sur une petite icône dans le panneau où son nom et son avatar sont présents, il a la possibilité d'aller éditer son surnom ainsi que l'URL de son avatar. Dans ce cas là, le panneau avec le formulaire inital redevient visible et l'autre disparait

// 4. Si l'utilsateur a déjà rentré son surnom et son avatar, et qu'il revient sur cette page ultérieurement, alors, on affiche par défaut le panneau avec son avatar et son surnom plutôt que d'afficher le formulaire pour rentrer ces 2 informations


// localStorage.setItem("myKey", "Yo, bitch")

// localStorage.removeItem("myKey")
// localStorage.clear

// console.log(localStorage.getItem('myKey'))

let body = document.querySelector('body')
let form = document.querySelector("form")
let input1 = document.querySelector(".input1")
let input2 = document.querySelector(".input2")
let button1 = document.querySelector(".button1")
let button2 = document.querySelector(".button2")
let wrapper = document.querySelector('.wrapper')
// button1.addEventListener('click', function() {
//     localStorage.setItem("myName", `${input1.value}`)
    
// }) 

button2.addEventListener('click', function() {
    localStorage.setItem("myName", `${input1.value}`)
    localStorage.setItem("myAvatar", `${input2.value}`)
    if (localStorage.getItem("myAvatar")!= null && localStorage.getItem("myName")!= null) {
        form.innerHTML =""
        form.innerHTML+= `
        <div class="form3">
        <img src="${localStorage.getItem("myAvatar")}" alt="">
        </div>
        <div class="form4">
        <p>Bonjour, ${localStorage.getItem("myName")}</p>
        </div>
        
        `
    } 
}) 

document.addEventListener('click',function(event) {
    
    if(event.target.classList.contains('form5')) {
        
        localStorage.clear()
        location.reload()

  
    }
}) 


document.addEventListener('click',function(event) {
    
    if(event.target.classList.contains('form6')) {
        
        body.classList.toggle('darkmode')
        console.log("dark")
        form.classList.toggle("lightcenter")
    }
}) 




// https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png
console.log(localStorage.getItem("myName"))
console.log(localStorage.getItem("myAvatar"))
// localStorage.clear()
