 /* FADING IN AND OUT TRANSITION BETWEEN PAGES*/

$(document).ready(function() {

$("body").css("display", "none");
$("img").css("display", "none");

$("body").fadeIn(1000);
$("img").fadeIn(1000);

$("a.transition").click(function(event){
event.preventDefault();
linkLocation = this.href;
$("body").fadeOut(1000, redirectPage);
$("img").fadeOut(1000, redirectPage); 
});

function redirectPage() {
window.location = linkLocation;
}

});