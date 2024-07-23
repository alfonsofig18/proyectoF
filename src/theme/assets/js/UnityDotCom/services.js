document.addEventListener('DOMContentLoaded', () => {

    $('#correo').hide();

    $('#btn_send_footer').on('click', () => {
        const email = $('#EmailFooter').val();
        if (email !== null && email !== '') {
            sessionStorage.setItem('email', email);
            setTimeout(() => {
                window.location.href = 'page-contact-us-1.html';
            }, 1000);
        } else {
            $('#EmailFooter').addClass('error');
            $('#correo').show();
        }
        $('#EmailFooter').focus(() => {
            $('#EmailFooter').removeClass('error');
            $('#correo').hide();
        });
    })
})