let calcular=document.getElementById('calcular').addEventListener("click", calculoImc)
        function calculoImc(){
            let nome=document.getElementById('nome').value
            let altura=document.getElementById('altura').value
            let peso=document.getElementById('peso').value
            let resultado=document.getElementById('resultado')
            let imc=((peso)/(altura*altura)).toFixed(1)
            
            let classificacao=''
            if(imc < 18.5){
                classificacao = 'abaixo do peso.'
            }else if (imc < 25) {
                classificacao = 'com peso ideal.'
            }else if (imc < 30){
                classificacao = 'levemente acima do peso.';
            }else if (imc < 35){
                classificacao = 'com obesidade grau I.';
            }else if (imc < 40){
                classificacao = 'com obesidade grau II';
            }else {
                classificacao = 'com obesidade grau III.';
            }
           
            resultado.textContent=`${nome} seu IMC é ${imc}, voce esta ${classificacao}`
        }