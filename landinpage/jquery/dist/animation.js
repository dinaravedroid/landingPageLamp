$(function () {
    $('#text').hide().fadeIn(3000);
})


$(function () {
    $('#overlay-image, #overlay-image2, #square-blocks').hide().fadeIn(3000);

});

$(document).ready(function () {
    $('#square-blocks').click(function () {
        $('#overlay-image, #overlay-image2').hide().fadeIn(2000)
        });
});



$(document).ready(function () {
    $('#night').click(function () {
        $('#picture').fadeOut(1000, function () {
            $('#picture2').fadeIn(1000);
        });
    });
});
$(document).ready(function () {
    $('#day').click(function () {
        $('#picture2').fadeOut(1000, function () {
            $('#picture').fadeIn(1000);
        });
    });
});