 

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


let newsletter=document.querySelector("newsletter")
newsletter.addEventListener('click',()=>{
    alert("Bienvenue"+" "+", vous etes bien inscrit")
})


