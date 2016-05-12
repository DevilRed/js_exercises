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


	//guessingGame
	var generateNumber = function(){
		var randomnumber = Math.floor(Math.random()*11)
		console.log('the randomnumber is '+randomnumber);
		return randomnumber;
	};
	number = generateNumber();
	tryNumber = 0;
	previousAttemps = null;
	state = false;
	previousArray = [];
	var guessingGame = function(userInput){
		if(userInput > number){
			alert('The number entered is GREATHER THAN the hidden number');
			state = false;
		}else if(userInput < number){
			alert('The number entered is LESS THAN the hidden number');
			state = false;
		}else if(userInput == number){
			alert('Congratulations!, YOU WON!');
			state = true;
			return state;
		}
		console.log('the number is ' + number + ' and your input was ' + userInput);
		if(state === false){
			previousArray.push(userInput);
			ocurrences = getOcurrences(previousArray, userInput);
			// console.log('ocurrences '+ocurrences);
			if(ocurrences < 2){//if
				tryNumber++;
			}
		}
	};
	var getTryNumber = function(){
		if(state === true && tryNumber == 0)
			return 1;
		return tryNumber;
	};
	var getOcurrences = function(arr, val){
		var i, j, count = 0;
		for (i = 0, j = arr.length; i < j; i++) {
			if(arr[i] === val)
				count++;
		}
		return count;
	};


	//return the larget element in a list
	var getLargest = function(arr){
		var i, j;
		for(i=0,j=arr.length; i< j; i++){
			if(arr[i] > arr[j-1]){
				return arr[i];
			}else{
				return arr[j-1];
			}
		}
	};

	//reverse a list
	var reverseList = function(list){
		return list.reverse();
	};

	//check element in list, would be the getOcurrences() function

	//fibonnaci
	var fibonnaci = function(nro){
		var var1 = 0;
		var var2 = 1;
		var var3;

		$('.fibonnaci-section .result').append(var1 + ' ');
		$('.fibonnaci-section .result').append(var2 + ' ');

		for(var i = 3;i<=nro;i++){
			var3 = var1 + var2;
			var1 = var2;
			var2 = var3;
			$('.fibonnaci-section .result').append(var3 + ' ');
		}
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
			//console.log(tries);
			if(tries)
				$('.game-section .result').text('You WON, the number of tries was ' + getTryNumber());
			$('#game-input').val('').focus();

		});

		//get largest
		arr = [30,40,32,55];
		var largest = getLargest(arr);
		console.log('the largest element is ');
		console.log(largest);

		//reverse list
		list = reverseList(arr);
		console.log('reverse list');
		console.log(list);

		//getting ocurrences of given element
		listOcurrences = [2, 2, 2, 3, 3, 1, 6, 7, 9];
		ocur = getOcurrences(listOcurrences, 2);
		console.log('number of ocurrences is ');
		console.log(ocur);

		//fibonnaci
		$('.fibonnaci-section .start').on('click', function(){
			fibonnaci(100);
		});
	};


	return {
		'onReady': function(){
			events();
		}
	};
})();
Handler.onReady();