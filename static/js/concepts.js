// ******************************************************************
// Global Variables
// ******************************************************************

var globalTempo;
var globalNote = 48; // the MIDI note (C3)
var globalDelay = 0; // play one note every quarter second
var globalDelayInc = 0.25; // space between notes
var globalSustain = 3*globalDelayInc; // note length
var globalVelocity = 127; // how hard the note hits

var highlightColor = 'b22';
var black = 'black';
var white = 'white';

// var timeScaler = 0.5;
// var timer = 500;
var minute = 60000;
var scaleLength = 15;

// scale & chord pattern arrays
var majorScale = [
    0,  // root
    2,  // whole
    4,  // whole
    5,  // half
    7,  // whole
    9,  // whole
    11, // whole
    12  // half
];
var minorScale = [
    0,  // root
    2,  // whole
    3,  // half
    5,  // whole
    7,  // whole
    8,  // half
    10, // whole
    12  // whole
];
var scaleProgression = [
	0,1,2,3,4,5,6,7,6,5,4,3,2,1,0	// index of each note to play in scale array
];
var majorTriChord = [
    0, // +0 semitones
    4, // +4 semitones
    7  // +7 semitones
];
var minorTriChord = [
    0, // +0 semitones
    3, // +3 semitones
    7  // +7 semitones
];

var divInfo = {};
var keyAllowed = {};	// holds the state of all keys being used

var majorScaleHighlight = false;
var minorScaleHighlight = false;
var majorChordHighlight = false;
var minorChordHighlight = false;

// ******************************************************************
// Functions
// ******************************************************************

document.addEventListener("keydown", keyboardTrigger, false);

document.addEventListener("keyup", keyboardUntrigger, false);

// is called when html body is loaded to load MIDI.JS plugin
function load() {
	MIDI.loadPlugin({
		soundfontUrl: "../static/js/",
		instrument: "acoustic_grand_piano",
		onsuccess: function() {
			MIDI.setVolume(0,127);
		}
	})
	setTempo(120);	// set default tempo to 120 bpm
}

// ------------------------------------------------------------------
// Change global parameters
// ------------------------------------------------------------------

function setTempo(tempo) {
	globalTempo = minute/(2*tempo);
}

// change the value of the global note
function changeGlobalNote(value) {
	if(majorScaleHighlight) {			// if major scale is hightlighted
		highlightMajorScale();			// unhighlight current major scale
		majorScaleHighlight = true;		// set flag to highlight new major scale
	} else if(minorScaleHighlight) {	// if minor scale is highlighted
		highlightMinorScale();			// unhighlight current minor scale
		minorScaleHighlight = true;		// set flag to highlight new minor scale
	} else if(majorChordHighlight) {
		highlightMajorChord();
		majorChordHighlight = true;
	} else if(minorChordHighlight) {
		highlightMinorChord();
		minorChordHighlight = true;
	}
	// check which key was selected
	// 'b' after a letter means flat
	// '#' after a letter means sharp
	if(value == "ab" || value == "g#") {
		globalNote = 44+12;
	} else if(value == "a") {
		globalNote = 45+12;
	} else if(value == "bb" || value == "a#") {
		globalNote = 46+12;
	} else if(value == "b" || value == "cb") {
		globalNote = 47+12;
	} else if(value == "c" || value == "b#") {
		globalNote = 48;
	} else if(value == "db" || value == "c#") {
		globalNote = 49;
	} else if(value == "d") {
		globalNote = 50;
	} else if(value == "eb" || value == "d#") {
		globalNote = 51;
	} else if(value == "e" || value == "fb") {
		globalNote = 52; 
	} else if(value == "f" || value == "e#") {
		globalNote = 53;
	} else if(value == "gb" || value == "f#") {
		globalNote = 54;
	} else if(value == "g") {
		globalNote = 55;
	}
	if(majorScaleHighlight) {			// if major scale highlight flag is set
		majorScaleHighlight = false;	// set major scale highlight flag to false to prime highlighting new scale
		highlightMajorScale();			// highlight new major scale
	} else if(minorScaleHighlight) {	// if minor scale highlight flag is set
		minorScaleHighlight = false;	// set minor scale highlight flag to false to prime highlighting new scale
		highlightMinorScale();			// highlight new minor scale
	} else if(majorChordHighlight) {
		majorChordHighlight = false;
		highlightMajorChord();
	} else if(minorChordHighlight) {
		minorChordHighlight = false;
		highlightMinorChord();
	}
}

