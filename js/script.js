function cambiarTexto(){
    document.getElementById('Titulo').innerHTML = 'Otro Texto';
}

function MostrarFecha(){
    document.getElementById('Fecha').innerHTML = Date();
    document.getElementById('fechaImput').value = Date();
}