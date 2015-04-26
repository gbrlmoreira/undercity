$('#adobe-btn img').mouseenter(function(){
	$(this).attr('src','img/adobeON.png');
});

$('#adobe-btn img').mouseleave(function(){
	$(this).attr('src','img/adobeOFF.png');
});

setInterval(function(){ 
	document.location.href = 'radio.php';
},2100);