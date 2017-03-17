var inputArray = Array(); // user input

var scaleArray = Array('C','C#','Cb','D','D#','Db','E','E#','Eb','F','F#','Fb','G','G#','Gb','A','A#','Ab','B','B#','Bb');

var randomScale;

var notesInArray = Array();

var majorMinorArray = Array('major','minor');
var randomMajMin;

//var scaleArray = Array('C','B#');

var numCorrect = 0;

document.addEventListener('keyup', inputFunction, false);


function getRandomScale(){
    randomScale = scaleArray[Math.floor(Math.random()*scaleArray.length)];
    console.log('Location: ' + window.location.href);
    //someRandom = someArray[Math.floor(Math.random() * someArray.length)];
    randomMajMin = majorMinorArray[Math.floor(Math.random()*majorMinorArray.length)];
    if ((randomScale == 'C' || randomScale == 'B#') && randomMajMin == 'major'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 48;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+majorScale[scaleProgression[i]];
        }
    }
    else if ((randomScale == 'C' || randomScale == 'B#') && randomMajMin == 'minor'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 48;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+minorScale[scaleProgression[i]];
        }
    }
    else if ((randomScale == 'Db' || randomScale == 'C#') && randomMajMin == 'major'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 49;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+majorScale[scaleProgression[i]];
        }
    }
    else if ((randomScale == 'Db' || randomScale == 'C#') && randomMajMin == 'minor'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 49;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+minorScale[scaleProgression[i]];
        }
    }
    else if (randomScale == 'D' && randomMajMin == 'major'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 50;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+majorScale[scaleProgression[i]];
        }
    }
    else if (randomScale == 'D' && randomMajMin == 'minor'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 50;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+minorScale[scaleProgression[i]];
        }
    }
    else if ((randomScale == 'Eb' || randomScale == 'D#') && randomMajMin == 'major'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 51;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+majorScale[scaleProgression[i]];
        }
    }
    else if ((randomScale == 'Eb' || randomScale == 'D#') && randomMajMin == 'minor'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 51;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+minorScale[scaleProgression[i]];
        }
    }
    else if ((randomScale == 'E' || randomScale == 'Fb') && randomMajMin == 'major'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 52;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+majorScale[scaleProgression[i]];
        }
    }
    else if ((randomScale == 'E' || randomScale == 'Fb') && randomMajMin == 'minor'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 52;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+minorScale[scaleProgression[i]];
        }
    }
    else if ((randomScale == 'F' || randomScale == 'E#') && randomMajMin == 'major'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 53;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+majorScale[scaleProgression[i]];
        }
    }
    else if ((randomScale == 'F' || randomScale == 'E#') && randomMajMin == 'minor'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 53;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+minorScale[scaleProgression[i]];
        }
    }
    else if ((randomScale == 'Gb' || randomScale == 'F#') && randomMajMin == 'major'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 54;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+majorScale[scaleProgression[i]];
        }
    }
    else if ((randomScale == 'Gb' || randomScale == 'F#') && randomMajMin == 'minor'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 54;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+minorScale[scaleProgression[i]];
        }
    }
    else if (randomScale == 'G' && randomMajMin == 'major'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 55;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+majorScale[scaleProgression[i]];
        }
    }
    else if (randomScale == 'G' && randomMajMin == 'minor'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 55;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+minorScale[scaleProgression[i]];
        }
    }
    else if ((randomScale == 'Ab' || randomScale == 'G#') && randomMajMin == 'major'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 56;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+majorScale[scaleProgression[i]];
        }
    }
    else if ((randomScale == 'Ab' || randomScale == 'G#') && randomMajMin == 'minor'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 56;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+minorScale[scaleProgression[i]];
        }
    }
    else if (randomScale == 'A' && randomMajMin == 'major'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 57;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+majorScale[scaleProgression[i]];
        }
    }
    else if (randomScale == 'A' && randomMajMin == 'minor'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 57;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+minorScale[scaleProgression[i]];
        }
    }
    else if ((randomScale == 'Bb' || randomScale == 'A#') && randomMajMin == 'major'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 58;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+majorScale[scaleProgression[i]];
        }
    }
    else if ((randomScale == 'Bb' || randomScale == 'A#') && randomMajMin == 'minor'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 58;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+minorScale[scaleProgression[i]];
        }
    }
    else if ((randomScale == 'B' || randomScale == 'Cb') && randomMajMin == 'major'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 59;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+majorScale[scaleProgression[i]];
        }
    }
    else if ((randomScale == 'B' || randomScale == 'Cb') && randomMajMin == 'minor'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 59;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+minorScale[scaleProgression[i]];
        }
    }


}

