var Handler = (function(){
	var factorial = function(num){
		if(num < 0){
			return;
		}
		if(num == 0){
			return 1;
		}
		else{
			return num * factorial( num - 1 );
		}
	};

	var isEven = function(num){
		if(num % 2 == 0){
			return "even";
		}else{
			return "odd";
		}
	};

	var palindromo = function(word){
		word = word.toLowerCase().replace(/[^a-z]+/g,"");
		console.log(word.toLowerCase().replace(/[^a-z]+/g,""));
		console.log(word.split('').reverse().join(''));
		return word === word.split('').reverse().join('');
	};

	var upperLower = function(str){
		charsLower = [];
		charsUpper = [];
		for(var i=0; i<str.length; i++){
			// chars.push(str.charAt(i));
			if(str.charAt(i) === str.charAt(i).toLowerCase()){
				charsLower.push(true);
			}else if(str.charAt(i) === str.charAt(i).toUpperCase()){
				charsUpper.push(true);
			}
		}
		if(charsLower.length > 0 && charsUpper.length == 0){
			return 'is only lowercase';
		}else
		if(charsUpper.length > 0 && charsLower.length == 0){
			return 'is only uppercase';
		}
		else{
			return 'it has both, lowercase and uppercase';
		}
	};


	var handlingPromises = function(){
		if(window.Promise){
			var promise = new Promise(function(resolve, rejected){
				var request = new XMLHttpRequest();
				request.open('GET', 'http://api.icndb.com/jokes/random');

				request.onload = function(){
					console.log(request);
					if(request.status == 200){
						//call the resolve function
						resolve(request.response);
					}else{
						//call the rejected function
						reject(request.response);
					}
				};
				request.send();

			});
			//defining the resolve, reject functions
			promise.then(function(data){
				console.log(data);
				$('.promises-section .result').text(data.joke);
				},//resolve
				function(data){
					alert('ehhh ' + data);
				}//reject
			);
		}
	};


	var events = function(){
		//factorial
		$('#start').on('click', function(){
			var result = factorial($('#factorial-input').val());
			console.log(result);
			if(typeof result !== 'undefined')
				$('.factorial .result').text('The calculated factorial is ' + result);
			else
				alert('Please enter a possitive value');
		});
		//even
		$('.even-section .start').on('click', function(){
			var evenResult = isEven($('#even-input').val());
			console.log(evenResult);
			$('.even-section .result').text('The number is ' + evenResult);
		});
			//palindromo
		$('.palidromo-section .start').on('click', function(){
			var palindromoResult = palindromo($('#palidromo-input').val());
			console.log(palindromoResult);
			$('.palidromo-section .result').text('Is palindromo?: ' + palindromoResult.toString());
		});
		//upper lower
		//console.log(upperLower('nI'));
		$('.lowerupper-section .start').on('click', function(){
			var lowerUpperResult = upperLower($('#lowerupper-input').val());
			$('.lowerupper-section .result').text('The word: ' + lowerUpperResult);
		});
		//promises
		handlingPromises();
	};


	return {
		'onReady': function(){
			events();
		}
	};
})();
Handler.onReady();