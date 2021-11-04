// 'URL: viacep.com.br/ws/01001000/json/?callback=callback_name';
let cep = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
// cep.value = ('01001000');

cep.addEventListener('blur',function(e){
    let cep = e.target.value;
    // alert('hello world');
    script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=callback_name';
    document.body.appendChild(script);
});

    function callback_name(request){

        if ('erro' in request) {
            alert('CEP não encontrado');
            return;
        }
        rua.value = request.logradouro;
        bairro.value = request.bairro;


    }