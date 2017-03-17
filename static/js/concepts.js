// ******************************************************************
// Global Variables
// ******************************************************************

var globalTempo;
var globalNote = 48;                        // the MIDI note (C3)
var globalDelay = 0;                        // play one note every quarter second
var globalDelayInc = 0.25;                  // space between notes
var globalSustain = 3*globalDelayInc;       // note length
var globalVelocity = 127;                   // how hard the note hits

var highlightColor = 'b22';                 // red color
var black = 'black';                        // black color
var white = 'white';                        // white color

var minute = 60000;                         // 1 minute in milliseconds
var scaleLength = 15;                       // a scale has 15 note hits
var numberOfKeys = 29;                      // number of keys used in program

/*********************************************/
/* scale & chord pattern arrays */
/*********************************************/

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
    0,1,2,3,4,5,6,7,6,5,4,3,2,1,0           // index of each note to play in scale array
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

var divInfo = {};                           // holds div information for current global note selected
var keyAllowed = {};                        // holds the state of all keys being used
var canColor = {};                          // array to hold flags for each note to determine whether its color can change

var timingFunctionIsExecuting = false;      // flag to check whether a timing function is running

var highlight = {
    majorScale: false,                      // major scale highlight flag
    minorScale: false,                      // minor scale highlight flag
    majorChord: false,                      // major chord highlight flag
    minorChord: false                       // minor chord highlight flag
};

var programControl = {                      // flags for different web-pages in program
    main: true,                             // home page flag
    noteLesson: false,                      // note lesson page flag
    noteQuiz: false,                        // note quiz page flag
    stepLesson: false,                      // step lesson page flag
    stepQuiz: false,                        // step quize page flag
    scalesLesson: false,                    // scale lesson page flag
    scalesQuiz: false                       // scale quiz page flag
};

// ******************************************************************
// Functions
// ******************************************************************

document.addEventListener("keydown", keyboardTrigger, false);       // responds to key down events
document.addEventListener("keyup", keyboardUntrigger, false);       // responds to key up events
document.addEventListener("keypress", showDebug, false);            // responds to key presses

// is called when html body is loaded to load MIDI.JS plugin
function load() {
    MIDI.loadPlugin({
        soundfontUrl: "../static/js/",                              // locate soundfont javascript location
        instrument: "acoustic_grand_piano",                         // load wav files to be used as key sounds
        onsuccess: function() {
            MIDI.setVolume(0, globalVelocity);                      // set velocity of midi plugin
        }
    })
    setTempo(120);                                                  // set default tempo to 120 bpm (beats per minute)
}

function initializeCanColorArray() {
    for(var i = 0; i < numberOfKeys; i++) {                         // for each key in program
        canColor[i] = true;                                         // allow each key to be highlighted when pressed
    }
}

// ------------------------------------------------------------------
// Program Controls
// ------------------------------------------------------------------

function stepQuiz() {                                               // when step quiz is loaded
    programControl.stepQuiz = true;                                 // set step quiz flag to true
    programControl.main = false;                                    // set main page flag to false
}

// controls what clicking on a note does depending on context of the program (current web page)
function contextualClick(value, octave, id) {
    if(programControl.main) {
        playSingleNote(value, octave);
        triggerColor(id);
    } else if(programControl.stepQuiz) {
        playSingleNote(value, octave);
        triggerColor(id);
        clickFunction(value, octave);
    }
}

// ------------------------------------------------------------------
// Change global parameters
// ------------------------------------------------------------------

function setTempo(tempo) {
    globalTempo = minute/(2*tempo);
}

