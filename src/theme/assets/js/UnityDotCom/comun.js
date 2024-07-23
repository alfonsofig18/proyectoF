const RuleCaracteresEspeciales = () => {
    return (
        $.validator.addMethod("alphanumeric", function (value, element) {
            return this.optional(element) || /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/.test(value);
        }, "No se admiten caracteres especiales")
    );
};

const JValidationMessages = {
    fullName: function (min = null, max = null) {
        const fullNameObj = {
            required: 'Por favor, ingresa un nombre',
        }
        if (min !== null) {
            fullNameObj.minlength = `Ingresa más de ${min} letras`;
        }
        if (max !== null) {
            fullNameObj.maxlength = `Ingresa menos de ${max} letras`;
        }
        return fullNameObj;
    },
    cellPhone: function (min = null, max = null) {
        const cellPhoneoObj = {
            required: 'Por favor, ingresa un teléfono',
            number: 'ingresa un teléfono válido',
            step: 'No se admiten decimales',
        }
        if (min !== null) {
            cellPhoneoObj.minlength = `Ingresa al menos ${min} caracteres`;
        }
        if (max !== null) {
            cellPhoneoObj.maxlength = `Ingresa menos de ${max} caracteres`;
        }
        return cellPhoneoObj;
    },
    email: function () {
        return {
            required: 'Por favor, ingresa un email',
            email: 'Ingresa un email válido'
        }
    },
    message: function (min = null, max = null) {
        const messageObj = {
            required: 'Por favor, ingresa tu mensaje',
        }
        if (min !== null) {
            messageObj.minlength = `Ingresa más de ${min} letras`;
        }
        if (max !== null) {
            messageObj.maxlength = `Ingresa menos de ${max} letras`;
        }
        return messageObj;
    }
}


const ifIHaveEmail = async () => {
    if (sessionStorage.getItem('email') !== null) {

        let emailSesionStorage = sessionStorage.getItem('email') + '*';
        console.log(emailSesionStorage);

        const form = document.getElementById('new_email');
        form.scrollIntoView({ behavior: 'smooth' });

        $('#email').focus();

        setTimeout(() => {
            $('#email').val(emailSesionStorage);
        }, 500);

        setTimeout(() => {
            sessionStorage.removeItem('email')
        }, 2000);
    }
}

export { JValidationMessages, RuleCaracteresEspeciales, ifIHaveEmail }