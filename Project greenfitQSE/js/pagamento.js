function selectPlan(preço) {
    // Esconde a parte de selecionar o plano
    document.getElementById('planos-container').style.display = 'none';

    // Mostra a parte de pagamento
    document.getElementById('payment-section').style.display = 'block';

    // mostra o preço escolhido na parte do pagamento
    document.getElementById('selected-price').innerText = preço;


    // Mostra o pagamento de acordo com o plano escolhido
    const paymentForm = document.getElementById('payment-form');
    paymentForm.addEventListener('change', (event) => {
        const selectedMethod = event.target.value;

        const cartaoInfo = document.getElementById('cartao-info');
        const pixInfo = document.getElementById('pix-info');

        const nomeTitular = document.getElementById("nome-titular");
        const cardNumb = document.getElementById("card-number");
        const cardValid = document.getElementById("card-validade");
        const cvvNum = document.getElementById("cvv-number");

        const nomePix = document.getElementById("nome");
        const CpfPix = document.getElementById("CPF");
        const EmailPix = document.getElementById("email");

        if (selectedMethod === 'cartao') {
            // Se for cartão, exibe as informações do cartão
            cartaoInfo.style.display = 'block';
            pixInfo.style.display = 'none';
            nomeTitular.setAttribute("required", "");
            cardNumb.setAttribute("required", "");
            cardValid.setAttribute("required", "");
            cvvNum.setAttribute("required", "");
            nomePix.removeAttribute("required");
            CpfPix.removeAttribute("required");
            EmailPix.removeAttribute("required");
        
        } else if (selectedMethod === 'pix') {
            // Se for Pix, exibe as informações do Pix
            cartaoInfo.style.display = 'none';
            pixInfo.style.display = 'block';
            nomeTitular.removeAttribute("required");
            cardNumb.removeAttribute("required");
            cardValid.removeAttribute("required");
            cvvNum.removeAttribute("required");
            nomePix.setAttribute("required", "");
            CpfPix.setAttribute("required", "");
            EmailPix.setAttribute("required", "");
        }

    });
    // Envio do formulário
    paymentForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão

        const valor = document.getElementById('nome-titular');
        const stringCapturada = valor.value;
    localStorage.setItem('nome-titular', stringCapturada); // Armazena o valor no localStorage
    window.location.href = 'cliente.html';

        alert(`Pagamento de ${preço} efetuado com sucesso!`);
         window.location.href = 'cliente.html'
         
    });
    
}

function GerarQrcode(){
    const ImgQrcode = document.getElementById('imgqrcode');
    ImgQrcode.style.display = 'block';
}

//faz com que o nome do titular do cartao seja aceito de só uma forma
document.getElementById('nome-titular').addEventListener('input', function(e){
    let input = e.target.value;

    input = input.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');

    e.target.value = input;
});

//faz com que os numeros do cartao seja aceito de só uma forma
document.getElementById('card-number').addEventListener('input', function(e){
    let input = e.target.value;

    //remove tudo que nao for numero
   input = input.replace(/\D/g, "");

   //coloca limite de caracter
   if(input.length > 16){
    input = input.slice(0, 16);
   }

    //faz os numero ficarem em grupos de 4 numeros 
    const formattedInput = input.match(/.{1,4}/g)?.join(' ') || '';

    e.target.value = formattedInput;

});

//faz com que os numeros de validade seja aceito de só uma forma
document.getElementById('card-validade').addEventListener('input', function(e){
    let input = e.target.value

    //remove tudo que nao for numero
    input = input.replace(/\D/g, "");

    //coloca limite de caracter
    if(input.length > 4){
        input = input.slice(0, 4);
    }

    //faz aceita apenas no formatato MM/AA
    if(input.length >= 2){
        input = input.slice(0,2) + '/' + input.slice(2);
    }

    //atualiza o lugar
    e.target.value = input
});


//faz com que os numeros do cvv do cartao seja aceito de só uma forma
document.getElementById ('cvv-number').addEventListener('input', function(e){
    let input = e.target.value

    //remove oq nao for numero
    input = input.replace(/\D/g, "");

    if(input.length > 3){
        input = input.slice(0,3);
    }

    e.target.value = input
})

//pix

//faz com que o CPF seja caeito apenas de um jeito
document.getElementById('CPF').addEventListener('input', function(e){
    let input = e.target.value

    //remove tudo que nao for numero
    input = input.replace(/\D/g, "");

    if(input.length > 11){
        input = input.slice(0,11);
    }

    if(input.length >= 3){
        input = input.replace(/(\d{3})(\d)/, '$1.$2');// Adiciona o primeiro ponto
    }

    if (input.length >= 6) {
        input = input.replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3'); // Adiciona o segundo ponto
    }

    if (input.length >= 9) {
        input = input.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4'); // Adiciona o hífen
    }

    e.target.value = input
});


//faz com que o nome do titular do cartao seja aceito de só uma forma
document.getElementById('nome').addEventListener('input', function(e){
    let input = e.target.value;

    input = input.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');

    e.target.value = input;
});



