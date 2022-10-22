$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    })

    
    $('form').validate({
        rules: {
            name: {
                required: true
            },
            cpf: {
                required: true
            },
            email: {
                required: true
            },
            telephone: {
                required: true
            },
            cep: {
                required: true
            },
            address: {
                required: true
            }
        },
        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos);
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    })
    $('#cpf').mask(('000.000.000-00'), {
        placeholder: '000.000.000-00'
    })
    $('#telephone').mask(('(00) 00000-0000'), {
        placeholder: '(00) 00000-0000'
    })
    $('#cep').mask(('00000-000'), {
        placeholder: '00000-000'
    })
   
})