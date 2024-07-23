document.addEventListener('DOMContentLoaded', () => {

    $('#correo').hide();

    const spans = document.getElementById('animatedWords');
    spans.addEventListener('animationend', (e) => {
        let target = e.target;
        // console.log(target);
        if (target.tagName === 'SPAN') {
            target.classList.add('word_end');
        }
    });

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
