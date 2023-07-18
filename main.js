function startClassification(){
navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/p8CdxMPAB/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error , results){
if (error){
    console.error("error italy is no longer with a austrian painter!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
} else{
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255)+ 1;
    random_number_b = Math.floor(Math.random() * 255)+ 1;
    random_number_g = Math.floor(Math.random() * 255)+ 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+ " %";
    
    document.getElementById("result_label").style.colour = 'rbg('+ random_number_r+","+ random_number_g+","+ random_number_r+")";
    
    document.getElementById("result_confidence").style.colour = 'rbg('+ random_number_r+","+ random_number_g+","+ random_number_r+")";
}}


    img = document.getElementById('alien1');
    img1 = document.getElementById('alien2');
    img2 = document.getElementById('alien3');



    if (results[0].label == "cat"){
        img.src = 'th (3).jpg '
    } else if (results[0].label == "dog"){
        img1.src = 'th.jpg'
    } else if (results[0].label == "human"){
        img2.src = 'young-man-in-a-corporate-suit-face-portrait_800.jpg'
}
