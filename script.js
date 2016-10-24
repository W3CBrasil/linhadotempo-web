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


//acao para as perguntas de quando executou ação na Web - evento

function fiznaweb() {
    var segue = document.getElementsByClassName("previous");
    var hide;
    for (hide = 0; hide < segue.length; hide++) {
        segue[hide].style.display = "none";  
        
    }

    var nodeinternet = document.getElementsByClassName("usointernet");
    var usointernet = document.getElementById("usointernetlist").value;
    var elinternet = document.createElement("div");
    elinternet.setAttribute('class', 'classeusointernet');
    var contentinternet = document.createTextNode("Usou a Internet");
    elinternet.appendChild(contentinternet);

    var showinternet = document.getElementById("ano" + usointernet);
    showinternet.insertBefore(elinternet, showinternet.childNodes[0]);

    var usoweb = document.getElementById("usoweblist").value;
    var elweb = document.createElement("div");
    elweb.setAttribute('class', 'classeusoweb');
    var contentweb= document.createTextNode("Usou a Web");
    elweb.appendChild(contentweb);

    var showweb = document.getElementById("ano" + usoweb);
    showweb.insertBefore(elweb, showweb.childNodes[0]);

    var usoimagem = document.getElementById("imagemnaweblist").value;
    var elimagem = document.createElement("div");
    elimagem.setAttribute('class', 'classusoimagem');
    var contentimagem= document.createTextNode("Imagem na Web");
    elimagem.appendChild(contentimagem);

    var showimagem = document.getElementById("ano" + usoimagem);
    showimagem.insertBefore(elimagem, showimagem.childNodes[0]);

    var usovideo = document.getElementById("videonaweblist").value;
    var elvideo = document.createElement("div");
    elvideo.setAttribute('class', 'classusovideo');
    var contentvideo= document.createTextNode("Vídeo na Web");
    elvideo.appendChild(contentvideo);

    var showvideo = document.getElementById("ano" + usovideo);
    showvideo.insertBefore(elvideo, showvideo.childNodes[0]);

    var usocompra = document.getElementById("compranaweblist").value;
    var elcompra = document.createElement("div");
    elcompra.setAttribute('class', 'classusocompra');
    var contentcompra= document.createTextNode("Compra na Web");
    elcompra.appendChild(contentcompra);

    var showcompra = document.getElementById("ano" + usocompra);
    showcompra.insertBefore(elcompra, showcompra.childNodes[0]);

    var usobusca = document.getElementById("buscanaweblist").value;
    var elbusca = document.createElement("div");
    elbusca.setAttribute('class', 'classusobusca');
    var contentbusca= document.createTextNode("Busca na Web");
    elbusca.appendChild(contentbusca);

    var showbusca = document.getElementById("ano" + usobusca);
    showbusca.insertBefore(elbusca, showbusca.childNodes[0]);

    var usorede = document.getElementById("redenaweblist").value;
    var elrede = document.createElement("div");
    elrede.setAttribute('class', 'classusorede');
    var contentrede= document.createTextNode("Rede social");
    elrede.appendChild(contentrede);

    var showrede = document.getElementById("ano" + usorede);
    showrede.insertBefore(elrede, showrede.childNodes[0]);

    var hideall = document.getElementById("anoempty");
    hideall.style.display="none";

}