// ------------------------------------------------------------------
// Audio Functions
// ------------------------------------------------------------------

function playMajorScale() {
	var index = 0;				// used as a seed for noteProgression & scaleKeyColoring functions
	var notesInScale = {};		// a local array that stores the notes that make up selcted major scale (used for playing scale)
	var keysToColor = {};		// a local array that stores the div ids that make up selected major scale (used for coloring)

	unhighlight();
	// if(majorScaleHighlight) {			// if major scale is highlighted
	// 	highlightMajorScale();			// unhighlight major scale before playing major scale
	// } else if(minorScaleHighlight) {	// if minor scale is highlighted
	// 	highlightMinorScale();			// unhighlight minor scale before playing major scale
	// }

	for(var i = 0; i < scaleLength; i++) {									// loop to identify notes that make up major scale
        divInfo = getDivInfo(globalNote+majorScale[scaleProgression[i]]);	// gets div id, note name, & octave for current note in major scale
        keysToColor[i] = divInfo[0];										// store div id into local array to color keys after loop ends
        notesInScale[i] = globalNote+majorScale[scaleProgression[i]];		// store note value in local array to play each note after loop ends
    }
    noteProgression(index, notesInScale);	// plays each note that makes up major scale
    scaleKeyColoring(index, keysToColor);	// colors each note as scale is major played
}

function playMinorScale() {
	var index = 0;				// used as a seed for noteProgression & scaleKeyColoring functions
	var notesInScale = {};		// a local array that stores the notes that make up selcted minor scale (used for playing scale)
	var keysToColor = {};		// a local array that stores the div ids that make up selected minor scale (used for coloring)

	unhighlight();
	// if(majorScaleHighlight) {			// if major scale is highlighted
	// 	highlightMajorScale();			// unhighlight major scale before playing minor scale
	// } else if(minorScaleHighlight) {	// if minor scale is highlighted
	// 	highlightMinorScale();			// unhighlight minor scale before playing minor scale
	// }

	for(var i = 0; i < scaleLength; i++) {									// loop to identify notes that make up minor scale
        divInfo = getDivInfo(globalNote+minorScale[scaleProgression[i]]);	// gets div id, note name, & octave for current note in minor scale
        keysToColor[i] = divInfo[0];										// store div id into local array to color keys after loop ends
        notesInScale[i] = globalNote+minorScale[scaleProgression[i]];		// store note value in local array to play each note after loop ends
    }
    noteProgression(index, notesInScale);	// plays each note that makes up minor scale
    scaleKeyColoring(index, keysToColor);	// colors each note as scale is minor played
}

function playMajorTriChord() {
	unhighlight();
	for(var i = 0; i < 3; i++) {
		triggerNote(globalNote+majorTriChord[i], globalVelocity, globalDelay, globalSustain);
		divInfo = getDivInfo(globalNote+majorTriChord[i]);
		triggerColor(divInfo[0]);
    }
}

function playMinorTriChord() {
	unhighlight();
	for(var i = 0; i < 3; i++) {
		triggerNote(globalNote+minorTriChord[i], globalVelocity, globalDelay, globalSustain);
		divInfo = getDivInfo(globalNote+minorTriChord[i]);
		triggerColor(divInfo[0]);
    }
}

function playNote() {
	unhighlight();
    triggerNote(globalNote, globalVelocity, globalDelay, globalSustain);
    divInfo = getDivInfo(globalNote);
	triggerColor(divInfo[0]);
}

function playSingleNote(value, octave) {
	unhighlight();
	var key = checkNote(value, octave); // calls function to determine note to play
	var delay = globalDelay;
    triggerNote(key, globalVelocity, delay, globalSustain);
}

function startNote(value, octave) {
	var key = checkNote(value, octave); // calls function to determine note to play
    MIDI.noteOn(0, key, globalVelocity, 0);
}

function stopNote(value, octave) {
	var key = checkNote(value, octave); // calls function to determine note to play
    MIDI.noteOff(0, key, 0);
}

