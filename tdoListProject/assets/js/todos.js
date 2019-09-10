//Check off specific todos by clicking
$("ul").on('click', 'li', function () {
	$(this).toggleClass('completed');
})

//Remove element from the list
$("ul").on("click", 'span', function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

//Add new todos to the list

$("input").on('keypress', (function(event) {
	if(event.which == 13) {
        $("ul").append('<li><span><i class="fas fa-trash-alt"></i></span>' + $(this).val() + '</li>');
        $(this).val('');
    }
}));

//Hide input field

$(".fa-plus").click(function(event) {
	$("input").fadeToggle(300);
});