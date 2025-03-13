 

let carte=document.querySelectorAll(".card")
carte.forEach(carte => {
    carte.addEventListener('click', () => {
        carte.style.boxShadow = '10px 10px 5px rgb(255, 255, 255)';
    });
});
