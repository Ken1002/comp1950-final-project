/*Victoria Chernyaeva & Ken Andreasen COMP 1950 Final project*/
/*Alertify plugin for the button on the about page*/
$(document).ready(function () {

	
$(".button").on("click", function(event){
event.preventDefault();
alertify.confirm("Submit the quiz?", function(e){
   if (e) {
	  $("#category-form").submit();
	  alertify.success("Your quiz was submitted")
	  return true;
   } else {
	  alertify.error("Your quiz was NOT submitted");
	  return false;
   }
});
});
});