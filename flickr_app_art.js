var apiKey = '8b539514ff55edcff58024d073a896e3';
var xhr = new XMLHttpRequest();


var x = 0;
var y = 0;

var artDiv= document.getElementById("artid");
var widthHalf = 1000;


    $.getJSON("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=8b539514ff55edcff58024d073a896e3&user_id=127000141%40N04&photoset_id=72157718360487666&extras=url_l&format=json&nojsoncallback=1",function(result){
        console.log('result',result);


        $.each(result.photoset.photo, function(i, photo){
          console.log(photo.width_l);
  
          $.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=8b539514ff55edcff58024d073a896e3&photo_id=" +photo.id+ "&format=json&nojsoncallback=1", function(widthFetch){
            console.log('sizez;',widthFetch)
              $.each(widthFetch.sizes.size, function(y, photoSize){
                console.log(photoSize.label);
                if(photoSize.label == 'Medium'){

              var div = document.createElement("a");

             div.style.background =  "url('" +photoSize.source+ "')";
             div.style.backgroundRepeat = "no-repeat";
             div.style.backgroundSize="cover";
             div.style.color = "white";
             div.setAttribute("id","3dObj_"+i)
             div.setAttribute("class","col-md-4 col-s-4 col-sm-4 ")
             div.style.height = photoSize.height+'px';
             div.style.width = photoSize.width+'px';
             div.style.width = "25vw";
             div.style.height = "25vw";

             artDiv.appendChild(div)
             return false;
                }
           });
          }
          );
              
    });

  });    

