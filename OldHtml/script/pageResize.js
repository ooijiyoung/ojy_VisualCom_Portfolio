 /*
 This Script is to make footer goes to bottom
 For short pages oni 
 2016 (c) Ooi Ji Young
 src taken and modified from stackoverflow
 
 */
 
 function makeFooterAtBottom() {
	$('#mainContent').css('min-height', 0);
	$('#mainContent').css('min-height', (
	$(document).height() 
     - $('#header').outerHeight(true) 
     - $('#footer').outerHeight(true)
	 - 35
   ));
 }

 // onDocumentReady function bind
 $(document).ready(function() {
	console.log("Page ready");
	makeFooterAtBottom();
 });

 // onResize bind of the function
 $(window).resize(function() {
	console.log("Page resize");
	makeFooterAtBottom();
 });
