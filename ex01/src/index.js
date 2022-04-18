$('button').click(function(){        
    $('textarea').text($('textarea').text() + $(this).text());
    //$('input:text').val($('textarea').text() );
    $('input:text').val($('input:text').val() + ' ' + $(this).data('keyboard__key'));
});