// used to start and stop a note
function triggerNote(note, velocity, delay, sustain) {
	MIDI.noteOn(0, note, velocity, delay);
	MIDI.noteOff(0, note, delay+sustain);
}

// ------------------------------------------------------------------
// Information Functions
// ------------------------------------------------------------------

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

// translate keyboard unicode into corresponding key on screen
function idNote(input) {
	// array for note information initialized with dummy values
	// position 1: div id; position 2: note name; postition 3: octave
    var noteData = ['1', '2', 3];

    var unicode = input.keyCode ? input.keyCode : input.charCode;
    // alert(unicode);
    if(unicode == 81) { // q
    	setNoteData(noteData, 'c3Key', 'c', 3);
    } else if(unicode == 50) { // 2
    	setNoteData(noteData, 'db3Key', 'db', 3);
    } else if(unicode == 87) { // w
    	setNoteData(noteData, 'd3Key', 'd', 3);
    } else if(unicode == 51) { // 3
    	setNoteData(noteData, 'eb3Key', 'eb', 3);
    } else if(unicode == 69) { // e
    	setNoteData(noteData, 'e3Key', 'e', 3);
    } else if(unicode == 82) { // r
    	setNoteData(noteData, 'f3Key', 'f', 3);
    } else if(unicode == 53) { // 5
    	setNoteData(noteData, 'gb3Key', 'gb', 3);
    } else if(unicode == 84) { // t
    	setNoteData(noteData, 'g3Key', 'g', 3);
    } else if(unicode == 54) { // 6
    	setNoteData(noteData, 'ab4Key', 'ab', 4);
    } else if(unicode == 89) { // y
    	setNoteData(noteData, 'a4Key', 'a', 4);
    } else if(unicode == 55) { // 7
    	setNoteData(noteData, 'bb4Key', 'bb', 4);
    } else if(unicode == 85) { // u
    	setNoteData(noteData, 'b4Key', 'b', 4);
    } else if(unicode == 73) { // i
    	setNoteData(noteData, 'c4Key', 'c', 4);
    } else if(unicode == 57) { // 9
    	setNoteData(noteData, 'db4Key', 'db', 4);
    } else if(unicode == 79) { // o
    	setNoteData(noteData, 'd4Key', 'd', 4);
    } else if(unicode == 48) { // 0
    	setNoteData(noteData, 'eb4Key', 'eb', 4);
    } else if(unicode == 80) { // p
    	setNoteData(noteData, 'e4Key', 'e', 4);
    } else if(unicode == 90) { // z
    	setNoteData(noteData, 'f4Key', 'f', 4);
    } else if(unicode == 83) { // s
    	setNoteData(noteData, 'gb4Key', 'gb', 4);
    } else if(unicode == 88) { // x
    	setNoteData(noteData, 'g4Key', 'g', 4);
    } else if(unicode == 68) { // d
    	setNoteData(noteData, 'ab5Key', 'ab', 5);
    } else if(unicode == 67) { // c
    	setNoteData(noteData, 'a5Key', 'a', 5);
    } else if(unicode == 70) { // f
    	setNoteData(noteData, 'bb5Key', 'bb', 5);
    } else if(unicode == 86) { // v
    	setNoteData(noteData, 'b5Key', 'b', 5);
    } else if(unicode == 66) { // b
    	setNoteData(noteData, 'c5Key', 'c', 5);
    } else if(unicode == 72) { // h
    	setNoteData(noteData, 'db5Key', 'db', 5);
    } else if(unicode == 78) { // n
    	setNoteData(noteData, 'd5Key', 'd', 5);
    } else if(unicode == 74) { // j
    	setNoteData(noteData, 'eb5Key', 'eb', 5);
    } else if(unicode == 77) { // m
    	setNoteData(noteData, 'e5Key', 'e', 5);
    }
    // return note information in a 3 element array
    // position 1: div id; position 2: note name; postition 3: octave
    return noteData;
}

