function main() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const erro = document.querySelector('.erro');

    function recebeEvento(evento) {
        evento.preventDefault();

        let peso = form.querySelector('.peso');
        let altura = form.querySelector('.altura');

        if (!Number(peso.value)) {
            resultado.innerHTML = null;
            erro.innerHTML = `<p><b>Peso Inválido</b></p>`;
        } else if (!Number(altura.value)) {
            resultado.innerHTML = null;
            erro.innerHTML = `<p><b>Altura Inválida</b></p>`;
        } else {
            erro.innerHTML = null;
            let imc = peso.value / (altura.value * altura.value);

            if (imc < 18.5) {
                resultado.innerHTML = `<p>IMC: ${imc.toFixed(2)}Kg/m2(Abaixo do Peso)</p>`;
            } else if (imc >= 18.5 && imc < 25) {
                resultado.innerHTML = `<p>IMC: ${imc.toFixed(2)}Kg/m2(Peso Normal)</p>`;
            } else if (imc >= 25.5 && imc < 30) {
                resultado.innerHTML = `<p>IMC: ${imc.toFixed(2)}Kg/m2(Sobrepeso)</p>`;
            } else if (imc >= 30 && imc < 35) {
                resultado.innerHTML = `<p>IMC: ${imc.toFixed(2)}Kg/m2(Obesidade Grau 1)</p>`;
            } else if (imc >= 35 && imc < 40) {
                resultado.innerHTML = `<p>IMC: ${imc.toFixed(2)}Kg/m2(Obesidade Grau 2)</p>`;
            } else if (imc >= 40) {
                resultado.innerHTML = `<p>IMC: ${imc.toFixed(2)}Kg/m2(Obesidade Grau 3)</p>`;
            }

        }
    }

    form.addEventListener('submit', recebeEvento);

}
main();