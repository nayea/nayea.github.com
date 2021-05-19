
(function (global, $) {
  "use strict";
  $(document).ready(function(){


  var originalImages = $(".imageBox > img");
  var fakeCarImages = $(".carimageBox > img");

  var agent = navigator.userAgent.toLowerCase();

if (agent.indexOf("firefox") != -1) {

  $('.uploadBtn-wrapper').find('.uploadImage').css({
    'left' : -190
  })

}


  
 
  var firstOriginImageGroup  = [];
  var secondOriginImageGroup  = [];
  var thirdOriginImageGroup  = [];
  var fourthOriginImageGroup  = [];

  var firstCarImageGroup  = [];
  var secondCarImageGroup  = [];
  var thirdCarImageGroup  = [];
  var fourthCarImageGroup  = [];

  var firstImageNum  = [2,16,24,32,47];
  var secondImageNum  = [8,10,12,18,27,35,39,41];
  var thirdImageNum  = [0,5,6,13,17,19,20,23,21,26,29,30,34,37,43,44,46,];
  var fourthImageNum  = [1,3,4,7,9,11,14,15,18,22,25,28,31,33,36,38,40,42,45,48,49];

  for(var i =0 ; i<firstImageNum.length; i++){
    firstOriginImageGroup.push(originalImages[firstImageNum[i]]);
    firstCarImageGroup.push(fakeCarImages[firstImageNum[i]]);
  }

  for(var i =0 ; i<secondImageNum.length; i++){
    secondOriginImageGroup.push(originalImages[secondImageNum[i]]);
    secondCarImageGroup.push(fakeCarImages[secondImageNum[i]]);
  }

  for(var i =0 ; i<thirdImageNum.length; i++){
    thirdOriginImageGroup.push(originalImages[thirdImageNum[i]]);
    thirdCarImageGroup.push(fakeCarImages[thirdImageNum[i]]);
  }

  for(var i =0 ; i<fourthImageNum.length; i++){
    fourthOriginImageGroup.push(originalImages[fourthImageNum[i]]);
    fourthCarImageGroup.push(fakeCarImages[fourthImageNum[i]]);
  }



   //first group
  $(firstOriginImageGroup).animate( {
            opacity: '1'
          }, 3000, 'swing' );

  setTimeout(function(){
    $(firstOriginImageGroup).animate( {
            opacity: '0'
          }, 3000, 'swing' );
    
    $(firstCarImageGroup).animate( {
            opacity: '1'
          }, 3000, 'swing' );

  }, 3000);


  //second group
  setTimeout(function(){
  $(secondOriginImageGroup).animate( {
            opacity: '1'
          }, 3000, 'swing' );
  }, 5000);

  setTimeout(function(){
    $(secondOriginImageGroup).animate( {
            opacity: '0'
          }, 3000, 'swing' );
    
    $(secondCarImageGroup).animate( {
            opacity: '1'
          }, 3000, 'swing' );

  }, 7000);

  //third group
  setTimeout(function(){
  $(thirdOriginImageGroup).animate( {
            opacity: '1'
          }, 3000, 'swing' );
  }, 10000);

  setTimeout(function(){
    $(thirdOriginImageGroup).animate( {
            opacity: '0'
          }, 3000, 'swing' );
    
    $(thirdCarImageGroup).animate( {
            opacity: '1'
          }, 3000, 'swing' );

  }, 13000);

  //fourth group
  setTimeout(function(){
  $(fourthOriginImageGroup).animate( {
            opacity: '1'
          }, 3000, 'swing' );
  }, 15000);

  setTimeout(function(){
    $(fourthOriginImageGroup).animate( {
            opacity: '0'
          }, 3000, 'swing' );
    
    $(fourthCarImageGroup).animate( {
            opacity: '1'
          }, 3000, 'swing' );

  }, 18000);

   
   
  
//전체 배경 애니메이션
 setTimeout(function(){

  setInterval(function(){
    $(originalImages).animate( {
            opacity: '0'
          }, 3000, 'swing' );
    
    $(fakeCarImages).animate( {
            opacity: '1'
          }, 3000, 'swing' );
    

  }, 5000);


  setInterval(function(){
     $(originalImages).animate( {
            opacity: '1'
          }, 3000, 'swing' );
    
    $(fakeCarImages).animate( {
            opacity: '0'
          }, 3000, 'swing' );
    ;

  }, 10000);

  $(".container > .background").animate({

     opacity: '0.9'
  }, 3000, 'swing');

 }, 20000);
 
  //타이틀 애니메이션
  setTimeout(function(){
    
  $(".title-wrapper").fadeIn(3000, 'swing');

 }, 21000);

  setTimeout(function(){
    
  $(".title-wrapper").fadeOut(3000, 'swing');

 }, 24000);

  //select 애니메이션
  setTimeout(function(){
    
  $(".selectBtn-wrapper").fadeIn(3000, 'swing');

 }, 26000);


   // take a photo를 선택했을때 

  const video = document.getElementById('videoElement')
  var photoCanvas = document.getElementById('photo');

  var btnUpload = $('.selectBtn-wrapper').find('.btnWebcam');
    $(btnUpload).click(function(){
        
     $('.webcamBtn-wrapper').fadeIn(5000, 'swing');

     $(".selectBtn-wrapper").fadeOut(1000, 'swing');
  

    faceRecognition();

    });
  
    //take a photo 를 선택 한 후 again버튼을 눌렀을때 
  let btnPhotoBtn = $('.webcamBtn-wrapper').find('.photoBtn-web');
  $(btnPhotoBtn).click(function(){
    faceRecognition();
    video.play();
  });

  //take a photo 를 선택 한 후 capture 버튼을 눌렀을때 
 let btnCaptureBtn = $('.webcamBtn-wrapper').find('.captureBtn-web');
  $(btnCaptureBtn).click(function(){
    video.pause();
    
  });



 // upload an image를 선택했을때 

  var btnUpload = $('.selectBtn-wrapper').find('.btnUpload');
    $(btnUpload).click(function(){
        
     $('.uploadBtn-wrapper').fadeIn(5000, 'swing');

     $(".selectBtn-wrapper").fadeOut(1000, 'swing');
    });
    
 //upload an image 할때 input file 폰트 색

var inputFile = ($(".uploadBtn-wrapper").find(".uploadImage"));
 $(inputFile).on("change",function(){
   $(this).css('color','#ee4848');
   $('.uploadImage-wrapper').css({'border': '1px solid #ee4848', 'background': '#000000'});

});

 var formData = new FormData();

//take a photo 를 선택 한 후 start 버튼을 눌렀을때 
 let btnStartBtnTake = $('.webcamBtn-wrapper').find('.btnSend-web');
  $(btnStartBtnTake).click(function(){
    capture();
    // canvas이미지를 파일로 변환 
    const decodImg = atob(capture().split(',')[1]);

     let array = [];
     for (let i = 0; i < decodImg .length; i++) {
       array.push(decodImg .charCodeAt(i));
     }
    const file = new Blob([new Uint8Array(array)], {type: 'image/png'});
    const fileName = 'canvas_img'+ new Date().getMilliseconds() + '.png';

    goToResultPageFromCapture();

    if(capture()){
        formData.append('file', file, fileName);
    
   
         $.ajax({
         url : 'http://ec2-52-79-240-184.ap-northeast-2.compute.amazonaws.com:5000/cyclegan',
         type : 'POST',
         data : formData,
         contentType : false,
         processData : false,
         enctype: 'multipart/form-data',
         success:function(result){
          
          $('.r-originImage').attr('src', result.origin_image);
           $('.r-fakeCarImage').attr('src', result.fake_image);  
           
        
            var className = $('.class')
            var percentageName = $('.percentage')
            var realCarImages = $('.r-predictCarImage')
            for(var i=0; i<5; i++){
              $(className[i]).text(result.percentage_data.class[i]);
              $(percentageName[i]).text(result.percentage_data.percent[i] + '%');
              $(realCarImages[i]).attr('src', result.realCar_image[i])
            }
            
         showRealCars()
         resultImageFaceAndCar();        

            

         },error : function(error){
            console.log(error);
         }
         })
     
         
       }
  });

//image an upload 를 선택 한 후 start 버튼을 눌렀을때 

 let btnStartBtnUpload = $('.uploadBtn-wrapper').find('.btnSend-upload');
  $(btnStartBtnUpload).click(function(){

    goToResultPageFromImage();

       if($("#uploadImage")[0].files[0]){
        formData.append('file', $("#uploadImage")[0].files[0]);
    
      
         $.ajax({
         url : 'http://ec2-52-79-240-184.ap-northeast-2.compute.amazonaws.com:5000/cyclegan',
         type : 'POST',
         data : formData,
         contentType : false,
         processData : false,
         enctype: 'multipart/form-data',
         success:function(result){

            $('.r-originImage').attr('src', result.origin_image);
           $('.r-fakeCarImage').attr('src', result.fake_image);  
           
        
            var className = $('.class')
            var percentageName = $('.percentage')
            var realCarImages = $('.r-predictCarImage')
            for(var i=0; i<5; i++){
              $(className[i]).text(result.percentage_data.class[i]);
              $(percentageName[i]).text(result.percentage_data.percent[i] + '%');
              $(realCarImages[i]).attr('src', result.realCar_image[i])
            }
           
            showRealCars();
            resultImageFaceAndCar();

         },error : function(error){
            console.log(error);
         }
         })
     
     
       }
       
  


  });

   
  




  //face recognition
 function faceRecognition(){
    

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('../models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('../models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('../models'),
  faceapi.nets.faceExpressionNet.loadFromUri('../models')
]).then(startVideo)

function startVideo() {
  
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream;
      
       })
      .catch(function (error) {
        console.log("Something went wrong!");
      });
 
}

video.addEventListener('play', () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  
  document.body.append(canvas)
 
  const displaySize = { width: video.width, height: video.height }
 
  
  faceapi.matchDimensions(canvas, displaySize)
  
  // const intervalId = setInterval(async () => {
  //   const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
  
    
  //   const resizedDetections = faceapi.resizeResults(detections, displaySize)
  //   canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)

   

  //   // faceapi.draw.drawDetections(canvas, resizedDetections)
  //   // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
  //   // faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
   

  //   const detectionNum = resizedDetections[0].detection._classScore;
  //   const detectionWidth = resizedDetections[0].detection._box._width;
  //   const detectionHeight = resizedDetections[0].detection._box._height;
    
   
  //   if(detectionNum != undefined && detectionNum >0.97 && detectionWidth >= 190 && detectionHeight >= 190){
  //     canvas.style.background = "no-repeat center/100% url('./images/fR-r.png')";
  //     clearInterval(intervalId);
  //     video.pause();

  //     // play 'snap' sound
  //   //   const snap = document.getElementById('snap');
  //   // snap.currentTime = 0;
  //   // snap.play();
   
   
  //   };
    
  // }, 1000)
})
    }


