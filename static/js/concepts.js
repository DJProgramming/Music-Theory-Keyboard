// ******************************************************************
// Global Variables
// ******************************************************************

var note = 48; // the MIDI note (C3)
var delay = 0; // play one note every quarter second
var delayInc = 0.25; // space between notes
//var sustain = 0.75; // note length
var sustain = 3*delayInc; // note length
var velocity = 127; // how hard the note hits

//var colorMap = MIDI.Synesthesia.map(); // control piano key colors

document.addEventListener("keydown",keyDownFunction, false); // allows you to press keys anywhere on the page

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

// ******************************************************************
// Main Function Call
// ******************************************************************

function changeNote(val) {
	if(val == "ab" || val == "g#") {
		note = 44;
	} else if(val == "a") {
		note = 45;
	} else if(val == "bb" || val == "a#") {
		note = 46;
	} else if(val == "b" || val == "cb") {
		note = 47;
	} else if(val == "c" || val == "b#") {
		note = 48;
	} else if(val == "db" || val == "c#") {
		note = 49;
	} else if(val == "d") {
		note = 50;
	} else if(val == "eb" || val == "d#") {
		note = 51;
	} else if(val == "e" || val == "fb") {
		note = 52; 
	} else if(val == "f" || val == "e#") {
		note = 53;
	} else if(val == "gb" || val == "f#") {
		note = 54;
	} else if(val == "g") {
		note = 55;
	}
}
function playMajorS() {
	var d = delay;
	MIDI.loadPlugin({
		soundfontUrl: "../static/js/",
		instrument: "acoustic_grand_piano",
		onsuccess: function() {

			MIDI.setVolume(0,127);

			for(var i = 0; i <= 7; i++) {
		        // play the note
		        MIDI.noteOn(0, note+majorScale[i], velocity, d);
		        MIDI.noteOff(0, note+majorScale[i], d + sustain);
		        d += delayInc;	// increment delay
		    }
		    for(var i = 6; i >= 0; i--) {
		        // play the note
		        MIDI.noteOn(0, note+majorScale[i], velocity, d);
		        MIDI.noteOff(0, note+majorScale[i], d + sustain);
		        d += delayInc;	// increment delay
		    }
		}
	});
}
function playMinorS() {
	var d = delay;
	MIDI.loadPlugin({
		soundfontUrl: "../static/js/",
		instrument: "acoustic_grand_piano",
		onsuccess: function() {

			MIDI.setVolume(0,127);

			for(var i = 0; i <= 7; i++) {
		        // play the note
		        MIDI.noteOn(0, note+minorScale[i], velocity, d);
		        MIDI.noteOff(0, note+minorScale[i], d + sustain);
		        d += delayInc;	// increment delay
		    }
		    for(var i = 6; i >= 0; i--) {
		        // play the note
		        MIDI.noteOn(0, note+minorScale[i], velocity, d);
		        MIDI.noteOff(0, note+minorScale[i], d + sustain);
		        d += delayInc;	// increment delay
		    }
		}
	});
}
function playMajorCh() {
	var d = delay;
	MIDI.loadPlugin({
		soundfontUrl: "../static/js/",
		instrument: "acoustic_grand_piano",
		onsuccess: function() {

			MIDI.setVolume(0,127);

			for(var i = 0; i < 3; i++) {
		        MIDI.noteOn(0, note+majorTriChord[i], velocity, d);
		        MIDI.noteOff(0, note+majorTriChord[i], d + sustain);
		    }
		}
	});
}
function playMinorCh() {
	var d = delay;
	MIDI.loadPlugin({
		soundfontUrl: "../static/js/",
		instrument: "acoustic_grand_piano",
		onsuccess: function() {

			MIDI.setVolume(0,127);

			for(var i = 0; i < 3; i++) {
		        MIDI.noteOn(0, note+minorTriChord[i], velocity, d);
		        MIDI.noteOff(0, note+minorTriChord[i], d + sustain);
		    }
		}
	});
}
function playNote() {
	var d = delay;
	MIDI.loadPlugin({
		soundfontUrl: "../static/js/",
		instrument: "acoustic_grand_piano",
		onsuccess: function() {

			MIDI.setVolume(0,127);

	        // MIDI.noteOn(0, note, velocity, d);
	        // MIDI.noteOff(0, note, d + sustain);
	        triggerNote(note, velocity, d, sustain);
		}
	});
}
function playSingleNote(val, oct) {
	var key = checkNote(val, oct); // calls function to determine note to play

	var d = delay;
	MIDI.loadPlugin({
		soundfontUrl: "../static/js/",
		instrument: "acoustic_grand_piano",
		onsuccess: function() {

			MIDI.setVolume(0,127);

	        // MIDI.noteOn(0, key, velocity, d);
	        // MIDI.noteOff(0, key, d + sustain);
	        triggerNote(key, velocity, d, sustain);
		}
	});
}

