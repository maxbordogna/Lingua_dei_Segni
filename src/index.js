import { initCamera } from "./camera.js"
let altezza
let larghezza

if (innerWidth > innerHeight) {
	altezza = innerHeight
	larghezza = innerWidth/2
}
else if (innerWidth < innerHeight) {
	larghezza = innerWidth
	altezza = innerWidth*1.33
}

let ultimaLettera = -1

function blinkUnderscore() {
	process.stdout.write("_");
	setTimeout(() => {
	  process.stdout.clearLine(); // Clear the console line
	  process.stdout.cursorTo(0); // Move the cursor to the beginning of the line
	  setTimeout(blinkUnderscore, 500); // Wait 500 milliseconds and repeat
	}, 500);
  }

// let spostamento = innerWidth/2

// document.getElementById("traslatore").style.transform="translateX(spostamento)";

// Configurazione dell’elemento video
const videoConfig = {
	 width: larghezza, height: altezza, fps: 60
}

// Configurazione Media Pipe
// https://google.github.io/mediapipe/solutions/hands
const mediaPipeConfig = {
	runtime: "mediapipe",
	modelType: "full",
	maxHands: 2,
	solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/hands`,
}


const video = document.querySelector("video")

const canvas = document.querySelector("canvas")
canvas.width = videoConfig.width
canvas.height = videoConfig.height
const ctx = canvas.getContext("2d")

// const x = 10;
// const y = 10;
// const width = 100;
// const height = 50;

// ctx.strokeStyle = 'red';
// ctx.strokeRect(x, y, width, height);

//ctx.scale(1.5, 1.5);


// ctx.strokeStyle = 'rgba(0,0,255,.2)';
// ctx.strokeRect(x / 2, y / 2, width, height);



console.log("Inizializzo camera.")
initCamera(
	document.querySelector("video"),
	videoConfig.width,
	videoConfig.height,
	videoConfig.fps
).then(video => {
	video.play()
	video.addEventListener("loadeddata", event => {
		console.log("Camera inizializzata.")
		boot()
	})
})

async function createDetector() {
	return window.handPoseDetection.createDetector( window.handPoseDetection.SupportedModels.MediaPipeHands, mediaPipeConfig )
}



const landmarkColors = {
	thumb:  'black',
	index:  'black',
	middle: 'black',
	ring:   'black',
	pinky:  'black',
	wrist:  'black',
}



async function boot() {
	
	// Carica modello handpose
	console.log("Carico modello mediaPose...")
	const detector = await createDetector()
	console.log("Modello caricato.")

	


	// costanti lettere alfabeto
	const A = new fp.GestureDescription('A');
	const B = new fp.GestureDescription('B');
	const C = new fp.GestureDescription('C');
	const D = new fp.GestureDescription('D');
	const E = new fp.GestureDescription('E');
	const F = new fp.GestureDescription('F');
	const G = new fp.GestureDescription('G');
	const H = new fp.GestureDescription('H');
	const I = new fp.GestureDescription('I');
	const J = new fp.GestureDescription('J');
	const K = new fp.GestureDescription('K');
	const L = new fp.GestureDescription('L');
	const M = new fp.GestureDescription('M');
	const N = new fp.GestureDescription('N');
	const O = new fp.GestureDescription('O');
	const P = new fp.GestureDescription('P');
	const Q = new fp.GestureDescription('Q');
	const R = new fp.GestureDescription('R');
	const S = new fp.GestureDescription('S');
	const T = new fp.GestureDescription('T');
	const U = new fp.GestureDescription('U');
	const V = new fp.GestureDescription('V');
	const W = new fp.GestureDescription('W');
	const X = new fp.GestureDescription('X');
	const Y = new fp.GestureDescription('Y');
	const Z = new fp.GestureDescription('Z');

	// costanti voci
	const Eddy = new fp.GestureDescription('Eddy'); //106
	const Sandy = new fp.GestureDescription('Sandy'); //107
	const Reed = new fp.GestureDescription('reed'); //108
	const Shelley = new fp.GestureDescription('Shelley'); //109
	const nonno = new fp.GestureDescription('nonno'); //110
	const nonna = new fp.GestureDescription('nonna'); //111
	const Flo = new fp.GestureDescription('Flo'); //112
	const Rocko = new fp.GestureDescription('Rocko'); //113
	const Alice = new fp.GestureDescription('Alice'); //114
	
	// costanti comandi
	const Voce = new fp.GestureDescription('Voce'); //106
	const SPACE = new fp.GestureDescription(' '); //106

	//shortcut posizione dita
	const NO_CURL   = fp.FingerCurl.NoCurl
	const FULL_CURL = fp.FingerCurl.FullCurl
	const HALF_CURL = fp.FingerCurl.HalfCurl
	


//------------------------------------------------------------------------------------------------------------------------------------------------------------
// VOCI
//------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// Base (Alice 114)
// -----------------------------------------------------------------------------
// 	Alice.addCurl(fp.Finger.Thumb, NO_CURL, 1.0);
// 	Alice.addCurl(fp.Finger.Thumb, HALF_CURL, 0.9);

// for(let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
// 	Alice.addCurl(finger, FULL_CURL, 1.0);
// 	Alice.addCurl(finger, HALF_CURL, 0.9);

// 	Alice.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);
// }

// //------------------------------------------------------------------------------
// // Eddy 106
// // -----------------------------------------------------------------------------
// for(let finger of fp.Finger.all) {
//     Eddy.addCurl(finger, NO_CURL, 1.0);
// 	Eddy.addCurl(finger, HALF_CURL, 0.9);

// 	Eddy.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalDown, 1.0);
// }

// //------------------------------------------------------------------------------
// // Sandy 107
// // -----------------------------------------------------------------------------
// for(let finger of fp.Finger.all) {
//     Sandy.addCurl(finger, NO_CURL, 1.0);
// 	Sandy.addCurl(finger, HALF_CURL, 0.9);

// 	Sandy.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 1.0);
// }

// //------------------------------------------------------------------------------
// // Reed 108
// // -----------------------------------------------------------------------------
// for(let finger of fp.Finger.all) {
//     Sandy.addCurl(finger, NO_CURL, 1.0);
// 	Sandy.addCurl(finger, HALF_CURL, 0.9);

// 	Sandy.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 1.0);
// }

// //------------------------------------------------------------------------------
// // nonno 110
// // -----------------------------------------------------------------------------
// for(let finger of fp.Finger.all) {
//     Sandy.addCurl(finger, NO_CURL, 1.0);
// 	Sandy.addCurl(finger, HALF_CURL, 0.9);

// 	Sandy.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 1.0);
// }

// //------------------------------------------------------------------------------
// // nonna 111
// // -----------------------------------------------------------------------------
// for(let finger of fp.Finger.all) {
//     Sandy.addCurl(finger, NO_CURL, 1.0);
// 	Sandy.addCurl(finger, HALF_CURL, 0.9);

// 	Sandy.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 1.0);
// }

//------------------------------------------------------------------------------------------------------------------------------------------------------------
// COMANDI
//------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// // VOCE
// // -----------------------------------------------------------------------------

// // altre dita

// for (let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky, fp.Finger.Thumb]) {
//   Voce.addCurl(finger, NO_CURL, 1.0);
// }

// //------------------------------------------------


//------------------------------------------------------------------------------------------------------------------------------------------------------------
// LETTERE
//------------------------------------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// A
// -----------------------------------------------------------------------------

	A.addCurl(fp.Finger.Thumb, NO_CURL, 1.0);
	A.addCurl(fp.Finger.Thumb, HALF_CURL, 0.9);
	A.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 0.5);
  
	// altre dita
	for (let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
	  A.addCurl(finger, FULL_CURL, 1.0);
	}
  
//------------------------------------------------



//------------------------------------------------------------------------------
// B
// -----------------------------------------------------------------------------
B.addCurl(fp.Finger.Thumb, HALF_CURL, 1.0);
B.addCurl(fp.Finger.Thumb, FULL_CURL, 0.9);
B.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.8);


// altre dita
for(let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
	B.addCurl(finger, NO_CURL);
}
//------------------------------------------------


//------------------------------------------------------------------------------
// C
// -----------------------------------------------------------------------------
C.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0);




C.addCurl(fp.Finger.Thumb, HALF_CURL, 1.0);
C.addCurl(fp.Finger.Thumb, NO_CURL, 0.9);

// altre dita
for(let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
	C.addCurl(finger, HALF_CURL, 1.0);
}
//------------------------------------------------



//------------------------------------------------------------------------------
// D
// -----------------------------------------------------------------------------
D.addCurl(fp.Finger.Index, NO_CURL);
D.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
// D.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.9);
D.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.9);


// altre dita
for(let finger of [fp.Finger.Thumb, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
	D.addCurl(finger, FULL_CURL, 1.0);
	D.addCurl(finger, HALF_CURL, 0.8);
}
//------------------------------------------------



//------------------------------------------------------------------------------
// E
// -----------------------------------------------------------------------------

  
	// altre dita
	for (let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky, fp.Finger.Thumb]) {
	  E.addCurl(finger, HALF_CURL, 1.0);
	  E.addCurl(finger, FULL_CURL, 0.8);
	}
//------------------------------------------------


//------------------------------------------------------------------------------
// F
// -----------------------------------------------------------------------------
F.addCurl(fp.Finger.Middle, FULL_CURL, 1.0);

F.addCurl(fp.Finger.Ring, FULL_CURL, 1.0);


// altre dita
for(let finger of [fp.Finger.Index, fp.Finger.Thumb, fp.Finger.Pinky]) {
	F.addCurl(finger, NO_CURL, 1.0);
}
//------------------------------------------------


//------------------------------------------------------------------------------
// G
// -----------------------------------------------------------------------------
G.addCurl(fp.Finger.Index, NO_CURL);
G.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.9);




// altre dita
for(let finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Thumb, fp.Finger.Pinky]) {
	G.addCurl(finger, FULL_CURL, 1.0);
	G.addCurl(finger, HALF_CURL, 0.8);
}
//------------------------------------------------

// //------------------------------------------------------------------------------
// // H
// // -----------------------------------------------------------------------------
H.addCurl(fp.Finger.Index, NO_CURL);
H.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.9);
H.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.9);

H.addCurl(fp.Finger.Middle, NO_CURL);
H.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 0.9);
H.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 0.9);



// altre dita
for(let finger of [fp.Finger.Ring, fp.Finger.Thumb, fp.Finger.Pinky]) {
	H.addCurl(finger, FULL_CURL, 1.0);
	H.addCurl(finger, HALF_CURL, 0.8);
}
// //------------------------------------------------


//------------------------------------------------------------------------------
// I
// -----------------------------------------------------------------------------
I.addCurl(fp.Finger.Pinky, NO_CURL, 1.0);
I.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);
I.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 0.9);
I.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 0.9);

// altre dita
for(let finger of [fp.Finger.Ring, fp.Finger.Thumb, fp.Finger.Middle,  fp.Finger.Index]) {
	I.addCurl(finger, FULL_CURL, 1.0);
	I.addCurl(finger, HALF_CURL, 0.8)
}
//------------------------------------------------



//------------------------------------------------------------------------------
// J
// -----------------------------------------------------------------------------
J.addCurl(fp.Finger.Pinky, NO_CURL, 1.0);
J.addDirection(fp.Finger.Pinky, fp.FingerDirection.HorizontalLeft, 1.0);
J.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 0.9);
J.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalDownLeft, 0.9);

// altre dita
for(let finger of [fp.Finger.Ring, fp.Finger.Thumb, fp.Finger.Middle,  fp.Finger.Index]) {
	J.addCurl(finger, FULL_CURL, 1.0);
	J.addCurl(finger, HALF_CURL, 0.8)
}
//------------------------------------------------


//------------------------------------------------------------------------------
// K
// -----------------------------------------------------------------------------
K.addCurl(fp.Finger.Index, NO_CURL);
K.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.8);

K.addCurl(fp.Finger.Middle, NO_CURL);
K.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalLeft, 0.8);

K.addCurl(fp.Finger.Thumb, NO_CURL);

// altre dita
for(let finger of [fp.Finger.Ring, fp.Finger.Pinky]) {
	K.addCurl(finger, HALF_CURL, 0.8);
	K.addCurl(finger, FULL_CURL, 0.8);
}
//------------------------------------------------


//------------------------------------------------------------------------------
// L
// -----------------------------------------------------------------------------
L.addCurl(fp.Finger.Index, NO_CURL);
L.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);

L.addCurl(fp.Finger.Thumb, NO_CURL);
L.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1.0);
L.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 0.8);
L.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 0.8);


// altre dita
for(let finger of [fp.Finger.Ring, fp.Finger.Middle,  fp.Finger.Pinky]) {
	L.addCurl(finger, FULL_CURL, 0.8);
	L.addCurl(finger, HALF_CURL, 0.8);
}
//------------------------------------------------


//------------------------------------------------------------------------------
// M
// -----------------------------------------------------------------------------
M.addCurl(fp.Finger.Thumb, HALF_CURL, 1.0);
M.addCurl(fp.Finger.Thumb, FULL_CURL, 0.9);
M.addCurl(fp.Finger.Pinky, HALF_CURL, 1.0);
M.addCurl(fp.Finger.Pinky, FULL_CURL, 0.9);
M.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalLeft, 1.0);
M.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalDownLeft, 0.8);
M.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 0.8);


// altre dita
for(let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring]) {
M.addCurl(finger, NO_CURL, 1.0);
}

//------------------------------------------------


//------------------------------------------------------------------------------
// N
// -----------------------------------------------------------------------------
N.addCurl(fp.Finger.Thumb, HALF_CURL, 1.0);
N.addCurl(fp.Finger.Thumb, FULL_CURL, 0.9);
N.addCurl(fp.Finger.Pinky, HALF_CURL, 1.0);
N.addCurl(fp.Finger.Pinky, FULL_CURL, 0.9);
N.addCurl(fp.Finger.Ring, HALF_CURL, 1.0);
N.addCurl(fp.Finger.Ring, FULL_CURL, 0.9);

N.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalLeft, 1.0);
N.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalDownLeft, 0.8);
N.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 0.8);


// altre dita
for(let finger of [fp.Finger.Index, fp.Finger.Middle]) {
N.addCurl(finger, NO_CURL);
}

//------------------------------------------------

//------------------------------------------------------------------------------
// O
// -----------------------------------------------------------------------------

O.addCurl(fp.Finger.Index, HALF_CURL);
O.addCurl(fp.Finger.Thumb, NO_CURL, 1.0);
O.addCurl(fp.Finger.Thumb, HALF_CURL, 0.8);

// altre dita
for(let finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
	O.addCurl(finger, NO_CURL, 1.0);
}

//------------------------------------------------



//------------------------------------------------------------------------------
// P
// -----------------------------------------------------------------------------
P.addCurl(fp.Finger.Index, NO_CURL, 1.0);
P.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0);
P.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalDownLeft, 0.8);



// altre dita
for(let finger of [fp.Finger.Thumb, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
	P.addCurl(finger, FULL_CURL, 1.0);
	P.addCurl(finger, HALF_CURL, 0.5);
}
//------------------------------------------------



//------------------------------------------------------------------------------
// Q
// -----------------------------------------------------------------------------
Q.addCurl(fp.Finger.Index, NO_CURL);
Q.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalDown, 1.0);
Q.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalDownLeft, 0.8);

Q.addCurl(fp.Finger.Thumb, NO_CURL);
Q.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalDown, 1.0);
Q.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownRight, 0.8);


// altre dita
for(let finger of [fp.Finger.Ring, fp.Finger.Middle,  fp.Finger.Pinky]) {
	 Q.addCurl(finger, HALF_CURL, 1.0);
	Q.addCurl(finger, FULL_CURL, 0.8);
}
//------------------------------------------------



// ------------------------------------------------------------------------------
// R
// -----------------------------------------------------------------------------
R.addCurl(fp.Finger.Index, NO_CURL, 1.0);
R.addCurl(fp.Finger.Index, HALF_CURL, 0.8);
R.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
// U.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.9);
// U.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.9);

R.addCurl(fp.Finger.Middle, NO_CURL, 1.0);
R.addCurl(fp.Finger.Middle, HALF_CURL, 0.8);
R.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);
// U.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 0.8);
// U.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 0.8);

R.addCurl(fp.Finger.Thumb, NO_CURL, 1.0);
R.addCurl(fp.Finger.Thumb, HALF_CURL, 0.8);
R.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0);

// altre dita
for(let finger of [fp.Finger.Ring, fp.Finger.Pinky]) {
	R.addCurl(finger, HALF_CURL, 1.0);
	R.addCurl(finger, FULL_CURL, 0.8);
}
// ------------------------------------------------



//------------------------------------------------------------------------------
// S
// -----------------------------------------------------------------------------
S.addCurl(fp.Finger.Thumb, NO_CURL, 1.0);
S.addCurl(fp.Finger.Thumb, HALF_CURL, 0.9);
S.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 0.5);

// altre dita
for (let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
  S.addCurl(finger, FULL_CURL, 1.0);
}
//------------------------------------------------



//------------------------------------------------------------------------------
// T
// -----------------------------------------------------------------------------
T.addCurl(fp.Finger.Index, NO_CURL);
T.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 0.8);

T.addCurl(fp.Finger.Thumb, NO_CURL);
T.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);
T.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 0.8);
T.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.8);


// altre dita
for(let finger of [fp.Finger.Ring, fp.Finger.Middle,  fp.Finger.Pinky]) {
	T.addCurl(finger, FULL_CURL, 0.8);
	T.addCurl(finger, HALF_CURL, 0.8);
}
//------------------------------------------------

//------------------------------------------------------------------------------
// U
// -----------------------------------------------------------------------------
U.addCurl(fp.Finger.Index, NO_CURL, 1.0);
U.addCurl(fp.Finger.Index, HALF_CURL, 0.8);
U.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
// U.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.9);
// U.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.9);

U.addCurl(fp.Finger.Middle, NO_CURL, 1.0);
U.addCurl(fp.Finger.Middle, HALF_CURL, 0.8);
U.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);
// U.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 0.8);
// U.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 0.8);


// altre dita
for(let finger of [fp.Finger.Ring, fp.Finger.Thumb, fp.Finger.Pinky]) {
	U.addCurl(finger, HALF_CURL, 1.0);
	U.addCurl(finger, FULL_CURL, 0.8);
}
//------------------------------------------------


//------------------------------------------------------------------------------
// V
// -----------------------------------------------------------------------------
V.addCurl(fp.Finger.Index, NO_CURL, 1.0);
V.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1.0);
V.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.9);


V.addCurl(fp.Finger.Middle, NO_CURL, 1.0);
V.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 1.0);
V.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.9);




// altre dita
for(let finger of [fp.Finger.Ring, fp.Finger.Thumb, fp.Finger.Pinky]) {
	V.addCurl(finger, HALF_CURL, 1.0);
	V.addCurl(finger, FULL_CURL, 0.8);
}
//------------------------------------------------


//------------------------------------------------------------------------------
// W
// -----------------------------------------------------------------------------
W.addCurl(fp.Finger.Index, NO_CURL, 1.0);
W.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1.0);
W.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.9);


W.addCurl(fp.Finger.Middle, NO_CURL, 1.0);
W.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);


W.addCurl(fp.Finger.Ring, NO_CURL, 1.0);
W.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpRight, 1.0);
W.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.9);


// altre dita
for(let finger of [fp.Finger.Thumb, fp.Finger.Pinky]) {
	W.addCurl(finger, HALF_CURL, 1.0);
	W.addCurl(finger, FULL_CURL, 0.8);
}
//------------------------------------------------



// //------------------------------------------------------------------------------
// // X
// // -----------------------------------------------------------------------------
X.addCurl(fp.Finger.Index, NO_CURL, 1.0);
X.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0);

X.addCurl(fp.Finger.Middle, NO_CURL, 1.0);
X.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalLeft, 1.0);


X.addCurl(fp.Finger.Ring, NO_CURL, 1.0);
X.addDirection(fp.Finger.Ring, fp.FingerDirection.HorizontalLeft, 1.0);

X.addCurl(fp.Finger.Thumb, NO_CURL, 1.0);
X.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalDown, 1.0);
X.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 0.8);


// altre dita
for(let finger of [fp.Finger.Pinky]) {
	X.addCurl(finger, FULL_CURL, 1.0);
	X.addCurl(finger, HALF_CURL, 0.8);
}
// //------------------------------------------------



//------------------------------------------------------------------------------
// Y
// -----------------------------------------------------------------------------
Y.addCurl(fp.Finger.Pinky, NO_CURL);
Y.addCurl(fp.Finger.Thumb, NO_CURL);
// altre dita
for(let finger of [fp.Finger.Ring, fp.Finger.Middle, fp.Finger.Index]) {
	Y.addCurl(finger, FULL_CURL, 1.0);
	Y.addCurl(finger, HALF_CURL, 0.8);
}
//------------------------------------------------



// //------------------------------------------------------------------------------
// // Z
// // -----------------------------------------------------------------------------
Z.addCurl(fp.Finger.Thumb, NO_CURL, 1.0);
Z.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalDown, 1.0);
Z.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 0.8);


for(let finger of [fp.Finger.Ring, fp.Finger.Middle, fp.Finger.Index, fp.Finger.Pinky]) {
	Z.addCurl(finger, FULL_CURL, 1.0);
	Z.addCurl(finger, HALF_CURL, 0.8);
}
// //------------------------------------------------


// //------------------------------------------------------------------------------
// // SPACE
// // -----------------------------------------------------------------------------

for (let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky, fp.Finger.Thumb]) {
	SPACE.addCurl(finger, NO_CURL, 1.0);
  }
// //------------------------------------------------

// ultima lettera
let ultimaLettera = -1;

	const estimator = new fp.GestureEstimator([
		A,
		B,
		C,
		D,
		E,
		F,
		G,
		H,
		I,
		J,
		K,
		L,
		M,
		N,
		O,
		P,
		Q,
		R,
		S,
		T,
		U,
		V,
		W,
		X,
		Y,
		Z,
		Eddy,
		Sandy,
		Voce,
		SPACE,
	]);

	//-------------- FRAME COUNTER -------------- 
	
	function FrameCounter() {
		let frameCount = 0;
		let startTime = performance.now();
		let running = true;
	  
		function update() {
			if (running) {
				frameCount++;
			  }
		  
	  
		  requestAnimationFrame(update);
		}
	  
		update();
	  
		return {
		  getFrameCount: function () {
			return frameCount;
		  },
		  restart: function () {
			frameCount = 0;
			startTime = performance.now();
			running = true;
		  },
		};
	  }
	  
	  // Usage example:
	  const counter = FrameCounter();
	  
	  // Call counter.getFrameCount() to get the current frame count
	  console.log(counter.getFrameCount());
	  console.log(counter.getFrameCount());
	  //-------------------------------------------

// Add A gesture only for left hand


	requestAnimationFrame(loop)

	async function loop() {

		
		requestAnimationFrame(loop)

	


		

		const hands = await detector.estimateHands(video, {
			flipHorizontal: true
		})
		
		// width e height come larghezza e altezza del canvas
		let width = ctx.canvas.width
		let height = ctx.canvas.height
		
		// variabili per la voce
		let msg = new SpeechSynthesisUtterance();
		let voices = speechSynthesis.getVoices();
		
		
		
		
		
	
		


		ctx.clearRect(0, 0, width, height)

		// Mappa dei landmarks della mano:
		// https://developers.google.com/mediapipe/solutions/vision/hand_landmarker
		

		if (hands.length > 0 && hands.length < 2){

		


		for (const hand of hands) {

			const handedness = hand.handedness // Left : Right
			const keypoints3D = hand.keypoints3D.map(keypoint => [keypoint.x, keypoint.y, keypoint.z])
			const pose = await estimator.estimate(keypoints3D, 8.5)

			const name = pose.gestures[0]?.name

			const score = pose.gestures[0]?.score
			const lettera = name
			
			let voce
			
			let attuale = " "
			let scritto = "ciao "
			let underscore = "_"
			
			

			if (name && handedness == 'Right') {
				for (const [idx, keypoint] of hand.keypoints.entries()) {
					const name = keypoint.name.split('_')[0].toString().toLowerCase()
					const color = landmarkColors[name]
					point(ctx, keypoint.x, keypoint.y, 12, color)
					ctx.font = '12px sans-serif'
					ctx.textAlign = 'center'
					ctx.fillStyle = 'white'
					//ctx.fillText(idx,  keypoint.x, keypoint.y + 3)
				}
				console.log(counter.getFrameCount());
				counter
				console.log(counter.getFrameCount());
				//ctx.font = '250px sans-serif'
				ctx.font = '250px Roboto Mono'
				ctx.fillStyle = 'black'
					ctx.textAlign = 'left'
					//ctx.fillText(name + " [" + score.toFixed(1) + "]",width/2, height/2)
					//ctx.fillText(name, width/2, height/2+250/4)
					ctx.fillText(name, -width/95, height*0.75)


				if (name && counter.getFrameCount() > 200 &&ultimaLettera !== name){
				// voce
				console.log(name);


					


				underscore = "_"
				attuale = name
				scritto = document.getElementById("testo").innerHTML
				
					//console.log(ultimaLettera);
					document.getElementById("testo").innerHTML = scritto + attuale
					ultimaLettera = name
					//console.log(ultimaLettera);
						
					voce = 114
					msg.voice = voices[voce];
					
					msg.text = document.getElementById("testo").innerHTML = scritto + attuale
					speechSynthesis.speak(msg)

					console.log(counter.getFrameCount());
					counter.restart();
					console.log(counter.getFrameCount());
					


				
		
					// if (name == "Voce") {
					// 	voce = 108
					// 	msg.voice = voices[voce];
						
					// 	msg.text = scritto
					// 	speechSynthesis.speak(msg)
					
					// }


				// if (handedness == 'Right') {

					
				// 	//ctx.textAlign = 'center'
				// 	//ctx.fillText(name + " [" + score.toFixed(1) + "]",width/2, height/2)
				// 	//ctx.fillText(name, width/2, height/2+250/4)
				// 	if (ultimaLettera !== lettera){

					
						
				// 	// msg.text = name
				// 	// speechSynthesis.speak(msg)

				// 	ultimaLettera = lettera
				// 	}
				// }

			
			
				//  else {
		
				// 	document.getElementById("testo").innerHTML = name;

				// 	ctx.textAlign = 'center'
				// 	//ctx.fillText(name + " [" + score.toFixed(1) + "]",width/2, height/2)
				// 	ctx.fillText(name, width/2, height/2+250/4)

				// 	if (ultimaLettera !== lettera){
						
				// 		msg.text = name
				// 		speechSynthesis.speak(msg)
	
				// 		ultimaLettera = lettera
				// 		}
				// }
			}
			
		}
		else if (handedness == "Left"){
				console.log(counter.getFrameCount());
				counter
				console.log(counter.getFrameCount());
				console.log("mano sinistra");
				if (counter.getFrameCount() > 200){
			console.log("cancellooooo");
			document.getElementById("testo").innerHTML = ""}
		}
		else {
					console.log(counter.getFrameCount());
					counter.restart();
					console.log(counter.getFrameCount());

					
		}
		


			


	
		}
	}

	
	else {
		console.log(counter.getFrameCount());
		counter.restart();
		console.log(counter.getFrameCount());
		console.log("check");
		ctx.font = '12px Roboto Mono'
					ctx.fillStyle = 'black'
					ctx.textAlign = 'left'
					//ctx.fillText(name + " [" + score.toFixed(1) + "]",width/2, height/2)
					//ctx.fillText(name, width/2, height/2+250/4)
					ctx.fillText("Attiva il volume del computer", width/80, height*0.335)
					ctx.fillText("Mostra una lettera con la mano DESTRA e mantienila qualche secondo per confermarla", width/80, height*0.35)
					ctx.fillText("Mostra la mano DESTRA aperta e mantienila qualche secondo per effettuare uno spazio", width/80, height*0.365)
					ctx.fillText("Mostra la mano SINISTRA e mantienila qualche secondo per cancellare quanto scritto", width/80, height*0.38)

					//document.getElementById("testo").innerHTML = ""
	}
	}

	}



function point(ctx, x, y, r, color) {
	ctx.beginPath()
	ctx.arc(x, y, r, 0, 2 * Math.PI)
	ctx.fillStyle = color
	ctx.fill()
}

