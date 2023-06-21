SUPSI 2022-23  
Corso d’interaction design, CV427.01  
Docenti: A. Gysin, G. Profeta  

Elaborato 3: Manipolazione

# Lingua_dei_Segni
Autore: Massimo Bordogna  
[MediaPipe demo-ES6](https://ixd-supsi.github.io/2023/esempi/mp_hands/es6/1_landmarks)

Breve video dimostrativo<br>
https://github.com/maxbordogna/Lingua_dei_Segni/blob/main/00_DOCUMENTAZIONE/video_dimostrativo.mp4

## Introduzione e tema
La consegna consisteva nel realizzare un sistema di interfaccia interagibile tramite l'utilizzo delle proprie mani, attraverso la computer vision. Le mani infatti devono essere al centro della gestione e manipolazione del sistema. 
<br><br>
Nel mio caso è stato realizzato un sistema di traduzione simultanea dell'alfabeto della lingua dei segni italiana. Lo scopo di questa interfaccia, è proprio quello di permettere a persone non udenti, di comunicare in tempo reale con persone che non conoscono il linguaggio dei segni. L'utilizzatore ha la possibilità di:<br> 
- scrivere, attraverso la lingua dei segni italiana<br> 
- cancellare e ricominciare <br> 
- far leggere al computer quanto scritto<br> 


## Riferimenti progettuali
Non sono stati utilizzati riferimenti progettuali precisi, la piattaforma è stata costruita in base alle esigenze del progetto e ai limiti/conoscenze del programmatore.
L'unico riferimento sfruttato è stato quello della classica visualizzazione di un programma televisivo tradotto per non udenti. Affianco alla trasmissione infatti, è posta l'immagine del traduttore/traduttrice che in tempo reale racconta quanto viene detto all'interno del programma.

![tv_lingua_segni](https://github.com/maxbordogna/Lingua_dei_Segni/assets/126773844/d45c3a24-4884-4f07-8a59-969e41386638)
<br><i>Esempio di programma televisivo tradotto per non udenti</i>


## Design dell’interfraccia e modalià di interazione
Il design è quindi estremamente semplice, nello stato base, la piattaforma presenta una divisione centrale con a destra ciò che è inquadrato dalla webcam e a sinistra le istruzioni d'uso per l'utente:
<br>
Delle immagini rappresentative dell'alfabeto italiano della lingua dei segni e dei testi istruttivi:<br>
<br>"Attiva il volume del computer"<br>
<br>"Mostra una lettera con la mano DESTRA e mantieni la posizione per confermarla"<br>
<br>"Mostra la mano DESTRA aperta e mantieni la posizione per effettuare uno spazio"<br>
<br>"Mostra la mano SINISTRA per cancellare quanto scritto"
<br><br>
Nel momento in cui l'utente mostra la mano destra e viene riconosciuta, spariscono le istruzioni e compare in basso a sinistra la lettera riconosciuta con in centro i keypoints della mano visibile nella webcam. Se l'utente mantiene la lettera visibile per qualche secondo essa viene confermata e scritta in alto a sinistra, aggiungendo altre lettere si possono comporre svariate parole.
<br><br>
Sollevando la mano sinistra l'utente ha la possibilità di cancellare tutto ciò che è stato scritto, purtroppo per dei limiti di conoscenze personali non è possibile né cancellare l'ultima lettera digitata, né scrivere delle doppie es. "ll" "ss" "tt".


Schermata base<br>
<img width="175" alt="Interazione_1" src="https://github.com/maxbordogna/Lingua_dei_Segni/assets/126773844/db6685f8-cc92-48c9-a3b8-d89715e0c9da">
<br>

Mano destra e lettera riconosciuta<br>
<img width="175" alt="Interazione_2" src="https://github.com/maxbordogna/Lingua_dei_Segni/assets/126773844/0abb3503-49bb-42ca-a7b1-09659a6f8765">
<br><br>
Scrittura in corso<br>
<img width="175" alt="Interazione_3" src="https://github.com/maxbordogna/Lingua_dei_Segni/assets/126773844/136f439a-ed9e-45be-832c-e90fdcd3f6a3">

<br>
<br>



## Tecnologia usata
La particolarità caratterizzante di questa piattaforma è l'utilizzo e il riconoscimento delle gestures, costruita con Javascript vanilla e grazie all'implementazione per l'appunto del riconoscimento delle gesture di Mediapipe, è possibile istruire il programma a riconoscere determinati gesti della mano e ad associargli un significato. Nel mio caso l'intero alfabeto della lingua dei segni italiana è stato codificato.
<br>Qui di seguito vi è un'esempio di come è stata costruita la gesture della lettera "A":
```JavaScript
//----------------------------------------------
//Lettera A
	A.addCurl(fp.Finger.Thumb, NO_CURL, 1.0);
	A.addCurl(fp.Finger.Thumb, HALF_CURL, 0.9);
	A.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 0.5);
  
	// altre dita
	for (let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
	  A.addCurl(finger, FULL_CURL, 1.0);
	}
 ```
La lettera viene quindi riconosciuta, mostrata sullo schermo e, se confermata mantenendola in vista per qualche secondo viene scritta all'interno del file HTML. Una volta composto un testo è possibile azzerare il tutto semplicemente mostrando due mani alla webcam.
<br>Qui di seguito la costruzione del codice del Frame Counter in grado di attendere prima di confermare una lettera:
```JavaScript
//----------------------------------------------
//Counter
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
```


## Target e contesto d’uso
Una versione più prestante dell'interfaccia potrebbe risultare utile sia per degli scopi educativi, sia per scopi funzionali, ovvero lo scambio vero e proprio di informazioni tra persone non udenti e persone che non conoscono la lingua dei segni. La versione attuale presenta ancora parecchi limiti e non permette un funzionamento garantito, ma sicuramente può essere una buona base. Io stesso costruendola ho imparato l'alfabeto della lingua dei segni abbastanza facilmente.