function getRandomMajorScale(){
    randomScale = scaleArray[Math.floor(Math.random()*scaleArray.length)];
    //someRandom = someArray[Math.floor(Math.random() * someArray.length)];
    console.log('Location:' + window.location.href);
    randomMajMin = 'major';
    if ((randomScale == 'C' || randomScale == 'B#') && randomMajMin == 'major'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 48;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+majorScale[scaleProgression[i]];
        }
    }
    else if ((randomScale == 'Db' || randomScale == 'C#') && randomMajMin == 'major'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 49;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+majorScale[scaleProgression[i]];
        }
    }
    else if (randomScale == 'D' && randomMajMin == 'major'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 50;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+majorScale[scaleProgression[i]];
        }
    }
    else if ((randomScale == 'Eb' || randomScale == 'D#') && randomMajMin == 'major'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 51;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+majorScale[scaleProgression[i]];
        }
    }
    else if ((randomScale == 'E' || randomScale == 'Fb') && randomMajMin == 'major'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 52;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+majorScale[scaleProgression[i]];
        }
    }
    else if ((randomScale == 'F' || randomScale == 'E#') && randomMajMin == 'major'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 53;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+majorScale[scaleProgression[i]];
        }
    }
    else if ((randomScale == 'Gb' || randomScale == 'F#') && randomMajMin == 'major'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 54;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+majorScale[scaleProgression[i]];
        }
    }
    else if (randomScale == 'G' && randomMajMin == 'major'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 55;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+majorScale[scaleProgression[i]];
        }
    }
    else if ((randomScale == 'Ab' || randomScale == 'G#') && randomMajMin == 'major'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 56;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+majorScale[scaleProgression[i]];
        }
    }
    else if (randomScale == 'A' && randomMajMin == 'major'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 57;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+majorScale[scaleProgression[i]];
        }
    }
    else if ((randomScale == 'Bb' || randomScale == 'A#') && randomMajMin == 'major'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 58;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+majorScale[scaleProgression[i]];
        }
    }
    else if ((randomScale == 'B' || randomScale == 'Cb') && randomMajMin == 'major'){
        document.getElementById('scaleId').textContent=randomScale + ' ' + randomMajMin;
        globalNote = 59;
        for(var i = 0; i < scaleLength; i++) {
            notesInArray[i] = globalNote+majorScale[scaleProgression[i]];
        }
    }
}

function storeNote(input){
    if(inputArray.length < scaleLength) {
        inputArray.push(input);
    }
    cmpArrayLength();
}

function inputFunction(input){
    for(var i = 0; i < scaleLength; i++){
        console.log("Array: " + i + ": " + inputArray[i]);
    }
    var unicode = input.keyCode ? input.keyCode : input.charCode;
    if (inputArray.length < scaleLength) {
        if (unicode == 81) { // q
            inputArray.push(48);
        } else if (unicode == 50) { // 2
            inputArray.push(49);
        } else if (unicode == 87) { // w
            inputArray.push(50);
        } else if (unicode == 51) { // 3
            inputArray.push(51);
        } else if (unicode == 69) { // e
            inputArray.push(52);
        } else if (unicode == 82) { // r
            inputArray.push(53);
        } else if (unicode == 53) { // 5
            inputArray.push(54);
        } else if (unicode == 84) { // t
            inputArray.push(55);
        } else if (unicode == 54) { // 6
            inputArray.push(56);
        } else if (unicode == 89) { // y
            inputArray.push(57);
        } else if (unicode == 55) { // 7
            inputArray.push(58);
        } else if (unicode == 85) { // u
            inputArray.push(59);
        } else if (unicode == 73) { // i
            inputArray.push(60);
        } else if (unicode == 57) { // 9
            inputArray.push(61);
        } else if (unicode == 79) { // o
            inputArray.push(62);
        } else if (unicode == 48) { // 0
            inputArray.push(63);
        } else if (unicode == 80) { // p
            inputArray.push(64);
        } else if (unicode == 90) { // z
            inputArray.push(65);
        } else if (unicode == 83) { // s
            inputArray.push(66);
        } else if (unicode == 88) { // x
            inputArray.push(67);
        } else if (unicode == 68) { // d
            inputArray.push(68);
        } else if (unicode == 67) { // c
            inputArray.push(69);
        } else if (unicode == 70) { // f
            inputArray.push(70);
        } else if (unicode == 86) { // v
            inputArray.push(71);
        } else if (unicode == 66) { // b
            inputArray.push(72);
        } else if (unicode == 72) { // h
            inputArray.push(73);
        } else if (unicode == 78) { // n
            inputArray.push(74);
        } else if (unicode == 74) { // j
            inputArray.push(75);
        } else if (unicode == 77) { // m
            inputArray.push(76);
        }
    }
    cmpArrayLength();
}

function cmpArrayLength(){
    if (inputArray.length == notesInArray.length){
        checkArray();
    }
}


function checkArray(){
    var ifCorrect = false;
    console.log("Major or Minor: " + randomMajMin);
    for (var i = 0; i < scaleLength;i++){
        console.log('Array' + '['+ i + ']: ' + inputArray[i] + ',' + notesInArray[i]);
    }
    if (randomMajMin == 'major') {
        for (var i = 0; i < scaleLength; i++) {
            if (randomMajMin == 'major') {
                if (inputArray[i] != notesInArray[i]) {
                    inputArray = [];
                    showSnackBar(ifCorrect);
                    if (window.location.href.indexOf("quizMajorScales") > -1) {
                        console.log("Major Quiz");
                        getRandomMajorScale();
                        break;
                    }
                    else if (window.location.href.indexOf("quizMinorScales") > -1) {
                        console.log("Minor Quiz");
                        getRandomScale();
                        break;
                    }
                }
                else {
                    ifCorrect = true;
                }
            }

        }
    }
    else if (randomMajMin == 'minor'){
        for(var i =0; i < scaleLength;i++){
            if(inputArray[i] != notesInArray[i]){
                inputArray = [];
                showSnackBar(ifCorrect);
                getRandomScale();
                break;
            }
            else{
                ifCorrect = true;
            }
        }
    }
    if (ifCorrect == true){
        console.log("Correct: " + ifCorrect.toString());
        showSnackBar(ifCorrect);
        numCorrect++;
        document.getElementById('correctScore').textContent = numCorrect;
        checkNumCorrect();
    }

}

function checkNumCorrect(){
    if (numCorrect == 5){
        document.getElementById('congratsTxt').textContent = 'Congratulations! You Passed!';
        inputArray = [];
    }
    else{
        inputArray = [];
        if(window.location.href.indexOf('quizMajorScales') > -1){
            console.log("Correct Major");
            getRandomMajorScale();
        }
        else if(window.location.href.indexOf('quizMinorScales') > -1){
            console.log("Correct Minor");
            getRandomScale();
        }
    }
}