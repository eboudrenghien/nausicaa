const btnCircle = document.querySelector('.btn-circle');
const circleMenu = document.querySelector('.circle-menu');

btnCircle.addEventListener('click',() =>{
    
    btnCircle.classList.toggle('menu-anim'); //va rajouter le menu icône quand on clique sur le bouton circle.
        circleMenu.classList.toggle('circle-anim');
})