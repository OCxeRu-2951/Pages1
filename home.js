$(document).ready(function() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        $('body').toggleClass('light-theme', savedTheme === 'light');
    }

    // サイドバートグルボタン
    $('#toggleButton').click(function() {
        $('#sidebar').toggleClass('active');
    });

    // テーマ切替ボタン
    $('#themeToggle').click(function() {
        $('body').toggleClass('light-theme');
        
        if ($('body').hasClass('light-theme')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });
});