function checkNote(val, oct) {
	var noteVal;
	if(val == "ab" || val == "g#") {
		noteVal = 44;
	} else if(val == "a") {
		noteVal = 45;
	} else if(val == "bb" || val == "a#") {
		noteVal = 46;
	} else if(val == "b" || val == "cb") {
		noteVal = 47;
	} else if(val == "c" || val == "b#") {
		noteVal = 48;
	} else if(val == "db" || val == "c#") {
		noteVal = 49;
	} else if(val == "d") {
		noteVal = 50;
	} else if(val == "eb" || val == "d#") {
		noteVal = 51;
	} else if(val == "e" || val == "fb") {
		noteVal = 52; 
	} else if(val == "f" || val == "e#") {
		noteVal = 53;
	} else if(val == "gb" || val == "f#") {
		noteVal = 54;
	} else if(val == "g") {
		noteVal = 55;
	}
	// check octave (3rd octave is default)
	if(oct == 2) {
		noteVal -= 12;
	} else if(oct == 4) {
		noteVal += 12;
	} else if(oct == 5) {
		noteVal += 24;
	} else if(oct == 6) {
		noteVal += 36;
	}

	return noteVal;
}

function triggerNote(n, v, d, s) {
	// n = note value
	// v = velocity (volume)
	// d = delay
	// s = sustain (note length)
	MIDI.noteOn(0, n, v, d);
	MIDI.noteOff(0, n, d+s);
}

/* only uses rows with q & a
function keyboardTrigger(e) {
    var unicode=e.keyCode? e.keyCode : e.charCode;
    // alert(unicode);
    if(unicode == 65) {
    	playSingleNote('c', 3);
    } else if(unicode == 87) {
    	playSingleNote('db', 3);
    } else if(unicode == 83) {
    	playSingleNote('d', 3);
    } else if(unicode == 69) {
    	playSingleNote('eb', 3);
    } else if(unicode == 68) {
    	playSingleNote('e', 3);
    } else if(unicode == 70) {
    	playSingleNote('f', 3);
    } else if(unicode == 84) {
    	playSingleNote('gb', 3);
    } else if(unicode == 71) {
    	playSingleNote('g', 3);
    } else if(unicode == 89) {
    	playSingleNote('ab', 4);
    } else if(unicode == 72) {
    	playSingleNote('a', 4);
    } else if(unicode == 85) {
    	playSingleNote('bb', 4);
    } else if(unicode == 74) {
    	playSingleNote('b', 4);
    } else if(unicode == 75) {
    	playSingleNote('c', 4);
    } 
}
*/

