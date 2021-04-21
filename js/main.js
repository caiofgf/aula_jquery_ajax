function consultaCep() {
    var cep = $('#cep').val()
    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json`,
        type: "GET",
        success: function(response) {
            console.log(response)
            $('#endereco').html(`Endereço: ${response.logradouro}<br>Bairro: ${response.bairro}<br>Cidade: ${response.localidade}<br>Estado: ${response.uf}`)
        }
    })
}