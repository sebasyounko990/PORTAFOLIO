document.addEventListener("DOMContentLoaded", function() {
    var botonCopiar = document.getElementById('boton-copiar');
    var textoACopiar = document.getElementById('texto-a-copiar').innerText;

    botonCopiar.addEventListener('click', function() {
        // Creamos un área de texto temporal
        var textareaTemporal = document.createElement('textarea');
        textareaTemporal.value = textoACopiar;

        // Añadimos el área de texto al DOM
        document.body.appendChild(textareaTemporal);

        // Seleccionamos el texto dentro del área de texto
        textareaTemporal.select();
        
        // Copiamos el texto seleccionado al portapapeles
        document.execCommand('copy');

        // Removemos el área de texto temporal
        document.body.removeChild(textareaTemporal);

        // Cambiamos el texto del botón para indicar que se ha copiado
        botonCopiar.innerText = 'Texto copiado';
    });
});

