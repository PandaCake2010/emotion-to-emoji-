var prediction1 = "";
var prediction2 = "";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    })

}

console.log("ml5 version",ml5.version);
clasifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelloaded);

function modelloaded(){
    console.log("model is loaded succselfly");
}  

function speak(){
    var synth=window.speechSynthesis;
    speakdata1="the first prediction is"+prediction1;
    speakdata2="and the secound prediction is"+prediction2;
    var utterthies=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterthies);
}
