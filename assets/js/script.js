// alert("test");

// manipulation de dom

// Grace à "document." et a une fonction native
//  sur le moteur de recherche

// 1 selectionner l'élément p
// 2 vérifier sur un console.log votre réussite
// 3 Afficher dans un console.log afficher uniquement
//   le contenu de la balise p

//    console.log(document.getElementsByClassName ("coucou")); #çamarchepas

// Correction: selection tout le document avec l'id Element
    let monElement = document.querySelector("#element");
    // un log du contenu de mon element
    console.log(monElement);
    // un log uniquement du textcontenu dans mon elements
    console.log(monElement.textContent);
    // modifier le text dans l'element qui porte l'id element

    monElement.textContent = "blah blah blah"

// ajouter la classe dark (que vous aurai préalablement définie) a
// l'élemet body de votre html. le tout dans une fonction darkOrLight()

// let darkOrLight = document.body.classList.add("dark");

    function darkOrLight() {
        let classDark = "dark";
        document.body.classList.add(classDark);
    };

    darkOrLight();

    let btn = document.querySelector("on-off");


    function click() {
        btn = darkOrLight();
    }


// correction: 
// let bodyElement = document.querySelector("#body");
// function darkOrLight() {
//      let classDark = "dark";
//      bodyElement.classList.add(classDark)
// };
//  darkOrLight();


