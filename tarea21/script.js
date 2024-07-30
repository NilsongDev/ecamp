$(document).ready(function() {
    const menuOptions = [
        { id: 1, text: 'Opción 1: Mostrar Fecha y Hora', action: showDateTime },
        { id: 2, text: 'Opción 2: Mostrar un Mensaje', action: showMessage },
        { id: 3, text: 'Opción 3: Cambiar Color de Fondo', action: changeBackgroundColor },
        { id: 4, text: 'Opción 4: Mostrar una Alerta', action: showAlert },
        { id: 5, text: 'Salir', action: exitMenu }
    ];

    function displayMenu() {
        $('#menu').empty();
        menuOptions.forEach(option => {
            const button = $('<button>')
                .addClass('list-group-item list-group-item-action')
                .text(option.text)
                .click(() => option.action());
            $('#menu').append(button);
        });
    }

    function showDateTime() {
        const now = new Date();
        alert(`Fecha y Hora actual: ${now}`);
        displayMenu();
    }

    function showMessage() {
        alert('Este es un mensaje de ejemplo.');
        displayMenu();
    }

    function changeBackgroundColor() {
        const colors = ['#f8f9fa', '#007bff', '#6c757d', '#28a745', '#ffc107'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        $('body').css('background-color', randomColor);
        displayMenu();
    }

    function showAlert() {
        alert('¡Esta es una alerta!');
        displayMenu();
    }

    function exitMenu() {
        if (confirm('¿Estás seguro de que deseas salir?')) {
            alert('¡Hasta luego!');
        } else {
            displayMenu();
        }
    }

    displayMenu();
});
