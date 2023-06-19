// https://teachablemachine.withgoogle.com/models/_G0YusIQD/
chirp = 0;
bark = 0;
roar = 0;
howl = 0;
meow = 0;
r = Math.random(1, 255);
g = Math.random(1, 255);
b = Math.random(1, 255);
img = document.getElementById("animal_image");
function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/_G0YusIQD/model.json", modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if(error) {
        console.log(error);
    }else{
        console.log(results);
        document.getElementById("result_label").innerHTML = "Detection History- Bark: " + bark + " Chirp: " + chirp + " Roar: " + roar + " Howl: " + howl + " Meow: " + meow;
        document.getElementById("result").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_label").style.color = (r, g, b);
        document.getElementById("result").style.color = (r, g, b);
        if(results[0].label == "Bark") {
            img.src = "dog.jpeg";
            bark += 1;
        }else if(results[0].label == "Meow") {
            img.src = "cat.jpg";
            meow += 1;
        }else if(results[0].label == "Chirp") {
            img.src = "bird.jpeg";
            chirp += 1;
        }else if(results[0].label == "Roar") {
            img.src = "lion.jpeg";
            roar += 1;
        }else if(results[0].label == "Howl") {
            img.src = "wolf.jpeg";
            howl += 1;
        }
    }
    console.log("got result");
}