// Função para mostrar/ocultar a senha 
function verSenha(inputId, icon) {
    const input = document.getElementById(inputId);
    input.type = input.type === "password" ? "text" : "password";
    icon.textContent = input.type === "text" ? "🐵" : "🙈";
}

let users = [];
let currentUser = null;

// Adiciona evento ao formulário de login
document.getElementById('login-form').addEventListener('submit', function(e){
    e.preventDefault();
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    login(userName, password);
});

// Adiciona evento ao formulário de registro
document.getElementById('register-form').addEventListener('submit', function(e){
    e.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    register(fullName, password, confirmPassword);
});

// Esconde o formulário de login e mostra o de registro.
function showRegister() {
    document.getElementById('login-form').style.display = "none";
    document.getElementById('register-form').style.display = "block";
}

// Esconde o formulário de registro e mostra o de login.
function showLogin() {
    document.getElementById('register-form').style.display = "none";
    document.getElementById('login-form').style.display = "block";
}


// Função de login
function login(fullName, password) {
   if(fullName === "Ricardo Silva" && password === "1234"){
    location.href="cliente.html"
   }else{
    const user = users.find(u => u.fullname === userName && u.password === password);
    if (user) {
        currentUser = user;
        document.getElementById('user-name').textContent = user.fullName
        displayMainScreen();
    } else {
        alert("Usuário ou senha inválidos.");
    }
   }
}

// Verifica se as senhas coincidem. Se sim, cria um nome de usuário a partir do nome completo (removendo espaços e convertendo para minúsculas)
// Se o nome de usuário não existir, adiciona o novo usuário ao users 
function register(fullName, password, confirmPassword) {
    if (password === confirmPassword) {
        const userName = fullName.toLowerCase().replace(/\s+/g, '');
        if (!users.some(u => u.userName === userName)) {
            users.push({ fullName, userName, password });
            
            location.href="pagamento.html"; // Volta para o formulário de login após cadastro
        } else {
            alert("Usuário já cadastrado");
        }
    } else {
        alert("As senhas não coincidem");
    }
    
}

//faz vc ir pra tela do usuario
function displayMainScreen() {
    location.href="cliente.html";
}
function submitSen() {
    const inputElement = document.getElementById('register-password');
    const stringCapturada = inputElement.value; // Captura a string do input
    localStorage.setItem('minhaString', stringCapturada); // Armazena a string no localStorage
}