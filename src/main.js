var sinopseContainer = document.getElementById('sinopse');
var heroBackground = document.getElementById('hero');
var ampliaSection = document.getElementById('ampliaSection');
var escondido = true;
var tamanhoSmall = true;

ampliaSection.addEventListener('click',function(){
    if(verificaSinopse() && verificaHero()){
        mostraSinopse();
    }else{
        escondeSinopse();
    }
})

//FUNÇÕES

function escondeSinopse(){
    sinopseContainer.classList.add('-hide')
    heroBackground.classList.add('--height_full')
}

function mostraSinopse(){
    sinopseContainer.classList.remove('-hide')
    heroBackground.classList.remove('--height_full')
}

function verificaSinopse(){
    if(sinopseContainer.classList.contains('-hide')){ 
        escondido
    }else{
        escondido = false;
    }
    return escondido;
}

function verificaHero(){
    if(heroBackground.classList.contains('--height_full')){ 
        tamanhoSmall;
    }else{
        tamanhoSmall = false;
    }
    return tamanhoSmall;
}