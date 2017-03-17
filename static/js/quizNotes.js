

/* keyArray */
var keyArray = Array('c3','db3','d3','eb3', 'e3', 'f3','gb3','g3','ab4','a4','bb4','b4','c4','db4','d4','eb4','e4','f4',
    'gb4','g4','ab5','a5','bb5','b5','c5','db5','d5','eb5','e5');

//var someArray = Array('c3');

document.addEventListener("keydown", keyDownFunction, false);

var randomNote;

var stepArray = Array('half', 'whole');
var randomStep;

var numWrong = 0;
var numCorrect = 0;

/*/!* Highlights random note in piano *!/
function highlightRandom(){
    randomNote = Math.floor(Math.random()*30) + 48;

    console.log(randomNote);

    var noteData = getDivInfo(randomNote);

    console.log(noteData);

    changeColor(noteData[0]);
}*/

/* Highlights random note in piano */
function highlightRandom(){
	var noteData = ['1', '2', '3'];
	console.log('Note:' + randomNote);
    randomNote = keyArray[Math.floor(Math.random()*keyArray.length)];
    //var classString = document.getElementById('c3Key').className;
    //console.log('Class Name: ' + classString);
	if (randomNote == 'c3'){
		document.getElementById('c3Key').className = 'highlightKey lStraightKey';
	}
	else if (randomNote == 'db3'){
		document.getElementById('db3Key').className = 'key highlightBlackKey';
	}
	else if (randomNote == 'd3'){
		document.getElementById('d3Key').className = 'highlightKey cutKey';
	}
	else if (randomNote == 'eb3'){
		document.getElementById('eb3Key').className = 'key highlightBlackKey';
	}
	else if (randomNote == 'e3'){
		document.getElementById('e3Key').className = 'highlightKey rStraightKey';
	}
	else if (randomNote == 'f3'){
		document.getElementById('f3Key').className = 'highlightKey lStraightKey';
	}
	else if (randomNote == 'gb3'){
		document.getElementById('gb3Key').className = 'key highlightBlackKey';
	}
	else if (randomNote == 'g3'){
		document.getElementById('g3Key').className = 'highlightKey cutKey';
	}
	else if (randomNote == 'ab4'){
		document.getElementById('ab4Key').className = 'key highlightBlackKey';
	}
	else if (randomNote == 'a4'){
		document.getElementById('a4Key').className = 'highlightKey cutKey';
	}
	else if (randomNote == 'bb4'){
		document.getElementById('bb4Key').className = 'key highlightBlackKey';
	}
	else if (randomNote == 'b4'){
		document.getElementById('b4Key').className = 'highlightKey rStraightKey';
	}
	else if (randomNote == 'c4'){
		document.getElementById('c4Key').className = 'highlightKey lStraightKey';
	}
	else if (randomNote == 'db4'){
		document.getElementById('db4Key').className = 'key highlightBlackKey';
	}
	else if (randomNote == 'd4'){
		document.getElementById('d4Key').className = 'highlightKey cutKey';
	}
	else if(randomNote == 'eb4'){
		document.getElementById('eb4Key').className = 'key highlightBlackKey';
	}
	else if(randomNote == 'e4'){
		document.getElementById('e4Key').className = 'highlightKey rStraightKey';
	}
	else if (randomNote == 'f4'){
		document.getElementById('f4Key').className = 'highlightKey lStraightKey';
	}
	else if (randomNote == 'gb4'){
		document.getElementById('gb4Key').className = 'key highlightBlackKey';
	}
	else if (randomNote == 'g4'){
		document.getElementById('g4Key').className = 'highlightKey cutKey';
	}
	else if (randomNote == 'ab5'){
		document.getElementById('ab5Key').className = 'key highlightBlackKey';
	}
	else if (randomNote == 'a5'){
		document.getElementById('a5Key').className = 'highlightKey cutKey';
	}
	else if (randomNote == 'bb5'){
		document.getElementById('bb5Key').className = 'key highlightBlackKey';
	}
	else if (randomNote == 'b5') {
		document.getElementById('b5Key').className = 'highlightKey rStraightKey';
	}
	else if (randomNote == 'c5'){
		document.getElementById('c5Key').className = 'highlightKey lStraightKey';
	}
	else if (randomNote == 'db5'){
		document.getElementById('db5Key').className = 'key highlightBlackKey';
	}
	else if (randomNote == 'd5'){
		document.getElementById('d5Key').className = 'highlightKey cutKey';
	}
	else if(randomNote == 'eb5'){
		document.getElementById('eb5Key').className = 'key highlightBlackKey';
	}
	else if(randomNote == 'e5'){
		document.getElementById('e5Key').className = 'highlightKey rStraightKey';
	}
}




