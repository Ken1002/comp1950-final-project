/*Victoria Chernyaeva & Ken Andreasen COMP 1950 Final project*/
$(document).ready(function () {

	$("#nav").hide();
    $("nav p").hide();
	
	
	/*Open the menu*/
	$("#nav_icon").click(function () {
		$("#nav").slideToggle();
		$("#nav_icon").fadeToggle();
        $("nav p").slideToggle();
	});
	
	/*Close the menu*/
	$("nav p").click(function () {
		$("#nav").slideToggle();
		$("#nav_icon").fadeToggle();
        $("nav p").fadeToggle();
	});

	/*Alertify plugin for the button on the about page*/
    $(".button").on("click", function(event){
    event.preventDefault();
    alertify.confirm("Submit the feedback?", function(e){
        if (e) {
            $("#category-form").submit();
            alertify.success("Your message was sent")
            return true;
        } else {
            alertify.error("Your message was NOT sent");
            return false;
        }
    });
});
});