function keyboardTrigger(e) {
    var unicode = e.keyCode ? e.keyCode : e.charCode;
    // alert(unicode);
    if(unicode == 81) { // q
		document.getElementById('c3Key').style.background='blue';
    	playSingleNote('c', 3);
    } else if(unicode == 50) { // 2
		document.getElementById('db3Key').style.background='blue';
    	playSingleNote('db', 3);
    } else if(unicode == 87) { // w
		document.getElementById('d3Key').style.background='blue';
    	playSingleNote('d', 3);
    } else if(unicode == 51) { // 3
    	playSingleNote('eb', 3);
    } else if(unicode == 69) { // e
    	playSingleNote('e', 3);
    } else if(unicode == 82) { // r
    	playSingleNote('f', 3);
    } else if(unicode == 53) { // 5
    	playSingleNote('gb', 3);
    } else if(unicode == 84) { // t
    	playSingleNote('g', 3);
    } else if(unicode == 54) { // 6
    	playSingleNote('ab', 4);
    } else if(unicode == 89) { // y
    	playSingleNote('a', 4);
    } else if(unicode == 55) { // 7
    	playSingleNote('bb', 4);
    } else if(unicode == 85) { // u
    	playSingleNote('b', 4);
    } else if(unicode == 73) { // i
    	playSingleNote('c', 4);
    } else if(unicode == 57) { // 9
    	playSingleNote('db', 4);
    } else if(unicode == 79) { // o
    	playSingleNote('d', 4);
    } else if(unicode == 48) { // 0
    	playSingleNote('eb', 4);
    } else if(unicode == 80) { // p
    	playSingleNote('e', 4);
    } else if(unicode == 90) { // z
    	playSingleNote('f', 4);
    } else if(unicode == 83) { // s
    	playSingleNote('gb', 4);
    } else if(unicode == 88) { // x
    	playSingleNote('g', 4);
    } else if(unicode == 68) { // d
    	playSingleNote('ab', 5)
    } else if(unicode == 67) { // c
    	playSingleNote('a', 5);
    } else if(unicode == 70) { // f
    	playSingleNote('bb', 5);
    } else if(unicode == 86) { // v
    	playSingleNote('b', 5);
    } else if(unicode == 66) { // b
    	playSingleNote('c', 5);
    } else if(unicode == 72) { // h
    	playSingleNote('db', 5)
    } else if(unicode == 78) { // n
    	playSingleNote('d', 5);
    } else if(unicode == 74) { // j
    	playSingleNote('eb', 5);
    } else if(unicode == 77) { // m
    	playSingleNote('e', 5);
    }    var unicode = e.keyCode ? e.keyCode : e.charCode;
    // alert(unicode);
    if(unicode == 81) { // q
		document.getElementById('c3Key').style.background='blue';
    	playSingleNote('c', 3);
    } else if(unicode == 50) { // 2
		document.getElementById('db3Key').style.background='blue';
    	playSingleNote('db', 3);
    } else if(unicode == 87) { // w
		document.getElementById('d3Key').style.background='blue';
    	playSingleNote('d', 3);
    } else if(unicode == 51) { // 3
    	playSingleNote('eb', 3);
    } else if(unicode == 69) { // e
    	playSingleNote('e', 3);
    } else if(unicode == 82) { // r
    	playSingleNote('f', 3);
    } else if(unicode == 53) { // 5
    	playSingleNote('gb', 3);
    } else if(unicode == 84) { // t
    	playSingleNote('g', 3);
    } else if(unicode == 54) { // 6
    	playSingleNote('ab', 4);
    } else if(unicode == 89) { // y
    	playSingleNote('a', 4);
    } else if(unicode == 55) { // 7
    	playSingleNote('bb', 4);
    } else if(unicode == 85) { // u
    	playSingleNote('b', 4);
    } else if(unicode == 73) { // i
    	playSingleNote('c', 4);
    } else if(unicode == 57) { // 9
    	playSingleNote('db', 4);
    } else if(unicode == 79) { // o
    	playSingleNote('d', 4);
    } else if(unicode == 48) { // 0
    	playSingleNote('eb', 4);
    } else if(unicode == 80) { // p
    	playSingleNote('e', 4);
    } else if(unicode == 90) { // z
    	playSingleNote('f', 4);
    } else if(unicode == 83) { // s
    	playSingleNote('gb', 4);
    } else if(unicode == 88) { // x
    	playSingleNote('g', 4);
    } else if(unicode == 68) { // d
    	playSingleNote('ab', 5)
    } else if(unicode == 67) { // c
    	playSingleNote('a', 5);
    } else if(unicode == 70) { // f
    	playSingleNote('bb', 5);
    } else if(unicode == 86) { // v
    	playSingleNote('b', 5);
    } else if(unicode == 66) { // b
    	playSingleNote('c', 5);
    } else if(unicode == 72) { // h
    	playSingleNote('db', 5)
    } else if(unicode == 78) { // n
    	playSingleNote('d', 5);
    } else if(unicode == 74) { // j
    	playSingleNote('eb', 5);
    } else if(unicode == 77) { // m
    	playSingleNote('e', 5);
    }
}

// ******************************************************************
// Concept Definitions
// ******************************************************************

