
function setHTMLFontSize(){
    var width = document.documentElement.offsetWidth;
    var fontSize = width/3.75;
    fontSize = fontSize>200?200:fontSize;
    document.documentElement.style.fontSize=fontSize+"px";
}

window.addEventListener('resize',setHTMLFontSize);
setHTMLFontSize();
