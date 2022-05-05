// Exercices:
// POUR TOUS LES EXOS: afficher en console à chaque fois
// 1. Essayer d'afficher en console la div avrc l'id container
// 2. Essayer de fabriquer un paragraph et de l'afficher en console
// 3. Essayer de mettre un texte dans le paragraph et...
// 4. Essayer de mettre un "<span>Mot</span>" dans le paragraph et...
// 5. Essayer d'afficher votre paragraph DANS le container

// exo1
let container = document.getElementById("container");
console.log("container");

// exo2
const paragraph = document.createElement("p");
console.log(paragraph);

//exo3
const newContent = document.createTextNode("Hi there and greetings!");
paragraph.appendChild(newContent);

//exo4
console.log(
  document.createElement("span").appendChild(document.createTextNode("Mot"))
);

//exo5
document.getElementById("container").appendChild(paragraph);
