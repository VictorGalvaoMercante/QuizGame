document.addEventListener('DOMContentLoaded', function () {
    let pontuacaoTotal = parseInt(localStorage.getItem('pontuacaoTotal')) || 0;

    const pontosTotalElement = document.querySelector('.pontosTotal');

    if (pontosTotalElement) {
        pontosTotalElement.innerHTML = `Pontuação: ${pontuacaoTotal}`;
    } else {
        console.error('Elemento .pontosTotal não encontrado.');
    }

    const btnCerta = document.querySelector('.correta');

    if (btnCerta) {
        btnCerta.addEventListener('click', function () {
            pontuacaoTotal += 10;

            localStorage.setItem('pontuacaoTotal', pontuacaoTotal);

            if (pontosTotalElement) {
                pontosTotalElement.innerHTML = `Pontuação: ${pontuacaoTotal}`;
            }
        });
    }

    const btnTenteNovamente = document.querySelector('.btnTente');  
    if (btnTenteNovamente) {
        btnTenteNovamente.addEventListener('click', function () {
            localStorage.setItem('pontuacaoTotal', 0);

            if (pontosTotalElement) {
                pontosTotalElement.innerHTML = `Pontuação: 0`;
            }
        });
    }

});
