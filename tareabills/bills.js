


$(document).ready(function() {
    console.log("Documento listo");

    students.forEach(student => {
        const option = `<option value="${student.id}">${student.name}</option>`;
        $("#studentSelect").append(option);

        console.log(`ID: ${student.id}, Nombre: ${student.name}, Fecha de Nacimiento: ${student.birthdate}, Dirección: ${student.address}, Teléfono: ${student.phone}, Email: ${student.email}, Facultad: ${student.faculty}, Departamento: ${student.department}`);
    });


    
});