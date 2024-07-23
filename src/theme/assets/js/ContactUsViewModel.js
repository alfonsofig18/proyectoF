import { liveToast, messageSuccess, messageError, btn_event, btn_event_success, btn_event_error, letMinutos } from './UnityDotCom/contactUs.js';
import { JValidationMessages, RuleCaracteresEspeciales, ifIHaveEmail } from './UnityDotCom/comun.js';

$(function () {

    function ContactUsViewModel() {
        ifIHaveEmail();

        var self = this;

        //Notification
        self.Name = ko.observable();
        self.Email = ko.observable();
        self.CellPhone = ko.observable();
        self.Message = ko.observable();
        //Notification


        const domain = "http://unityservices.ucs.com.co/api/";

        self.GetData = function () {
            $.ajax({
                type: "GET",
                url: domain + "Auth/A19628BE-7BE4-4B47-BEB1-A87E3CF769BF",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    self.GetToken(data.data);
                },
                error: function (xhr, status, error) {
                    console.error("Error en la solicitud:", status, error);
                }
            });
        };

        self.GetToken = function (data) {
            $.ajax({
                type: "POST",
                url: domain + "Auth/token",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify({
                    EncryptedData: data
                }),
                success: function (data) {
                    sessionStorage.setItem('A87E3CF769BF', data.Token);
                }
            });

        };

        self.ContactUs = function () {
            if ($('#new_email').valid()) {

                var contactUs =
                {
                    "Name": self.Name(),
                    "Email": self.Email(),
                    "CellPhone": self.CellPhone(),
                    "Message": self.Message()
                };

                console.log(contactUs);

                var token = sessionStorage.getItem('A87E3CF769BF');

                if (token != null && token.length > 0) {

                    console.log("token valido");
                    $.ajax({
                        type: "POST",
                        url: domain + "Email/ContactUs",
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify(contactUs),
                        dataType: "json",
                        headers: {
                            // Agrega el encabezado de autorización con el token
                            "Authorization": "Bearer " + token
                        },
                        beforeSend: () => {
                            $('#liveToast').toast('hide');
                            btn_event();
                            letMinutos();
                        },
                        success: function (data) {
                            console.log("success call");
                            console.log(data);
                            btn_event_success();
                            $('#toast_body').html(messageSuccess(contactUs.Name));
                            liveToast();
                        },
                        error: function (hr, status, error) {
                            console.log("error call");
                            console.log(hr);
                            console.log(status);
                            console.log(error);
                            btn_event_error();
                            $('#toast_body').html(messageError(hr.status));
                            liveToast();
                        },
                        async: true
                    });
                };
            } else {
                return;
            };
        };

        self.GetData();
        ko.applyBindings(self, document.getElementById("ContactUsViewModel"));
    }

    var contactUsVM = new ContactUsViewModel();
    RuleCaracteresEspeciales();
    $('#new_email').validate({
        rules: {
            fullName: {
                required: true,
                minlength: 3,
                maxlength: 50,
                alphanumeric: true
            },
            cellPhone: {
                required: true,
                number: true,
                minlength: 10,
                maxlength: 15,
                step: 1,
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 3,
                maxlength: 250,
                alphanumeric: true
            }
        },
        messages: {
            fullName: JValidationMessages.fullName(3, 50),
            cellPhone: JValidationMessages.cellPhone(10, 15),
            email: JValidationMessages.email(),
            message: JValidationMessages.message(3, 250)
        },
        // errorElement: 'span'
    });
});
