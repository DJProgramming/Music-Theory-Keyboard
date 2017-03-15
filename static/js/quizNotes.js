

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

/* Highlights random note in piano */
function highlightRandom(){
    randomNote = Math.floor(Math.random()*30) + 48;

    console.log(randomNote);

    var noteData = getDivInfo(randomNote);

    console.log(noteData);

    changeColor(noteData[0]);
}

/* Highlights random note in piano
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
*/

function keyDownFunction(input){
    var unicode = input.keyCode ? input.keyCode : input.charCode;
    if (unicode == 81 && randomNote == 'c3'){
        document.getElementById('c3Key').className = "key lStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 50 && randomNote == 'db3'){
        document.getElementById('db3Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 87 && randomNote == 'd3'){
        document.getElementById('d3Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 51 && randomNote == 'eb3'){
        document.getElementById('eb3Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 69 && randomNote == 'e3'){
        document.getElementById('e3Key').className = "key rStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 82 && randomNote == 'f3'){
        document.getElementById('f3Key').className = "key lStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 53 && randomNote == 'gb3'){
        document.getElementById('gb3Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 84 && randomNote == 'g3'){
        document.getElementById('g3Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 54 && randomNote == 'ab4'){
        document.getElementById('ab4Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 89 && randomNote == 'a4'){
        document.getElementById('a4Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 55 && randomNote == 'bb4'){
        document.getElementById('bb4Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 85 && randomNote == 'b4'){
        document.getElementById('b4Key').className = "key rStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 73 && randomNote == 'c4'){
        document.getElementById('c4Key').className = "key lStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 57 && randomNote == 'db4'){
        document.getElementById('db4Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 79 && randomNote == 'd4'){
        document.getElementById('d4Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 48 && randomNote == 'eb4'){
        document.getElementById('eb4Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 80 && randomNote == 'e4'){
        document.getElementById('e4Key').className = "key rStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 90 && randomNote == 'f4'){
        document.getElementById('f4Key').className = "key lStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 83 && randomNote == 'gb4'){
        document.getElementById('gb4Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 88 && randomNote == 'g4'){
        document.getElementById('g4Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 68 && randomNote == 'ab5'){
        document.getElementById('ab5Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 67 && randomNote == 'a5'){
        document.getElementById('a5Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 70 && randomNote == 'bb5'){
        document.getElementById('bb5Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 86 && randomNote == 'b5'){
        document.getElementById('b5Key').className = "key rStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 66 && randomNote == 'c5'){
        document.getElementById('c5Key').className = "key lStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 72 && randomNote == 'db5'){
        document.getElementById('db5Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 78 && randomNote == 'd5'){
        document.getElementById('d5Key').className = "key cutKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 74 && randomNote == 'eb5Key'){
        document.getElementById('eb5Key').className = "key blackKey";
        numCorrect++;
        checkCorrect(numCorrect);
    }
    else if (unicode == 77 && randomNote == 'e5'){
        document.getElementById('e5Key').className = "key rStraightKey";
        numCorrect++;
        checkCorrect(numCorrect);
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