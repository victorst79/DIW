$(document).ready(function() {
    $('.top-content .text').waypoint(function() {
        $('nav').toggleClass('navbar-no-bg');
    });
});