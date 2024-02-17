// Dropdown Menu
const dropdownMenu = document.querySelector('.dropdown-menu__list');
const dropdownMenuBtn = document.querySelector('.dropdown-menu__btn');

dropdownMenuBtn.addEventListener('click', function(e){
    dropdownMenu.classList.toggle('dropdown-menu__list--active');
    e.stopPropagation()
})

dropdownMenu.onclick = (e) => e.stopPropagation()

document.addEventListener('click', function(){
    dropdownMenu.classList.remove('dropdown-menu__list--active')
})