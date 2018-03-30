var apiKey = '46d84caf6cbf8d4afc2215b32d758854';
var xhr = new XMLHttpRequest();


var x = 0;
var y = 0;

var mainDiv= document.getElementById("thingid");

var widthHalf = mainDiv.offsetWidth/2;

var numCols = widthHalf/220
console.log(numCols)

for (i = 0; i < 20; i++) { 

		var div = document.createElement("div");

		
		div.style.background =  "url('https://cdn.thingiverse.com/renders/19/a8/3a/e3/53/b2d47907ec54d4b0dff5b9f8032a00e5_thumb_large.jpg')";
		div.style.backgroundRepeat = "no-repeat";
		div.style.backgroundSize="cover"
		div.style.color = "white";
		div.setAttribute("id","3dObj_"+i)
		div.setAttribute("class","col-md-2 col-s-2 col-sm-2")

		div.style.height = "16.66666vw";

		mainDiv.appendChild(div)



}

