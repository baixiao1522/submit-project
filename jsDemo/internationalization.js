function loadLangHTML(code) {
	var xmlURL = "xml/" + code + ".xml";
	$.get(xmlURL, function(data) {
		$("label[xx='lang']").each(function(d) {
			var value = $(data).find("#" + $(this).attr("class")).text();
			if (value != "") {
				$(this).html(value);
			}
		});
	});
}

$(function() {
	var code;
	if (navigator.language) {
		code = navigator.language;
	} else {
		code = navigator.browserLanguage;
	}
	var index = code.indexOf("-");
	if (index != -1) {
		code = code.substring(0, index);
	}
	loadLangHTML(code);
	$("#langGJ option[value='" + code + "']").attr("selected", true);
	$("#langGJ").live("change", function() {
		var code = $(this).val();
		loadLangHTML(code);
	});
});