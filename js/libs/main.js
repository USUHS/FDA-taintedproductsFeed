define(function (require) {
	require('iscroll');
	require('menu');
	require('fda');
	require('jquery.backstretch.min');
  		$(function() {//start doing cool shit here 
			$(".main-navigation").menuPlugin();
			$(".sidebar").sidebar();
			fdaFeed();
			$(".cover-image").css({'min-height':window.innerHeight-100});
			$(".cover-one").backstretch("images/bgh1.jpg");
    	});//END APP

});