function getDivInfo(number) {
	// array for note information initialized with dummy values
	// position 1: div id; position 2: note name; postition 3: octave
    var noteData = ['1', '2', 3];

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

// tests whether element is a member of a class
function hasClass(element, klass) {
	return (" " + element.className + " " ).indexOf( " " + klass + " " ) > -1;
}

// ------------------------------------------------------------------
// User Keyboard Input Functions
// ------------------------------------------------------------------

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

// ------------------------------------------------------------------
// Color Functions
// ------------------------------------------------------------------

function highlightMajorScale() {
	if(minorScaleHighlight) {
		highlightMinorScale();
	} else if(majorChordHighlight) {
		highlightMajorChord();
	} else if(minorChordHighlight) {
		highlightMinorChord();
	}

	if(!majorScaleHighlight) {									// if major scale is not highlighted
		majorScaleHighlight = true;								// set flag for major scale highlighting
		for(var i = 0; i <= 7; i++) {							// for each key in the scale
	        divInfo = getDivInfo(globalNote+majorScale[i]);		// get html div information for each key
	        changeColor(divInfo[0]);							// change the color of each key
	    }
	} else {
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
	} else if(majorChordHighlight) {
		highlightMajorChord();
	} else if(minorChordHighlight) {
		highlightMinorChord();
	}
	if(!minorScaleHighlight) {
		minorScaleHighlight = true;
		for(var i = 0; i <= 7; i++) {
	        divInfo = getDivInfo(globalNote+minorScale[i]);
	        changeColor(divInfo[0]);
	    }
	} else {
		minorScaleHighlight = false;
		for(var i = 0; i <= 7; i++) {
	        divInfo = getDivInfo(globalNote+minorScale[i]);
	        revertColor(divInfo[0]);
	    }
	}
}

function highlightMajorChord() {
	if(minorChordHighlight) {
		highlightMinorChord();
	} else if(majorScaleHighlight) {
		highlightMajorScale();
	} else if(minorScaleHighlight) {
		highlightMinorScale();
	}
	if(!majorChordHighlight) {
		majorChordHighlight = true;
		for(var i = 0; i < 3; i++) {
	        divInfo = getDivInfo(globalNote+majorTriChord[i]);
	        changeColor(divInfo[0]);
	    }
	} else {
		majorChordHighlight = false;
		for(var i = 0; i < 3; i++) {
	        divInfo = getDivInfo(globalNote+majorTriChord[i]);
	        revertColor(divInfo[0]);
	    }
	}
}

function highlightMinorChord() {
	if(majorChordHighlight) {
		highlightMajorChord();
	} else if(majorScaleHighlight) {
		highlightMajorScale();
	} else if(minorScaleHighlight) {
		highlightMinorScale();
	}
	if(!minorChordHighlight) {
		minorChordHighlight = true;
		for(var i = 0; i < 3; i++) {
	        divInfo = getDivInfo(globalNote+minorTriChord[i]);
	        changeColor(divInfo[0]);
	    }
	} else {
		minorChordHighlight = false;
		for(var i = 0; i < 3; i++) {
	        divInfo = getDivInfo(globalNote+minorTriChord[i]);
	        revertColor(divInfo[0]);
	    }
	}
}

// highlight key
// called by keyboardTrigger
// input is the name of div to change
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
// input is the name of div to change
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

// hightlight all
function unhighlight() {
	if(majorScaleHighlight) {			// if major scale is highlighted
		highlightMajorScale();			// unhighlight major scale before playing major chord
	} else if(minorScaleHighlight) {	// if minor scale is highlighted
		highlightMinorScale();			// unhighlight minor scale before playing major chord
	} else if(majorChordHighlight) {
		highlightMajorChord();
	} else if(minorChordHighlight) {
		highlightMinorChord();
	}
}

// ------------------------------------------------------------------
// Timing Functions
// ------------------------------------------------------------------

function triggerColor(input) {
	changeColor(input);
	setTimeout(function () {
      	revertColor(input);
   	}, globalTempo);
}

function scaleKeyColoring(count, input) {
	triggerColor(input[count]);
	setTimeout(function () {
		count++;
		if(count < scaleLength) {
			scaleKeyColoring(count, input);
		}
	}, globalTempo);
}

function noteProgression(count, input) {
	triggerNote(input[count], globalVelocity, globalDelay, globalSustain);
	setTimeout(function () {
		count++;
		if(count < scaleLength) {
			noteProgression(count, input);
		}
	}, globalTempo);
}