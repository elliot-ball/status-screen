setTimeout(function() { 
  console.log("woo");
var cssLink = document.createElement("link"); 
cssLink.href = "../css/googleCalendarOverride.css"; 
cssLink.rel = "stylesheet"; 
cssLink.type = "text/css"; 
// frames['frame1'].document.body.appendChild(cssLink);
document.getElementById('calendar').appendChild(cssLink);

 }, 3000);

function clock() {
  $('#clock').html(moment().format('h:mm'));
  $("#unit").html(moment().format("A"))
}

setInterval(clock, 1000);

// $("div").click(function(){
//   $("body").toggleClass("yellow");
// });