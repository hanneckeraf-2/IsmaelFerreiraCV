function ativarAnimacao(div) {
    let elemento = document.getElementById(div);
    elemento.classList.remove('animacao');
    void elemento.offsetHeight;
    elemento.classList.add('animacao');
}