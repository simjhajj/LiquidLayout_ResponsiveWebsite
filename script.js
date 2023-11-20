// fonction to display navigation bar's links when hamburger icons are hovered over
document.getElementById('burger-icon').addEventListener('click', function () {
    var navigationBar = document.getElementById('navigationBar');
    if (getComputedStyle(navigationBar).display === 'none') {
        navigationBar.style.display = 'block';
    } else {
        navigationBar.style.display = 'none';
    }
});
