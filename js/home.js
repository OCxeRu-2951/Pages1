$(document).ready(function() {
    $('#toggleButton').click(function() {
        $('#sidebar').toggleClass('active');
    });

    $('#themeToggle').click(function() {
        $('body').toggleClass('light-theme');
    });
});
