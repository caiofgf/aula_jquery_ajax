function consultaCep() {
    var cep = $('#cep').val()
    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json`,
        type: "GET",
        success: function(response) {
            console.log(response)
            $('#logradouro').html(response.logradouro)
            $('#bairro').html(response.bairro)
            $('#cidade').html(response.localidade)
            $('#uf').html(response.uf)
            $('#titulo-cep').html(`CEP: ${cep}`)
        }
    })
}