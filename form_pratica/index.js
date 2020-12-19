const form = document.querySelector('.form');
function mask(o, f) {
    setTimeout(function() {
      var v = mphone(o.value);
      if (v != o.value) {
        o.value = v;
      }
    }, 1);
  }
  
  function mphone(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      r = r.replace(/^(\d*)/, "($1");
    }
    return r;
  }

  function criaP( ){
    const p = document.createElement('div');
    return p;

}

form.addEventListener('submit' , (e) => {
   e.preventDefault();
   const el = e.target;

   const nomeInput = el.querySelector('#nome');
   const dataNasciementoInput = el.querySelector('#dataDeNascimento');
   const enderecoInput = el.querySelector('#endereco');
   const cepInput = el.querySelector('#cep');
   const telefoneInput = el.querySelector('#telefone');
   const numeroInput = el.querySelector('#numero');
   const resultado = document.querySelector('.resultado');

   const nome = nomeInput.value;
   const dataDeNascimento = dataNasciementoInput.value;
   const endereco = enderecoInput.value;
   const cep = cepInput.value;
   const telefone = telefoneInput.value;
   const numero = Number(numeroInput.value);

   if(!nome.match(/^[a-zA-Z]+$/g)) {
    return alert('campo Nome somente letra');        
    }
    
    if(!numero) {
        return alert('campo somente numero');
    }

   if(!cep.match(/^[0-9]{8}$/)) {
        return alert('Formato de CEP inválido'); 
    }

    const cepFormate = cep.substring(0,5) + "-" + cep.substring(5);

    const ux = new Date(dataDeNascimento);    
    const dataFormt = ux.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
    const p = criaP();

    p.innerHTML =  `<p>${nome}</p><p>${dataFormt}</p><p>${endereco}</p><p>${cepFormate}</p><p>${telefone}</p><p>${numero}</p> `

    resultado.appendChild(p);
     
    console.log({ nome, dataFormt, endereco, cepFormate, telefone, numero });

})