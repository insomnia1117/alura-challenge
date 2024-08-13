const ingrese = document.getElementById("ingrese");
const Encriptar = document.getElementById("Encriptar");
const Desencriptar = document.getElementById("Desencriptar");
const mensajeFinal = document.getElementById("mensajeFinal");
const seccionDesencriptado = document.querySelector('.seccion_desencriptado');
const copiarTexto = document.getElementById("copiarTexto");
//bton de copiar y un mensaje final 

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

let reemplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

Encriptar.addEventListener("click", () => {
    const texto = ingrese.value.toLowerCase()
    function encriptar(newText ) {
        for (i = 0; i < reemplazar.length; i++){
            if (newText.includes(reemplazar[i][0])){
                newText =  newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
            };
        };
        return newText
    }
  //console.log(encriptar(texto))
  const textoEncriptado = encriptar(texto);
  mensajeFinal.innerHTML = textoEncriptado;
  imagen_muñeco2.style.display = "none";
  info_texto.style.display = "none";
  seccionDesencriptado.style.display = "block";

}) 

Desencriptar.addEventListener("click", () => {
    const texto = ingrese.value.toLowerCase();

    function desencriptar(newText) {
        for (let i = 0; i < reemplazar.length; i++) {
            if (newText.includes(reemplazar[i][1])) {
                newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]); // Correcto uso de replaceAll
            }
        }
        return newText;
    }

    const textoDesencriptado = desencriptar(texto);
    mensajeFinal.innerHTML = textoDesencriptado;
});


function copiarAlPortapapeles() {
    const texto = document.getElementById('mensajeFinal').innerText;
    navigator.clipboard.writeText(texto)
        .then(() => {
            alert('Texto copiado al portapapeles!');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}

