 

let carte=document.querySelectorAll(".card")
    carte.forEach(carte => {
    carte.addEventListener('click', () => {
        carte.style.boxShadow = '10px 10px 5px rgb(255, 255, 255)';
    })
let img=carte.querySelector(".card-img-top")
    img.addEventListener('dblclick',()=>{
        carte.remove();
 })
})

let carte1=document.querySelectorAll(".card-body")

carte1.forEach(carte => {
    carte.addEventListener('mouseover', () => {
        carte.style.backgroundColor = 'rgba(36, 35, 35, 0.86)';
        carte.classList.remove('bg-warning')
    })
});
carte1.forEach(carte => {
    carte.addEventListener('mouseout', () => {
        carte.style.backgroundColor = 'rgba(36, 35, 35, 0.86)';
        carte.classList.add('bg-warning')
    })
});
// c un bz ce VS CODE "Document.addEventListener('DOMContentLoaded', () => {" pour etre sur que ca charge le DOM

document.addEventListener('DOMContentLoaded', () => {
    let inscription = document.querySelector(".nletter");
    inscription.addEventListener('click', () => {
        alert("Bienvenue! Inscription de votre email confirmé");
    });
});
// LIEN JS POUR HTML 
let bouton = document.querySelectorAll(".btn")
bouton[1].addEventListener("click",()=>{
    window.location.href="./pages/index-poulet.html"
})
bouton[2].addEventListener("click",()=>{
    window.location.href="./pages/index-lasagne.html"
})
bouton[3].addEventListener("click",()=>{
    window.location.href="./pages/index-bolo.html"
})
console.log(bouton[2])

// CREATION BOUTON ROUGE SUPPRESSION

// bouton[4].addEventListener("click",()=>{
//     let btn=document.createElement
//     ('button')
//     btn.innerText="Supprimer?"
//     btn.style.backgroundColor='red'
//     carte.appendChild(btn)
//     btn.addEventListener('click',()=>{
//         carte.forEach(carte => {
//             carte.remove()
//          })
//     })
// })