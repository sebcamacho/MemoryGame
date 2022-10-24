
import * as items from "./items/items.js";
import { Player } from "./Classes/Player.js";
import {openModal, closeModal} from './functions/modal.js';
import {generateItemPath, cancelTwin, randomValue} from './functions/fnToGenerateCard.js';
import {cards, header, displayChrono, lives, logoChrono, modalToChoose, wrapper, score, showButtons, messageWrapper} from './functions/dom.js'
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
        startGame(items.animals, items.animalPath, 10, 5);
        this.remove()
        game.remove()
      });
    }

    let GameParams = {
      tabItems : "",
      path : "",
      duration : 10,
      numberOfCards : 5,
      displayOneCardDelay : 2000
    };
    
   /**
    * 
    * @param {Array} tabItems 
    * @param {Array} path 
    * @param {Number} duration 
    * @param {Number} length
    * @param {Boolean} reset 
    */
    function startGame(tabItems, path, duration = 10, numberOfCards = 5, displayOneCardTime = 2000){
      
      header.style.display = "flex";
      idCard.length = 0;
      generatedTab.length = 0;
      mixedGeneratedTab.length = 0;
      displayChrono.innerText = "--";
      let testTab = []
      if(player.lives === 0){
      
      player.init();
      }
      player.getLives();
      BOARD.style.paddingTop = "30px";

      for (let i = 0; i < numberOfCards; i++) {
        testTab.push(generateItemPath(tabItems, path))
      }

      cancelTwin(testTab, testTab.length, tabItems, path);

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
        }, i * displayOneCardTime);
      
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
      }, numberOfCards * displayOneCardTime);
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
    restartGame();
    lose(`PERDU

    Temps écoulé`);
    logoChrono.classList.remove('fa-beat')
    player.mistake();
    return;
  }

  if (player.lives === 0){
    openModal(modalToChoose);
    restartGame();
    lose(`Perdu
    Fin de la partie`);
    logoChrono.classList.remove("fa-beat");

    return;
  }
    if (idCard.length === generatedTab.length) {
      openModal(modalToChoose);
      restartGame();
      logoChrono.classList.remove("fa-beat");
      win();
      return;
    }
  
  setTimeout(() => {
    duringGame(n - 1);
   
  }, 1000);
    
}

    function restartGame(){
        messageWrapper.insertAdjacentHTML('afterbegin', '<p class="message"></p>')
        showButtons.insertAdjacentHTML('beforeend', "<button id='animaux'>Animaux</button>");
        showButtons.insertAdjacentHTML("beforeend", "<button id='letter'>Alphabet</button>");
        showButtons.insertAdjacentHTML("beforeend","<button id='runes'>Runes</button>");
        showButtons.insertAdjacentHTML("beforeend", "<button id='taches'>Tâches</button>" );
        showButtons.insertAdjacentHTML("beforeend","<button id='fume'>Fumée</button>");

        let animaux = document.getElementById('animaux');
        let letter = document.getElementById("letter");
        let runes = document.getElementById("runes");
        let taches = document.getElementById("taches");
        let fume = document.getElementById("fume");
       
        
        generateGame(animaux, items.animals, items.animalPath);
        generateGame(letter, items.letters, items.letterPath);
        generateGame(runes, items.runes, items.runePath);
        generateGame(taches, items.splats, items.pathSplat);
        generateGame(fume, items.smokes, items.pathSmoke);
    }

    function generateGame(el, game, gamepath){
      
      el.addEventListener('click', function(){
        startGame(game, gamepath)
        closeModal(modalToChoose);
        messageWrapper.innerHTML = "";
        showButtons.innerHTML = "";
      
      })
      
    }
    
    function win () {
      
      let msg = document.querySelector(".message");
      
      msg.style.color = "#0ac3a7";
      wrapper.style.borderColor = "#0ac3a7";
      player.setScore(1135 * displayChrono.textContent)
      player.getScore()
      msg.innerText = "Gagné ! \r\r" ;
     
      setTimeout(()=>{
        msg.innerText += score.textContent;
      }, 500)
      
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
        "<div class='bgCard'><img class='scrollPic' src='pic/" + pic[1] + "' ></div>";
        
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

    

