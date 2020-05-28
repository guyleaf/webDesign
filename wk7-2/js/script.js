$(document).ready(function(){
    $(".download-dropdown").click(function(){
        $(".download-matrix").toggle();
    });
    $(window).scroll(function() {
        var height = $(window).scrollTop();

        if (height > 50) {
            $(".navbar").addClass("affix");
        }
        else {
            $(".navbar").removeClass("affix");
        }
    });
})