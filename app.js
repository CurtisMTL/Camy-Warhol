app = {};

// grab the video element with jQuery
app.video = $('video.webcam')[0];
// grab the canvas with jquery
app.photo = $('canvas.photo')[0];
app.first = $('canvas.first')[0];
app.second = $('canvas.second')[0];
app.third = $('canvas.third')[0];
app.fourth = $('canvas.fourth')[0];
//set context
ctx = app.ctx,
//get the slider
app.slider = $('.slider').val();

$('.slider').on('change mousemove' ,function(){
  app.slider= this.value;
});

app.getVideo = function() {

  // normalize so it works on all browsers in the future all browsers will get navigator.getUserMedia()
  navigator.getUserMedia = ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

  navigator.getUserMedia ({ video: true,  audio: false }, function(localMediaStream) {
    // set the video source
    app.video.src = window.URL.createObjectURL(localMediaStream);
    // play the video!
    app.video.play();

    // setInterval(app.drawVideoOriginal,20);
    setInterval(app.drawVideoFirst,20);
    setInterval(app.drawVideoSecond,20);
    setInterval(app.drawVideoThird,20);
     setInterval(app.drawVideoFourth,20);

  },


  // errorCallback
  function(err) {
    console.log("The following error occured: " + err);
 });
}

app.drawVideoOriginal = function(){

  var ctx = app.canvas.getContext('2d');
  ctx.drawImage(app.video, 0, 0, 320, 240);
  app.pixels = ctx.getImageData(0,0,320,240);

  ctx.putImageData(app.pixels,0,0);

};//end of draw video

app.drawVideoFirst = function(){

  var ctx = app.first.getContext('2d');
  ctx.drawImage(app.video, 0, 0, 320, 240);
  app.pixels = ctx.getImageData(0,0,320,240);

  for (i = 0; i < app.pixels.data.length; i=i+4) {
        var r = app.pixels.data[i];
        var g = app.pixels.data[i+1];
        var b = app.pixels.data[i+2];
        var v = (0.2126*r + 0.7152*g + 0.0722*b >= app.slider) ? 255 : 0;
        app.pixels.data[i] = app.pixels.data[i+1] = app.pixels.data[i+2] = v;
      };
      for (i = 0; i < app.pixels.data.length; i=i+4) {
        red = app.pixels.data[i + 0];
        green = app.pixels.data[i + 1];
        blue = app.pixels.data[i + 2];
        alpha = app.pixels.data[i + 3];
        if (red >= 255 && green >= 255 && blue >= 255) {
          app.pixels.data[i + 0] = 4;
          app.pixels.data[i + 1] = 121;
          app.pixels.data[i + 2] = 234;
        }
        else  {
          app.pixels.data[i + 0] = 236;
          app.pixels.data[i + 1] = 2;
          app.pixels.data[i + 2] = 123;
        }
  };
        ctx.putImageData(app.pixels,0,0);

};//end of draw video

app.drawVideoSecond = function(){

  var ctx = app.second.getContext('2d');
  ctx.drawImage(app.video, 0, 0, 320, 240);
  app.pixels = ctx.getImageData(0,0,320,240);

  for (i = 0; i < app.pixels.data.length; i=i+4) {
        var r = app.pixels.data[i];
        var g = app.pixels.data[i+1];
        var b = app.pixels.data[i+2];
        var v = (0.2126*r + 0.7152*g + 0.0722*b >= app.slider) ? 255 : 0;
        app.pixels.data[i] = app.pixels.data[i+1] = app.pixels.data[i+2] = v;
      };
      for (i = 0; i < app.pixels.data.length; i=i+4) {
        red = app.pixels.data[i + 0];
        green = app.pixels.data[i + 1];
        blue = app.pixels.data[i + 2];
        alpha = app.pixels.data[i + 3];
        if (red >= 255 && green >= 255 && blue >= 255) {
          app.pixels.data[i + 0] = 238;
          app.pixels.data[i + 1] = 134;
          app.pixels.data[i + 2] = 9;
        }
        else  {
          app.pixels.data[i + 0] = 125;
          app.pixels.data[i + 1] = 66;
          app.pixels.data[i + 2] = 146;
        }
  };
        ctx.putImageData(app.pixels,0,0);

};//end of draw video

