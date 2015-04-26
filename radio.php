<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta http-equiv="x-ua-compatible" content="ie=edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
<title>Undercity Radio</title>
<meta name="description" content="La primera radio digital donde suena la música que querés escuchar / Alternative Rock, Post Hardcore, Metalcore, Screamo.">
<link rel="stylesheet" href="./assets/stylesheets/unsemantic-grid-responsive.css"/>
<link rel="shortcut icon" href="http://www.undercityradio.com/UCico.ico">
<link rel="stylesheet" href="css/radio.css">
<script src="js/vendor/modernizr-2.6.2.min.js"></script>
<script type="text/javascript" src="js/jwplayer.js"></script>
</head>
<body>
  <?php include_once("analyticstracking.php") ?>
  <div id="player">
      <a href="http://www.macromedia.com/go/getflashplayer">Get the Flash Player</a>
  to see this player.
  </div>
  <div id="wrapper">

    <div id="wrapper-centro" class="grid-container">

      <div class="grid-100 mobile-grid-100">
         <h1 id="titulo" class="grid-33">UNDERCITY</h1>
      </div>
      <div class="grid-100 mobile-grid-100">
        <hr class="grid-100"></hr>
      </div>

      <div id="navegador" class="grid-100 mobile-grid-100">
          <div id="cont-underscore" class="grid-5 hide-on-mobile"><hr id="underscore"></hr></div>
          <div id="cont-undercity" class="grid-15 mobile-grid-33"><a id="undercity">RADIO</a></div>
          <div id="cont-sonando" class="grid-80 mobile-grid-99"><div id="cont-slide-sonando"><a id="sonando"></a></div></div>
          <!-- <div id="cont-about" class="grid-15 mobile-grid-33"><a id="about">ABOUT</a></div>-->
      </div>
      
      <div class="grid-100 mobile-grid-100">
          <p id="onAir" class="grid-100 mobile-grid-100">ESTÁS ESCUCHANDO</p>
      </div>
      
      <div class="grid-100 mobile-grid-100">
          <div id="undercityDiv"></div>
          <div id="aboutDiv"></div>
          <p id="clickto" class="grid-100 mobile-grid-100">CLICK TO PLAY</p>
      </div>

      <div id="social" class="grid-100 mobile-grid-100">
          <div id="Fb-btn" class="grid-5 mobile-grid-33"><a target="_blank" href="https://www.facebook.com/undercityradio"><img src="img/logoFbOFF.png" alt="UC Facebook"></a></div>
          <div id="Tw-btn" class="grid-5 mobile-grid-33"><a target="_blank" href="https://twitter.com/UndercityRadio"><img src="img/logoTwitterOFF.png" alt="UC Twitter"></a></div>
          <div id="mail" class="grid-5 mobile-grid-33"><a href="mailto:info@undercityradio.com"><img src="img/mailOFF.png" alt="UC Mail"></a></div>
          <div id="seguinos" class="grid-60 hide-on-mobile"></div>
      </div>

      <div class="grid-100 mobile-grid-100">
        <hr class="grid-100"></hr>
      </div>

    </div>  
  </div>


  <script src="./assets/javascripts/jquery.js"></script>
  <script src="js/radio.js"></script>
</body>
</html>