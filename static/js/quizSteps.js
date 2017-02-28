var stepArray = Array('half', 'whole');
var hiLowArray = Array('higher', 'lower');
var randomStep;
var randomHiLow;



/* keyArray */
var keyArray = Array('c3','db3','d3','eb3', 'e3', 'f3','gb3','g3','ab4','a4','bb4','b4','c4','db4','d4','eb4','e4','f4',
    'gb4','g4','ab5','a5','bb5','b5','c5','db5','d5','eb5','e5');

document.addEventListener("keydown", keyDownFunction, false);

var numCorrect = 0;
var randomNote;

/* Highlights random note in piano */
function highlightRandom(){
	var noteData = ['1', '2', '3'];
    randomStep = stepArray[Math.floor(Math.random()*stepArray.length)];
    randomHiLow = hiLowArray[Math.floor(Math.random()*hiLowArray.length)]

    document.getElementById('stepTxt').textContent = randomStep;
    document.getElementById('highLowTxt').textContent = randomHiLow;
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
    if(randomNote == 'c3' && randomHiLow == 'lower'){
        randomHiLow = 'higher';
        document.getElementById('c3Key').className = 'highlightKey lStraightKey';
        document.getElementById('highLowTxt').textContent = randomHiLow;
    }
    else if(randomNote == 'e5' && randomHiLow == 'higher'){
        randomHiLow = 'lower';
        document.getElementById('e5Key').className = 'highlightKey rStraightKey';
        document.getElementById('highLowTxt').textContent = randomHiLow;
    }
    if(randomNote == 'db3' && randomHiLow == 'lower' && randomStep == 'whole'){
        randomHiLow = 'higher';
        document.getElementById('db3Key').className = 'highlightKey rStraightKey';
        document.getElementById('highLowTxt').textContent = randomHiLow;
    }
    else if(randomNote == 'eb5' && randomHiLow == 'higher' && randomStep == 'whole'){
        randomHiLow = 'lower';
        document.getElementById('eb5Key').className = 'key highlightBlackKey';
        document.getElementById('highLowTxt').textContent = randomHiLow;
    }
}

