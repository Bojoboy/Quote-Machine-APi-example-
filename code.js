$(document).ready(function() {
	
	var qoute;
	var author;

	function getNewQuote() {
		$.ajax({
			url: 'http://api.forismatic.com/api/1.0/',
			jsonp: 'jsonp',
			dataType: 'jsonp',
			data: {
				method: 'getQuote',
				lang: 'ru',
				format: 'jsonp'
			},
			success: function(response) {
				quote = response.quoteText;
				author = response.quoteAuthor;
				$('#text').text(quote);
				if (author) {
					$('#author').text(author);
				} else {
					$('#author').text('Неизвестен.');
				}
			}
		})
	}
	getNewQuote();

	$('#new-quote').on('click', function() {
		getNewQuote();
	});
	$('#tweet-quote').on('click', function() {
		window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' _ ' + author));
	});
});