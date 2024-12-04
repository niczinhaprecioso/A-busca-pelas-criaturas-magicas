const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(Button => {
    Button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove9('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})