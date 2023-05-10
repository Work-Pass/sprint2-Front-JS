let isOpen = false;
// Fecha o menu por padrão
toggleMenu();

document.querySelector('#btnMenuOpen').addEventListener('click', () => {
    isOpen = true;
    toggleMenu();
});

document.querySelector('#btnMenuClose').addEventListener('click', () => {
    isOpen = false;
    toggleMenu();
});

function toggleMenu() {
    if (isOpen) {
        document.querySelector('#menu').style.marginLeft = 0;
    } else {
        document.querySelector('#menu').style.marginLeft = '-250px';
    }
}

let isOpenLogin = false;
// Fecha o menu por padrão
toggleLogin();

document.querySelector('#btnLoginOpen').addEventListener('click', () => {
    isOpenLogin = true;
    toggleLogin();
});

document.querySelector('#btnLoginClose').addEventListener('click', () => {
    isOpenLogin = false;
    toggleLogin();
});

function toggleLogin() {
    if (isOpenLogin) {
        document.querySelector('#login').style.marginRight = 0;
    } else {
        document.querySelector('#login').style.marginRight = '-350px';
    }
}

// Função para registrar um novo usuário
function registrar() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Usuário registrado com sucesso!");
}

// Função para fazer login
function login() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    var savedUsername = localStorage.getItem("username");
    var savedPassword = localStorage.getItem("password");

    if (username === savedUsername && password === savedPassword) {
        localStorage.setItem("logado", "true");
        alert("Login bem sucedido!");
    } else {
        alert("Nome de usuário ou senha incorretos!");
    }
}

// Função para fazer logout
function logout() {
    localStorage.setItem("logado", "false");
    alert("Logout bem sucedido!");
}

// Função para verificar se o usuário está logado ou não
function verificarLogon() {
    if (localStorage.getItem("logado") === "true") {
        alert("Usuário está logado!");
    } else {
        alert("Usuário não está logado!");
    }
}