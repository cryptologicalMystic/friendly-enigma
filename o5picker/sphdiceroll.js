// this is all springhole code, not mine, sad to say

function GenNumber(nRange) {
    var iNumGen
	iNumGen = Math.round((Math.random() * nRange));
	return iNumGen;
}

function GetFrom(aArray) {
	var undefined
	var sReturn
	sReturn = aArray[GenNumber(aArray.length)];
	if (sReturn == undefined) {
		sReturn = GetFrom(aArray)
	}
	return sReturn
}


function GetArray(sArrayName) {
	for (var intLooper = 0; intLooper < aVocab.length ; intLooper++) {
		if (aVocab[intLooper][0] == sArrayName) {
			return aVocab[intLooper][1];
			break;
		}
	}
}

function ScanLine(sLine) {
	var iTagStart, iTagEnd
	var sKey
	if (sLine.indexOf("<") > -1) {
		iTagStart = sLine.indexOf("<");
		iTagEnd = sLine.indexOf(">");
		
		sKey = sLine.substr(iTagStart+1, iTagEnd-(iTagStart+1));

		sKey = GetFrom(GetArray(sKey))
		sLine = sLine.substr(0, iTagStart) + sKey + sLine.substr(iTagEnd+1, (sLine.length - iTagEnd))

	}
	if (sLine.indexOf("<") > - 1) {
		sLine = ScanLine(sLine)
	}

	return sLine;
}


function GenPlot() {
	sLine = GetFrom(GetArray("FIRST"));

	sLine = ScanLine(sLine)

	document.GENFORM.STORY.value = sLine;
}

var aVocab = new Array();

var intIncr
var intCat

intCat = 0
intIncr = 0

// The data stored is pretty simple.  It works like this:

// The aVocab array has sub arrays that are named lists of data.

// aVocab[intCat]= new Array(); - The aVocab Array actually holds other arrays.
// aVocab[intCat][0]="FIRST" - This is the name of the list of data in this sub array.  The name helps the program find the data.
// aVocab[intCat][1] = new Array() - Yep, ANOTHER array - this is the array that holds the actual data.
// aVocab[intCat][1][intIncr++]="First thing <SECOND>" // See that <SECOND> tag?  Anything in brackets references another list.
// aVocab[intCat][1][intIncr++]="First thing <THIRD>"

// Unless it's the last entry, don't forget to increment and reset the counters!

