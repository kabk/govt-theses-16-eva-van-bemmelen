$(document).ready(function() {
    $('#questionWrapper .question').first().show();
    $("#questionWrapper .answer").click(function(event) {
        event.preventDefault();
        $(this).parent('.question').slideUp();
        if ($(this).parent().next('.question').length) {
            $(this).parent().next('.question').fadeIn();
             var intro = document.getElementById('intro');
            intro.className = intro.className + " none";
        } else {
            startCheck();
            var title = document.getElementById('title');
            title.className = title.className + " none";
        }
    });
});

function startCheck() {
    hideTiming = 1100;
    checkCount = $(".check").length;
    $(".check").each(function(index, value) {
        var currentElement = $(this);
        setTimeout(function() {
            currentElement.toggle();
        }, hideTiming * index);
        if ((index + 1) != checkCount) {
            setTimeout(function() {
                currentElement.toggle();
            }, hideTiming * (index + 1));
        }
        if (checkCount == (index + 1)) {
            var count = 65,
                timer = setInterval(function() {
                    $("#counter").html(count--);
                    if (count == -1) clearInterval(timer);
                }, 1000);
        }
    });
}

function toggleDiv(target) {
    $(target).toggle();
}