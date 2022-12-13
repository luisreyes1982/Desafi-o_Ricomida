$(document).ready(function () {

    $('#btn-correo').click(function () {
        alert("El correo ha sido enviado exitosamente");
    })

    $('#receta h2').dblclick(function () {
        $(this).css({
            "color": "red",
            "font-size": "2em"
        })
    })

    $('.card-title').click(function () {
        $('#recetas-relacionadas p').toggle("hide");
    })

})