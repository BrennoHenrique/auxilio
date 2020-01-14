const senhaElement = document.getElementById('senha');
const botaoElement = document.getElementById('botao');

senhaElement.focus();

botaoElement.addEventListener('click', ActiveButton);

function ActiveButton() {
    if (senhaElement.value.length == 0) {
        alert("[ERRO] Preencha o campo senha para que tenha acesso!");
    } else {
        if (senhaElement.value === '@Gointec') {
            window.location.href = 'http://youtube.com/'
        } else {
            alert("[ERRO] Senha incorreta!");
        }
    }
}