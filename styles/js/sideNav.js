let button = document.querySelector('.sidebarbtn');
button.addEventListener('click', toggleNav);

function toggleNav() {
document.body.classList.toggle('nav-open');
}

// Disable scrolling on #container 
let body = document.querySelector('#container')[0],
    sidebar = document.querySelector('.sidebarnav');

// sidebar overflow hide
sidebar.onmouseover = function() { 
    body.style.overflow = 'hidden';
}

sidebar.onmouseout = function() { 
    body.style.overflow = 'auto';
}