function keyDownFunction(input){
    var unicode = input.keyCode ? input.keyCode : input.charCode;
    if (unicode == 50 && randomNote == 'c3' && randomStep == 'half' && randomHiLow == 'higher'){
        document.getElementById('c3Key').className = "key lStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 87 && randomNote == 'c3' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('c3Key').className = "key lStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    /////////////////////////////////////
    else if (unicode == 81 && randomNote == 'db3' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('db3Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 87 && randomNote == 'db3' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('db3Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 51 && randomNote == 'db3' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('db3Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    //////////////////////////////////////
    else if (unicode == 50 && randomNote == 'd3' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('d3Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 81 && randomNote == 'd3' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('d3Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 51 && randomNote == 'd3' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('d3Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 69 && randomNote == 'd3' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('d3Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    ///////////////////////////////////////
    else if (unicode == 87 && randomNote == 'eb3' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('eb3Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 50 && randomNote == 'eb3' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('eb3Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 69 && randomNote == 'eb3' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('eb3Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 82 && randomNote == 'eb3' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('eb3Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    /////////////////////////////////////
    else if (unicode == 51 && randomNote == 'e3' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('e3Key').className = "key rStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 87 && randomNote == 'e3' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('e3Key').className = "key rStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 82 && randomNote == 'e3' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('e3Key').className = "key rStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 53 && randomNote == 'e3' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('e3Key').className = "key rStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    //////////////////////////////////////
    else if (unicode == 69 && randomNote == 'f3' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('f3Key').className = "key lStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 51 && randomNote == 'f3' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('f3Key').className = "key lStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 53 && randomNote == 'f3' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('f3Key').className = "key lStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 84 && randomNote == 'f3' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('f3Key').className = "key lStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    /////////////////////////////////////////
    else if (unicode == 82 && randomNote == 'gb3' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('gb3Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 69 && randomNote == 'gb3' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('gb3Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 84 && randomNote == 'gb3' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('gb3Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 54 && randomNote == 'gb3' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('gb3Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    ///////////////////////////////////////////////
    else if (unicode == 53 && randomNote == 'g3' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('g3Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 82 && randomNote == 'g3' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('g3Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 54 && randomNote == 'g3' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('g3Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 89 && randomNote == 'g3' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('g3Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    //////////////////////////////////////////////
    else if (unicode == 84 && randomNote == 'ab4' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('ab4Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 53 && randomNote == 'ab4' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('ab4Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 89 && randomNote == 'ab4' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('ab4Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 55 && randomNote == 'ab4' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('ab4Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    //////////////////////////////////////////////
    else if (unicode == 54 && randomNote == 'a4' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('a4Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 84 && randomNote == 'a4' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('a4Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 55 && randomNote == 'a4' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('a4Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 85 && randomNote == 'a4' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('a4Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    ///////////////////////////////////////////////////
    else if (unicode == 89 && randomNote == 'bb4' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('bb4Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 54 && randomNote == 'bb4' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('bb4Key').className = "key blackKey";
        numCorrect++
        checkCorrect(numCorrect);
    }
    else if (unicode == 85 && randomNote == 'bb4' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('bb4Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 73 && randomNote == 'bb4' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('bb4Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    //////////////////////////////////////////////
    else if (unicode == 55 && randomNote == 'b4' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('b4Key').className = "key rStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 89 && randomNote == 'b4' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('b4Key').className = "key rStraightKey";
        numCorrect++
        checkCorrect(numCorrect);
    }
    else if (unicode == 73 && randomNote == 'b4' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('b4Key').className = "key rStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 57 && randomNote == 'b4' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('b4Key').className = "key rStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    //////////////////////////////////////////////////
    else if (unicode == 85 && randomNote == 'c4' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('c4Key').className = "key lStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 55 && randomNote == 'c4' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('c4Key').className = "key lStraightKey";
        numCorrect++
        checkCorrect(numCorrect);
    }
    else if (unicode == 57 && randomNote == 'c4' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('c4Key').className = "key lStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 79 && randomNote == 'c4' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('c4Key').className = "key lStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    ///////////////////////////////////////////////////
    else if (unicode == 73 && randomNote == 'db4' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('db4Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 85 && randomNote == 'db4' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('db4Key').className = "key blackKey";
        numCorrect++
        checkCorrect(numCorrect);
    }
    else if (unicode == 79 && randomNote == 'db4' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('db4Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 48 && randomNote == 'db4' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('db4Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    ///////////////////////////////////////////////////////
    else if (unicode == 57 && randomNote == 'd4' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('d4Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 73 && randomNote == 'd4' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('d4Key').className = "key cutKey";
        numCorrect++
        checkCorrect(numCorrect);
    }
    else if (unicode == 48 && randomNote == 'd4' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('d4Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 80 && randomNote == 'd4' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('d4Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    ////////////////////////////////////////////////////
    else if (unicode == 79 && randomNote == 'eb4' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('eb4Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 57 && randomNote == 'eb4' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('eb4Key').className = "key blackKey";
        numCorrect++
        checkCorrect(numCorrect);
    }
    else if (unicode == 80 && randomNote == 'eb4' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('eb4Key').className = "key blackKey";
        numCorrect++
        checkCorrect(numCorrect);
    }
    else if (unicode == 90 && randomNote == 'eb4' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('eb4Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    /*****************************************************************************/
    /*****************************************************************************/
   else if (unicode == 48 && randomNote == 'e4' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('e4Key').className = "key rStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 79 && randomNote == 'e4' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('e4Key').className = "key rStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 90 && randomNote == 'e4' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('e4Key').className = "key rStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 83 && randomNote == 'e4' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('e4Key').className = "key rStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    //////////////////////////////////////
    else if (unicode == 80 && randomNote == 'f4' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('f4Key').className = "key lStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 48 && randomNote == 'f4' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('f4Key').className = "key lStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 83 && randomNote == 'f4' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('f4Key').className = "key lStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 88 && randomNote == 'f4' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('f4Key').className = "key lStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    /////////////////////////////////////////
    else if (unicode == 90 && randomNote == 'gb4' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('gb4Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 80 && randomNote == 'gb4' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('gb4Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 88 && randomNote == 'gb4' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('gb4Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 68 && randomNote == 'gb4' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('gb4Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    ///////////////////////////////////////////////
    else if (unicode == 83 && randomNote == 'g4' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('g4Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 90 && randomNote == 'g4' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('g4Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 68 && randomNote == 'g4' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('g4Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 67 && randomNote == 'g4' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('g4Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    //////////////////////////////////////////////
    else if (unicode == 88 && randomNote == 'ab5' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('ab5Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 83 && randomNote == 'ab5' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('ab5Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 67 && randomNote == 'ab5' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('ab5Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 70 && randomNote == 'ab5' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('ab5Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    //////////////////////////////////////////////
    else if (unicode == 68 && randomNote == 'a5' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('a5Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 88 && randomNote == 'a5' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('a5Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 70 && randomNote == 'a5' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('a5Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 86 && randomNote == 'a5' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('a5Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    ///////////////////////////////////////////////////
    else if (unicode == 67 && randomNote == 'bb5' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('bb5Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 68 && randomNote == 'bb5' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('bb5Key').className = "key blackKey";
        numCorrect++
        checkCorrect(numCorrect);
    }
    else if (unicode == 86 && randomNote == 'bb5' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('bb5Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 66 && randomNote == 'bb5' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('bb5Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    //////////////////////////////////////////////
    else if (unicode == 70 && randomNote == 'b5' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('b5Key').className = "key rStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 67 && randomNote == 'b5' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('b5Key').className = "key rStraightKey";
        numCorrect++
        checkCorrect(numCorrect);
    }
    else if (unicode == 66 && randomNote == 'b5' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('b5Key').className = "key rStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 72 && randomNote == 'b5' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('b5Key').className = "key rStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    //////////////////////////////////////////////////
    else if (unicode == 86 && randomNote == 'c5' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('c5Key').className = "key lStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 70 && randomNote == 'c5' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('c5Key').className = "key lStraightKey";
        numCorrect++
        checkCorrect(numCorrect);
    }
    else if (unicode == 72 && randomNote == 'c5' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('c5Key').className = "key lStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 78 && randomNote == 'c5' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('c5Key').className = "key lStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    ///////////////////////////////////////////////////
    else if (unicode == 66 && randomNote == 'db5' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('db5Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 86 && randomNote == 'db5' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('db5Key').className = "key blackKey";
        numCorrect++
        checkCorrect(numCorrect);
    }
    else if (unicode == 78 && randomNote == 'db5' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('db5Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 74 && randomNote == 'db5' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('db5Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    ///////////////////////////////////////////////////////
    else if (unicode == 72 && randomNote == 'd5' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('d5Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 66 && randomNote == 'd5' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('d5Key').className = "key cutKey";
        numCorrect++
        checkCorrect(numCorrect);
    }
    else if (unicode == 74 && randomNote == 'd5' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('d5Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 77 && randomNote == 'd5' && randomStep == 'whole'&& randomHiLow == 'higher'){
        document.getElementById('d5Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    ////////////////////////////////////////////////////
    else if (unicode == 78 && randomNote == 'eb5' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('eb5Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 72 && randomNote == 'eb5' && randomStep == 'whole'&& randomHiLow == 'lower'){
        document.getElementById('eb5Key').className = "key blackKey";
        numCorrect++
        checkCorrect(numCorrect);
    }
    else if (unicode == 77 && randomNote == 'eb5' && randomStep == 'half'&& randomHiLow == 'higher'){
        document.getElementById('eb5Key').className = "key blackKey";
        numCorrect++
        checkCorrect(numCorrect);
    }
    /////////////////////////////////////////
    else if (unicode == 74 && randomNote == 'e5' && randomStep == 'half'&& randomHiLow == 'lower'){
        document.getElementById('eb5Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 78 && randomNote == 'e5' && randomStep == 'whole'&& randomHiLow == 'lower') {
            document.getElementById('eb5Key').className = "key blackKey";
            numCorrect++
            checkCorrect(numCorrect);
    }
}

function checkCorrect(input){
    console.log('High or Low: ' + randomHiLow);
    console.log('Step: '+ randomStep );
    console.log('Note:' + randomNote);
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