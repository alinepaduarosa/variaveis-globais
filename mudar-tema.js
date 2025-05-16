document.addEventListener("DOMContentLoaded", function() {
    var temaEscuro = localStorage.getItem("temaEscuro") ? localStorage.getItem("temaEscuro") === 'true' : false;
    var container = document.querySelector('.container');
    var botao = document.getElementById('mudarTema');

    trocarTemaContainerBotao(temaEscuro, container, botao);
});

function mudarTema() {
    var temaEscuro = localStorage.getItem("temaEscuro") ? localStorage.getItem("temaEscuro") === 'true' : false;
    var container = document.querySelector('.container');
    var botao = document.getElementById('mudarTema');

    temaEscuro = !temaEscuro;
    trocarTemaContainerBotao(temaEscuro, container, botao);
    localStorage.setItem("temaEscuro", temaEscuro);
}

function trocarTemaContainerBotao(temaEscuro, container, botao) {
    if(temaEscuro) {
        container.classList.add('tema-escuro');
        botao.innerHTML = '<i class="material-icons">light_mode</i>';
    } else {
        container.classList.remove('tema-escuro');
        botao.innerHTML = '<i class="material-icons">dark_mode</i>';
    }
} 