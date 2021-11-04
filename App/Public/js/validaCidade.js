function Getuf(){
let res = document.querySelector('#estado').value;
let url ='https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+res+'/municipios';

        $.getJSON(url, function(data){
                
                let conteudo = '<optiongroup>';
                    $.each(data,function(v,val){
                conteudo += '<option>'+val.nome+'</option>';
                
                });
                conteudo += '</optiongroup>';
                $('#municipios').html(conteudo);                
        });
    }
    