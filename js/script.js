document.addEventListener('DOMContentLoaded', function () {
    // OPEN AND CLOSE SITE NAV MENU
    const mysitenav= document.querySelector('.site-nav');
    const mymenubutton = document.querySelector('.menu-button');

    mymenubutton.onclick = function() {
        // statements go here
        if (mysitenav.getAttribute('data-navstate') === 'closed') {
            mysitenav.setAttribute('data-navstate', 'open');
        } else {
            mysitenav.setAttribute('data-navstate', 'closed')
        }
    };

    // SCROLL TRIGGERED ANIMATION
    let option= {
        root: document
    }
});
