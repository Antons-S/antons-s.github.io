$(document).ready(function() {
    $(document).on("scroll", onScroll);
  function onScroll(event){
    var scrollPos = $(document).scrollTop() + 400;
    $('a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
        });
    }
})