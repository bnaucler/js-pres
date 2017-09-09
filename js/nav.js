document.getElementById('head').innerHTML = document.title;

var cpage = window.location.pathname.split("/").pop();
var prevpage, nextpage;
var plen = page.length;

for(var i = 0; i < plen; i++) {
    if(page[i] === cpage) {
        prevpage = page[(i - 1)];
        nextpage = page[(i + 1)];
        break;
    }
}

if(prevpage == undefined)
    document.getElementById('backarrow').style.visibility = 'hidden';

if(nextpage == undefined)
    document.getElementById('fwdarrow').style.visibility = 'hidden';

function gopage(page) {
    if(page != undefined) window.location.href = page;
}

document.onkeyup = function(evt) {
    if(evt.keyCode == 37) gopage(prevpage);
    else if(evt.keyCode == 39) gopage(nextpage);
}
