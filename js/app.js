Parse.initialize("ba9FVqIfWQewBALxfL6YAYPRqBwcfnFPTia2Pnml", "eMQ7wP2oHSVKopu6LI4AaMtc2fLwXhPdt2JmJaMh");

$(document).ready(init);

function init() {
	$('#fullpage').fullpage({
		navigation: true,
		navigationPosition: 'right',
		responsive: 900,
		keyboardScrolling: true,
		
		afterRender: function(){
		
		//playing the video
		$('video').trigger('play');
		}
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

function submit() {
	event.preventDefault();
	console.log('here');
}