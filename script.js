let menu = document.getElementById('menu-icon');

menu.addEventListener('click', function() {
    let navlist = document.getElementsByClassName('nav-list-mobile')[0];

    if(navlist.style.display === 'none') {
        navlist.style.display = 'block';
    }

    else {
        navlist.style.display = 'none';
    }
});

