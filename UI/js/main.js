const navControl = document.querySelector('nav .nav-control');
navControl.addEventListener('click', () => {
    document.querySelectorAll('.nav-collapse').forEach((item) => {
        item.classList.toggle("show-nav-item")
    })
    navControl.classList.toggle('change')
});
const storage = new LocalStorage(localStorage);
storage.getFlash('flash').then((flash) => {
    if (flash) {
        document.querySelectorAll('.alert').forEach(($alert) => {
            $alert.classList.toggle(flash.className);
            $alert.classList.toggle("hidden");
            $alert.textContent = flash.message;
        })
    }
});
