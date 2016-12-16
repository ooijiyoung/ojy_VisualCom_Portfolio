 /*
 This Script is to make footer goes to bottom
 For short pages oni 
 2016 (c) Ooi Ji Young
 src taken and modified from stackoverflow
 
 */
 
 function makeFooterAtBottom() {
	$('#main').css('min-height', 0);
	$('#main').css('min-height', (
	$(document).height() - $('#footer').outerHeight(true) - 40
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
