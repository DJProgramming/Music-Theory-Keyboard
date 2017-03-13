var stepArray = Array('half', 'whole');
var randomStep;

document.addEventListener("keydown", keyDownFunction, false);

var numCorrect = 0;
var randomNote;

/* Highlights random note in piano */
function highlightRandom(){
    randomStep = stepArray[Math.floor(Math.random()*stepArray.length)];
    console.log('Step: '+ randomStep );
    document.getElementById('stepTxt').textContent = randomStep;

    randomNote = Math.floor(Math.random()*29) + 48; // number between 48 & 76

    console.log('Note: ' + randomNote);

    var noteData = getDivInfo(randomNote);

    console.log(noteData);

    changeColor(noteData[0]);
}

function keyDownFunction(input){
    var offset = randomStep == 'half' ? 1 : 2;
    var hitNote = getDivIDNoteOctaveFromUnicode(input);
    var highlightedNote = getDivInfo(randomNote);
    var hitNoteValue = checkNote(hitNote[1], hitNote[2]);
    var noteUp = getDivInfo(hitNoteValue - offset);
    var noteDown = getDivInfo(hitNoteValue + offset);

    console.log('Offset: ' + offset);
    console.log('Note: ' + hitNote);
    console.log('Key Value: ' + hitNoteValue);

    if(noteUp[0] == highlightedNote[0] || noteDown[0] == highlightedNote[0]) {
        console.log('Correct!');
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
        revertColor(highlightedNote[0]);
    } else {
        showSnackBar(false);
        console.log('Wrong!');
    }
}

function checkCorrect(input){
    if (input == 10){
        alert('10/10');
        document.getElementById("correctScore").textContent = numCorrect.toString();
        document.getElementById('congratsTxt').textContent = "Congratulations! You Passed!"

    }
    else{
        console.log("Score: " + numCorrect);
        document.getElementById("correctScore").textContent = numCorrect.toString();
        highlightRandom();
    }
}