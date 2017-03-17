var intervalArray = Array('unison', 'minor 2nd','major 2nd','minor 3rd','major 3rd','perfect 4th','perfect 5th','minor 6th','major 6th','minor 7th','major 7th');
var intervalOffset = Array(0,1,2,3,4,5,7,8,9,10,11);
var randomInterval;
var myoffset;

// document.addEventListener("keydown", keyDownFunction, false);
document.addEventListener("keyup", keyUpFunction, false);

var numCorrect = 0;     // variable to track how many correct notes have been played
var maxScore = 10;      // score limit (win condition)
var randomNote;         // variable to store randomly selected note
var lastNote = 0;

// Highlights random note in piano
function highlightRandom() {
    randomInterval = intervalArray[Math.floor(Math.random()*intervalArray.length)];
    document.getElementById('stepTxt').textContent = randomInterval;

    randomNote = Math.floor(Math.random()*17) + 48;   // random note between 48 & 65
    var highlightedNote = getDivIDNoteOctaveFromMidiValue(randomNote);          // get div info for random note to highlight
    changeSelectColor(highlightedNote[0]);                                      // highlight randomly selected note
    canColor[highlightedNote[0]] = false;                       // keep randomly selected note from unhighlighting when played
    myoffset=0;
     for(var i = 0; i < intervalArray.length; i++) {
         if (randomInterval == intervalArray[i]) {
                 myoffset= intervalOffset[i];
             }
     }
     //console.log('Interval: '+ randomInterval );
     console.log('Note: ' + randomNote);
     console.log('My offset: ' + myoffset);
    // console.log(highlightedNote);
}

function keyUpFunction(input) {
    //var offset = randomStep == 'half' ? 1 : 2;                                  // if random step is half, ofsset is 1 semitone, otherwise 2
    var hitNote = getDivIDNoteOctaveFromUnicode(input);  // get div info corresponding to pressed key
   var offset=myoffset;
   var hitNote = getDivIDNoteOctaveFromKeyboardChar(getKeyaboardCharFromUnicode(input));          // get div info corresponding to pressed key
   var highlightedNote = getDivIDNoteOctaveFromMidiValue(randomNote);          // get div info corresponding to random selected note
    var correctNote = getDivIDNoteOctaveFromMidiValue(randomNote+myoffset);  //get div for the correct answer (highlight key + offset)

    // var hitMidiValue = 
   // var hitMidiValue =getMidiValue(value, octave);                             // get midi value of user key input
   // var noteDown = getDivIDNoteOctaveFromMidiValue(hitMidiValue);      // get div info for user note

    console.log('up Offset: ' + offset);
    console.log('up Note: ' + hitNote);
    // console.log('up  Key Value: ' + hitMidiValue);

    if(hitNote[0] == correctNote[0]) {                                     //  note above is correct
        numCorrect++;                                                           // increase number of correct notes
        checkCorrect(numCorrect);                                               // check to see if score limit has been reached
       canColor[highlightedNote[0]] = true;                                    // allow randomly selected note to unhighlight
       revertSelectColor(highlightedNote[0]);                                  // uncolor randomly selected note
       showSnackBar(true);
       console.log('Correct!');
    } else {
         console.log('Wrong!');
       showSnackBar(false);
    }
}


function clickFunction(value, octave) {
    //var offset = randomStep == 'half' ? 1 : 2;                                  // if random step is half, ofsset is 1 semitone, otherwise 2
     //var offset=myoffset;
    var highlightedNote = getDivIDNoteOctaveFromMidiValue(randomNote);  // get div info corresponding to random selected note
     var correctNote = getDivIDNoteOctaveFromMidiValue(randomNote+myoffset);  //get div for the correct answer (highlight key + offset)
    // var hitMidiValue = getMidiValue(value, octave);                             // get midi value of user key input
    var noteDown = getDivIDNoteOctaveFromMidiValue(hitMidiValue);      // get div info for user note

     console.log('Offset: ' + myoffset);
    console.log('random note:' + randomNote);
    // console.log('Key Value user: ' + hitMidiValue);
    console.log('correct Value: ' + correctNote[0]);
     console.log('highlighted Value: ' + noteDown[0]);

    if(noteDown[0] == correctNote[0]) {                                    // if note down is the same as correct note
        numCorrect++;                                                           // increase number of correct notes
        checkCorrect(numCorrect);                                               // check to see if score limit has been reached
        canColor[highlightedNote[0]] = true;                                    // allow randomly selected note to unhighlight
        revertSelectColor(highlightedNote[0]);                                  // uncolor randomly selected note
        console.log('Correct!');
    } else {
         console.log('Wrong!');
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
