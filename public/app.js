



var SeaOfText = function(containerId, elementClass) {
    var _container = $(containerId);
    var _elements = _container.find(elementClass);

    this.init = function() {
        $(_container).isotope({
          itemSelector : elementClass,
          layoutMode : 'masonry',
          //filter : 'masonry',
          resizable : true,
          animationEngine: 'best-available',
          masonry: {
            columnWidth: 120
          }
        });
    };

    this.arrange = function() {
        $(_container).isotope('reLayout', function() {
            console.log('Re-laid out.');
        });
    };

    this.expand = function(_element) {
        if (_element.closest(containerId).is(_container)) {
            if (_element.is('.big')) {
                _container.find(elementClass+'.big, '+elementClass+'.bigger').removeClass('big').removeClass('bigger');
                _element.addClass('bigger');
                console.log('Opening the element (bigger).');
            }
            else if (_element.is('.bigger')) {
                // do nothing.
            }
            else { // not .big or not .bigger
                _container.find(elementClass+'.big, '+elementClass+'.bigger').removeClass('big').removeClass('bigger');
                _element.addClass('big');
                console.log('Opening the element (big).');
            }
            this.arrange();
        }
        else {
            console.log("The ship does not float in this sea.");
        }
    };

    this.elements = function() {
        return _elements;
    };
}

var sea = new SeaOfText('#container', '.element');


$(document).ready(function() {
    sea.elements().on('click', function() {
        var _el = $(this);
        sea.expand(_el);
    });




});

$(window).load(function() {
    console.log("Window loaded.");
    sea.init();
});
