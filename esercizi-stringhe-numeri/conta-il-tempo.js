/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

var Is = 12560;                    //itial seconds
var R1 = Is%3600;
var H = (Is-R1)/3600;
var Fs = R1%60;                   //final seconds
var M = (R1-Fs)/60;
console.log(H,M,Fs);
