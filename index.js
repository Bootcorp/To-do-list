let nouvelleTache = document.getElementById("nouvelleTache");

let add = document.getElementById("btn1");
let count = 0;

add.addEventListener("click", () => {
  if (nouvelleTache.value == "") {
    return;
  }

  console.log(nouvelleTache.value);

  /*    creation p nouvelle tache */
  let p = document.createElement("p");
  p.textContent = nouvelleTache.value;

  /* creation des boutons doing/done/effacer */
  let doing = document.createElement("button");
  doing.textContent = "doing";
  doing.setAttribute("id", "doing");
  let done = document.createElement("button");
  done.textContent = "done";
  done.setAttribute("id", "done");
  let erase = document.createElement("button");
  erase.textContent = "effacer";
  erase.setAttribute("id", "erase");
  let liste = document.createElement("div");

  /*     Ajout des elements */
  liste.appendChild(p);
  liste.appendChild(doing);
  liste.appendChild(done);
  liste.appendChild(erase);
  let listeContainer = document.getElementById("liste");
  liste.setAttribute("id", "newTache");
  listeContainer.appendChild(liste);

  /* click event nouveaux boutons */
  erase.addEventListener("click", () => {
    liste.style.display = "none";
  });

  doing.addEventListener("click", () => {
    count++;
    liste.style.background = Number(count % 2) === 0 ? "black" : "orange";
  });

  done.addEventListener("click", () => {
    count++;
    liste.style.background = Number(count % 2) === 0 ? "black" : "green";
  });
  nouvelleTache.value = "";
});

window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);

  if (window.scrollY > 130) {
    nouvelleTache.style.background = "blue";
  } else {
    nouvelleTache.style.background = "yellow";
  }
});

// let i =465

// if (i > 487) {
//   body.style.background='blue'

// } else if (i>562){
//    body.style.background = "red";
// } else {
//      body.style.background = "green";
// }
