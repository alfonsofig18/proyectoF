const messageSuccess = (name) => {
    return (
        `<span>Hola, <b>${name}</b>, gracias por confiar en Unity. Hemos recibido tu mensaje con éxito. Nos pondremos en contacto contigo lo más pronto posible.</span>`
    )
}

const messageError = (cod_error) => {
    return (
        `<span>Ha ocurrido un error inesperado. No pudimos hacer eso, vuelve a intentarlo un poco más tarde. 
        <br>
        Error code: <b>${cod_error}</b></span>`
    )
}


const btn_event = () => {
    if ($('#spinner_btn').hasClass('spinner-off')) {
        $('#spinner_btn').removeClass('spinner-off');
        $('#spinner_btn').addClass('spinner-on');
    }
    $('#spinner_text').text('Enviado...');
    $('#sendBtnKO').prop('disabled', true);
};

const btn_event_success = () => {
    if ($('#spinner_btn').hasClass('spinner-on')) {
        $('#spinner_btn').removeClass('spinner-on');
        $('#spinner_btn').addClass('spinner-off');
    }
    $('#sendBtnKO').html(`
        <i class="bi bi-check-circle-fill"></i>
        <span role="status" id="spinner_text">Enviado</span>
        `)
    if (!$('#liveToast').hasClass('text-bg-primary')) {
        $('#liveToast').removeClass('text-bg-danger');
        $('#liveToast').addClass('text-bg-primary');
    };
}

const btn_event_error = () => {
    if ($('#spinner_btn').hasClass('spinner-on')) {
        $('#spinner_btn').removeClass('spinner-on');
        $('#spinner_btn').addClass('spinner-off');
    }
    $('#sendBtnKO').addClass('btn-danger');
    $('#sendBtnKO').removeClass('btn-primary');
    $('#sendBtnKO').html(`
        <i class="bi bi-x-circle-fill"></i>
        <span role="status" id="spinner_text">Error</span>
        `);
    if (!$('#liveToast').hasClass('text-bg-danger')) {
        $('#liveToast').removeClass('text-bg-primary');
        $('#liveToast').addClass('text-bg-danger');
    };
    setTimeout(() => {
        $('#sendBtnKO').removeClass('btn-danger');
        $('#sendBtnKO').addClass('btn-primary');
        $('#sendBtnKO').html(`
            <span class="spinner-border spinner-border-sm spinner-off" aria-hidden="true" id="spinner_btn"></span>
            <span role="status" id="spinner_text">Enviar</span>
            `);
        $('#sendBtnKO').prop('disabled', false);
    }, 4000);
}

// const scrollTo = () => {
//     const textAreaMessage = document.getElementById('message');
//     textAreaMessage.scrollIntoView({ behavior: 'smooth' });
// };

let minutos = 1;
let intervalo;

const letMinutos = () => {
    try {
        clearInterval(intervalo);
    } catch (error) {
        console.error(error)
    }
    $('#minutes_ago').text('Justo ahora');
    minutos = 1;
}

const toastMinutes = () => {
    if (minutos >= 15) {
        $('#minutes_ago').text('Hace más de 15 min');
    }
    else {
        $('#minutes_ago').text(`Hace ${minutos} min`);
    }
};

const liveToast = () => {
    let contador = 0;
    $('#liveToast').toast('show');
    intervalo = setInterval(() => {
        toastMinutes();
        minutos++;
        contador++;
        if (contador > 15) {
            clearInterval(intervalo);
        }
    }, 60000);
};

export { messageSuccess, messageError, btn_event, btn_event_success, btn_event_error, liveToast, letMinutos };