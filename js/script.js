const video = document.getElementById('videoElement')

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
                    .catch(function (err0r) {
                    console.log("Something went wrong!");
                    });
                
  // navigator.getUserMedia(
  //   { video: {} },
  //   stream => video.srcObject = stream,
  //   err => console.error(err)
  // )
}

video.addEventListener('play', () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  document.body.append(canvas)
  // const displaySize = { width: 256, height: 256 }
  const displaySize = { width: video.width, height: video.height }
  // const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)
  const intervalId = setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()

    
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    const detectionNum = resizedDetections[0].detection._classScore;
    console.log(detectionNum);
    if(detectionNum !=undefined && detectionNum >0.96){
      canvas.style.border = '5px solid #ee4848';
      clearInterval(intervalId);
    };
    // faceapi.draw.drawDetections(canvas, resizedDetections)
    // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    // faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
  }, 100)
})