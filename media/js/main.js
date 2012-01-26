$(function() {
    $('h1[data-menu="true"]').each(function(index, elem) {
        $('#links').append('<li><a href="#' + $(elem).attr('id') + '">' + $(elem).html() + '</a></li>');
    });
});