// JavaScript Document
	$(document).ready(function(){
 		  var $lightbox = $("<div class='lightbox'></div>");
		  var $img = $("<img>");

		  // Add image and caption to lightbox

		  $lightbox
			.append($img)

		  // Add lighbox to document

		  $('body').append($lightbox);

		  $('.lightbox-gallery img').click(function(e) {
			e.preventDefault();

			// Get image link and description
			var src = $(this).attr("data-image-hd");

			// Add data to lighbox

			$img.attr('src', src);

			// Show lightbox

			$lightbox.fadeIn('fast');

			$lightbox.click(function() {
			  $lightbox.fadeOut('fast');
			});
		  });
	});