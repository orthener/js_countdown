/*
	jquery plugin 'deathline'
	version 1.0
	author: orthener@i.ua
*/
;(function($) {
	
	$.fn.deathline = function(params) {
		var defaults = {
			'datetime': null, //YYYY-MM-DDTHH:mm:ss.sssZ
			'format': null,
			'callback': null
		};
		
		var options = $.extend({}, defaults, params);

		return this.each(function() {
			var thisEl = $(this);
			
			var doCountdown = function() {
				var eventDate   = Date.parse(options['datetime']) / 1000;
				var currentDate = Math.floor($.now() / 1000);

				if(eventDate <= currentDate) {
					if(options['callback'] != null)
						options['callback'].call(this);
					clearInterval(interval);
					return;
				}

				var seconds = eventDate - currentDate;
				//calculate the number of days
				var days = Math.floor(seconds / (60 * 60 * 24));
				//update the seconds variable with no. of days removed
				seconds -= days * 60 * 60 * 24;
				var hours = Math.floor(seconds / (60 * 60));
				//update the seconds variable with no. of hours removed
				seconds -= hours * 60 * 60;
				var minutes = Math.floor(seconds / 60);
				//update the seconds variable with no. of minutes removed
				seconds -= minutes * 60;

				//conditional Ss
				var daysLast = days % 10;
				if (daysLast == 1) {
					thisEl.find(".timeRefDays").text("день");
				} else if(daysLast > 1 && daysLast < 5) {
					thisEl.find(".timeRefDays").text("дня");
				} else {
					thisEl.find(".timeRefDays").text("дней");
				}
				
				var hoursLast = hours % 10;
				if (hoursLast == 1) {
					thisEl.find(".timeRefHours").text("час");
				} else if(hoursLast > 1 && hoursLast < 5) {
					thisEl.find(".timeRefHours").text("часа");
				} else {
					thisEl.find(".timeRefHours").text("часов");
				}
				
				var minutesLast = minutes % 10;
				if (minutesLast == 1) {
					thisEl.find(".timeRefMinutes").text("минута");
				} else if(minutesLast > 1 && minutesLast < 5) {
					thisEl.find(".timeRefMinutes").text("минуты");
				} else {
					thisEl.find(".timeRefMinutes").text("минут");
				}
				
				var secondsLast = seconds % 10;
				if (secondsLast == 1) {
					thisEl.find(".timeRefSeconds").text("секунда");
				} else if(secondsLast > 1 && secondsLast < 5) {
					thisEl.find(".timeRefSeconds").text("секунды");
				} else {
					thisEl.find(".timeRefSeconds").text("секунд");
				}

				//logic for the two_digits ON setting
				if(options['format'] == "on") {
					days = (String(days).length >= 2) ? days : "0" + days;
					hours = (String(hours).length >= 2) ? hours : "0" + hours;
					minutes = (String(minutes).length >= 2) ? minutes : "0" + minutes;
					seconds = (String(seconds).length >= 2) ? seconds : "0" + seconds;
				}

				//update the countdown's html values.
				if(!isNaN(eventDate)) {
					thisEl.find(".days").text(days);
					thisEl.find(".hours").text(hours);
					thisEl.find(".minutes").text(minutes);
					thisEl.find(".seconds").text(seconds);
				} else { 
					alert("Invalid date. Here's an example: 12 Tuesday 2012 17:30:00");
					clearInterval(interval); 
				}
			}
			
			var interval = setInterval(doCountdown, 1000);
		});
	};
	
}) (jQuery);
