var x = 0;
var y = 0;
var draw_circle = "";
var draw_rectangle = "";
var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();
function preload() {
    Apple = loadImage("https://i.postimg.cc/59pm3Cj1/download.png");
}
function start() {
    document.getElementById("status").innerHTML = 'System is listening please speak';
    console.log("Started");
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    var numbe = event.results[0][0].transcript;
    console.log(numbe);
    content = Number(numbe);
    document.getElementById("status").innerHTML = 'Speech has been recognized as '  + content;
    if(Number.isInteger(content)){
        for(var i = 1; 1<=content; i++){
            x = Math.floor(Math.random()*900); 
            y = Math.floor(Math.random()*600); 
            console.log(x+","+y);
            image(Apple,x,y,50,50);
            document.getElementById("status").innerHTML = "Started Drawing apple"     
    }}  
}
function setup() {
    canvas = createCanvas(900,600);
}