function playMajorChord(note, delay, sustain) {
	for(var i = 0; i < 3; i++) {
        MIDI.noteOn(0, note+majorTriChord[i], velocity, delay);
        MIDI.noteOff(0, note+majorTriChord[i], delay + sustain);
    }
}
function palyMinorChord(note, delay, sustain) {
	for(var i = 0; i < 3; i++) {
        MIDI.noteOn(0, note+minorTriChord[i], velocity, delay);
        MIDI.noteOff(0, note+minorTriChord[i], delay + sustain);
    }
}
function playMajorScale(note, delay, delayInc, sustain) {
	for(var i = 0; i <= 7; i++) {
        // play the note
        MIDI.noteOn(0, note+majorScale[i], velocity, delay);
        MIDI.noteOff(0, note+majorScale[i], delay + sustain);
        delay += delayInc;	// increment beat
    }
    for(var i = 6; i >= 0; i--) {
        // play the note
        MIDI.noteOn(0, note+majorScale[i], velocity, delay);
        MIDI.noteOff(0, note+majorScale[i], delay + sustain);
        delay += delayInc;	// increment beat
    }
}
function playMinorScale(note, delay, delayInc) {
	for(var i = 0; i <= 7; i++) {
        // play the note
        MIDI.noteOn(0, note+minorScale[i], velocity, delay);
        MIDI.noteOff(0, note+minorScale[i], delay + sustain);
        delay += delayInc;	// increment beat
    }
    for(var i = 6; i >= 0; i--) {
        // play the note
        MIDI.noteOn(0, note+minorScale[i], velocity, delay);
        MIDI.noteOff(0, note+minorScale[i], delay + sustain);
        delay += delayInc;	// increment beat
    }
}


/* Allows users to play keyboard on page without text field */
function keyDownFunction(e) {
	var unicode = e.keyCode ? e.keyCode : e.charCode;

	// alert(unicode);
	if (unicode == 81) { // q
		var element = document.getElementById('c3Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		//document.getElementById('c3Key').style.background = 'blue';
		playSingleNote('c', 3);
	} else if (unicode == 50) { // 2
		var element = document.getElementById('db3Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		//document.getElementById('db3Key').style.background = 'blue';
		playSingleNote('db', 3);
	} else if (unicode == 87) { // w
		var element = document.getElementById('d3Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		//document.getElementById('d3Key').style.background = 'blue';
		playSingleNote('d', 3);
	} else if (unicode == 51) { // 3
		var element = document.getElementById('eb3Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('eb', 3);
	} else if (unicode == 69) { // e
		var element = document.getElementById('e3Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('e', 3);
	} else if (unicode == 82) { // r
		var element = document.getElementById('f3Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('f', 3);
	} else if (unicode == 53) { // 5
		var element = document.getElementById('gb3Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('gb', 3);
	} else if (unicode == 84) { // t
		var element = document.getElementById('g3Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('g', 3);
	} else if (unicode == 54) { // 6
		var element = document.getElementById('ab4Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('ab', 4);
	} else if (unicode == 89) { // y
		var element = document.getElementById('a4Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('a', 4);
	} else if (unicode == 55) { // 7
		var element = document.getElementById('bb4Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('bb', 4);
	} else if (unicode == 85) { // u
		var element = document.getElementById('b4Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('b', 4);
	} else if (unicode == 73) { // i
		var element = document.getElementById('c4Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('c', 4);
	} else if (unicode == 57) { // 9
		var element = document.getElementById('db4Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('db', 4);
	} else if (unicode == 79) { // o
		var element = document.getElementById('d4Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('d', 4);
	} else if (unicode == 48) { // 0
		var element = document.getElementById('eb4Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('eb', 4);
	} else if (unicode == 80) { // p
		var element = document.getElementById('e4Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('e', 4);
	} else if (unicode == 90) { // z
		var element = document.getElementById('f4Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('f', 4);
	} else if (unicode == 83) { // s
		var element = document.getElementById('gb4Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('gb', 4);
	} else if (unicode == 88) { // x
		var element = document.getElementById('g4Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('g', 4);
	} else if (unicode == 68) { // d
		var element = document.getElementById('ab5Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('ab', 5)
	} else if (unicode == 67) { // c
		var element = document.getElementById('a5Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('a', 5);
	} else if (unicode == 70) { // f
		var element = document.getElementById('bb5Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('bb', 5);
	} else if (unicode == 86) { // v
		var element = document.getElementById('b5Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('b', 5);
	} else if (unicode == 66) { // b
		var element = document.getElementById('c5Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('c', 5);
	} else if (unicode == 72) { // h
		var element = document.getElementById('db5Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('db', 5)
	} else if (unicode == 78) { // n
		var element = document.getElementById('d5Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('d', 5);
	} else if (unicode == 74) { // j
		var element = document.getElementById('eb5Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('eb', 5);
	} else if (unicode == 77) { // m
		var element = document.getElementById('e5Key');
		if (element){
			document.addEventListener("keyup", function onKeyUp(){
				document.removeEventListener("keyup", onKeyUp);
				element.style.background = '';
			}, false);
			element.style.background='blue';
		}
		playSingleNote('e', 5);
	}
}