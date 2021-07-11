$(document).ready(()=> {
    // Disable Scrolling
    

    // Toggle menu view
    $('#menu-hamburger').on('click', () => {
        $('#mobile-menu-wrapper').toggleClass('collapsed')
        if($('#mobile-menu-wrapper').hasClass('collapsed')) {
            $('html, body').css({
                overflow: 'auto',
                height: 'auto'
            });
        }
        else {
            $('html, body').css({
                overflow: 'hidden',
                height: '100%'
            });
        }
    })
})