
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});

const showPopUp = () => {
    document.getElementById("confirmation").classList.add("show");
    setTimeout(() => {
        document.getElementById("confirmation").classList.remove("show");
    }, 3000)
}