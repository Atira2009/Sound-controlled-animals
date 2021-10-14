function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/FupFgC3bG/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        rnr = Math.floor(Math.random() * 255) + 1;
        rng = Math.floor(Math.random() * 255) + 1;
        rnb = Math.floor(Math.random() * 255) + 1;

        document.getElementById("rl").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("rc").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+ " %"
        document.getElementById("rl").style.color = "rgb("+rnr+","+rng+","+rnb+")";
        document.getElementById("rc").style.color = "rgb("+rnr+","+rng+","+rnb+")";

        img = document.getElementById("cat")
        img1 = document.getElementById("dog")
        img2 = document.getElementById("goat")

        if(results[0].label == "meowing"){
            console.log("meow")
            img.src = 'kitty.gif';
            img1.src = 'dog.jpg';
            img2.src = 'goat.jpg';
        } else if (results[0].label == "barking") {
            console.log("bark")
            img.src = 'cat.png';
            img1.src = 'doggie.gif';
            img2.src = 'goat.jpg';
        } else if (results[0].label == "ma ma ma") {
            console.log("meh meh meh")
            img.src = 'cat.png';
            img1.src = 'dog.jpg';
            img2.src = 'lamb.gif';}
    }
}
