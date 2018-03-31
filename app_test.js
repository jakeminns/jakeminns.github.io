var apiKey = '46d84caf6cbf8d4afc2215b32d758854';
var xhr = new XMLHttpRequest();


var x = 0;
var y = 0;

var mainDiv= document.getElementById("thingid");

var widthHalf = mainDiv.offsetWidth/2;

var numCols = widthHalf/220
console.log(numCols)

for (i = 0; i < 20; i++) { 

		var div = document.createElement("a");

		
		div.style.background =  "url('https://cdn.thingiverse.com/renders/19/a8/3a/e3/53/b2d47907ec54d4b0dff5b9f8032a00e5_thumb_large.jpg')";
		div.style.backgroundRepeat = "no-repeat";
		div.style.backgroundSize="contain"
		div.style.color = "white";
		div.setAttribute("id","3dObj_"+i)
		div.setAttribute("class","col-md-2 col-s-2 col-sm-2 cont3d")
		div.setAttribute("href","https://cdn.thingiverse.com")

		div.style.height = "16.666666vw";


		var text = document.createElement("div");

		text.innerHTML ="This"
		text.style.background = "#FFFFFF"
		text.style.width = "100%"
		text.style.height="20%"
		text.style.color = "white";
		text.style.textAlign = "center";
		text.setAttribute("class","cont3dtext")

		mainDiv.appendChild(div)
		div.appendChild(text)



}

