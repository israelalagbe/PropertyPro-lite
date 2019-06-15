const navControl = document.querySelector('nav .nav-control');
navControl.addEventListener('click', () => {
    document.querySelectorAll('.nav-collapse').forEach((item) => {
        item.classList.toggle("show-nav-item")
    })
    navControl.classList.toggle('change')
});