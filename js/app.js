$(document).ready(init);
$('#phone').submit(update);
$('#countries', '#number').keyup(manageSubmit);

function error(res) {
	console.log(res);
	$('#submit').addClass('error');
	$('#submit').text('Error, please try again later');
	$('#submit').removeClass('primary');
}

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

function manageSubmit() {
	var pattern = new RegExp(/^\d{5,25}$/i);
	if($('#countries').val().length > 0 && pattern.test($('#number').val())) {
		$('#submit').removeAttr('disabled');
	}
	else {
		$('#submit').attr('disabled', true);
	}
}

function success(res) {
	console.log(res);
	$('#submit').addClass('success');
	$('#submit').text('Check your phone!');
	$('#submit').removeClass('primary');
}

function update(e) {
	e.preventDefault();
	$('#submit').text('Working');
	$('#submit').attr('disabled', true);
	$.ajax({
		type: 'POST',
		headers: {'X-Parse-Application-Id':'ba9FVqIfWQewBALxfL6YAYPRqBwcfnFPTia2Pnml','X-Parse-REST-API-Key':'uyjebhN3G6GtksORjUui1kSz8KREHlHgLmlYj95G'},
		url: 'https://api.parse.com/1/functions/updateUser',
		data: JSON.stringify({ number: $('#countries').val() + $('#number').val() }),
		dataType: 'json',
		contentType: 'application/json',
		success: success,
		error: error
	});
}