$(document).ready(function(){
    $('h1:last').html('Programación para web');
    $('h2').html('Grupo 5to.B');
    $('h3').html('Profesor:José Nabor Ramírez Morfín');
    $('#listado').html('Listado de alumnos');
    $('li:nth-child(odd)').css({'background-color':'#ccc'});
    $('li').hover(function(){
        $(this).css({
            'color':'green',
            'cursor':'pointer'
        });
    })
    $('li').mouseout(function(){
        $(this).css({
            'color':'initial',
            'cursor':'pointer'
        });
    })
    $('li').click(function(){
        $('#resultado').html('<strong> Resultado: </strong>'+$(this).text());
        $('#resultado').css({'background-color':'green','color':'#000'});
    })
});