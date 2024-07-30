const clients = [
    { id: 1, name: 'Nilson Guerrero', username: 'nilson', password: '1234', balance: 5000 },
    { id: 2, name: 'Cliente 2', username: 'cliente2', password: 'abcd', balance: 3000 },
    { id: 3, name: 'Cliente 3', username: 'cliente3', password: 'xyz', balance: 10000 }
];

let currentClient = null;

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    currentClient = clients.find(client => client.username === username && client.password === password);

    if (currentClient) {
        document.getElementById('welcomeMessage').textContent = `Bienvenido, ${currentClient.name}. ¿Qué desea hacer?`;
        $('#loginModal').modal('hide');
        $('#bankModal').modal('show');
    } else {
        alert('Nombre de usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.');
    }
}

function showMenu() {
    document.getElementById('menu').style.display = 'block';
    document.getElementById('balance').style.display = 'none';
    document.getElementById('deposit').style.display = 'none';
    document.getElementById('withdraw').style.display = 'none';
}

function showBalance() {
    document.getElementById('balanceAmount').textContent = currentClient.balance;
    document.getElementById('menu').style.display = 'none';
    document.getElementById('balance').style.display = 'block';
}

function showDeposit() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('deposit').style.display = 'block';
}

function showWithdraw() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('withdraw').style.display = 'block';
}

function deposit() {
    const amount = parseFloat(document.getElementById('depositAmount').value);
    if (amount > 0) {
        currentClient.balance += amount;
        alert(`Depósito exitoso. Nuevo saldo: $${currentClient.balance}`);
    } else {
        alert('Ingrese un monto válido.');
    }
    showMenu();
}

function withdraw() {
    const amount = parseFloat(document.getElementById('withdrawAmount').value);
    if (amount > 0 && amount <= currentClient.balance) {
        currentClient.balance -= amount;
        alert(`Giro exitoso. Nuevo saldo: $${currentClient.balance}`);
    } else if (amount > currentClient.balance) {
        alert('Saldo insuficiente.');
    } else {
        alert('Ingrese un monto válido.');
    }
    showMenu();
}

function exitATM() {
    alert('Gracias por usar nuestro servicio.');
    $('#bankModal').modal('hide');
    currentClient = null;
}

// Mostrar el menú inicialmente
$(document).ready(function() {
    showMenu();
});
