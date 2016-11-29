//abre tooltip de cada elemento. Fecha os demais
function abre(event) { 
    var close = document.getElementsByClassName("hide");
    var hide;
    for (hide = 0; hide < close.length; hide++) {
        close[hide].style.display = "none";
    }
    event.currentTarget.nextElementSibling.style.display = "inline";
    event.currentTarget.nextElementSibling.setAttribute('aria-live', 'polite');
    event.currentTarget.nextElementSibling.setAttribute('aria-atomic', 'true');
}


//Exibe CSS mais simples
function css(cssFile, cssLinkIndex) {
        var horizontal = document.getElementsByTagName("link").item(cssLinkIndex);
        var vertical = document.createElement("link");
        vertical.setAttribute("rel", "stylesheet");
        vertical.setAttribute("type", "text/css");
        vertical.setAttribute("href", cssFile);
        document.getElementsByTagName("head").item(0).replaceChild(vertical, horizontal);
      }

//fecha todos os elementos com esc
document.onkeydown = function(e){
    var close = document.getElementsByClassName("hide");
    var hide;
    if(e.keyCode === 27){
        for (hide = 0; hide < close.length; hide++) {
        close[hide].style.display = "none";
        close[hide].setAttribute('aria-live', 'off');
        close[hide].setAttribute('aria-atomic', 'false');
    }
    }
};

//fecha todos os elementos com clique
function fecha() {
    var close = document.getElementsByClassName("hide");
    var hide;
    for (hide = 0; hide < close.length; hide++) {
        close[hide].style.display = "none";
        close[hide].setAttribute('aria-live', 'off');
    }
}

//acao do checkbox para abrir os eventos relacionados ao tema
function show() {
    var web = document.getElementsByClassName("web");
    var internet = document.getElementsByClassName("internet"); 
    var checkweb = document.getElementById("checkweb");
    var checkint = document.getElementById("checkint");
    
var allweb;
    for (allweb = 0; allweb < web.length; allweb++){
    if (checkweb.checked == 1){
        web[allweb].style.display = 'block';
    }else{
         web[allweb].style.display = 'none';
    }
}
var allinternet;
    for (allinternet = 0; allinternet < internet.length; allinternet++){
    if (checkint.checked == 1){
        internet[allinternet].style.display = 'block';
    }else{
         internet[allinternet].style.display = 'none';
    }
}
}
