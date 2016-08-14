var number = document.getElementById("number-input")
var slider = document.getElementById("slider-input")

slider.onchange = function(){
  number.value = slider.value;
}

number.onchange = function() {
  slider.value = number.value;
}