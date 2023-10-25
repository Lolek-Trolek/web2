let btn1 = document.querySelector('#bt1');

//ajouter un evenement 
btn1.addEventListener('click', () => {
    btn1.innerHTML = "NO,It's me Emma !";
    console.log('onClickHandlerForBtn1:click');
});

//supprimer un evenement
btn1.removeEventListener('click' );