// intCat++
// intIncr=0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "FIRST"
aVocab[intCat][1] = new Array();
aVocab[intCat][1][intIncr++] = `O5-1: "<one>". \nO5-2: "<two>". \nO5-3: "<three>". \nO5-4: "<four>". \nO5-5: "<five>". \nO5-6: "<six>". \nO5-7: "<seven>". \nO5-8: "<eight>". \nO5-9: "<nine>". \nO5-10: "<ten>". \nO5-11: "<eleven>". \nO5-12: "<twelve>". \nO5-13: "<thirteen>". \nThe Administrator: "<admin>"`

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "one"
aVocab[intCat][1] = new Array();
aVocab[intCat][1][intIncr++] = `The Founder`
aVocab[intCat][1][intIncr++] = `Eve`
aVocab[intCat][1][intIncr++] = `The Dead Man`
aVocab[intCat][1][intIncr++] = `The Man With The Infinity Gun`
aVocab[intCat][1][intIncr++] = `The Visionary`

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "two"
aVocab[intCat][1] = new Array();
aVocab[intCat][1][intIncr++] = `The Gardener`
aVocab[intCat][1][intIncr++] = `The Nazarene`
aVocab[intCat][1][intIncr++] = `The Way`
aVocab[intCat][1][intIncr++] = `He Who Waits`

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "three"
aVocab[intCat][1] = new Array();
aVocab[intCat][1][intIncr++] = `The Kid`
aVocab[intCat][1][intIncr++] = `The Philosopher Scientist`
aVocab[intCat][1][intIncr++] = `The Beacon`
aVocab[intCat][1][intIncr++] = `The Hermit`

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "four"
aVocab[intCat][1] = new Array();
aVocab[intCat][1][intIncr++] = `The Ambassador`
aVocab[intCat][1][intIncr++] = `The Martyr`
aVocab[intCat][1][intIncr++] = `Frost`
aVocab[intCat][1][intIncr++] = `The Collector`
aVocab[intCat][1][intIncr++] = `The Gangster`
aVocab[intCat][1][intIncr++] = `The Veteran`

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "five"
aVocab[intCat][1] = new Array();
aVocab[intCat][1][intIncr++] = `Blackbird`
aVocab[intCat][1][intIncr++] = `The Ordinary Man`
aVocab[intCat][1][intIncr++] = `The Entrepreneur", or "The Treasurer`
aVocab[intCat][1][intIncr++] = `Manifest Destiny`

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "six"
aVocab[intCat][1] = new Array();
aVocab[intCat][1][intIncr++] = `Cowboy", or "The American`
aVocab[intCat][1][intIncr++] = `The Figurehead", or "The Elder`
aVocab[intCat][1][intIncr++] = `The Puppet`
aVocab[intCat][1][intIncr++] = `The Experimenter`

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "seven"
aVocab[intCat][1] = new Array();
aVocab[intCat][1][intIncr++] = `Green`
aVocab[intCat][1][intIncr++] = `The Unlikely`
aVocab[intCat][1][intIncr++] = `The Professor", or "The Heretic`
aVocab[intCat][1][intIncr++] = `Teeth`
aVocab[intCat][1][intIncr++] = `The Cardinal`
aVocab[intCat][1][intIncr++] = `Harold Holt`

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "eight"
aVocab[intCat][1] = new Array();
aVocab[intCat][1][intIncr++] = `The Newbie", or "The Lesser`
aVocab[intCat][1][intIncr++] = `Magnolia`
aVocab[intCat][1][intIncr++] = `Dogwood`
aVocab[intCat][1][intIncr++] = `The Terse`

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "nine"
aVocab[intCat][1] = new Array();
aVocab[intCat][1][intIncr++] = `The Outsider" / "The Ordinary`
aVocab[intCat][1][intIncr++] = `Misfortune`
aVocab[intCat][1][intIncr++] = `The Lovers", or "Willow`
aVocab[intCat][1][intIncr++] = `Out-of-Place`
aVocab[intCat][1][intIncr++] = `The Secret Keeper`

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "ten"
aVocab[intCat][1] = new Array();
aVocab[intCat][1][intIncr++] = `The Archivist`
aVocab[intCat][1][intIncr++] = `Stone`
aVocab[intCat][1][intIncr++] = `The Assassin`
aVocab[intCat][1][intIncr++] = `The Veteran", or "The Mad General`
aVocab[intCat][1][intIncr++] = `The Grand Master`

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "eleven"
aVocab[intCat][1] = new Array();
aVocab[intCat][1][intIncr++] = `The Mailman`
aVocab[intCat][1][intIncr++] = `The Liar", or "Father of Lies`
aVocab[intCat][1][intIncr++] = `The Senator`
aVocab[intCat][1][intIncr++] = `Jings`
aVocab[intCat][1][intIncr++] = `The Keeper", or "The Warden`
aVocab[intCat][1][intIncr++] = `The Bureaucrat`

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "twelve"
aVocab[intCat][1] = new Array();
aVocab[intCat][1][intIncr++] = `The Accountant`
aVocab[intCat][1][intIncr++] = `Adam`
aVocab[intCat][1][intIncr++] = `The Contractor`
aVocab[intCat][1][intIncr++] = `The Trainman", or "The Conductor`
aVocab[intCat][1][intIncr++] = `The Physician`

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "thirteen"
aVocab[intCat][1] = new Array();
aVocab[intCat][1][intIncr++] = `The Tiebreaker`
aVocab[intCat][1][intIncr++] = `Tamlin`
aVocab[intCat][1][intIncr++] = `The Meddler`
aVocab[intCat][1][intIncr++] = `AI Complex`
aVocab[intCat][1][intIncr++] = `Death`
aVocab[intCat][1][intIncr++] = `The Activist`
aVocab[intCat][1][intIncr++] = `The Persian`
aVocab[intCat][1][intIncr++] = `The Pedestrian`

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "admin"
aVocab[intCat][1] = new Array();
aVocab[intCat][1][intIncr++] = `The Official`
aVocab[intCat][1][intIncr++] = `Frederick Williams`
aVocab[intCat][1][intIncr++] = `Agnes Peterson`
aVocab[intCat][1][intIncr++] = `Kismet`
aVocab[intCat][1][intIncr++] = `Spider`