// change the value of the global note
function changeGlobalNote(value) {
    if(highlight.majorScale) {                      // if major scale is hightlighted
        highlightMajorScale();                      // unhighlight current major scale
        highlight.majorScale = true;                // set flag to highlight new major scale
    } else if(highlight.minorScale) {               // if minor scale is highlighted
        highlightMinorScale();                      // unhighlight current minor scale
        highlight.minorScale = true;                // set flag to highlight new minor scale
    } else if(highlight.majorChord) {
        highlightMajorChord();
        highlight.majorChord = true;
    } else if(highlight.minorChord) {
        highlightMinorChord();
        highlight.minorChord = true;
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
    if(highlight.majorScale) {                      // if major scale highlight flag is set
        highlight.majorScale = false;               // set major scale highlight flag to false to prime highlighting new scale
        highlightMajorScale();                      // highlight new major scale
    } else if(highlight.minorScale) {               // if minor scale highlight flag is set
        highlight.minorScale = false;               // set minor scale highlight flag to false to prime highlighting new scale
        highlightMinorScale();                      // highlight new minor scale
    } else if(highlight.majorChord) {
        highlight.majorChord = false;
        highlightMajorChord();
    } else if(highlight.minorChord) {
        highlight.minorChord = false;
        highlightMinorChord();
    }
}

// ------------------------------------------------------------------
// Audio Functions
// ------------------------------------------------------------------

function playMajorScale() {
    var index = 0;              // used as a seed for noteProgression & scaleKeyColoring functions
    var notesInScale = {};      // a local array that stores the notes that make up selcted major scale (used for playing scale)
    var keysToColor = {};       // a local array that stores the div ids that make up selected major scale (used for coloring)

    unhighlightConcepts();

    for(var i = 0; i < scaleLength; i++) {                                  // loop to identify notes that make up major scale
        divInfo = getDivIDNoteOctaveFromMidiValue(globalNote+majorScale[scaleProgression[i]]);   // gets div id, note name, & octave for current note in major scale
        keysToColor[i] = divInfo[0];                                        // store div id into local array to color keys after loop ends
        notesInScale[i] = globalNote+majorScale[scaleProgression[i]];       // store note value in local array to play each note after loop ends
    }
    noteProgression(index, notesInScale);   // plays each note that makes up major scale
    scaleKeyColoring(index, keysToColor);   // colors each note as scale is major played
}

function playMinorScale() {
    var index = 0;              // used as a seed for noteProgression & scaleKeyColoring functions
    var notesInScale = {};      // a local array that stores the notes that make up selcted minor scale (used for playing scale)
    var keysToColor = {};       // a local array that stores the div ids that make up selected minor scale (used for coloring)

    unhighlightConcepts();

    for(var i = 0; i < scaleLength; i++) {                                  // loop to identify notes that make up minor scale
        divInfo = getDivIDNoteOctaveFromMidiValue(globalNote+minorScale[scaleProgression[i]]);   // gets div id, note name, & octave for current note in minor scale
        keysToColor[i] = divInfo[0];                                        // store div id into local array to color keys after loop ends
        notesInScale[i] = globalNote+minorScale[scaleProgression[i]];       // store note value in local array to play each note after loop ends
    }
    noteProgression(index, notesInScale);   // plays each note that makes up minor scale
    scaleKeyColoring(index, keysToColor);   // colors each note as scale is minor played
}

function playMajorTriChord() {
    unhighlightConcepts();
    for(var i = 0; i < 3; i++) {
        triggerNote(globalNote+majorTriChord[i], globalVelocity, globalDelay, globalSustain);
        divInfo = getDivIDNoteOctaveFromMidiValue(globalNote+majorTriChord[i]);
        triggerColor(divInfo[0]);
    }
}

function playMinorTriChord() {
    unhighlightConcepts();
    for(var i = 0; i < 3; i++) {
        triggerNote(globalNote+minorTriChord[i], globalVelocity, globalDelay, globalSustain);
        divInfo = getDivIDNoteOctaveFromMidiValue(globalNote+minorTriChord[i]);
        triggerColor(divInfo[0]);
    }
}

function playNote() {
    unhighlightConcepts();
    triggerNote(globalNote, globalVelocity, globalDelay, globalSustain);
    divInfo = getDivIDNoteOctaveFromMidiValue(globalNote);
    triggerColor(divInfo[0]);
}

function playSingleNote(value, octave) {
    unhighlightConcepts();
    var key = getMidiValue(value, octave); // calls function to determine note to play
    var delay = globalDelay;
    triggerNote(key, globalVelocity, delay, globalSustain);
}

function startNote(value, octave) {
    var key = getMidiValue(value, octave); // calls function to determine note to play
    MIDI.noteOn(0, key, globalVelocity, 0);
}

function stopNote(value, octave) {
    var key = getMidiValue(value, octave); // calls function to determine note to play
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
function getMidiValue(value, octave) {
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
function getDivIDNoteOctaveFromUnicode(input) {
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

function getDivIDNoteOctaveFromKeyboardChar(char) {
    // array for note information initialized with dummy values
    // position 1: div id; position 2: note name; postition 3: octave
    var noteData = ['1', '2', 3];

    // alert(unicode);
    if(char == 'q') {
        setNoteData(noteData, 'c3Key', 'c', 3);
    } else if(char == '2') {
        setNoteData(noteData, 'db3Key', 'db', 3);
    } else if(char == '2') { // w
        setNoteData(noteData, 'd3Key', 'd', 3);
    } else if(char == '3') { // 3
        setNoteData(noteData, 'eb3Key', 'eb', 3);
    } else if(char == 'e') { // e
        setNoteData(noteData, 'e3Key', 'e', 3);
    } else if(char == 'r') { // r
        setNoteData(noteData, 'f3Key', 'f', 3);
    } else if(char == '5') { // 5
        setNoteData(noteData, 'gb3Key', 'gb', 3);
    } else if(char == 't') { // t
        setNoteData(noteData, 'g3Key', 'g', 3);
    } else if(char == '6') { // 6
        setNoteData(noteData, 'ab4Key', 'ab', 4);
    } else if(char == 'y') { // y
        setNoteData(noteData, 'a4Key', 'a', 4);
    } else if(char == '7') { // 7
        setNoteData(noteData, 'bb4Key', 'bb', 4);
    } else if(char == 'u') { // u
        setNoteData(noteData, 'b4Key', 'b', 4);
    } else if(char == 'i') { // i
        setNoteData(noteData, 'c4Key', 'c', 4);
    } else if(char == '9') { // 9
        setNoteData(noteData, 'db4Key', 'db', 4);
    } else if(char == 'o') { // o
        setNoteData(noteData, 'd4Key', 'd', 4);
    } else if(char == '0') { // 0
        setNoteData(noteData, 'eb4Key', 'eb', 4);
    } else if(char == 'p') { // p
        setNoteData(noteData, 'e4Key', 'e', 4);
    } else if(char == 'z') { // z
        setNoteData(noteData, 'f4Key', 'f', 4);
    } else if(char == 's') { // s
        setNoteData(noteData, 'gb4Key', 'gb', 4);
    } else if(char == 'x') { // x
        setNoteData(noteData, 'g4Key', 'g', 4);
    } else if(char == 'd') { // d
        setNoteData(noteData, 'ab5Key', 'ab', 5);
    } else if(char == 'c') { // c
        setNoteData(noteData, 'a5Key', 'a', 5);
    } else if(char == 'f') { // f
        setNoteData(noteData, 'bb5Key', 'bb', 5);
    } else if(char == 'v') { // v
        setNoteData(noteData, 'b5Key', 'b', 5);
    } else if(char == 'b') { // b
        setNoteData(noteData, 'c5Key', 'c', 5);
    } else if(char == 'h') { // h
        setNoteData(noteData, 'db5Key', 'db', 5);
    } else if(char == 'n') { // n
        setNoteData(noteData, 'd5Key', 'd', 5);
    } else if(char == 'j') { // j
        setNoteData(noteData, 'eb5Key', 'eb', 5);
    } else if(char == 'm') { // m
        setNoteData(noteData, 'e5Key', 'e', 5);
    }
    // return note information in a 3 element array
    // position 1: div id; position 2: note name; postition 3: octave
    return noteData;
}

function getDivIDNoteOctaveFromMidiValue(midiValue) {
    // array for note information initialized with dummy values
    // position 1: div id; position 2: note name; postition 3: octave
    var noteData = ['1', '2', 3];

    if(midiValue == 48) { // q
        setNoteData(noteData, 'c3Key', 'c', 3);
    } else if(midiValue == 49) { // 2
        setNoteData(noteData, 'db3Key', 'db', 3);
    } else if(midiValue == 50) { // w
        setNoteData(noteData, 'd3Key', 'd', 3);
    } else if(midiValue == 51) { // 3
        setNoteData(noteData, 'eb3Key', 'eb', 3);
    } else if(midiValue == 52) { // e
        setNoteData(noteData, 'e3Key', 'e', 3);
    } else if(midiValue == 53) { // r
        setNoteData(noteData, 'f3Key', 'f', 3);
    } else if(midiValue == 54) { // 5
        setNoteData(noteData, 'gb3Key', 'gb', 3);
    } else if(midiValue == 55) { // t
        setNoteData(noteData, 'g3Key', 'g', 3);
    } else if(midiValue == 56) { // 6
        setNoteData(noteData, 'ab4Key', 'ab', 4);
    } else if(midiValue == 57) { // y
        setNoteData(noteData, 'a4Key', 'a', 4);
    } else if(midiValue == 58) { // 7
        setNoteData(noteData, 'bb4Key', 'bb', 4);
    } else if(midiValue == 59) { // u
        setNoteData(noteData, 'b4Key', 'b', 4);
    } else if(midiValue == 60) { // i
        setNoteData(noteData, 'c4Key', 'c', 4);
    } else if(midiValue == 61) { // 9
        setNoteData(noteData, 'db4Key', 'db', 4);
    } else if(midiValue == 62) { // o
        setNoteData(noteData, 'd4Key', 'd', 4);
    } else if(midiValue == 63) { // 0
        setNoteData(noteData, 'eb4Key', 'eb', 4);
    } else if(midiValue == 64) { // p
        setNoteData(noteData, 'e4Key', 'e', 4);
    } else if(midiValue == 65) { // z
        setNoteData(noteData, 'f4Key', 'f', 4);
    } else if(midiValue == 66) { // s
        setNoteData(noteData, 'gb4Key', 'gb', 4);
    } else if(midiValue == 67) { // x
        setNoteData(noteData, 'g4Key', 'g', 4);
    } else if(midiValue == 68) { // d
        setNoteData(noteData, 'ab5Key', 'ab', 5);
    } else if(midiValue == 69) { // c
        setNoteData(noteData, 'a5Key', 'a', 5);
    } else if(midiValue == 70) { // f
        setNoteData(noteData, 'bb5Key', 'bb', 5);
    } else if(midiValue == 71) { // v
        setNoteData(noteData, 'b5Key', 'b', 5);
    } else if(midiValue == 72) { // b
        setNoteData(noteData, 'c5Key', 'c', 5);
    } else if(midiValue == 73) { // h
        setNoteData(noteData, 'db5Key', 'db', 5);
    } else if(midiValue == 74) { // n
        setNoteData(noteData, 'd5Key', 'd', 5);
    } else if(midiValue == 75) { // j
        setNoteData(noteData, 'eb5Key', 'eb', 5);
    } else if(midiValue == 76) { // m
        setNoteData(noteData, 'e5Key', 'e', 5);
    }
    // return note information in a 3 element array
    // position 1: div id; position 2: note name; postition 3: octave
    return noteData;
}

function getMidiValueFromDivID(divID) {

    var midiValue;

    if(divID == 'c3Key') {
        midiValue = 48;             // q
    } else if(divID == 'db3Key') {
        midiValue = 49;             // 2
    } else if(divID == 'd3Key') {
        midiValue = 50;             // w
    } else if(divID == 'eb3Key') {
        midiValue = 51;             // 3
    } else if(divID == 'e3Key') {
        midiValue = 52;             // e
    } else if(divID == 'f3Key') {
        midiValue = 53;             // r
    } else if(divID == 'gb3Key') {
        midiValue = 54;             // 5
    } else if(divID == 'g3Key') {
        midiValue = 55;             // t
    } else if(divID == 'ab4key') {
        midiValue = 56;             // 6
    } else if(divID == 'a4Key') {
        midiValue = 57;             // y
    } else if(divID == 'bb4Key') {
        midiValue = 58;             // 7
    } else if(divID == 'b4Key') {
        midiValue = 59;             // u
    } else if(divID == 'c4Key') {
        midiValue = 60;             // i
    } else if(divID == 'db4Key') {
        midiValue = 61;             // 9
    } else if(divID == 'd4Key') {
        midiValue = 62;             // o
    } else if(divID == 'eb4Key') {
        midiValue = 63;             // 0
    } else if(divID == 'e4Key') {
        midiValue = 64;             // p
    } else if(divID == 'f4Key') {
        midiValue = 65;             // z
    } else if(divID == 'gb4Key') {
        midiValue = 66;             // s
    } else if(divID == 'g4Key') {
        midiValue = 67;             // x
    } else if(divID == 'ab5Key') {
        midiValue = 68;             // d
    } else if(divID == 'a5Key') {
        midiValue = 69;             // c
    } else if(divID == 'bb5Key') {
        midiValue = 70;             // f
    } else if(divID == 'b5Key') {
        midiValue = 71;             // v
    } else if(divID == 'c5Key') {
        midiValue = 72;             // b
    } else if(divID == 'db5Key') {
        midiValue = 73;             // h
    } else if(divID == 'd5Key') {
        midiValue = 74;             // n
    } else if(divID == 'eb5Key') {
        midiValue = 75;             // j
    } else if(divID == 'e5Key') {
        midiValue = 76;             // m
    }
    return midiValue;
}

function getKeyaboardCharFromUnicode(input) {
    var unicode = input.keyCode ? input.keyCode : input.charCode;
    var char;
    if(unicode == 81) {         // q
        char = 'q';
    } else if(unicode == 50) { // 2
        char = '2';
    } else if(unicode == 87) { // w
        char = 'w';
    } else if(unicode == 51) { // 3
        char = '3';
    } else if(unicode == 69) { // e
        char = 'e';
    } else if(unicode == 82) { // r
        char = 'r';
    } else if(unicode == 53) { // 5
        char = '5';
    } else if(unicode == 84) { // t
        char = 't';
    } else if(unicode == 54) { // 6
        char = '6';
    } else if(unicode == 89) { // y
        char = 'y';
    } else if(unicode == 55) { // 7
        char = '7';
    } else if(unicode == 85) { // u
        char = 'u';
    } else if(unicode == 73) { // i
        char = 'i';
    } else if(unicode == 57) { // 9
        char = '9';
    } else if(unicode == 79) { // o
        char = 'o';
    } else if(unicode == 48) { // 0
        char = '0';
    } else if(unicode == 80) { // p
        char = 'p';
    } else if(unicode == 90) { // z
        char = 'z';
    } else if(unicode == 83) { // s
        char = 's';
    } else if(unicode == 88) { // x
        char = 'x';
    } else if(unicode == 68) { // d
        char = 'd';
    } else if(unicode == 67) { // c
        char = 'c';
    } else if(unicode == 70) { // f
        char = 'f';
    } else if(unicode == 86) { // v
        char = 'v';
    } else if(unicode == 66) { // b
        char = 'b';
    } else if(unicode == 72) { // h
        char = 'h';
    } else if(unicode == 78) { // n
        char = 'n';
    } else if(unicode == 74) { // j
        char = 'j';
    } else if(unicode == 77) { // m
        char = 'm';
    }
    return char;
}

function getKeyboardCharFromDivID(divID) {
    var char;
    if(divID == 'c3Key') {
        char = 'q';                 // q
    } else if(divID == 'db3Key') {
        char = '2';                 // 2
    } else if(divID == 'd3Key') {
        char = 'w';                 // w
    } else if(divID == 'eb3Key') {
        char = '3';                 // 3
    } else if(divID == 'e3Key') {
        char = 'e';                 // e
    } else if(divID == 'f3Key') {
        char = 'r';                 // r
    } else if(divID == 'gb3Key') {
        char = '5';                 // 5
    } else if(divID == 'g3Key') {
        char = 't';                 // t
    } else if(divID == 'ab4key') {
        char = '6';                 // 6
    } else if(divID == 'a4Key') {
        char = 'y';                 // y
    } else if(divID == 'bb4Key') {
        char = '7';                 // 7
    } else if(divID == 'b4Key') {
        char = 'u';                 // u
    } else if(divID == 'c4Key') {
        char = 'i';                 // i
    } else if(divID == 'db4Key') {
        char = '9';                 // 9
    } else if(divID == 'd4Key') {
        char = 'o';                 // o
    } else if(divID == 'eb4Key') {
        char = '0';                 // 0
    } else if(divID == 'e4Key') {
        char = 'p';                 // p
    } else if(divID == 'f4Key') {
        char = 'z';                 // z
    } else if(divID == 'gb4Key') {
        char = 's';                 // s
    } else if(divID == 'g4Key') {
        char = 'x';                 // x
    } else if(divID == 'ab5Key') {
        char = 'd';                 // d
    } else if(divID == 'a5Key') {
        char = 'c';                 // c
    } else if(divID == 'bb5Key') {
        char = 'f';                 // f
    } else if(divID == 'b5Key') {
        char = 'v';                 // v
    } else if(divID == 'c5Key') {
        char = 'b';                 // b
    } else if(divID == 'db5Key') {
        char = 'h';                 // h
    } else if(divID == 'd5Key') {
        char = 'n';                 // n
    } else if(divID == 'eb5Key') {
        char = 'j';                 // j
    } else if(divID == 'e5Key') {
        char = 'm';                 // m
    }
    return char;
}

// helper function to set relevant values when key is pressed
function setNoteData(array, id, noteName, octave) {
    array[0] = id;
    array[1] = noteName;
    array[2] = octave;
}

function getWhiteKeysDivInfo() {
    var whiteKeysDivInfo = {};
    var currentWhiteIndex = 0;
    var notes = {};
    for(var i = 0; i < numberOfKeys; i++) {
        notes[i] = getDivIDNoteOctaveFromMidiValue(48+i);
        if(notes[i][1].length < 2) {
            whiteKeysDivInfo[currentWhiteIndex] = notes[i];
            currentWhiteIndex++;
        }
    }
    console.log(whiteKeysDivInfo);
    return whiteKeysDivInfo;
}

function getBlackKeysDivInfo() {
    var blackKeysDivInfo = {};
    var currentBlackIndex = 0;
    var notes = {};
    for(var i = 0; i < numberOfKeys; i++) {
        notes[i] = getDivIDNoteOctaveFromMidiValue(48+i);
        if(notes[i][1].length > 1) {
            blackKeysDivInfo[currentBlackIndex] = notes[i];
            currentBlackIndex++;
        }
    }
    console.log(blackKeysDivInfo);
    return blackKeysDivInfo;
}

// tests whether element is a member of a class
function hasClass(element, klass) {
    return (" " + element.className + " " ).indexOf( " " + klass + " " ) > -1;
}

// ------------------------------------------------------------------
// User Keyboard Input Functions
// ------------------------------------------------------------------

function keyboardTrigger(input) {
    if(keyAllowed[input.which] == false) return;        // check if key is being held down
    keyAllowed[input.which] = false;                    // keep key from retriggering until released
    var array = getDivIDNoteOctaveFromUnicode(input);   // check what keyboard key was pressed
    if(array[0] != '1') {                               // checks whether keyboard input is valid
        changeColor(array[0]);                          // highlight note being played
        startNote(array[1], array[2]);                  // play audio corresponding to note being pressed
    }
}

function keyboardUntrigger(input) {
    keyAllowed [input.which] = true;                    // allow key to retrigger once released
    var array = getDivIDNoteOctaveFromUnicode(input);   // check what keyboard key was pressed
    if(array[0] != '1') {                               // checks whether keyboard input is valid
        revertColor(array[0]);                          // 
        stopNote(array[1], array[2]);
    }
}

// ------------------------------------------------------------------
// Color Functions
// ------------------------------------------------------------------

function highlightMajorScale() {
    if(!timingFunctionIsExecuting) {
        if(highlight.minorScale) {
            highlightMinorScale();
        } else if(highlight.majorChord) {
            highlightMajorChord();
        } else if(highlight.minorChord) {
            highlightMinorChord();
        }

        if(!highlight.majorScale) {                 // if major scale is not highlighted
            highlight.majorScale = true;            // set flag for major scale highlighting
            for(var i = 0; i <= 7; i++) {           // for each key in the scale
                                                    // get html div information for each key
                divInfo = getDivIDNoteOctaveFromMidiValue(globalNote+majorScale[i]);
                changeColor(divInfo[0]);            // change the color of each key
            }
        } else {
            highlight.majorScale = false;
            for(var i = 0; i <= 7; i++) {
                divInfo = getDivIDNoteOctaveFromMidiValue(globalNote+majorScale[i]);
                revertColor(divInfo[0]);
            }
        }
    }
}

function highlightMinorScale() {
    if(!timingFunctionIsExecuting) {
        if(highlight.majorScale) {
            highlightMajorScale();
        } else if(highlight.majorChord) {
            highlightMajorChord();
        } else if(highlight.minorChord) {
            highlightMinorChord();
        }
        if(!highlight.minorScale) {
            highlight.minorScale = true;
            for(var i = 0; i <= 7; i++) {
                divInfo = getDivIDNoteOctaveFromMidiValue(globalNote+minorScale[i]);
                changeColor(divInfo[0]);
            }
        } else {
            highlight.minorScale = false;
            for(var i = 0; i <= 7; i++) {
                divInfo = getDivIDNoteOctaveFromMidiValue(globalNote+minorScale[i]);
                revertColor(divInfo[0]);
            }
        }
    }
}

function highlightMajorChord() {
    if(!timingFunctionIsExecuting) {
        if(highlight.minorChord) {
            highlightMinorChord();
        } else if(highlight.majorScale) {
            highlightMajorScale();
        } else if(highlight.minorScale) {
            highlightMinorScale();
        }
        if(!highlight.majorChord) {
            highlight.majorChord = true;
            for(var i = 0; i < 3; i++) {
                divInfo = getDivIDNoteOctaveFromMidiValue(globalNote+majorTriChord[i]);
                changeColor(divInfo[0]);
            }
        } else {
            highlight.majorChord = false;
            for(var i = 0; i < 3; i++) {
                divInfo = getDivIDNoteOctaveFromMidiValue(globalNote+majorTriChord[i]);
                revertColor(divInfo[0]);
            }
        }
    }
}

function highlightMinorChord() {
    if(!timingFunctionIsExecuting) {
        if(highlight.majorChord) {
            highlightMajorChord();
        } else if(highlight.majorScale) {
            highlightMajorScale();
        } else if(highlight.minorScale) {
            highlightMinorScale();
        }
        if(!highlight.minorChord) {
            highlight.minorChord = true;
            for(var i = 0; i < 3; i++) {
                divInfo = getDivIDNoteOctaveFromMidiValue(globalNote+minorTriChord[i]);
                changeColor(divInfo[0]);
            }
        } else {
            highlight.minorChord = false;
            for(var i = 0; i < 3; i++) {
                divInfo = getDivIDNoteOctaveFromMidiValue(globalNote+minorTriChord[i]);
                revertColor(divInfo[0]);
            }
        }
    }
}

// highlight key
// called by keyboardTrigger
// input is the name of div to change
function changeColor(input) {
    // alert(canColor[input]);
    if(canColor[input] == false) { return; }
    if(hasClass(document.getElementById(input), 'lStraightKey')) {
        document.getElementById(input).className = "highlightKey lStraightKey";
    } else if(hasClass(document.getElementById(input), 'cutKey')) {
        document.getElementById(input).className = "highlightKey cutKey";
    } else if(hasClass(document.getElementById(input), 'rStraightKey')) {
        document.getElementById(input).className = "highlightKey rStraightKey";
    } else if(hasClass(document.getElementById(input), 'blackKey')) {
        document.getElementById(input).className = "key highlightBlackKey";
    }
}

// change key color back to default color
// called by keyboardUntrigger
// input is the name of div to change
function revertColor(input) {
    if(canColor[input] == false) { return; }
    if(hasClass(document.getElementById(input), 'lStraightKey')) {
        document.getElementById(input).className = "key lStraightKey";
    } else if(hasClass(document.getElementById(input), 'cutKey')) {
        document.getElementById(input).className = "key cutKey";
    } else if(hasClass(document.getElementById(input), 'rStraightKey')) {
        document.getElementById(input).className = "key rStraightKey";
    } else if(hasClass(document.getElementById(input), 'highlightBlackKey')) {
        document.getElementById(input).className = "key blackKey";
    }
}

// highlight key
// called by keyboardTrigger
// input is the name of div to change
function changeSelectColor(input) {
    if(canColor[input] == false) { return; }
    if(hasClass(document.getElementById(input), 'lStraightKey')) {
        document.getElementById(input).className = "selectKey lStraightKey";
    } else if(hasClass(document.getElementById(input), 'cutKey')) {
        document.getElementById(input).className = "selectKey cutKey";
    } else if(hasClass(document.getElementById(input), 'rStraightKey')) {
        document.getElementById(input).className = "selectKey rStraightKey";
    } else if(hasClass(document.getElementById(input), 'blackKey')) {
        document.getElementById(input).className = "key selectBlackKey";
    }
}

// change key color back to default color
// called by keyboardUntrigger
// input is the name of div to change
function revertSelectColor(input) {
    if(canColor[input] == false) { return; }
    if(hasClass(document.getElementById(input), 'lStraightKey')) {
        document.getElementById(input).className = "key lStraightKey";
    } else if(hasClass(document.getElementById(input), 'cutKey')) {
        document.getElementById(input).className = "key cutKey";
    } else if(hasClass(document.getElementById(input), 'rStraightKey')) {
        document.getElementById(input).className = "key rStraightKey";
    } else if(hasClass(document.getElementById(input), 'selectBlackKey')) {
        document.getElementById(input).className = "key blackKey";
    }
}

// hightlight all
function unhighlightConcepts() {
    if(highlight.majorScale) {           // if major scale is highlighted
        highlightMajorScale();          // unhighlight major scale before playing major chord
    } else if(highlight.minorScale) {    // if minor scale is highlighted
        highlightMinorScale();          // unhighlight minor scale before playing major chord
    } else if(highlight.majorChord) {
        highlightMajorChord();
    } else if(highlight.minorChord) {
        highlightMinorChord();
    }
}

function unhighlightAll() {
    unhighlightConcepts();
    var div;
    for(var i = 0; i < numberOfKeys; i++) {
        div = getDivIDNoteOctaveFromMidiValue(i+48);
        revertColor(div[0]);
        // console.log(div);
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
    timingFunctionIsExecuting = true;
    triggerColor(input[count]);
    setTimeout(function () {
        count++;
        if(count < scaleLength) {
            scaleKeyColoring(count, input);
        } else {
            timingFunctionIsExecuting = false;
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

// ------------------------------------------------------------------
// Show Key Names Functions
// ------------------------------------------------------------------

 function toggleVisibility(input) {
    var mydiv = document.getElementsByClassName(input);
    for (var i = 0; i < mydiv.length; i++) {
        if(mydiv[i].style.display == 'none') {
            mydiv[i].style.display = 'block';
        } else {
            mydiv[i].style.display = 'none';
        }
    }
}

function showDebug(input) {
    var unicode = input.keyCode ? input.keyCode : input.charCode;
    if(unicode == 96) {             // `
        toggleVisibility('debug');
    }
}

function showSnackBar(input) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    if (input == false){
        x.textContent = "Wrong!";
        x.className = "show";
    }
    else if (input == true){
        x.textContent = "Correct";
        x.className = "show";
    }

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("window").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("window").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}