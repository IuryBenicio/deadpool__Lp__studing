var sinopseContainer = document.getElementsByClassName('container__sinopse');
var heroBackground = document.getElementById('hero');

function showSinopse(){
    console.log('clicou');
    console.log(sinopseContainer);
    if(sinopseContainer.classList.contains('-hide') && heroBackground.classList.contains('--height_full')){
        sinopseContainer.classList.remove('-hide');
        heroBackground.classList.remove('--height_full');
    }else{
        sinopseContainer.classList.add('-hide');
        heroBackground.classList.add('--height_full');
    }
}