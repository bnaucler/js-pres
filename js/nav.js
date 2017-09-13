// github.com/bnaucler/js-pres

var cpage = window.location.pathname.split("/").pop(); // Get name of current file
var prevpage, nextpage; // Create variables to hold names of prev and next page
var plen = page.length; // Calcluate number of pages to loop through

for(var i = 0; i < plen; i++) {     // Use 'i' to count to 'plen'
    if(page[i] === cpage) {         // Check if page[i] has the same name as cpage
        prevpage = page[(i - 1)];   // Set previous page
        nextpage = page[(i + 1)];   // Set next page
        break;                      // No need to keep looping
    }
}

// 'gopage' is executed when a navigational arrow is clicked
// 'page' can now be either 'prevpage' or 'nextpage'
function gopage(page) {
    if(page) window.location = page; // if page is defined: go there!
}

// hide the arrows if they don't point anywhere
if(prevpage === undefined)
    document.getElementById('backarrow').style.visibility = 'hidden';

if(nextpage === undefined)
    document.getElementById('fwdarrow').style.visibility = 'hidden';






document.getElementById('head').innerHTML = document.title;

document.onkeyup = function(evt) {
    if(evt.keyCode == 37) gopage(prevpage);
    else if(evt.keyCode == 39) gopage(nextpage);
}
