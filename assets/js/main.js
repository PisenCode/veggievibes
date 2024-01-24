// Creating scroll feature for the navigationbar
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.querySelector('.navbar').style.top = '0';
        document.querySelector('.navbar').classList.add('scrolled');
    } else {
        document.querySelector('.navbar').style.top = '-56px'; // Adjust this value based on your navbar height
        document.querySelector('.navbar').classList.remove('scrolled');
    }
    prevScrollPos = currentScrollPos;
};