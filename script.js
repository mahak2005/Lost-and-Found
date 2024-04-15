document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    toggleButton.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
    });
});

burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.navList')
rightnav=document.querySelector('.rightnav')

// burger.addEventListener('click',()=>{
//     navbar.classList.toggle('h-class-resp');
//     rightnav.classList.toggle('v-class-resp');
//     navList.classList.toggle('v-class-resp');
// })
