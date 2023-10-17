console.log("Script chargé !");
    const signes= ["/","*","+","-"]
let calculatrice= document.createElement("div")
    calculatrice.classList.add("calculatrice");
    document.body.appendChild(calculatrice);
    Affichage = [];

// ---------------------creation de mon affichage ---------------------
let unEcran=document.createElement("div");
 unEcran.classList.add("ecran");
 unEcran.innerText = 0;
 calculatrice.appendChild(unEcran);
//  ----------------------creation de mon clavier de calcul------------------------

let unClavier= document.createElement("div");        // Créer un élément <button>
    unClavier.classList.add("clavier");
    calculatrice.appendChild(unClavier);

     let paveNumerique=document.createElement("div")
    paveNumerique.classList.add("Pavenumerique")
    unClavier.appendChild(paveNumerique);

    for (let i = 0; i < 10; i++) {
            let uneTouche = document.createElement("button");
            uneTouche.classList.add("bouton-calc");
            uneTouche.innerText = i;
            console.log(uneTouche);
            paveNumerique.appendChild(uneTouche);
            
            uneTouche.addEventListener("click", function() {
                console.log("Vous avez cliqué sur : ", uneTouche.innerText);
                Affichage.push(uneTouche.innerText)
                console.log(Affichage);
                unEcran.innerText = Affichage.join("");
                
            })}
//-------div pour les signes----------//
        let divsignes= document.createElement("div");
        divsignes.classList.add("divsignes");
        unClavier.appendChild(divsignes);
        


//----- signes------//
         signes.forEach((element) => {
        let mesSignes=document.createElement("button");
        mesSignes.classList.add("Signes");
        mesSignes.innerText=[element];
        divsignes.appendChild(mesSignes);
            
        mesSignes.addEventListener("click", function() {
            Affichage.push(mesSignes.innerText)
            console.log(Affichage);
            unEcran.innerText = Affichage.join("");
            
        })
    })
        

//------------bouton point------------------//
        let boutonPoint = document.createElement("button");
        boutonPoint.innerText = ".";
        boutonPoint.classList.add("Point");
        paveNumerique.appendChild (boutonPoint);
        boutonPoint.addEventListener("click", function() {
            Affichage.push(boutonPoint.innerText)
            unEcran.innerText = Affichage.join("");
            
        })
//------------bouton AC------------------//
        let boutonAC = document.createElement("button");
        boutonAC.innerText = "AC";
        boutonAC.classList.add("bouttonAC");
        paveNumerique.appendChild (boutonAC);
        boutonAC.addEventListener("click", function reset() {
            Affichage =[];
            unEcran.innerText = 0;
            
        })
//------------bouton egale------------------//
         let boutonEgal = document.createElement("button");
         boutonEgal.innerText = "=";
         boutonEgal.classList.add("Egal");
         divsignes.appendChild (boutonEgal);
 // ------------Je crée ma fonction calculate----------
         let calcul = document.querySelector(".Egal");
    calcul.addEventListener('click', function ()  {
       unEcran.innerText = eval(document.querySelector(".ecran").innerText)
    })

    window.addEventListener("error", (e) => {
    alert("Une erreur est survenue dans votre calcul : " + e.error.message);
});
