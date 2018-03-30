var apiKey = '46d84caf6cbf8d4afc2215b32d758854';
var xhr = new XMLHttpRequest();


var x = 0;
var y = 0;

var mainDiv= document.getElementById("thingid");
var widthHalf = 1000;

    $.getJSON("https://api.thingiverse.com/users/jkminns/things?access_token=46d84caf6cbf8d4afc2215b32d758854",function(result){
        
        $.each(result, function(i, item){
        
        console.log(result[i]);

		var div = document.createElement("div");
		div.style.width = "100px";
		div.style.height = "100px";
		div.style.background =  "url('" +result[i].thumbnail+ "')";
		div.style.color = "white";
		div.setAttribute("id","3dObj_"+i)
		mainDiv.appendChild(div)

        return false;
        return false;

      });

    });


