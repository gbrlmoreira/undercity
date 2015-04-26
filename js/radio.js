$(document).ready(function() {

	//var about = false;
	var undercity = true;
	var target = "undercity";

    jwplayer("player").setup({
		flashplayer: 'jwplayer.flash.swf',
		//file:'rtmp://200.69.47.185/live/undercityradio',
		file:'rtmp://200.69.47.114/undercity/audio',
		streamid: 'audio',
		autostart: 'false',
		width: 0,
		height: 0,
		controls: 'true',

    });

	$('#undercityDiv').mouseenter(function() {
		$(this).css('-webkit-transform','scale(1.025, 1.025)');
		if (jwplayer('player').getState()=="PLAYING") {document.getElementById('clickto').innerHTML = "CLICK TO PAUSE";}
		if (jwplayer('player').getState()=="PAUSED") {document.getElementById('clickto').innerHTML = "CLICK TO PLAY";}
		if (jwplayer('player').getState()=="BUFFERING") {document.getElementById('clickto').innerHTML = "LOADING";}

	});

	$('#undercityDiv').mouseleave(function() {
		$(this).css('-webkit-transform','scale(1, 1)');
		if (!jwplayer('player').getState()=="IDLE") {document.getElementById('clickto').innerHTML = "";}
		else {
			if (jwplayer('player').getState()=="PLAYING") {document.getElementById('clickto').innerHTML = "";}
			if (jwplayer('player').getState()=="PAUSED") {document.getElementById('clickto').innerHTML = "";}
		}
	});

	$('#undercityDiv').on('click', function() {
	   	jwplayer('player').play(); 
		document.getElementById('clickto').innerHTML = "";
	});

	jwplayer('player').onBuffer(function(){
		$('#undercityDiv').css('background-image', 'url(img/connecting.gif)');
		document.getElementById('clickto').innerHTML = "LOADING";
	});

	jwplayer('player').onPlay(function(){
		$('#undercityDiv').css('background-image', 'url(img/playLogo.png)');
		document.getElementById('clickto').innerHTML = "";
	});

	jwplayer('player').onPause(function(){
		$('#undercityDiv').css('background-image', 'url(img/pauseLogo.png)');
	});

	jwplayer('player').onError(function(){
		$('#undercityDiv').css('background-image', 'url(img/errorLogo.gif)');
		document.getElementById('clickto').innerHTML = "ERROR<br>CLICK TO REFRESH";	
		$('#undercityDiv').on('click', function() {window.location="http://www.undercityradio.com/radio.php"});
	});

	$('#Fb-btn img').mouseover(function(){
		$(this).attr('src','img/logoFbON.png');
		document.getElementById('seguinos').innerHTML = "FOLLOW US ON FACEBOOK";
	});

	$('#Fb-btn img').mouseout(function(){
		$(this).attr('src','img/logoFbOFF.png');
		document.getElementById('seguinos').innerHTML = "";

	});

	$('#Tw-btn img').mouseover(function(){
		$(this).attr('src','img/logoTwitterON.png');
		document.getElementById('seguinos').innerHTML = "FOLLOW US ON TWITTER";

	});

	$('#Tw-btn img').mouseout(function(){
		$(this).attr('src','img/logoTwitterOFF.png');
		document.getElementById('seguinos').innerHTML = "";
	});

	$('#mail img').mouseover(function(){
		$(this).attr('src','img/mailON.png');
		document.getElementById('seguinos').innerHTML = "info@undercityradio.com";

	});

	$('#mail img').mouseout(function(){
		$(this).attr('src','img/mailOFF.png');
		document.getElementById('seguinos').innerHTML = "";
	});

	$('#onAir').mouseenter(function(){

		$.ajax({
		  type: "POST",
		  url: "test.asp",
		  data: { action: "cualquiercosa" }
		})
		  .done(function( msg ) {
		  document.getElementById('sonando').innerHTML = msg;
		  $('#cont-slide-sonando').animate({width:"100%"});
		  });
	});

	$('#onAir').mouseleave(function(){
		$('#cont-slide-sonando').animate({width:"0"});
	});

	/*$('#contact').on('click', function(){
		
		console.log(target);

		if(contact==false) {
			contact = true;
			//about = false;
			undercity = false;
			$('#'+target).css('color','white');
			$('#contact').css('color','#FBB045');
			$('#email').animate({opacity:'1'});
			$('#email').css('pointer-events','auto');
			target = this.id;

		}

	});*/

	/*$('#about').on('click', function(){

		if(about==false) {
			about = true;
			contact = false;
			undercity = false;
			$('#'+target).css('color','white');	
			$('#about').css('color','#FBB045');
			$('#email').animate({opacity:'0'});
			$('#email').css('pointer-events','none');
			$('#clickto').css('opacity','0');

			if (target!='contact') {
				$('#'+target+'Div').animate({opacity:'0'}, function(){
					
					$(this).css('display','none');
					$('#aboutDiv').css('display','block');
					$('#aboutDiv').animate({opacity:'1'});

				});
			} else {
				$('#undercityDiv').animate({opacity:'0'}, function(){

					$(this).css('display','none');
					$('#aboutDiv').css('display','block');
					$('#aboutDiv').animate({opacity:'1'});
				});
			}

			$('#'+target+'Div').css('z-index','0');
			target = this.id;
			$('#'+target+'Div').css('z-index','1');

		}

	});*/



/*	$('#undercity').on('click', function(){
		console.log(target);
		if(undercity==false) {
			underity = true;
			contact = false;
		//	about = false;
			$('#'+target).css('color','white');	
			$('#undercity').css('color','#FBB045');
			$('#email').animate({opacity:'0'});
			$('#email').css('pointer-events','none');
			$('#clickto').css('opacity','1');

			if (target!='contact') {
				$('#'+target+'Div').animate({opacity:'0'}, function(){
					
					$(this).css('display','none');
					$('#undercityDiv').css('display','block');
					$('#undercityDiv').animate({opacity:'1'});

				});
			} else {
				$('#aboutDiv').animate({opacity:'0'}, function(){

					$(this).css('display','none');
					$('#undercityDiv').css('display','block');
					$('#undercityDiv').animate({opacity:'1'});
				});
			}

			$('#'+target+'Div').css('z-index','0');
			target = this.id;
			$('#'+target+'Div').css('z-index','1');

		}
	}); */

}) ;