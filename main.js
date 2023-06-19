// https://teachablemachine.withgoogle.com/models/_G0YusIQD/
function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/_G0YusIQD/model.json", modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    console.log("got result");
}