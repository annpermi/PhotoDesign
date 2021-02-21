//Animates Smooth Scroll
$('#view-work').on('click', function() {
const images = $('#images').position().top;

$('html, body').animate({
    scrollTop: images
},
    900
    );
});
/* when it's on we're gonna run a function */