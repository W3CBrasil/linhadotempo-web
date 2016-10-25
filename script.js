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


/*
 * Konami-JS ~ 
 * :: Now with support for touch events and multiple instances for 
 * :: those situations that call for multiple easter eggs!
 * Code: https://github.com/snaptortoise/konami-js
 * Examples: http://www.snaptortoise.com/konami-js
 * Copyright (c) 2009 George Mandis (georgemandis.com, snaptortoise.com)
 * Version: 1.4.6 (3/2/2016)
 * Licensed under the MIT License (http://opensource.org/licenses/MIT)
 * Tested in: Safari 4+, Google Chrome 4+, Firefox 3+, IE7+, Mobile Safari 2.2.1 and Dolphin Browser
 */

var Konami = function (callback) {
    var konami = {
        addEvent: function (obj, type, fn, ref_obj) {
            if (obj.addEventListener)
                obj.addEventListener(type, fn, false);
            else if (obj.attachEvent) {
                // IE
                obj["e" + type + fn] = fn;
                obj[type + fn] = function () {
                    obj["e" + type + fn](window.event, ref_obj);
                }
                obj.attachEvent("on" + type, obj[type + fn]);
            }
        },
        input: "",
        pattern: "38384040373937396665",
        load: function (link) {
            this.addEvent(document, "keydown", function (e, ref_obj) {
                if (ref_obj) konami = ref_obj; // IE
                konami.input += e ? e.keyCode : event.keyCode;
                if (konami.input.length > konami.pattern.length)
                    konami.input = konami.input.substr((konami.input.length - konami.pattern.length));
                if (konami.input == konami.pattern) {
                    konami.code(link);
                    konami.input = "";
                    e.preventDefault();
                    return false;
                }
            }, this);
            this.iphone.load(link);
        },
        code: function (link) {
            window.location = link
        },
        iphone: {
            start_x: 0,
            start_y: 0,
            stop_x: 0,
            stop_y: 0,
            tap: false,
            capture: false,
            orig_keys: "",
            keys: ["UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT", "RIGHT", "TAP", "TAP"],
            code: function (link) {
                konami.code(link);
            },
            load: function (link) {
                this.orig_keys = this.keys;
                konami.addEvent(document, "touchmove", function (e) {
                    if (e.touches.length == 1 && konami.iphone.capture == true) {
                        var touch = e.touches[0];
                        konami.iphone.stop_x = touch.pageX;
                        konami.iphone.stop_y = touch.pageY;
                        konami.iphone.tap = false;
                        konami.iphone.capture = false;
                        konami.iphone.check_direction();
                    }
                });
                konami.addEvent(document, "touchend", function (evt) {
                    if (konami.iphone.tap == true) konami.iphone.check_direction(link);
                }, false);
                konami.addEvent(document, "touchstart", function (evt) {
                    konami.iphone.start_x = evt.changedTouches[0].pageX;
                    konami.iphone.start_y = evt.changedTouches[0].pageY;
                    konami.iphone.tap = true;
                    konami.iphone.capture = true;
                });
            },
            check_direction: function (link) {
                x_magnitude = Math.abs(this.start_x - this.stop_x);
                y_magnitude = Math.abs(this.start_y - this.stop_y);
                x = ((this.start_x - this.stop_x) < 0) ? "RIGHT" : "LEFT";
                y = ((this.start_y - this.stop_y) < 0) ? "DOWN" : "UP";
                result = (x_magnitude > y_magnitude) ? x : y;
                result = (this.tap == true) ? "TAP" : result;

                if (result == this.keys[0]) this.keys = this.keys.slice(1, this.keys.length);
                if (this.keys.length == 0) {
                    this.keys = this.orig_keys;
                    this.code(link);
                }
            }
        }
    }

    typeof callback === "string" && konami.load(callback);
    if (typeof callback === "function") {
        konami.code = callback;
        konami.load();
    }

    return konami;
};

var rei = document.getElementById("web-2009-ee");
var idrei = document.getElementById("web-2009-ee-sp");
var contentrei= document.createTextNode("Aguarde instruções");
var easter_egg = new Konami(function() { 
    rei.style.display = "inline-block";
    idrei.appendChild(contentrei);
});
