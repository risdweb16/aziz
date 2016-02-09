$(document).ready(function(){ 
    $('#Quotes').accordion();
});

$(document).ready(function() {
    $('section').click(function() {
        $(this).fadeOut('slow');
    });
});


$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('fast')    
    });
    $('div').hover(function() {
        $(this).addClass('red');    
    });
});


$(document).ready(function() {
    $('div').dblclick(function() {
        $(this).fadeOut('fast');    
    });    
});


$(document).ready(function(){

  $('div').hover(function() {
        $(this).addClass('active');
    }, function() {
        $(this).removeClass('active');    
    }
  );

});


$(document).ready(function(){
    $('img').animate({top:'+=100px'},1000);
});


$(document).ready(function() {
    $('div').click(function() {
        $(this).effect('explode');
    });    
});



$(document).ready(function() {
    $('div').click(function() {
        $(this).effect('bounce',{times:3}, 500);
    });    
});


nice one

$(document).ready(function() {
    $('div').resizable();
});*/