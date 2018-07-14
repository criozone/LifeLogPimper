$(function(){
	$(document).on("click", 'td.date, td.type, td.check', function(){
        let cbox = $(this).parents('tr').children('td.check').children().eq(0);
        cbox.click();
	});
	$(document).on("click", 'th.date, th.type, th:first-child', function(){
        let cbox = $('th:first input');
        cbox.click();
	});
	$(document).on("click", 'td.check input', function(){
		$(this).parents('tr').toggleClass('checkbox-selected', $(this).prop('checked'));
	});
	$(document).on("click", 'th:first input', function(event){
		event.stopPropagation();
		$('tr').slice(1).toggleClass('checkbox-selected', $(this).prop('checked'));
	});
	
	var content = $("#content");

	content.on("scroll", function(e) {
		if (this.scrollTop > 147) {
			content.addClass("fix-form");
		} else {
			content.removeClass("fix-form");
		}
	});
});	