var Handler = (function(){
	//multiplication table
	var multiplicationTable = function(num){
		var num = parseInt(num);
		var i = 0;

		result = '<table border="1" cellspacing="0">';
		for(i=1;i<=12;i++) {
		    result += "<tr><td>" + num + " x " + i + " = " + num*i + "</td></tr>";
		}
		result += "</table>";
		$('.table-section .result').html(result);
	};
	//Write a program that prints all prime numbers. (Note: if your programming language does not support arbitrary size numbers, printing all primes up to the largest number you can easily represent is fine too.)
	var isPrime = function(n){
		if(n < 2)
			return false;
		for(var i = 2; i<n;i++){
			if(n % i == 0)// is prime number
				return false;
		}
		return true;
	};
	var checkPrime = function(n){
		var primes = [];
		for(var i = 0; i < n; i++){
			if(isPrime(i)){
				console.log(i);
				primes.push(i);
			}
		}
		return primes;
	};

	var generateNumber = function(){
		var randomnumber = Math.floor(Math.random()*11)
		console.log('the randomnumber is '+randomnumber);
		return randomnumber;
	};
	number = generateNumber();
	tryNumber = 0;
	previousNumber = null;
	var guessingGame = function(userInput){
		if(userInput > number){
			alert('The number entered is GREATHER THAN the hidden number');
		}else if(userInput < number){
			alert('The number entered is LESS THAN the hidden number');
		}else if(userInput == number){
			alert('Congratulations!, YOU WON!');
			return true;
		}
		console.log('the number is ' + number + ' and your input was ' + userInput);
		console.log('previousNumber is ' + previousNumber);
		if(previousNumber == userInput){
			tryNumber += 1;
		}
		previousNumber = userInput;
	};
	var getTryNumber = function(){
		return tryNumber;
	};




	var events = function(){
		$('.table-section .start').on('click', function(){
			multiplicationTable($('#table-input').val());
		});
		//prime
		$('.prime-section .start').on('click', function(){
			primeResult = checkPrime($('#prime-input').val());
			$('.prime-section .result').text('The prime numbers are ' + primeResult);
		});
		//guessing game
		$('.game-section .start').on('click', function(){
			tries = guessingGame($('#game-input').val());
			console.log(tries);
			if(tries)
				$('.game-section .result').text('You WON, the number of tries was ' + getTryNumber());
		});
	};


	return {
		'onReady': function(){
			events();
		}
	};
})();
Handler.onReady();