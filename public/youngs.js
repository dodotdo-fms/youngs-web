$(document).ready(function () {
    $('a').on('click', function (event) {
        var id = event.target.id;

        if (id === 'logo' || id === 'mail') return;

        event.preventDefault();

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 800, 'easeInOutCubic');
    });

    $('#moviePlay').on('click', function () {
        location.href = 'https://youtu.be/TdNPYKUQgo8';
    });
});
