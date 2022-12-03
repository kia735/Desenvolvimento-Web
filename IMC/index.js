const form = document.querySelector("#form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const peso = Number(event.target.querySelector("#peso").value);
    const altura = Number(event.target.querySelector("#altura").value);

    if(!peso || !altura){
        setResultado("valor invalido");
        return;
    }
    const imc = getImc(peso,altura);
    setResultado(imc);
})

function setResultado(msg){
    const res = document.querySelector("#resultado");7
    res.innerHTML = "";
    const p = document.createElement("p");
    p.innerHTML= msg;
    p.classList.add("paragrafo-resultado");
    res.appendChild(p);
}

function getImc(peso, altura){
    const imc = (peso/(altura**2));
    if(imc < 17){
        return "Muito abaixo do peso";
    }
    else if(imc < 18.49){
        return "Abaixo do peso";
    }
    else if( imc < 24.99){
        return "Peso normal";
    }
    else if( imc < 29.99){
        return "Acima do peso";
    }
    else if(imc < 34.99){
        return "Obesidade 1";
    }
    else if(imc < 39.99){
        return "Obesidade 2(severa)";
    }
    else{
        return "Obesidade 3(mórbida)";
    }
}