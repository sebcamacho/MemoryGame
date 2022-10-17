
import { letterPath, letters, animalPath, animals } from "./items/items.js";
import { Player } from "./Classes/Player.js";
import {openModal, closeModal} from './functions/modal.js';
import {generateItemPath, cancelTwin, randomValue} from './functions/fnToGenerateCard.js';
import {cards, header, displayChrono, lives, logoChrono, modalToChoose, wrapper} from './functions/dom.js'
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

    const player = new Player
        
    let generatedTab = [];
    let mixedGeneratedTab = [];
   
    mainMenu();
    function mainMenu(){
      let game;
      let practiceButton;
      displayChrono.innerText = '--'
      score.innerText +='0'

      game = document.createElement('button')
      game.setAttribute('id', 'game')
      game.disabled = 'true'
      game.append('Jeu')

      practiceButton = document.createElement('button');
      practiceButton.setAttribute("id", "practice");
      practiceButton.append('Entrainement')

      BOARD.append(practiceButton, game);

      practiceButton.addEventListener("click", function () {
        startGame(animals, animalPath, 3, 5);
        this.remove()
        game.remove()
      });
    }
    
   /**
    * 
    * @param {Array} tabItems 
    * @param {Array} path 
    * @param {Number} duration 
    * @param {Number} length
    * @param {Boolean} reset 
    */
    function startGame(tabItems, path, duration = 10, length = 5){
      
      header.style.display = "flex";
      idCard.length = 0;
      generatedTab.length = 0;
      mixedGeneratedTab.length = 0;
      displayChrono.innerText = "--";
      let testTab = []
      if(player.lives === 0){
      player.lives = 3
      }
      player.getLives();


      for (let i = 0; i < length; i++) {
        testTab.push(generateItemPath(tabItems, path))
      }

      cancelTwin(testTab, testTab.length, animals, animalPath);

      for (let i = 0; i < testTab.length; i++) {
          generatedTab.push([i, testTab[i]]);
      }

      let tabFromNewTab = randomValue(generatedTab);
      for (let i = 0; i < generatedTab.length; i++) {
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
        displayChrono.innerHTML = duration;
        let cards = document.querySelectorAll('.card');
        cards.forEach((card) => {
          card.addEventListener("click", onButtonClick);
        });
        setTimeout(() => {
          duringGame(duration);
          
        }, 1000);
      }, length * 2000);
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
  return new Promise(()=>{
      selectedButton.classList.add("great");
      selectedButton.disabled = true;
      currentTab.push(idbutton);
    })
  }

function notValidCard(button){
  return new Promise(()=>{
    button.classList.add("nope");
    player.mistake();
    setTimeout(() => {
      button.classList.remove("nope");
    }, 200);
  })
    
}

function duringGame(n) {
  displayChrono.innerText = n;
  logoChrono.classList.add('fa-beat')
  if (n === 0 ) {
    cards.forEach((card) => {
      card.disabled = true;
      card.removeEventListener("click", onButtonClick);
    });
    openModal(modalToChoose);
    restartGame(animals, animalPath);
    lose(`PERDU

    Temps écoulé`);
    logoChrono.classList.remove('fa-beat')
      
    return;
  }

  if (player.lives === 0){
    openModal(modalToChoose);
    restartGame(animals, animalPath);
    lose(`Perdu
    Fin de la partie`);
    logoChrono.classList.remove("fa-beat");

    return;
  }
    if (idCard.length === generatedTab.length) {
      openModal(modalToChoose);
      restartGame(animals, animalPath);
      logoChrono.classList.remove("fa-beat");
      win();
      return;
    }
    
  setTimeout(() => {
    duringGame(n - 1);
  }, 1000);
    
}
    

    function restartGame(tab, path){
        wrapper.insertAdjacentHTML('afterbegin', '<p class="message"></p>')
        wrapper.insertAdjacentHTML('beforeend', "<button id='restart'>Restart</button>");
        wrapper.insertAdjacentHTML("beforeend", "<button id='next'>Alphabet</button>");

        let restart = document.getElementById('restart');
        let next = document.getElementById("next");
        
        generateGame(restart, tab, path);
        generateGame(next, letters, letterPath);
    }

    function generateGame(el, game, gamepath){
      
      el.addEventListener('click', function(){
        startGame(game, gamepath)
        closeModal(modalToChoose);
        wrapper.innerHTML = "";
      
      })
      
    }
    
    function win () {
      
      let msg = document.querySelector(".message");
      msg.innerText = 'Gagné ! \r score : \r'
      msg.style.color = "#0ac3a7";
      wrapper.style.borderColor = "#0ac3a7";
      // insertAdjacentText("afterbegin", `Gagné ! score \n`);
    }

    function lose (txt) {
      let msg = document.querySelector(".message");
      msg.innerText = txt;
      msg.style.color = "#d83a37";
      wrapper.style.borderColor = "#d83a37";
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

    

