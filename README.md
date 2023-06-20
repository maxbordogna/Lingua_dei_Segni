# Lingua_dei_Segni
SUPSI 2022-23  
Corso d’interaction design, CV427.01  
Docenti: A. Gysin, G. Profeta  

Elaborato 2: Antologia a due mani  

# Conteggio con le mani
Autore: Massimo Bordogna  
[MediaPipe demo-ES6](https://ixd-supsi.github.io/2023/esempi/mp_hands/es6/1_landmarks)

Breve video dimostrativo<br>
https://github.com/maxbordogna/finger_counting/blob/main/img_readme/conteggio_con_le_mani.mp4

## Introduzione e tema
La consegna consisteva nel realizzare un sistema di interfaccia interagibile tramite l'utilizzo delle proprie mani, attraverso la computer vision. Le mani infatti devono essere utilizzate per manipolare il sistema. 
<br><br>
Nel mio caso è stato realizzato un sistema di tradizione simultanea dell'alfabeto della lingua dei segni italiana. Lo scopo di questa interfaccia, è proprio quello di permettere a persone non udenti, di comunicare in tempo reale con persone che non conoscono il linguaggio dei segni. L'utilizzatore ha la possibilità di:<br> 
- scrivere, attraverso la lingua dei segni italiana<br> 
- cancellare e ricominciare <br> 
- far leggere al computer quanto scritto<br> 


## Riferimenti progettuali
Non sono stati utilizzati riferimenti progettuali precisi, la piattaforma è stata costruita in base alle esigenze del progetto e alle conoscenze e del programmatore.
L'unico riferimento sfruttato è stato quello della classica visualizzazione di un programma televisivo tradotto per non udenti. Affianco alla trasmissione infatti, è posta l'immagine del traduttore/traduttrice che in tempo reale racconta quanto viene detto all'interno del programma.

![tv_lingua_segni](https://github.com/maxbordogna/Lingua_dei_Segni/assets/126773844/d45c3a24-4884-4f07-8a59-969e41386638)
<br><i>Esempio di programma televisivo tradotto per non udenti</i>


## Design dell’interfraccia e modalià di interazione
Il design è quindi estremamente semplice, nello stato di partenza la piattaforma presenta una divisione centrale con a destra ciò che è inquadrato dalla webcam e a sinistra le istruzioni d'uso per l'utente:
<br>
Delle immagini rappresentative dell'alfabeto italiano della lingua dei segni e dei testi istruttivi:<br>
<br>"Mostra una lettera con la mano DESTRA e mantieni la posizione per confermarla"<br>
"Mostra due mani per cancellare quanto scritto"
<br><br>
Nel momento in cui l'utente mostra la mano destra e viene riconosciuta, spariscono le istruzioni e compare in basso a sinistra la lettera riconosciuta e in centro i keypoints della mano visibile nella webcam.
<br><br>
Se l'utente mantiene la lettera visibile per qualche secondo essa viene confermata e scritta in alto a sinistra, aggiungendo altre lettere si possono comporre svariate parole.
<br><br>
Sollevando due mani l'utente ha la possibilità di cancellare tutto ciò che è stato scritto.




[<img src="img_readme/interazione_1.png" width="200" alt="Interazione base">]()<br>
Schermata base<br><br>
[<img src="img_readme/interazione_2.png" width="200" alt="Interazione in corso">]()<br>
Mano destra riconosciuta<br><br>
[<img src="img_readme/catalogo.png" width="200" alt="Catalogazione">]()<br>
Scrittura in corso<br><br>



## Tecnologia usata
L'intero sito è strutturato su diverse pagine, ogniuna appartenente ad un capitolo specifico, per raggiungerle basta utilizzare la navigazione in alto a sinistra e cliccare la pagina desiderata.
Tutte le pagine sono strutturate con un sistema di 10 colonne, colonne che vengono sfruttate per l'organizzazione dei contenuti.
Qui di seguito un esempio di suddivisione in colonne nel CSS:
```CSS
/*----------------------------------------------*/
/*esempio suddivisione in colonne*/
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
```
<br>
L'interfaccia interattiva invece riconosce in numeri a dipendenza della distanza tra i vari punti della mano, di seguito un esempio:

```JavaScript
//----------------------------------------------
//Esempio codice riconoscimento dei numeri
if (hands.length == 1) {

			const manoA = hands[0]

			const indiceA  = manoA.keypoints[8]
			const polliceA = manoA.keypoints[4]
			const medioA = manoA.keypoints[12]
			const anulareA = manoA.keypoints[16]
			const mignoloA = manoA.keypoints[20]
			const palmoA = manoA.keypoints[0]
			const centroA = manoA.keypoints[5]
			const centroB = manoA.keypoints[13]

			const indicepalmo = dist(indiceA.x, indiceA.y, palmoA.x, palmoA.y)
			const pollicecentro = dist(polliceA.x, polliceA.y, centroA.x, centroA.y)
			const mediopalmo = dist(medioA.x, medioA.y, palmoA.x, palmoA.y)
			const anularepalmo = dist(anulareA.x, anulareA.y, palmoA.x, palmoA.y)
			const mignolopalmo = dist(mignoloA.x, mignoloA.y, palmoA.x, palmoA.y)
			const pollicecentroB = dist(polliceA.x, polliceA.y, centroB.x, centroB.y)

			if (pollicecentro>50 && indicepalmo>50 && mediopalmo>50 && anularepalmo>50 && mignolopalmo<100){
				background(255)
				image(img1, width/2-371/2/2, height/2- 586/2/2, 371/2, 586/2)
			}
			else if (pollicecentro>50 && indicepalmo>100 && mediopalmo>100 && anularepalmo<100 && mignolopalmo<100){
				background(255)
				image(img2, width/2-371/2/2, height/2- 586/2/2, 371/2, 586/2)
			}
			else if (pollicecentro>50 && indicepalmo>100 && mediopalmo<100 && anularepalmo<100 && mignolopalmo<100){
				background(255)
				image(img3, width/2-371/2/2, height/2- 586/2/2, 371/2, 586/2)
			}
			else if (pollicecentro>50 && indicepalmo<100 && mediopalmo<100 && anularepalmo<100 && mignolopalmo<100){
				background(255)
				image(img4, width/2-371/2/2, height/2- 586/2/2, 371/2, 586/2)
			}
			else if (pollicecentro<50 && indicepalmo<100 && mediopalmo<100 && anularepalmo<100 && mignolopalmo<100){
				background(255)
				image(img5, width/2-371/2/2, height/2- 586/2/2, 371/2, 586/2)
			}
			else if (pollicecentro>50 && indicepalmo>100 && mediopalmo>100 && anularepalmo>100 && mignolopalmo>100){
				background(255)
				image(img0, width/2-371/2/2, height/2- 586/2/2, 371/2, 586/2)
			}}
```

## Target e contesto d’uso
Il target di questo progetto sono persone di ogni età con accesso ad un computer, che hanno la necessità o il desiderio di informarsi sul tema del conteggio con le mani. 
Il contesto d'uso può quindi variare, potrebbe essere semplicemente un utilizzo personale e casalingo, oppure per scopi didattici può essere fruito in contesti educativi.



