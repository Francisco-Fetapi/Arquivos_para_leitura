// function user(nome,sobrnome,genero){
//     this.nome = nome;
//     this.sobrenome = sobrnome;
//     this.genero = genero;

// }
class user{
    constructor(nome,sobrnome,genero){
        this.nome = nome;
        this.sobrenome = sobrnome;
        this.genero = genero;
    
    }

}


var usuarios = [];
var cont = 0;

$(function(){
    // $('.alert').slideUp(1);
    $('button:first').click(function(){
        var nome = $('#nome').val();
        var sobrenome = $('#Snome').val();
        var genero = $('#genero option:selected').val();
    
        if(nome==''|| sobrenome==''){
            $('.alert').slideDown(130);
            $('.alert').addClass('d-block alert-danger').html('<b>Erro ao Cadastrar:</b> Nenhum dos campos pode estar vazio!'); 
            termAlerta();
        }
        else{
            $('.alert').slideDown(130).show();
            $('.alert').addClass('d-block alert-success').html('<b>Sucesso:</b> Dados cadastrados com sucesso!'); 
            usuarios[cont] = new user(nome,sobrenome,genero);
            cadastrar(usuarios[cont]);
            cont++;
            termAlerta();
        }
        // console.log(`${nome} ${sobrenome} e ${genero}`);
    })
    
    function cadastrar(obj){
        let bodyTabela = $('tbody');
        $('table').removeClass('d-none');
        bodyTabela.html(bodyTabela.html()+'<tr>');
        for(ind in obj){
            bodyTabela.append(`
                <td>${obj[ind]}</td>
            `)
        }
        bodyTabela.html(bodyTabela.html()+'</tr>');
        $('tr:empty').remove();
    }
    function termAlerta(){
        setTimeout(function(){
            $('.alert').slideUp(180).removeClass('alert-danger d-block').addClass('d-none');
        },2000)
    }
})

