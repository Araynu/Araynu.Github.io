document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
});

function verTrailer(trailerLink) {
    window.open(trailerLink, '_blank');
}

const h1ClimaxTV = document.querySelector('header h1');
const originalText = h1ClimaxTV.textContent;
const alternateText = '¡Pasen y disfruten!';

let isOriginal = true;

h1ClimaxTV.addEventListener('mouseover', function() {
    h1ClimaxTV.style.cursor = 'pointer';
});

h1ClimaxTV.addEventListener('mouseout', function() {
    h1ClimaxTV.style.cursor = 'auto';
});

function toggleText() {
    if (isOriginal) {
        h1ClimaxTV.textContent = alternateText;
    } else {
        h1ClimaxTV.textContent = originalText;
    }
    isOriginal = !isOriginal;
}

setInterval(toggleText, 5000);

function mostrarDescripcion(titulo, descripcion) {
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('descripcionModal').innerHTML = `<strong>${titulo}</strong><br><br><u>Descripción:</u> ${descripcion}`;
}

function cerrarModal() {
    document.getElementById('myModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
