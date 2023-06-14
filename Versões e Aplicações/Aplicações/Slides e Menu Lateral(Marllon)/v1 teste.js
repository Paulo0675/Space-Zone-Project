function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }
    else {
        menuMobile.classList.add('open');
    }
}

let count =1;

document.getElementById("radio1").checked = true;

setInterval (function() {
    nextimage();
}, 6000)

function nextimage(){
    count++;
    if(count>4){
        count=1;
    }

    document.getElementById("radio"+count).checked = true;
}
function clickmenu(){
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    }
    else {
        itens.style.display = 'block'
    }
}