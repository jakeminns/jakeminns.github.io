var apiKey = '46d84caf6cbf8d4afc2215b32d758854';
var xhr = new XMLHttpRequest();


var x = 0;
var y = 0;

var mydiv = document.getElementById("thingid");
var widthHalf = 1000;

    $.getJSON("https://api.thingiverse.com/users/jkminns/things?access_token=46d84caf6cbf8d4afc2215b32d758854",function(result){


        console.log(result[1].thumbnail.source);
        $.each(result, function(i, item){
        console.log(result[i]);
 		document.getElementById(thingid).style.background = "url('" +result[i].thumbnail.source+ "')";
 		                 x=x+1;


                 return false;
                 return false;

      });

    });


