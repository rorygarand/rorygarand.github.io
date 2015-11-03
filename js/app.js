$(document).ready(init);
$('#phone').submit(update);

function init() {
	$('#fullpage').fullpage({
		navigation: true,
		navigationPosition: 'right',
		responsive: 900,
		keyboardScrolling: true,
		afterRender: function(){$('video').trigger('play');}
	});

	$.ajax({
		url: 'js/countries.json',
		type: 'GET',
		dataType: 'json',
		success: function (countries) {
			$.each(countries, function(k,c) {
				$("#countries").append("<option value='" + c.value + "'>" + c.name + "</option>");
			});
		}
	});	
}

function update() {
	$.ajax({
		type: 'POST',
		headers: {'X-Parse-Application-Id':'ba9FVqIfWQewBALxfL6YAYPRqBwcfnFPTia2Pnml','X-Parse-REST-API-Key':'uyjebhN3G6GtksORjUui1kSz8KREHlHgLmlYj95G'},
		url: 'https://api.parse.com/1/functions/updateUser',
		data: 'where={"number": ' + $('#code').val() + $('#number').val() + '}',
		dataType: 'json',
		contentType: 'application/json',
		success: function(res){console.log(res);},
		error: function(res){console.log(res);}
	});
}