function capture() {


photoCanvas.width = video.videoWidth;
photoCanvas.height = video.videoHeight;


photoCanvas.getContext('2d').drawImage(video, 0,0, photoCanvas.width, photoCanvas.height); 
 

photoCanvas.style.display = 'block';

const captureData = photoCanvas.toDataURL('image/png');

return captureData

}

function goToResultPageFromCapture(){

 $('.webcamBtn-wrapper').fadeOut(1000, 'swing');
 $('canvas').fadeOut(1000, 'swing');

  $('.result').animate({

     'opacity': '1'
     
  }, 100, 'swing');

  $('.result').css('z-index', '6');

 
}

function goToResultPageFromImage(){

 $('.uploadBtn-wrapper').fadeOut(1000, 'swing');
 $('canvas').fadeOut(1000, 'swing');

  $('.result').animate({

     'opacity': '1'
     
  }, 100, 'swing');

  $('.result').css('z-index', '6');

 
}

function resultImageFaceAndCar(){

      $('.r-originImage').animate({
          opacity: '1'
      }, 4000, 'swing' );

       $('.r-fakeCarImage').animate({
              opacity: '0'
       }, 4000, 'swing' );

 setInterval(function(){
     $('.r-originImage').animate({
          opacity: '0'
      }, 4000, 'swing' );

       $('.r-fakeCarImage').animate({
              opacity: '1'
       }, 4000, 'swing' );
    

  }, 4000);  
  setTimeout(function(){
  setInterval(function(){
     $('.r-originImage').animate({
          opacity: '1'
      }, 4000, 'swing' );

       $('.r-fakeCarImage').animate({
              opacity: '0'
       }, 4000, 'swing' );
    

  }, 4000);  

  }, 4000);  

}

function showRealCars(){
 
  var realCars = $('.r-predictCar');

  setTimeout(function(){
  $(realCars[4]).animate({
    opacity: '1'
  }, 2000, 'swing' );
  }, 8000);


  setTimeout(function(){
  
  $(realCars[3]).animate({
    opacity: '1'
  }, 2000, 'swing' );

  }, 11000);  

  setTimeout(function(){
  
  $(realCars[2]).animate({
    opacity: '1'
  }, 2000, 'swing' );

  }, 14000);  

  setTimeout(function(){
  
  $(realCars[1]).animate({
    opacity: '1'
  }, 2000, 'swing' );

  }, 17000);  

  setTimeout(function(){
  
  $(realCars[0]).animate({
    opacity: '1'
  }, 2000, 'swing' );

  }, 20000);  

}


 

 





    

  



})   

})(this, this.jQuery);

