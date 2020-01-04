
qt=0;

function getQt(){
    //recebe a quantidade de espaços que devem ser gerados
     qt=document.getElementById("quantidade").value;
    
    
    geraCampos();
}


function geraCampos(){

    let titulo=document.createElement('h2');
    titulo.textContent="Somador";
    titulo.style.fontStyle="bold";
    titulo.align="center";
    titulo.style.color="#2F4F4F";
    document.body.appendChild(titulo);
    let sTitulo=document.createElement('h5');
    sTitulo.textContent="Digite nos campos os valores que deseja somar";
    sTitulo.align="center";
    sTitulo.style.color="#778899";
    document.body.appendChild(sTitulo);

     //gera os espaços
    for(let i=0;i<qt;i++){
        let editText=document.createElement('input');
        editText.id=i.toString();
        editText.placeholder="Insira o número";
        editText.style.width="100%";
        editText.style.backgroundColor="#F0F8FF";
        document.body.appendChild(editText);
        //gera sinais
        if(i<(qt-1)){
            let sinal=document.createElement('h6');
            sinal.textContent="+";
            sinal.style.color="#BA55D3";
            sinal.align="center";
            document.body.appendChild(sinal);
        }
    }
    //gera botao enviar
    let enviar=document.createElement('button');
    enviar.type="submit";
    document.body.appendChild(enviar);
    enviar.textContent="CALCULAR";
    enviar.style.backgroundColor="#F5DEB3";
    enviar.onclick=verificaValores;

    
}


function verificaValores(){
    //verifica se os valores digitados são números
    //alert("chamou a funcao");

    var valores=[];
    var resultado=false;
    
    for(let i=0;i<qt;i++){
        //construindo array com os valores
        valor=(document.getElementById(i).value);
        //verifica se existem problmas com o preenchimento dos valores
        if(isNaN(valor)){
            alert("Por favor digite apenas valores numéricos!");
            resultado=false;
            break;
        }else if((valor==null)||valor==""){
            alert("Por favor preencha todos os campos!");
            resultado=false;
            break;
        }else{
            valores.push(valor);
            resultado=true;
            //alert(resultado);
        }
    }
    if(resultado==true){
        soma(valores);
    }
}


function soma(valores){
    //soma os numeros digitados pelo usuário
    let soma=0;
    for(var i=0;i<qt;i++){
        soma+=parseInt(valores[i]);
    }
    alert("A soma deu "+soma);
}

