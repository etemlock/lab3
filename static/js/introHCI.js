'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("clicked button...");
		$(".jumbotron p").toggleClass("active");
	});
		$("#submitBtn").click(updateProject);
	

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

function updateProject(e){
	var projectID = $('#project').val();
	$(projectID).animate({
		width: $('#width').val()
	});

	var newText = $('#description').val()
	$(projectID + " .project-description").text(newText);
}

function projectClick(e) { 
    // prevent the page from reloading    
    console.log("Project clicked")  
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    console.log(jumbotronHeader.length);
    jumbotronHeader.text(projectTitle);
    
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
    	$(description).hide();
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
}