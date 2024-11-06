function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => {
        sec.style.display = 'none'; 
    });
    document.getElementById(section).style.display = 'block'; 
}


showSection('dados');



function toggleEdit() {
    const cartaoDisplay = document.getElementById('cartao-display');
    const cartaoInput = document.getElementById('cartao-input');
    const editButton = document.getElementById('edit-button');

    if (editButton.textContent === 'Editar') {
        cartaoDisplay.style.display = 'none';
        cartaoInput.style.display = 'block';
        editButton.textContent = 'Salvar';
    } else {
        cartaoDisplay.textContent = cartaoInput.value;
        cartaoDisplay.style.display = 'block';
        cartaoInput.style.display = 'none';
        editButton.textContent = 'Editar';
    }
}


function preview(event){
    const file = event.target.file[0]
    const reader = new FileReader();

    reader.onload = function(){
        const img = document.getElementById('foto');
        img.src = reader.result
    }
    if(file){
        reader.readAsDataURL(file)
    }
}

// faz eu poder trocar de foto
const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "Escolha sua Foto de Perfil";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});

