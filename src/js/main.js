var navTog = false;
var navButton = document.getElementById('navButton');
var mobNav = document.getElementById('mobile-nav');
navButton.addEventListener('click', function () {
    if (navTog == false) {
        navTog = true;
        navButton.classList.add('toggled');
        navButton.innerHTML = '<span class="ion-android-close"></span>';
        mobNav.classList.add('toggled');
    }
    else {
        navTog = false;
        navButton.classList.remove('toggled');
        navButton.innerHTML = '<span class="ion-navicon"></span>';
        mobNav.classList.remove('toggled');
    }
});
function checkAd() {
    var ads = document.getElementsByClassName('ad');
    var i;
    for (i = 0; i < ads.length; i++) {
        ads[i].classList.add('small')
    }
}
function checkWindow() {
    console.log(window.innerWidth);
}
window.onresize = checkWindow();

window.addEventListener('resize', checkWindow);