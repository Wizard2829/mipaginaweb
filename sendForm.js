           document.addEventListener('DOMContentLoaded', function() {
            const formulario = document.getElementById('formularioContacto');
            const nombreInput = document.getElementById('nombre');
            const comentariosInput = document.getElementById('comentarios');
            const emailInput = document.getElementById('email');
            const errorNombre = document.getElementById('errorNombre');
            const errorComentarios = document.getElementById('errorComentarios');
            const errorEmail = document.getElementById('errorEmail');

            formulario.addEventListener('submit', function(event) {
                let isValid = true;

                // Validar Nombre
                if (nombreInput.value.trim() === '') {
                    errorNombre.textContent = 'Por favor, digite su nombre.';
                    isValid = false;
                } else {
                    errorNombre.textContent = '';
                }

                // Validar Comentarios
                if (comentariosInput.value.trim() === '') {
                    errorComentarios.textContent = 'Por favor, escriba su mensaje.';
                    isValid = false;
                } else {
                    errorComentarios.textContent = '';
                }

                // Validar Email
                if (emailInput.value.trim() === '') {
                    errorEmail.textContent = 'Por favor, digite su correo electrónico.';
                    isValid = false;
                } else if (!isValidEmail(emailInput.value.trim())) {
                    errorEmail.textContent = 'Por favor, digite un correo electrónico válido.';
                    isValid = false;
                } else {
                    errorEmail.textContent = '';
                }

                if (!isValid) {
                    event.preventDefault(); // Evitar que el formulario se envíe si hay errores
                } else {
                    alert('Formulario enviado correctamente!'); 
                }
            });

            function isValidEmail(email) {
                // Expresión regular para validar el formato de correo electrónico
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            }
        });
    