let compteur =0;
let clicker = document.querySelector("button");
let pmessage = document.querySelector('#p3');
let pCompteur = document.querySelector('#p2');


function addclick (){
    compteur++;
    pCompteur.textContent = compteur;
    if(compteur>=5 && compteur<=9){
        pmessage.innerHTML = "Bravo, bel échauffement !"
    }
    if(compteur>=10){
        pmessage.innerHTML = "Vous êtes passé maître en l'art du clic !"
    }
}



 clicker.addEventListener('click',addclick);