(function () {
  let game = {
    rightPrice: 0,
    tries: 0,
    restart: true,
    scores: [],
    bestScores: {},
  };
  let i = 0;
  function scores() {
    let container = document.getElementById("container");
    container.style.display = "flex";
    for (const element of game.scores) {
      i++;
      game.bestScores[`Partie ${i}`] = element;
      let pname = `paragraph${i}`;
      const paragraph = document.createElement("p");
      paragraph.textContent = `Pour la partie ${i}, vous avez joué ${
        game.bestScores[`Partie ${i}`]
      }`;
      container.appendChild(paragraph);
    }
    console.table(game.bestScores);
  }
  do {
    let tries = 0;
    let answer = 0;
    game.min =
      parseInt(
        prompt("Donnez la valeur minimum du nombre aléatoire que vous voulez!")
      ) || 1;
    game.max =
      parseInt(
        prompt("Donnez la valeur maximum du nombre aléatoire que vous voulez!")
      ) || 10;
    (function random() {
      game.rightPrice = Math.round(
        Math.random() * (game.max - game.min) + game.min
      );
    })();
    function askuser() {
      answer = window.prompt("Quel est le juste prix");
    }
    function compare() {
      if (answer < game.rightPrice) {
        tries++;
        alert(
          `Pas assez mon gars! C'est plus que ${answer}\nTu as fait ${tries} essais`
        );
      } else if (answer > game.rightPrice) {
        tries++;
        alert(
          `Trop cher! trop cher! C'est moins que ${answer}\nTu as fait ${tries} essais`
        );
      } else {
        tries++;
        alert(
          `Ding! Ding! Ding! Tu as trouvé le juste prix\nIl t'a fallu ${tries} essais!`
        );
        game.scores.push(tries);
        scores();
        game.scores = [];
      }
    }
    block: while (answer !== game.rightPrice) {
      askuser();
      if (
        answer === "Exit" ||
        answer === "EXIT" ||
        answer === "exit" ||
        answer === null
      )
        break block;
      answer = parseInt(answer, 10);
      compare();
    }
    game.restart = window.confirm("Voulez jouer au Juste Prix ?");
  } while (game.restart);
  scores();
})();
