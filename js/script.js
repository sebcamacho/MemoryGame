// window.onload = () => {

//     let canvas = new Board('#board');

    const BOARD = document.querySelector("#board");

    let levelx = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];

    

    
   
    const letterPath = [
      "Letters/Blue/",
      "Letters/Box/",
      "Letters/Brown/",
      "Letters/Marble/",
      "Letters/Metal/",
      "Letters/Solid/",
      "Letters/Wood/",
      "Letters/Yellow/",
    ];
 
    const letters = [
      "letter_A.png",
      "letter_B.png",
      "letter_C.png",
      "letter_D.png",
      "letter_E.png",
      "letter_F.png",
      "letter_G.png",
      "letter_H.png",
      "letter_I.png",
      "letter_J.png",
      "letter_K.png",
      "letter_L.png",
      "letter_M.png",
      "letter_N.png",
      "letter_O.png",
      "letter_P.png",
      "letter_Q.png",
      "letter_R.png",
      "letter_S.png",
      "letter_T.png",
      "letter_U.png",
      "letter_V.png",
      "letter_W.png",
      "letter_X.png",
      "letter_Y.png",
      "letter_Z.png",
    ];

    const animalPath = [
      "Animals/Round/",
      "Animals/Round-o/",
      "Animals/Square/",
      "Animals/Square-o/",
    ];
    const animals = [
      "bear.png",
      "buffalo.png",
      "chick.png",
      "chicken.png",
      "cow.png",
      "crocodile.png",
      "dog.png",
      "duck.png",
      "elephant.png",
      "frog.png",
      "giraffe.png",
      "goat.png",
      "gorilla.png",
      "hippo.png",
      "horse.png",
      "monkey.png",
      "moose.png",
      "narwhal.png",
      "owl.png",
      "panda.png",
      "parrot.png",
      "penguin.png",
      "pig.png",
      "rabbit.png",
      "rhino.png",
      "sloth.png",
      "snake.png",
      "walrus.png",
      "whale.png",
      "zebra.png",
    ];

    let level1 = [
      {1 : [1, 2, 3, 4, 5]},
      {2 : [6, 7, 8, 9, 10]},
      {3 : [11, 12, 13, 14, 15]},
      {4 : [16, 17, 18, 19, 20]},
      {5 : [21, 22, 23, 24, 25]},
    ];

    
    
    let cards = document.querySelectorAll(".card");
 
    let generatedTab = [];
    let mixedGeneratedTab = [];

    mainMenu();
    function mainMenu(){
      let game = "";
      let practiceButton ="";
      game = "<button id='game' disabled>Jeu</button>";
      practiceButton ="<button id='practice'>Entrainement</button>";
      BOARD.innerHTML = practiceButton + game;

      gamebutton = document.getElementById("game");
      practiceMode = document.getElementById("practice");
      
      practiceMode.addEventListener("click", function () {
        startGame(animals, animalPath, 10);
       
      });
      

    }
    
    
    

    
    function startGame(tabItems, path){
      generatedTab.length = 0;
      mixedGeneratedTab.length = 0;
    
      
        for (let i = 0; i < 5; i++) {
            generatedTab.push([i, generateItemPath(tabItems, path)]);

              if(generatedTab[i][1] !== generatedTab[i][1]){
                generatedTab.push([i, generateItemPath(tabItems, path)])
              }
            
        }

        console.log(generatedTab);
        let tabFromNewTab = randomValue(generatedTab);
        for (let i = 0; i < 5; i++) {
          mixedGeneratedTab.push(tabFromNewTab());
        }
        console.log(mixedGeneratedTab);
     
    /**
     * Display cards one by one before choice
     */
    for (let i = 0; i < generatedTab.length; i++) {
      setTimeout(() => {
        displayCard(generatedTab[i]);
      }, i * 2000);
      
    }
    /**
     * Display all Cards and add events on buttons
     */
      setTimeout(() => {
        displayCards(mixedGeneratedTab);
        displayChrono.innerHTML = 10;
        cards = document.querySelectorAll('.card');
        cards.forEach((card) => {
          card.addEventListener("click", onButtonClick);
        });
      }, 10000);
    }
    let idCard = [];


let displayChrono = document.getElementById("chrono");
/**
 * 
 * @param {PointerEvent} button 
 */
function onButtonClick(button) {

  console.log(button.button)
  
let idButton = button.currentTarget.id;
let buttonClicked = button.currentTarget
 
  if(displayChrono.textContent == 10){
    countDown(10);
  }

        for (let i = 0; i < generatedTab.length; i++) {
          if (idButton == i && idCard.length == i && generatedTab[i][0] === i) {
            validCard(idCard, idButton, buttonClicked);
            console.log(idCard);
          } else {
            notValidCard(buttonClicked);
          }
          
        }

        if (idCard.length == generatedTab.length) {
          restartGame(idCard, animals, animalPath);
        }
   


  if (idCard.length == generatedTab.length) {
    restartGame(idCard, animals, animalPath);
  }
}




  function validCard(currentTab, idbutton, selectedButton){
      currentTab.push(idbutton)
      selectedButton.disabled = true;
      selectedButton.classList.add('great')
  }
  function notValidCard(button){
      button.classList.add("nope");

      setTimeout(() => {
        button.classList.remove("nope");
      }, 500);
  }

  function stopCount(){
    displayChrono.textContent
  }
  function countDown(n) {
    displayChrono.innerHTML = n;
    if (n === 0) {
      cards.forEach((card) => {
        card.disabled = true;
      });
      return;
    }
    
    setTimeout(() => {
      countDown(n - 1);
    }, 1000);
  
  }
    

    function restartGame(reset, tab, path){

        BOARD.insertAdjacentHTML('beforeend', "<button id='restart'>Restart</button>");
        BOARD.insertAdjacentHTML("beforeend", "<button id='next'>Alphabet</button>");

        let restart = document.getElementById('restart');
        let next = document.getElementById("next");
        
        generateGame(restart, tab, path);
        generateGame(next, letters, letterPath);
        reset.length = 0;
        

    }

    function generateGame(el, game, gamepath){
      el.addEventListener('click', function(){
        startGame(game, gamepath)
      })
    }

    function congrat(tab1, tab2){
        
        if (tab1.length == tab2.length){
            console.log('You win !')
            
        }else{
            console.log('waiting')
        
        }
    }
    

    function displayCard(pic) {
      let displayHtml = "";
      displayHtml +=
        "<img class='scrollPic' src='pic/" + pic[1] + "' >";
      BOARD.innerHTML = displayHtml;
    }

    function displayCards(pics) {
        let displayMixedTab = "";
        for (let i = 0; i < pics.length; i++) {
            displayMixedTab +=
              "<button class='card' id='" +
              pics[i][0] +
              "'><img class='scrollPic' src='pic/" +
              pics[i][1] +
              "' ></button>";
            BOARD.innerHTML = displayMixedTab;
            
        }
    }

    function generateItemPath(item, file) {
      let text = "";
      let folder = "";
      let element = "";
      element = randomValue(item);
      folder = randomValue(file);
      text = "" + folder() + element() + "";
      return text;
     
    }
   
    function cardSelected(f){
        idCard = [];
        idCard.push(f)
        console.log(idCard)
    } 
    
    function randomValue(tab) {
      let copy = tab.slice(0);

      return function () {
        if (copy.length < 1) {
          copy = tab.slice(0);
        }
        let index = Math.floor(Math.random() * copy.length);
        let element = copy[index];
        copy.splice(index, 1);
        return element;
      };
    }
    

