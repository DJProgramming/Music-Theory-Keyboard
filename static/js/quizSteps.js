var stepArray = Array('half', 'whole');
var randomStep;

// document.addEventListener("keydown", keyDownFunction, false);
document.addEventListener("keyup", keyUpFunction, false);

var numCorrect = 0;     // variable to track how many correct notes have been played
var maxScore = 10;      // score limit (win condition)
var randomNote;         // variable to store randomly selected note
var lastNote = 0;

// Highlights random note in piano
function highlightRandom() {
    randomStep = stepArray[Math.floor(Math.random()*stepArray.length)];
    document.getElementById('stepTxt').textContent = randomStep;

    randomNote = Math.floor(Math.random()*29) + 48;                             // random note between 48 & 76
    var highlightedNote = getDivIDNoteOctaveFromMidiValue(randomNote);          // get div info for random note to highlight
    changeSelectColor(highlightedNote[0]);                                      // highlight randomly selected note
    canColor[highlightedNote[0]] = false;                                       // keep randomly selected note from unhighlighting when played

    // console.log('Step: '+ randomStep );
    // console.log('Note: ' + randomNote);
    console.log(highlightedNote);
}

function keyUpFunction(input) {
    var offset = randomStep == 'half' ? 1 : 2;                                  // if random step is half, ofsset is 1 semitone, otherwise 2
    //var hitNote = getDivIDNoteOctaveFromUnicode(input);                         // get div info corresponding to pressed key
    var hitNote = getDivIDNoteOctaveFromKeyboardChar(getKeyaboardCharFromUnicode(input));                         // get div info corresponding to pressed key
    var highlightedNote = getDivIDNoteOctaveFromMidiValue(randomNote);          // get div info corresponding to random selected note
    var hitMidiValue = getMidiValue(hitNote[1], hitNote[2]);                    // get midi value of user key input
    var noteUp = getDivIDNoteOctaveFromMidiValue(hitMidiValue - offset);        // get div info for correct note offset below random note
    var noteDown = getDivIDNoteOctaveFromMidiValue(hitMidiValue + offset);      // get div info for correct note offset above random note

    // console.log('Offset: ' + offset);
    // console.log('Note: ' + hitNote);
    // console.log('Key Value: ' + hitMidiValue);

    if(noteUp[0] == highlightedNote[0] || noteDown[0] == highlightedNote[0]) {  // if either note below or note above is correct
        numCorrect++;                                                           // increase number of correct notes
        checkCorrect(numCorrect);                                               // check to see if score limit has been reached
        canColor[highlightedNote[0]] = true;                                    // allow randomly selected note to unhighlight
        revertSelectColor(highlightedNote[0]);                                  // uncolor randomly selected note
        console.log('Correct!');
    } else {
        // console.log('Wrong!');
    }
}

/*
function keyDownFunction(input) {
    var offset = randomStep == 'half' ? 1 : 2;                                  // if random step is half, ofsset is 1 semitone, otherwise 2
    var hitNote = getDivIDNoteOctaveFromUnicode(input);                         // get div info corresponding to pressed key
    var highlightedNote = getDivIDNoteOctaveFromMidiValue(randomNote);          // get div info corresponding to random selected note
    var hitMidiValue = getMidiValue(hitNote[1], hitNote[2]);                    // get midi value of user key input
    var noteUp = getDivIDNoteOctaveFromMidiValue(hitMidiValue - offset);        // get div info for correct note offset below random note
    var noteDown = getDivIDNoteOctaveFromMidiValue(hitMidiValue + offset);      // get div info for correct note offset above random note

    // console.log('Offset: ' + offset);
    // console.log('Note: ' + hitNote);
    // console.log('Key Value: ' + hitMidiValue);

    if(noteUp[0] == highlightedNote[0] || noteDown[0] == highlightedNote[0]) {  // if either note below or note above is correct
        numCorrect++;                                                           // increase number of correct notes
        checkCorrect(numCorrect);                                               // check to see if score limit has been reached
        canColor[highlightedNote[0]] = true;                                    // allow randomly selected note to unhighlight
        revertSelectColor(highlightedNote[0]);                                  // uncolor randomly selected note
        console.log('Correct!');
    } else {
        console.log('Wrong!');
    }
}
*/

function clickFunction(value, octave) {
    var offset = randomStep == 'half' ? 1 : 2;                                  // if random step is half, ofsset is 1 semitone, otherwise 2
    var highlightedNote = getDivIDNoteOctaveFromMidiValue(randomNote);          // get div info corresponding to random selected note
    var hitMidiValue = getMidiValue(value, octave);                             // get midi value of user key input
    var noteUp = getDivIDNoteOctaveFromMidiValue(hitMidiValue - offset);        // get div info for correct note offset below random note
    var noteDown = getDivIDNoteOctaveFromMidiValue(hitMidiValue + offset);      // get div info for correct note offset above random note

    // console.log('Offset: ' + offset);
    // console.log('Note: ' + hitNote);
    // console.log('Key Value: ' + hitMidiValue);

    if(noteUp[0] == highlightedNote[0] || noteDown[0] == highlightedNote[0]) {  // if either note below or note above is correct
        numCorrect++;                                                           // increase number of correct notes
        checkCorrect(numCorrect);                                               // check to see if score limit has been reached
        canColor[highlightedNote[0]] = true;                                    // allow randomly selected note to unhighlight
        revertSelectColor(highlightedNote[0]);                                  // uncolor randomly selected note
        console.log('Correct!');
    } else {
        // console.log('Wrong!');
    }
}

function checkCorrect(input){
    if (input == maxScore){
        alert('10/10');
        document.getElementById("correctScore").textContent = numCorrect.toString();
        document.getElementById('congratsTxt').textContent = "Congratulations! You Passed!"

    } else {
        // console.log("Score: " + numCorrect);
        document.getElementById("correctScore").textContent = numCorrect.toString();
        lastNote = randomNote;
        highlightRandom();
        while(randomNote == lastNote) {
            console.log("Fixed");
            highlightRandom();
        }
    }
}