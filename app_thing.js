var apiKey = '46d84caf6cbf8d4afc2215b32d758854';
var xhr = new XMLHttpRequest();


var x = 0;
var y = 0;

var mainDiv= document.getElementById("thingid");
var widthHalf = 1000;

    $.getJSON("https://api.thingiverse.com/users/jkminns/things?access_token=46d84caf6cbf8d4afc2215b32d758854",function(result){
        
        $.each(result, function(i, item){
        
            $.getJSON("https://api.thingiverse.com/things/"+result[i].id+"/images/0?access_token=46d84caf6cbf8d4afc2215b32d758854",function(imageResult){
       			console.log(imageResult[0].sizes)
       			$.each(imageResult[0].sizes, function(x, imageItem){


       				if(imageResult[0].sizes[x].type == "display"){
       					if(imageResult[0].sizes[x].size =="large"){
       						console.log(imageResult[0].sizes[x].url);
       						var div = document.createElement("a");

							div.style.background =  "url('" +imageResult[0].sizes[x].url+ "')";
							div.style.backgroundRepeat = "no-repeat";
							div.style.backgroundSize="cover";
							div.style.color = "white";
							div.setAttribute("id","3dObj_"+i)
							div.setAttribute("class","col-md-2 col-s-2 col-sm-2 cont3d")
							div.setAttribute("href",result[i].public_url)
							div.style.height = "16.66666vw";
							mainDiv.appendChild(div)
							return false;
						}

       				}


        		});
       		});




      });

    });


