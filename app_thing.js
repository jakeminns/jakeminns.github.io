var apiKey = '46d84caf6cbf8d4afc2215b32d758854';
var xhr = new XMLHttpRequest();


var x = 0;
var y = 0;

var mainDiv= document.getElementById("thingid");
var widthHalf = 1000;

    $.getJSON("https://api.thingiverse.com/users/jkminns/things?access_token=46d84caf6cbf8d4afc2215b32d758854",function(result){
        
        $.each(result, function(i, item){
        
        console.log("https://api.thingiverse.com/users/jkminns/things"+result[i].id+"/images/0");

		var div = document.createElement("a");
		div.style.background =  "url('" +result[i].thumbnail+ "')";

		div.style.backgroundRepeat = "no-repeat";
		div.style.backgroundSize="cover"
		div.style.color = "white";
		div.setAttribute("id","3dObj_"+i)
		div.setAttribute("class","col-md-2 col-s-2 col-sm-2")
		div.setAttribute("href",result[i].public_url)

		div.style.height = "16.66666vw";


		mainDiv.appendChild(div)




      });

    });