function keyDownFunction(input){
    var unicode = input.keyCode ? input.keyCode : input.charCode;
    if (unicode == 81 && randomNote == 'c3'){
        document.getElementById('c3Key').className = "key lStraightKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 50 && randomNote == 'db3'){
        document.getElementById('db3Key').className = "key blackKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 87 && randomNote == 'd3'){
        document.getElementById('d3Key').className = "key cutKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 51 && randomNote == 'eb3'){
        document.getElementById('eb3Key').className = "key blackKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 69 && randomNote == 'e3'){
        document.getElementById('e3Key').className = "key rStraightKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 82 && randomNote == 'f3'){
        document.getElementById('f3Key').className = "key lStraightKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 53 && randomNote == 'gb3'){
        document.getElementById('gb3Key').className = "key blackKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 84 && randomNote == 'g3'){
        document.getElementById('g3Key').className = "key cutKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 54 && randomNote == 'ab4'){
        document.getElementById('ab4Key').className = "key blackKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 89 && randomNote == 'a4'){
        document.getElementById('a4Key').className = "key cutKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 55 && randomNote == 'bb4'){
        document.getElementById('bb4Key').className = "key blackKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 85 && randomNote == 'b4'){
        document.getElementById('b4Key').className = "key rStraightKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 73 && randomNote == 'c4'){
        document.getElementById('c4Key').className = "key lStraightKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 57 && randomNote == 'db4'){
        document.getElementById('db4Key').className = "key blackKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 79 && randomNote == 'd4'){
        document.getElementById('d4Key').className = "key cutKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 48 && randomNote == 'eb4'){
        document.getElementById('eb4Key').className = "key blackKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 80 && randomNote == 'e4'){
        document.getElementById('e4Key').className = "key rStraightKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 90 && randomNote == 'f4'){
        document.getElementById('f4Key').className = "key lStraightKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 83 && randomNote == 'gb4'){
        document.getElementById('gb4Key').className = "key blackKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 88 && randomNote == 'g4'){
        document.getElementById('g4Key').className = "key cutKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 68 && randomNote == 'ab5'){
        document.getElementById('ab5Key').className = "key blackKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 67 && randomNote == 'a5'){
        document.getElementById('a5Key').className = "key cutKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 70 && randomNote == 'bb5'){
        document.getElementById('bb5Key').className = "key blackKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 86 && randomNote == 'b5'){
        document.getElementById('b5Key').className = "key rStraightKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 66 && randomNote == 'c5'){
        document.getElementById('c5Key').className = "key lStraightKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 72 && randomNote == 'db5'){
        document.getElementById('db5Key').className = "key blackKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 78 && randomNote == 'd5'){
        document.getElementById('d5Key').className = "key cutKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 74 && randomNote == 'eb5Key'){
        document.getElementById('eb5Key').className = "key blackKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 77 && randomNote == 'e5'){
        document.getElementById('e5Key').className = "key rStraightKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else{
        showSnackBar(false);
    }

}

