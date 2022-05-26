// Clipboard
var clipboardText1 = new Clipboard('.copyText'); // Creando clipboard
var clipboardText2 = new Clipboard('.copyText--1'); // Creando clipboard
let texto_1 = document.querySelector(".message"); // Elemento tooltip
let texto_2 = document.querySelector(".message--1"); // Elemento tooltip
 
clipboardText1.on('success', function(e) {
  setTooltip1();
});
  
clipboardText1.on('error', function(e) {
  setTooltip1();
});

clipboardText2.on('success', function(e) {
  setTooltip2();
});
  
clipboardText2.on('error', function(e) {
  setTooltip2();
});

// Tooltip
function setTooltip1() {
  texto_1.style.visibility = "visible";
  setTimeout(function() {
    texto_1.style.visibility = "hidden"; 
  }, 500);
}

function setTooltip2() {
  texto_2.style.visibility = "visible";
  setTimeout(function() {
    texto_2.style.visibility = "hidden"; 
  }, 500);
}
  
  
  
  