var personalityQuestions = [];
var images = ["img/small.jpg","img/medium.jpg","img/large.jpg"];


function start(size){
    //var size = document.getElementById("schoolSize").value;
    //var area = document.getElementById("surroundingArea").value;
    //var correct = calculateResults(size);




    document.getElementById("image").src = images[size];

}


function calculateResults(size){
    if(size == 0){
        return 0;
    }
    if(size == 1){
        return 1
    }
    if(size == 2){
        return 2;
    }
}

