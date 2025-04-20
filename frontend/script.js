document.addEventListener('DOMContentLoaded', () => {
    const estudianteBtn = document.getElementById('estudianteBtn');
    const profesorBtn = document.getElementById('profesorBtn');
    const fraseContainer = document.getElementById('frase-del-dia');
    const nuevaFraseBtn = document.getElementById('nueva-frase-btn');
    let tipoUsuarioSeleccionado = null;

    estudianteBtn.addEventListener('click', () => {
        tipoUsuarioSeleccionado = 'estudiante';
        obtenerFrase(tipoUsuarioSeleccionado);
        mostrarBotonNuevaFrase();
    });

    profesorBtn.addEventListener('click', () => {
        tipoUsuarioSeleccionado = 'profesor';
        obtenerFrase(tipoUsuarioSeleccionado);
        mostrarBotonNuevaFrase();
    });

    nuevaFraseBtn.addEventListener('click', () => {
        if (tipoUsuarioSeleccionado) {
            obtenerFrase(tipoUsuarioSeleccionado);
        }
    });

    function obtenerFrase(tipo) {
        fetch(`http://localhost:3000/frase/${tipo}`)
            .then(response => response.json())
            .then(data => {
                fraseContainer.textContent = data.frase;
            })
            .catch(error => {
                fraseContainer.textContent = 'Error al obtener la frase.';
                console.error('Error:', error);
            });
    }

    function mostrarBotonNuevaFrase() {
        nuevaFraseBtn.style.display = 'block';
    }
});