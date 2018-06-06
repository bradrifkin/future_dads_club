var originalArticlesIcon = $(".articles-homepage-icon").attr("src");
var originalVideosIcon = $(".videos-homepage-icon").attr("src");
var originalForumIcon = $(".forum-homepage-icon").attr("src");
var originalContactIcon = $(".contact-homepage-icon").attr("src");
var originalArticlesImage = $(".articles-homepage-image").attr("src");
var originalVideosImage = $(".videos-homepage-image").attr("src");
var originalForumImage = $(".forum-homepage-image").attr("src");
var originalContactImage = $(".contact-homepage-image").attr("src");

$(document).ready(function() {
	$(".articles-nav").mouseenter(function() {
		$(".articles-nav").css("background", "#ff60ba");
		$(".articles-homepage-icon").attr("src", "images/articles-icon-resize.png");
		$(".articles-nav p").css("color", "black");
		$(".articles-homepage-image").attr("src", "images/articles-img-resize3.png");
	});
	$(".articles-nav").mouseleave(function() {
		$(".articles-nav").css("background", "inherit");
		$(".articles-homepage-icon").attr("src", originalArticlesIcon);
		$(".articles-nav p").css("color", "inherit");
		$(".articles-homepage-image").attr("src", originalArticlesImage);
	});
	$(".articles-content").mouseenter(function() {
		$(".articles-nav").css("background", "#ff60ba");
		$(".articles-homepage-icon").attr("src", "images/articles-icon-resize.png");
		$(".articles-nav p").css("color", "black");
		$(".articles-homepage-image").attr("src", "images/articles-img-resize3.png");
	});
	$(".articles-content").mouseleave(function() {
		$(".articles-nav").css("background", "inherit");
		$(".articles-homepage-icon").attr("src", originalArticlesIcon);
		$(".articles-nav p").css("color", "inherit");
		$(".articles-homepage-image").attr("src", originalArticlesImage);
	});
	$(".videos-nav").mouseenter(function() {
		$(".videos-nav").css("background", "#fff07b");
		$(".videos-homepage-icon").attr("src", "images/video-icon-resize.png");
		$(".videos-nav p").css("color", "black");
		$(".videos-homepage-image").attr("src", "images/videos-img-resize3.png");
	});
	$(".videos-nav").mouseleave(function() {
		$(".videos-nav").css("background", "inherit");
		$(".videos-homepage-icon").attr("src", originalVideosIcon);
		$(".videos-nav p").css("color", "inherit");
		$(".videos-homepage-image").attr("src", originalVideosImage);
	});
	$(".videos-content").mouseenter(function() {
		$(".videos-nav").css("background", "#fff07b");
		$(".videos-homepage-icon").attr("src", "images/video-icon-resize.png");
		$(".videos-nav p").css("color", "black");
		$(".videos-homepage-image").attr("src", "images/videos-img-resize3.png");
	});
	$(".videos-content").mouseleave(function() {
		$(".videos-nav").css("background", "inherit");
		$(".videos-homepage-icon").attr("src", originalVideosIcon);
		$(".videos-nav p").css("color", "inherit");
		$(".videos-homepage-image").attr("src", originalVideosImage);
	});
	$(".forum-nav").mouseenter(function() {
		$(".forum-nav").css("background", "#7df7a1");
		$(".forum-homepage-icon").attr("src", "images/forum-icon-resize.png");
		$(".forum-nav p").css("color", "black");
		$(".forum-homepage-image").attr("src", "images/forum-img-resize3.png");
	});
	$(".forum-nav").mouseleave(function() {
		$(".forum-nav").css("background", "inherit");
		$(".forum-homepage-icon").attr("src", originalForumIcon);
		$(".forum-nav p").css("color", "inherit");
		$(".forum-homepage-image").attr("src", originalForumImage);
	});
	$(".forum-content").mouseenter(function() {
		$(".forum-nav").css("background", "#7df7a1");
		$(".forum-homepage-icon").attr("src", "images/forum-icon-resize.png");
		$(".forum-nav p").css("color", "black");
		$(".forum-homepage-image").attr("src", "images/forum-img-resize3.png");
	});
	$(".forum-content").mouseleave(function() {
		$(".forum-nav").css("background", "inherit");
		$(".forum-homepage-icon").attr("src", originalForumIcon);
		$(".forum-nav p").css("color", "inherit");
		$(".forum-homepage-image").attr("src", originalForumImage);
	});
	$(".contact-nav").mouseenter(function() {
		$(".contact-nav").css("background", "#7acfe8");
		$(".contact-homepage-icon").attr("src", "images/contact-icon-resize.png");
		$(".contact-nav p").css("color", "black");
		$(".contact-homepage-image").attr("src", "images/contact-img-resize3.png");
	});
	$(".contact-nav").mouseleave(function() {
		$(".contact-nav").css("background", "inherit");
		$(".contact-homepage-icon").attr("src", originalContactIcon);
		$(".contact-nav p").css("color", "inherit");
		$(".contact-homepage-image").attr("src", originalContactImage);
	});
	$(".contact-content").mouseenter(function() {
		$(".contact-nav").css("background", "#7acfe8");
		$(".contact-homepage-icon").attr("src", "images/contact-icon-resize.png");
		$(".contact-nav p").css("color", "black");
		$(".contact-homepage-image").attr("src", "images/contact-img-resize3.png");
	});
	$(".contact-content").mouseleave(function() {
		$(".contact-nav").css("background", "inherit");
		$(".contact-homepage-icon").attr("src", originalContactIcon);
		$(".contact-nav p").css("color", "inherit");
		$(".contact-homepage-image").attr("src", originalContactImage);
	});
});

$(document).ready(function() {
	$("#hamburger").click(function() {
		$("#mobile_menu").slideToggle();
	});
});
