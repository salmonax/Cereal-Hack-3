
$(document).ready(function() {

    var _loginBox = $('#loginBox');
    var _modal = $('#myModal');

    $('#loginBtn').on('click', function(event) {

        //_loginBox.load('/users/sign_up #devise-signup', function(responseText, textStatus, XMLHttpRequest) {
            //_loginBox.css({
                //'margin-top': '-'+(_loginBox.outerHeight()/2)+'px',
                //'margin-left': '-'+(_loginBox.outerWidth()/2)+'px'
            //});
            //_loginBox.fadeIn();
        //});

        _modal.find('.content').load('/users/sign_up #devise-signup', function(responseText, textStatus, XMLHttpRequest) {
            _modal.foundation('reveal', 'open');
        });

        event.preventDefault();
    });

});
