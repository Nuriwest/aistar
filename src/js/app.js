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

// See password
const seePasswordBtn = document.querySelectorAll(".see-password-btn");

seePasswordBtn.forEach(btn => {
    btn.addEventListener('click', function(){
        if (this.parentNode.querySelector(".registry__input-password").type === "password"){
            this.parentNode.querySelector(".registry__input-password").type = "text";
            this.classList.add('see-password-btn--active')
        } else {
            this.parentNode.querySelector(".registry__input-password").type = "password"
            this.classList.remove('see-password-btn--active')
        }
    })
})

// Check password
const registryBtn = document.querySelector('.registry__btn')
const password = document.getElementById("registry-password");
const confirmPassword = document.getElementById("registry-repeat-password");
const confirmPasswordText = document.querySelector('.conf-password__text')

registryBtn.addEventListener('click', () => {
    if (password.value !== confirmPassword.value){
        confirmPasswordText.textContent = "Пароли не совпадают!"
        confirmPasswordText.classList.add("conf-password__text--false")
    } else {
        confirmPasswordText.textContent = ""
        confirmPasswordText.classList.remove("conf-password__text--false")
    }
})

// Call registry form
const main = document.querySelector('.main')
const registry = document.querySelector('.registry');
const aboutRegistryBtn = document.querySelector('.about-us__pro-link');
const aboutMainTitle = document.querySelector('.about-us__title')

aboutRegistryBtn.addEventListener('click', function () {
    window.scroll(0,199)
    registry.classList.add("registry--active");
    main.classList.add('none')
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && registry.classList.contains("registry--active")) {
        registry.classList.remove("registry--active");
        main.classList.remove('none')
        aboutMainTitle.scrollIntoView()
    }
})

// Call login form
const login = document.querySelector('.login');
const headerLoginBtn = document.querySelector('.login-btn')

headerLoginBtn.addEventListener('click', function () {
    login.classList.add("login--active");
    registry.classList.remove("registry--active");
    main.classList.add('none')
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && login.classList.contains("login--active")) {
        window.scroll(0, 0)
        login.classList.remove("login--active");
        main.classList.remove('none')
    }
})

// From registry to login
const toLoginLink = document.querySelector('.registry__tologin-link');

toLoginLink.addEventListener('click', function (){
    window.scroll(0, 0)
    login.classList.add("login--active");
    registry.classList.remove("registry--active");
})

// From login to registry
const toRegistryLink = document.querySelector('.login__toregistry-link');

toRegistryLink.addEventListener('click', function (){
    window.scroll(0, 0)
    registry.classList.add("registry--active");
    login.classList.remove("login--active");
})

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