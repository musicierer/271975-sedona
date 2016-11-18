        var button = document.querySelector(".fined-hotel-btn");
    	var popup = document.querySelector(".choose-hotel");
    	var open = document.querySelector(".choose-hotel-close");

    	button.addEventListener("click", function(event) {
    	event.preventDefault();
    	popup.classList.toggle("choose-hotel-close");
    	});