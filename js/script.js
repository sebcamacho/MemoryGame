// import { createElement } from "./functions/dom.js";
import { letterPath, letters, animalPath, animals } from "./items/items.js";

    const BOARD = document.querySelector("#board");

    let levelx = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];

    let level1 = [
      {1 : [1, 2, 3, 4, 5]},
      {2 : [6, 7, 8, 9, 10]},
      {3 : [11, 12, 13, 14, 15]},
      {4 : [16, 17, 18, 19, 20]},
      {5 : [21, 22, 23, 24, 25]},
    ];
    class Player{
      


    }
    
    
    let cards = document.querySelectorAll(".card");
 
    let generatedTab = [];
    let mixedGeneratedTab = [];

    mainMenu();
    function mainMenu(){
      let game;
      let practiceButton;
     
      game = document.createElement('button')
      game.setAttribute('id', 'game')
      game.disabled = 'true'
      game.append('Jeu')

      practiceButton = document.createElement('button');
      practiceButton.setAttribute("id", "practice");
      practiceButton.append('Entrainement')

      BOARD.append(practiceButton, game);
      practiceButton.addEventListener("click", function () {
        startGame(animals, animalPath, 10);
        
        this.remove()
        game.remove()
      });
    }
    
    
 
    let displayChrono = document.getElementById("chrono");


    function startGame(tabItems, path){
       idCard.length = 0;
      generatedTab.length = 0;
      mixedGeneratedTab.length = 0;
      displayChrono.innerHTML = "";
      let testTab = []
      
      
      for (let i = 0; i < 5; i++) {
        testTab.push(generateItemPath(tabItems, path))
      }

      cancelTwin(testTab, 5, animals, animalPath);

      for (let i = 0; i < 5; i++) {
          generatedTab.push([i, testTab[i]]);
      }

      let tabFromNewTab = randomValue(generatedTab);
      for (let i = 0; i < 5; i++) {
          mixedGeneratedTab.push(tabFromNewTab());
      }
     
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
        setTimeout(() => {
          countDown(10);
          
        }, 1000);
      }, 10000);
    }
    

let idCard = [];

/**
 * 
 * @param {PointerEvent} button 
 */
async function onButtonClick(button) {


let idButton = button.currentTarget.id;
let buttonClicked = button.currentTarget


  for (let i = 0; i < generatedTab.length; i++) {
    if (idButton == i && idCard.length == i && generatedTab[i][0] === i) {
      await validCard(idCard, idButton, buttonClicked);
    } 
  }

  notValidCard(buttonClicked);
}
 
  function validCard(currentTab, idbutton, selectedButton){
    console.log(validCard)
    return new Promise(()=>{
      selectedButton.classList.add("great");
      selectedButton.disabled = true;

      currentTab.push(idbutton);
    })
   
      
  }

  function notValidCard(button){
    return new Promise(()=>{
      console.log("nein");
      button.classList.add("nope");
      setTimeout(() => {
        button.classList.remove("nope");
      }, 200);
    })
    
  }

  function countDown(n) {
    displayChrono.innerText = n;
    if (n === 0 || idCard.length === 5) {
      cards.forEach((card) => {
        card.disabled = true;
      });
      restartGame(animals, animalPath);
      return;
    }
    
    setTimeout(() => {
      countDown(n - 1);
    }, 1000);
    
  }
    

    function restartGame(tab, path){

        BOARD.insertAdjacentHTML('beforeend', "<button id='restart'>Restart</button>");
        BOARD.insertAdjacentHTML("beforeend", "<button id='next'>Alphabet</button>");

        let restart = document.getElementById('restart');
        let next = document.getElementById("next");
        
        generateGame(restart, tab, path);
        generateGame(next, letters, letterPath);
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
      if (file){
      folder = randomValue(file);
      text = folder() + element();
      return text;
      }else{
        text =  element();
        return text
      }
     
    }

    /**
     * Before display pictures
     * To verificate and return Array without twin item and right length
     * @param {Array} tab 
     * @param {Number} num 
     * @param {String} item 
     * @param {String} path 
     * @returns {Array}
     */
    function cancelTwin(tab = Array, num = Number, item = String, path = String){
      tab.sort()
      for (let i = 0; i < num; i++) {
        if(tab[i] === tab[i+1]){
          tab.splice(i, 1)
        }
      }

      if (tab.length < num){
        let newItem = generateItemPath(item, path);
        tab.push(newItem);
        tab.sort();
      }
      
      let dif = Boolean;
      for (let i = 0; i < num; i++) {
        if (tab[i] !== tab[i + 1]) {
          dif == true
        }else{
          cancelTwin(tab, num, item, path)
        }
      }
      if(dif == true){
        
        return tab;
      }
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
    

