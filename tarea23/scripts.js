$(document).ready(function() {
    // Arreglo para almacenar las tareas
    let tasks = [];

    // Función para renderizar la lista de tareas
    function renderTasks() {
        $('#taskList').empty();
        tasks.forEach((task, index) => {
            $('#taskList').append(`
                <tr>
                    <td>${task}</td>
                    <td><button class="btn btn-danger" onclick="removeTask(${index})">Finalizar</button></td>
                </tr>
            `);
        });
    }

    // Mostrar u ocultar el formulario de agregar tarea
    $('#toggleFormBtn').click(function() {
        $('#taskForm').toggle();
    });

    // Agregar tarea
    $('#addTaskBtn').click(function() {
        const task = $('#taskInput').val();
        if (task) {
            tasks.push(task);
            $('#taskInput').val('');
            $('#taskForm').hide();
            renderTasks();
        }
    });

    // Eliminar tarea
    window.removeTask = function(index) {
        tasks.splice(index, 1);
        renderTasks();
    };
});
