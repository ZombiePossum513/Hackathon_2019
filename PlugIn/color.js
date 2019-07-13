$(function () {
    // Score Color
    var score = parseInt($('#score').text().trim());
    var color = 'red';
    if (!isNaN(score)) {
        if (score >= 40) {
            color = 'orange';
        }
        if (score >= 60) {
            color = 'green';
        }
        $('#score').css('color', color);
    }
});