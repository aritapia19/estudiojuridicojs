document.getElementById('consultaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    Swal.fire({
        title: '¡Formulario enviado!',
        text: 'Tu consulta ha sido enviada con éxito. Nos pondremos en contacto a la brevedad.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
});
