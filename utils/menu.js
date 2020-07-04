// ******** ESSE FUNCIONA, MAS NÃO REMOVE A CLASSE DOS OUTROS QUANDO UM ITEM É SELECIONADO
// let items = document.querySelectorAll('.menu-item');
// for(let i = 0; i < items.length; i++) {
//   items[i].addEventListener('click', function() {
//     const active = document.querySelector('.menu-active');
//     if(active) {
//       active.classList.remove('.menu-active');
//     }
//     (this.querySelectorAll('.menu-item-image')[0].classList.toggle('menu-active'));
//     (this.querySelectorAll('.menu-item-text')[0].classList.toggle('menu-active-text'));
//   })
// }


// ****** OPÇÃO EM jQuery
$(document).ready(function() {
  
  $('.menu-item').click(function() {
    const $itemImage = $(this).children('.menu-item-image');
    const $itemText = $(this).children('.menu-item-text');

    $itemImage.toggleClass('menu-active');
    $itemText.toggleClass('menu-active-text');
  })
})