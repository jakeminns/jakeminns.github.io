var apiKey = '8b539514ff55edcff58024d073a896e3';
var xhr = new XMLHttpRequest();
var apiurl = "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=8b539514ff55edcff58024d073a896e3&user_id=127000141%40N04&format=json&nojsoncallback=1";


var x = 0;
var y = 0;

var widthHalf = (window.innerWidth)/2;


    $.getJSON("https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=8b539514ff55edcff58024d073a896e3&user_id=127000141%40N04&extras=url_l&format=json&nojsoncallback=1",function(result){
        console.log(result);

      $.each(result.photos.photo, function(i, photo){
        console.log(photo.width_l);

        $.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=8b539514ff55edcff58024d073a896e3&photo_id=" +photo.id+ "&format=json&nojsoncallback=1", function(widthFetch){

            $.each(widthFetch.sizes.size, function(y, photoSize){

              if(photoSize.width >= widthHalf+200){

                if(photoSize.height <= widthHalf+200){

                console.log(widthFetch);

                console.log(photoSize.source);




                document.getElementById( +x+ "_flickr").style.background = "url('" +photoSize.source+ "')";
                document.getElementById( +x+ "_flickr").style.backgroundSize = "auto " +(widthHalf+1)*0.72+ "px";
                //document.getElementById( +x+ "_flickr").style.height = +photoSize.height+"px";
                document.getElementById( +x+ "_flickr").style.width = +widthHalf+1+"px";
                document.getElementById( +x+ "_flickr").style.height = +widthHalf+1+"px";




                 document.getElementById( +x+ "_flickr").style.backgroundRepeat = "no-repeat";
              //  document.getElementById( +x+ "_flickr").parentElement.style.height = +photoSize.height+"px";


                 x=x+1;


                 return false;
                 return false;

              
              }
            }

            });
          });
      });
    });


