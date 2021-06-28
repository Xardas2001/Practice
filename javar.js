jQuery('document').ready(function(){
	alert('Just text!');
	//jQuery('body')
	jQuery('body').append('<input type="number" id="firstinp"><br><br><input type="number" id="secondinp"><br><br><button>Tap for cum!</button>');
	var value1, value2, result;
	
	jQuery('button').on('click', function(){
		value1 = jQuery('#firstinp').val();
		value2 = jQuery('#secondinp').val();
		result = parseInt(value1) + parseInt(value2);
		alert("You want to spend $" + result + " for fisting.");
		
		divchange = prompt("Введіть текст поля про Житомир", "Gachi-stuff");
		jQuery('#zhit').html(divchange);
	});
	
	
});