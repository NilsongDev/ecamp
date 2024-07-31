


$(document).ready(function () {
    $('.show-info').on('click', function () {
        // Obtener el contenido del card correspondiente
        var card = $(this).closest('.card');
        var title = card.find('.card-title').text();
        var imgSrc = card.find('.card-img-top').attr('src');
        
        // Definir texto específico para cada destino
        var destinationText = {
            'Argentina': 'Argentina es un país grande y diverso, conocido por su tango, carnes y fútbol.',
            'Chile': 'Chile, un país largo y estrecho, ofrece paisajes impresionantes desde el desierto de Atacama hasta la Patagonia.',
            'Peru': 'Perú es famoso por sus antiguas culturas, la gastronomía y el impresionante Machu Picchu.'
        };
        
        var text = destinationText[title];
        
        // Rellenar el contenido del modal
        $('#destinationModalLabel').text(title);
        $('#modalImage').attr('src', imgSrc);
        $('#modalText').text(text);

        // Mostrar el modal
        $('#destinationModal').modal('show');
    });
});