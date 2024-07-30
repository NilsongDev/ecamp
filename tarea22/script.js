$(document).ready(function() {
    // Mostrar text2 al pasar el mouse sobre text1 y ocultarlo al salir
    $('#text1').hover(
        function() {
            $('#text2').show();
        },
        function() {
            $('#text2').hide();
        }
    );

    // Agrandar imagen al hacer clic en caja2 y volver a tamaño inicial al salir
    $('#caja2').click(function() {
        $('#img').css('transform', 'scale(2)');
    });

    $('#caja2').mouseleave(function() {
        $('#img').css('transform', 'scale(1)');
    });

    // Agrandar letra al hacer doble clic en caja3
    $('#caja3').dblclick(function() {
        $(this).find('p').css('font-size', '2em');
    });
});
