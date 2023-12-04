document.querySelector('.menu-toggle').addEventListener('click', function () {
    this.classList.toggle('active');
});

const nacionalidades = [
    'Argentina', 'Bolivia', 'Chile', 'Colombia', 'Ecuador',
    'España', 'México', 'Perú', 'Uruguay', 'Venezuela',
    'Estados Unidos', 'Canadá', 'Reino Unido', 'Alemania', 'Francia',
    'Italia', 'Brasil', 'Australia', 'India', 'Japón',
    'China', 'Rusia', 'Sudáfrica', 'Nigeria', 'Egipto',
    'Turquía', 'Corea del Sur', 'Indonesia', 'Tailandia', 'Argentina',
    'Arabia Saudita', 'Emiratos Árabes Unidos', 'Singapur', 'Malasia', 'Filipinas',
    'Nueva Zelanda', 'Israel', 'Irán', 'Irak', 'Siria',
    'Marruecos', 'Argelia', 'Niger', 'Nepal', 'Bangladés',
    'Pakistán', 'Afganistán', 'Sri Lanka', 'Maldivas', 'Bután',
    'Groenlandia', 'Islandia', 'Noruega', 'Suecia', 'Finlandia',
    'Dinamarca', 'Bélgica', 'Países Bajos', 'Luxemburgo', 'Suiza',
    'Austria', 'Hungría', 'República Checa', 'Eslovaquia', 'Polonia',
    'Ucrania', 'Bielorrusia', 'Lituania', 'Letonia', 'Estonia',
    'Croacia', 'Eslovenia', 'Bosnia y Herzegovina', 'Montenegro', 'Serbia',
    'Kosovo', 'Macedonia del Norte', 'Albania', 'Grecia', 'Bulgaria',
    'Rumanía', 'Moldavia', 'Georgia', 'Armenia', 'Azerbaiyán',
    'Kazajistán', 'Uzbekistán', 'Turkmenistán', 'Kirguistán', 'Tayikistán',
    'Mongolia', 'Vietnam', 'Camboya', 'Laos', 'Myanmar',
    'Malasia', 'Brunei', 'Timor Oriental', 'Papúa Nueva Guinea', 'Fiyi',
    'Islas Salomón', 'Vanuatu', 'Samoa', 'Tonga', 'Tuvalu',
    'Kiribati', 'Nauru', 'Palaos', 'Micronesia', 'Islas Marshall',
    'Estados Federados de Micronesia', 'Islas Cook', 'Niue', 'Tokelau',
    'Pitcairn', 'Santa Elena', 'Ascensión', 'Tristán de Acuña', 'Malvinas',
    'Islas Georgias del Sur', 'Bermudas', 'Islas Caimán', 'Islas Turcas y Caicos', 'Islas Vírgenes Británicas',
    'Islas Vírgenes de los Estados Unidos', 'Puerto Rico', 'Guam', 'Islas Marianas del Norte', 'Samoa Americana',
    'Palaos', 'Micronesia', 'Islas Marshall', 'Estados Federados de Micronesia', 'Islas Cook',
    'Niue', 'Tokelau', 'Pitcairn', 'Territorio Británico del Océano Índico', 'Territorios Australes Franceses',
    'Mayotte', 'Reunión', 'Wallis y Futuna', 'Polinesia Francesa', 'Nueva Caledonia'
];


const selectNacionalidad = document.getElementById('nacionalidad');

for (const nacionalidad of nacionalidades) {
    const option = document.createElement('option');
    option.value = nacionalidad;
    option.textContent = nacionalidad;
    selectNacionalidad.appendChild(option);
}

function enviarEncuesta() {

    const nombre = document.getElementById('nombre').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const nacionalidad = document.getElementById('nacionalidad').value;
    const experiencia = document.getElementById('experiencia').value;

    if (!nombre.trim()) {
        alert('Por favor, ingresa tu nombre.');
        return;
    }

    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
    if (!nombreRegex.test(nombre)) {
        alert('Por favor, ingresa un nombre válido sin números ni caracteres especiales.');
        return;
    }

    if (!isValidDate(fechaNacimiento)) {
        alert('Por favor, ingresa una fecha de nacimiento válida.');
        return;
    }

    alert('Encuesta enviada. ¡Gracias por tu participación!');
    document.getElementById('encuestaForm').reset();
}

function isValidDate(dateString) {
    const regexDate = /^\d{4}-\d{2}-\d{2}$/;

    if (!regexDate.test(dateString)) {
        return false;
    }

    const dateArray = dateString.split('-');
    const year = parseInt(dateArray[0], 10);
    const month = parseInt(dateArray[1], 10);
    const day = parseInt(dateArray[2], 10);

    const dateObject = new Date(year, month - 1, day);

    return (
        dateObject.getFullYear() === year &&
        dateObject.getMonth() === month - 1 &&
        dateObject.getDate() === day
    );
}