function checkKey(input){
	console.log('Input: ' + input);
	if (input == 'c3' && randomNote == 'c3'){
        document.getElementById('c3Key').className = "key lStraightKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'db3' && randomNote == 'db3'){
        document.getElementById('db3Key').className = "key blackKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'd3' && randomNote == 'd3'){
        document.getElementById('d3Key').className = "key cutKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'eb3' && randomNote == 'eb3'){
        document.getElementById('eb3Key').className = "key blackKey";
        showSnackBar(true);
        numCorrect++;
         Correct(numCorrect);
    }
    else if (input == 'e3' && randomNote == 'e3'){
        document.getElementById('e3Key').className = "key rStraightKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'f3' && randomNote == 'f3'){
        document.getElementById('f3Key').className = "key lStraightKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'gb3' && randomNote == 'gb3'){
        document.getElementById('gb3Key').className = "key blackKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'g3' && randomNote == 'g3'){
        document.getElementById('g3Key').className = "key cutKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'ab4' && randomNote == 'ab4'){
        document.getElementById('ab4Key').className = "key blackKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'a4' && randomNote == 'a4'){
        document.getElementById('a4Key').className = "key cutKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'bb4' && randomNote == 'bb4'){
        document.getElementById('bb4Key').className = "key blackKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'b4' && randomNote == 'b4'){
        document.getElementById('b4Key').className = "key rStraightKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'c4' && randomNote == 'c4'){
        document.getElementById('c4Key').className = "key lStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'db4' && randomNote == 'db4'){
        document.getElementById('db4Key').className = "key blackKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'd4' && randomNote == 'd4'){
        document.getElementById('d4Key').className = "key cutKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'eb4' && randomNote == 'eb4'){
        document.getElementById('eb4Key').className = "key blackKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'e4' && randomNote == 'e4'){
        document.getElementById('e4Key').className = "key rStraightKey";
        showSnackBar(true);
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'f4' && randomNote == 'f4'){
        document.getElementById('f4Key').className = "key lStraightKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'gb4' && randomNote == 'gb4'){
        document.getElementById('gb4Key').className = "key blackKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'g4' && randomNote == 'g4'){
        document.getElementById('g4Key').className = "key cutKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'ab5' && randomNote == 'ab5'){
        document.getElementById('ab5Key').className = "key blackKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'a5' && randomNote == 'a5'){
        document.getElementById('a5Key').className = "key cutKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'bb5' && randomNote == 'bb5'){
        document.getElementById('bb5Key').className = "key blackKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'b5' && randomNote == 'b5'){
        document.getElementById('b5Key').className = "key rStraightKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'c5' && randomNote == 'c5'){
        document.getElementById('c5Key').className = "key lStraightKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'db5' && randomNote == 'db5'){
        document.getElementById('db5Key').className = "key blackKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'd5' && randomNote == 'd5'){
        document.getElementById('d5Key').className = "key cutKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'eb5' && randomNote == 'eb5'){
        document.getElementById('eb5Key').className = "key blackKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (input == 'e5' && randomNote == 'e5'){
        document.getElementById('e5Key').className = "key rStraightKey";
        showSnackBar(true);
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else{
        showSnackBar(false);
    }
}

function checkCorrect(input){
    if (input == 10){
        alert('10/10');

        document.getElementById("correctScore").textContent = numCorrect.toString();
        document.getElementById('congratsTxt').textContent = "Congratulations! You Passed!";
        document.getElementById('redoId').style.visibility = "visible";

    }
    else{
        console.log("Score: " + numCorrect);
        document.getElementById("correctScore").textContent = numCorrect.toString();
        highlightRandom();
    }
}

function repeatQuiz() {
    unhighlightAll();
    document.getElementById('redoId').style.visibility = "hidden";
    numCorrect = 0;
    document.getElementById("correctScore").textContent = numCorrect.toString();
    document.getElementById('congratsTxt').textContent = "";
    highlightRandom();

}


/*// is called when html body is loaded
function load() {
	MIDI.loadPlugin({
		soundfontUrl: "../static/js/",
		instrument: "acoustic_grand_piano"
	})
	setTempo(120);
}*/

/*function highlightMajorScale() {
	if(minorScaleHighlight) {
		highlightMinorScale();
	}
	if(!majorScaleHighlight) {
		majorScaleHighlight = true;
		for(var i = 0; i <= 7; i++) {
	        divInfo = getDivInfo(globalNote+majorScale[i]);
	        changeColor(divInfo[0]);
	    }
	} else {
		minorScaleHighlight = false;
		majorScaleHighlight = false;
		for(var i = 0; i <= 7; i++) {
	        divInfo = getDivInfo(globalNote+majorScale[i]);
	        revertColor(divInfo[0]);
	    }
	}
}

function highlightMinorScale() {
	if(majorScaleHighlight) {
		highlightMajorScale();
	}
	if(!minorScaleHighlight) {
		minorScaleHighlight = true;
		for(var i = 0; i <= 7; i++) {
	        divInfo = getDivInfo(globalNote+minorScale[i]);
	        changeColor(divInfo[0]);
	    }
	} else {
		minorScaleHighlight = false;
		majorScaleHighlight = false;
		for(var i = 0; i <= 7; i++) {
	        divInfo = getDivInfo(globalNote+minorScale[i]);
	        revertColor(divInfo[0]);
	    }
	}
}*/

/*
function playMajorScale() {
	MIDI.setVolume(0,127);

	var index = 0;
	var notesInScale = {};
	var scaleColoring = {};

	for(var i = 0; i <= 7; i++) {
        divInfo = getDivInfo(globalNote+majorScale[i]);
        scaleColoring[i] = divInfo[0];
        notesInScale[i] = globalNote+majorScale[i];
    }
    for(var i = 6; i >= 0; i--) {
        divInfo = getDivInfo(globalNote+majorScale[i]);
        scaleColoring[14-i] = divInfo[0];
        notesInScale[14-i] = globalNote+majorScale[i];
    }
    noteProgression(index, notesInScale);
    keyColoring(index, scaleColoring);
}
*/

/*
function playNote() {
	MIDI.setVolume(0,127);
    triggerNote(globalNote, globalVelocity, globalDelay, globalSustain);
    divInfo = getDivInfo(globalNote);
	triggerColor(divInfo[0]);
}

function playSingleNote(value, octave) {
	var key = checkNote(value, octave); // calls function to determine note to play

	var delay = globalDelay;
	MIDI.setVolume(0,127);
    triggerNote(key, globalVelocity, delay, globalSustain);
}

function startNote(value, octave) {
	var key = checkNote(value, octave); // calls function to determine note to play

	MIDI.setVolume(0,127);
    MIDI.noteOn(0, key, globalVelocity, 0);
}
function stopNote(value, octave) {
	var key = checkNote(value, octave); // calls function to determine note to play

	MIDI.setVolume(0,127);
    MIDI.noteOff(0, key, 0);
}

// used to change global note value variable
// called by playSingleNote function
function checkNote(value, octave) {
	var noteVal;
	if(value == "ab" || value == "g#") {
		noteVal = 44;
	} else if(value == "a") {
		noteVal = 45;
	} else if(value == "bb" || value == "a#") {
		noteVal = 46;
	} else if(value == "b" || value == "cb") {
		noteVal = 47;
	} else if(value == "c" || value == "b#") {
		noteVal = 48;
	} else if(value == "db" || value == "c#") {
		noteVal = 49;
	} else if(value == "d") {
		noteVal = 50;
	} else if(value == "eb" || value == "d#") {
		noteVal = 51;
	} else if(value == "e" || value == "fb") {
		noteVal = 52;
	} else if(value == "f" || value == "e#") {
		noteVal = 53;
	} else if(value == "gb" || value == "f#") {
		noteVal = 54;
	} else if(value == "g") {
		noteVal = 55;
	}
	// check octave (3rd octave is default)
	if(octave == 2) {
		noteVal -= 12;
	} else if(octave == 4) {
		noteVal += 12;
	} else if(octave == 5) {
		noteVal += 24;
	} else if(octave == 6) {
		noteVal += 36;
	}

	return noteVal;
}

// used to start and stop a note
function triggerNote(note, velocity, delay, sustain) {
	MIDI.noteOn(0, note, velocity, delay);
	MIDI.noteOff(0, note, delay+sustain);
}

function getDivInfo(number) {
	// array for note information initialized with dummy values
	// position 1: div id; position 2: note name; postition 3: octave
    var noteData = ['1', '2', '3'];

    if(number == 48) { // q
    	setNoteData(noteData, 'c3Key', 'c', 3);
    } else if(number == 49) { // 2
    	setNoteData(noteData, 'db3Key', 'db', 3);
    } else if(number == 50) { // w
    	setNoteData(noteData, 'd3Key', 'd', 3);
    } else if(number == 51) { // 3
    	setNoteData(noteData, 'eb3Key', 'eb', 3);
    } else if(number == 52) { // e
    	setNoteData(noteData, 'e3Key', 'e', 3);
    } else if(number == 53) { // r
    	setNoteData(noteData, 'f3Key', 'f', 3);
    } else if(number == 54) { // 5
    	setNoteData(noteData, 'gb3Key', 'gb', 3);
    } else if(number == 55) { // t
    	setNoteData(noteData, 'g3Key', 'g', 3);
    } else if(number == 56) { // 6
    	setNoteData(noteData, 'ab4Key', 'ab', 4);
    } else if(number == 57) { // y
    	setNoteData(noteData, 'a4Key', 'a', 4);
    } else if(number == 58) { // 7
    	setNoteData(noteData, 'bb4Key', 'bb', 4);
    } else if(number == 59) { // u
    	setNoteData(noteData, 'b4Key', 'b', 4);
    } else if(number == 60) { // i
    	setNoteData(noteData, 'c4Key', 'c', 4);
    } else if(number == 61) { // 9
    	setNoteData(noteData, 'db4Key', 'db', 4);
    } else if(number == 62) { // o
    	setNoteData(noteData, 'd4Key', 'd', 4);
    } else if(number == 63) { // 0
    	setNoteData(noteData, 'eb4Key', 'eb', 4);
    } else if(number == 64) { // p
    	setNoteData(noteData, 'e4Key', 'e', 4);
    } else if(number == 65) { // z
    	setNoteData(noteData, 'f4Key', 'f', 4);
    } else if(number == 66) { // s
    	setNoteData(noteData, 'gb4Key', 'gb', 4);
    } else if(number == 67) { // x
    	setNoteData(noteData, 'g4Key', 'g', 4);
    } else if(number == 68) { // d
    	setNoteData(noteData, 'ab5Key', 'ab', 5);
    } else if(number == 69) { // c
    	setNoteData(noteData, 'a5Key', 'a', 5);
    } else if(number == 70) { // f
    	setNoteData(noteData, 'bb5Key', 'bb', 5);
    } else if(number == 71) { // v
    	setNoteData(noteData, 'b5Key', 'b', 5);
    } else if(number == 72) { // b
    	setNoteData(noteData, 'c5Key', 'c', 5);
    } else if(number == 73) { // h
    	setNoteData(noteData, 'db5Key', 'db', 5);
    } else if(number == 74) { // n
    	setNoteData(noteData, 'd5Key', 'd', 5);
    } else if(number == 75) { // j
    	setNoteData(noteData, 'eb5Key', 'eb', 5);
    } else if(number == 76) { // m
    	setNoteData(noteData, 'e5Key', 'e', 5);
    }
    // return note information in a 3 element array
    // position 1: div id; position 2: note name; postition 3: octave
    return noteData;
}

// helper function to set relevant values when key is pressed
function setNoteData(array, id, noteName, octave) {
	array[0] = id;
	array[1] = noteName;
	array[2] = octave;
}

function keyboardTrigger(input) {
	if(keyAllowed [input.which] == false) return;	// check if key is being held down
	keyAllowed [input.which] = false;
	var array = idNote(input);	// check what keyboard key was pressed
    if(array[0] != '1') {	// checks whether keyboard input is valid
	    changeColor(array[0]);
	    startNote(array[1], array[2]);
	}
}

function keyboardUntrigger(input) {
	keyAllowed [input.which] = true;
	var array = idNote(input);	// check what keyboard key was pressed
	if(array[0] != '1') {	// checks whether keyboard input is valid
		revertColor(array[0]);
		stopNote(array[1], array[2]);
	}
}

// highlight key
// called by keyboardTrigger
function changeColor(input) {
	if(hasClass(document.getElementById(input), 'lStraightKey')) {
		document.getElementById(input).className = "highlightKey lStraightKey";
		// alert('left key');
	} else if(hasClass(document.getElementById(input), 'cutKey')) {
		document.getElementById(input).className = "highlightKey cutKey";
		// alert('cut key');
	} else if(hasClass(document.getElementById(input), 'rStraightKey')) {
		document.getElementById(input).className = "highlightKey rStraightKey";
		// alert('right key');
	} else if(hasClass(document.getElementById(input), 'blackKey')) {
		document.getElementById(input).className = "key highlightBlackKey";
		// alert('black key');
	}
}

// change key color back to default color
// called by keyboardUntrigger
function revertColor(input) {
	if(hasClass(document.getElementById(input), 'lStraightKey')) {
		document.getElementById(input).className = "key lStraightKey";
		// alert('left key');
	} else if(hasClass(document.getElementById(input), 'cutKey')) {
		document.getElementById(input).className = "key cutKey";
		// alert('cut key');
	} else if(hasClass(document.getElementById(input), 'rStraightKey')) {
		document.getElementById(input).className = "key rStraightKey";
		// alert('right key');
	} else if(hasClass(document.getElementById(input), 'highlightBlackKey')) {
		document.getElementById(input).className = "key blackKey";
		// alert('black key');
	}
}

function triggerColor(input) {
	changeColor(input);
	setTimeout(function () {
      	revertColor(input);		//  your code here
   	}, globalTempo);
}

// tests whether element is a member of a class
function hasClass(element, klass) {
	return (" " + element.className + " " ).indexOf( " " + klass + " " ) > -1;
}*/
