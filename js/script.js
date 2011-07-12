$(function(){

var num = 100,
    depth = 4,
    text = "";

for (var i = depth - 1; i >= 0; i--){
  text += "<ul>";
  for (var j = num - 1; j >= 0; j--){
    text += '<li> Item number '+j;
  }
}   
for (var i = depth - 1; i >= 0; i--){
  text += "</ul>";
}

$('#list').append(text);

$(document).scroll(function(evt) {
  var scroll = document.body.scrollTop;
})

});
