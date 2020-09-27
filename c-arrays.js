// ==========================================
// 1. Declareer een variabele en sla daar een array met vier jaartallen in op.              // bijv. 2020, 2019, 2018 en 2017
// ==========================================
let jaarTallen=[2020, 2019, 2018, 2017];


// ==========================================
// 2. Declareer een variabele en sla daar een array met drie van jouw hobbies in op.         // bijv. schaken, koekjes eten en muziek luisteren
// ==========================================
let hobbies = ["Fitness", "Schaken", "Dammen"]

// ==========================================
// 3a. Declareer een variabele met daarin een array met de waardes 3, 4, 5, 7 en 2
// 3b. Log de waarde 3 uit de array in de terminal                                          // geeft 3
// ==========================================
const waarde1 = [3, 4, 5, 7, 2];
console.log(waarde1[0]);

// ==========================================
// 4a. Declareer een variabele met daarin een array met de waardes groen, geel, rood, paars, blauw en oranje
// 4b. Log de waarde blauw uit de array in de terminal                                      // geeft blauw
// 4c. Log de waarde geel uit de array in de terminal                                       // geeft geel
// ==========================================
const kleuren= ["groen", "geel", "rood", "paars", "blauw", "oranje"];
console.log(kleuren[4]);
console.log(kleuren[1]);
// ==========================================
// 5a. Declareer een variabele met daarin een array met de waardes 21, 22, 23, 25, 25
// 5b. Pas een van de items in de array aan zodat de cijferreeks netjes doorloopt
// 5c. Log de de array in de terminal                                                       // geeft [ 21, 22, 23, 24, 25 ]
// ==========================================
const oplopendeWaarde = [21, 22, 23, 25, 25];
oplopendeWaarde[oplopendeWaarde.length-1] = 26;
console.log(oplopendeWaarde);
// ==========================================
// 6a. Declareer een variabele met daarin een array met de waardes bladerdeeg, knoflook, spinazie
// 6b. Verander daarna de waarde bladerdeeg in lasagne bladen
// 6c. Log de de array in de terminal                                                       // geeft [ 'lasagne bladen', 'knoflook', 'spinazie' ]
// 6d. Log de lengte van de array in de terminal                                            // geeft 3
// ==========================================
let lasagneIngridienten = ["bladerdeeg", "knoflook", "spinazie"];
lasagneIngridienten[lasagneIngridienten.indexOf("bladerdeeg")]= "lasagne bladen";
console.log(lasagneIngridienten);
console.log(lasagneIngridienten.length);