app.drawVideoThird = function(){

  var ctx = app.third.getContext('2d');
  ctx.drawImage(app.video, 0, 0, 320, 240);
  app.pixels = ctx.getImageData(0,0,320,240);

  for (i = 0; i < app.pixels.data.length; i=i+4) {
        var r = app.pixels.data[i];
        var g = app.pixels.data[i+1];
        var b = app.pixels.data[i+2];
        var v = (0.2126*r + 0.7152*g + 0.0722*b >= app.slider) ? 255 : 0;
        app.pixels.data[i] = app.pixels.data[i+1] = app.pixels.data[i+2] = v;
      };
      for (i = 0; i < app.pixels.data.length; i=i+4) {
        red = app.pixels.data[i + 0];
        green = app.pixels.data[i + 1];
        blue = app.pixels.data[i + 2];
        alpha = app.pixels.data[i + 3];
        if (red >= 255 && green >= 255 && blue >= 255) {
          app.pixels.data[i + 0] = 255;
          app.pixels.data[i + 1] = 249;
          app.pixels.data[i + 2] = 7;
        }
        else  {
          app.pixels.data[i + 0] = 140;
          app.pixels.data[i + 1] = 178;
          app.pixels.data[i + 2] = 30;
        }
  };
        ctx.putImageData(app.pixels,0,0);

};//end of draw video

app.drawVideoFourth = function(){

  var ctx = app.fourth.getContext('2d');
  ctx.drawImage(app.video, 0, 0, 320, 240);
  app.pixels = ctx.getImageData(0,0,320,240);

  for (i = 0; i < app.pixels.data.length; i=i+4) {
        var r = app.pixels.data[i];
        var g = app.pixels.data[i+1];
        var b = app.pixels.data[i+2];
        var v = (0.2126*r + 0.7152*g + 0.0722*b >= app.slider) ? 255 : 0;
        app.pixels.data[i] = app.pixels.data[i+1] = app.pixels.data[i+2] = v;
      };
      for (i = 0; i < app.pixels.data.length; i=i+4) {
        red = app.pixels.data[i + 0];
        green = app.pixels.data[i + 1];
        blue = app.pixels.data[i + 2];
        alpha = app.pixels.data[i + 3];
        if (red >= 255 && green >= 255 && blue >= 255) {
          app.pixels.data[i + 0] = 232;
          app.pixels.data[i + 1] = 6;
          app.pixels.data[i + 2] = 28;
        }
        else  {
          app.pixels.data[i + 0] = 41;
          app.pixels.data[i + 1] = 31;
          app.pixels.data[i + 2] = 128;
        }
  };
        ctx.putImageData(app.pixels,0,0);

};//end of draw video



app.takePhoto = function() {
  /* The next four lines set the canvas to the same size as the video */
  var width = $(app.video).width();
  var height = $(app.video).height();
  var photo = app.photo.getContext('2d')
  app.photo.width = width;
  app.photo.height = height;

  // 5. Then we "draw" the video (one frame) to the canvas
 
  photo.drawImage(app.first, 0, 0);
  photo.drawImage(app.second, 0, 240);
  photo.drawImage(app.third, 320, 0);
  photo.drawImage(app.fourth, 320, 240);
  
  // 6. Then we convert that canvas to a "data blob"  which is like an image src
  var data = app.photo.toDataURL('image/png');

  // flash the screen
  $('.flash').show().fadeOut(250);
  
  // 1. create an image 2. set the source the be the data 3. append to an element
  var img = $('<img>').attr('src',data);
  var link = $("<a>").attr("download","so-good-looking").attr("href",data);
  img.appendTo(link);
  link.appendTo('.strip');

  // make it draggable
  $('.strip img').draggable();

}

app.playCameraSounds = function() {
  var audio = $('audio.cameraSound')[0];
  audio.currentTime = 0;
  audio.play();
}


$(function() {
  // start by getting the video
  app.getVideo();

  $('a.snap').on('click',function(e) {
    e.preventDefault();
    // find the wait time
    var waitTime = $(this).data('wait');
    var waitedTime = 0;

    // if there is no wait, then just take it
    if(!waitTime) {
      app.takePhoto();
      app.playCameraSounds();
      return; // stop the rest from running          
    }

    // set a timeout to take the photo after X seconds
    setTimeout(function(){
      app.takePhoto();
      app.playCameraSounds();
    },waitTime);

    $('.countdown').text(waitTime / 1000).show();

    var interval = setInterval(function(){
      waitedTime+= 1000;
      var timeLeft = (waitTime - waitedTime) / 1000;
      $('.countdown').text(timeLeft);
      if(waitedTime >= waitTime) {
        clearInterval(interval);
        $('.countdown').hide();
      }
    },1000);



  });

  // hook up the trash
  $( ".trash" ).droppable({
      accept: ".strip img",
      hoverClass: "trash-hover",
      drop: function( event, ui ) {
        // grab the first item from the draggable UI and remove it
        $(ui.draggable[0]).remove();
      }
    });



});