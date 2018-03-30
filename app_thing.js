var apiKey = '46d84caf6cbf8d4afc2215b32d758854';
var xhr = new XMLHttpRequest();


var x = 0;
var y = 0;

var mydiv = document.getElementById("thingid");
var widthHalf = 1000;

    $.getJSON("https://api.thingiverse.com/users/jkminns/things?access_token=46d84caf6cbf8d4afc2215b32d758854",function(result){


        console.log(result);
        $.each(result.thumbnail, function(i, photo){
        console.log();
 		document.getElementById(thingid).style.background = "url('" +photo.source+ "')";
 		                 x=x+1;


                 return false;
                 return false;

      });

    });


