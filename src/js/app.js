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

// Default product category
const tabButtons = document.querySelectorAll('.tabs__btn');

for (let btn of tabButtons){
    btn.addEventListener('click', function () {

        tabButtons.forEach((el) => el.classList.remove('tabs__btn--active'));
        this.classList.add('tabs__btn--active');
    })
}

// Swiper
const swiper = new Swiper('.nova__inner', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 40,
  
    navigation: {
      nextEl: '.nova__swiper-next-btn',
      prevEl: '.nova__swiper-prev-btn',
    },
});

const swiper2 = new Swiper('.low-price__inner', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 40,
  
    navigation: {
      nextEl: '.low-price__swiper-next-btn',
      prevEl: '.low-price__swiper-prev-btn',
    },
});