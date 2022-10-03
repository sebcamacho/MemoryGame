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
        // startGame(animals, animalPath);
        chrono(5);
      });
      
      
      
      

    }

    function chrono(time){
      let timer = "";
      for (let i = time; i >= time; i--) {

        setTimeout(()=>{
          timer = i;
          BOARD.innerHTML = timer
        }, i * 1000)
        
      }
    }
    function startGame(tabItems, path){
        // let newtab = randomValue(tabItems);
        for (let i = 0; i < 5; i++) {
            generatedTab.push([i, generateItemPath(tabItems, path)]);
            for (let j = 1; j < generatedTab.length; j++) {
              console.log(generatedTab[i, j])
              if(generatedTab[i, j] !== generatedTab[i, j]){
                generatedTab.push([i, generateItemPath(tabItems, path)])
              }
              
            }
            
        }

        
        console.log(generatedTab);
        let tabFromNewTab = randomValue(generatedTab);
        for (let i = 0; i < 5; i++) {
          mixedGeneratedTab.push(tabFromNewTab());
        }
        console.log(mixedGeneratedTab);
     
    displayCard(generatedTab[0]);
      setTimeout(() => {
        displayCard(generatedTab[1]);
      }, 2000);

      setTimeout(() => {
        displayCard(generatedTab[2]);
      }, 4000);

      setTimeout(() => {
        displayCard(generatedTab[3]);
      }, 6000);

      setTimeout(() => {
        displayCard(generatedTab[4]);
      }, 8000);

      setTimeout(() => {
        displayCards(mixedGeneratedTab);
        
      }, 10000);
      
  
    }
    let idCard = [];
    let button;

    function check(button) {
        let card1 = document.getElementById("0");
        let card2 = document.getElementById("1");
        let card3 = document.getElementById("2");
        let card4 = document.getElementById("3");
        let card5 = document.getElementById("4");
        let cards = document.getElementsByClassName("card");
        
        

               if(button == card1.id){
              let test1 = new Promise((resolve, reject) => {
                if (button == generatedTab[0][0] && idCard.length == 0) {
                  idCard.push(button);
                  resolve(idCard);
                  return console.log("nice");
                } 
                    
                  reject('false');
                
              });
              test1
                .then((result) => {
                  console.log(result);
                  card1.disabled = true;
                  card1.classList.add("great");
                  console.log(test1);
                })
                .catch((e) => {
                    console.log(e);
                    
                  
                });
            }else{
                let selectCard;
                for (let i = 0; i < 5; i++) {
                    if (button == cards[i].id) {
                        selectCard = cards[i]
                    }
                }
                selectCard.classList.add('nope');

                setTimeout(()=>{
                    selectCard.classList.remove('nope')
                }, 500)
                
                
                
            }

              if(button == card2.id){
                  let test2 = new Promise((resolve, reject) => {
                    if (button == generatedTab[1][0] && idCard.length == 1) {
                      idCard.push(button);
                      resolve(idCard);
                      return console.log("nice");
                    } else {
                      reject("false");
                    }
                  });
                  test2
                    .then((result) => {
                      console.log(result);
                      card2.disabled = true;
                      card2.classList.add("great");
                      console.log(test2);
                    })
                    .catch((e) => {
                      console.log(e);
                    });
                }

                if(button == card3.id){
              let test3 = new Promise((resolve, reject) => {
                if (button == generatedTab[2][0] && idCard.length == 2) {
                  idCard.push(button);
                  resolve(idCard);
                  return console.log("nice");
                } else {
                  reject("false");
                }
              });
              test3
                .then((result) => {
                  console.log(result);
                  card3.disabled = true;
                  card3.classList.add("great");
                  console.log(test3);
                })
                .catch((e) => {
                  console.log(e);
                });
            }

                if(button == card4.id){
              let test4 = new Promise((resolve, reject) => {
                if (button == generatedTab[3][0] && idCard.length == 3) {
                  idCard.push(button);
                  resolve(idCard);
                  return console.log("nice");
                } else {
                  reject("false");
                }
              });
              test4
                .then((result) => {
                  console.log(result);
                  card4.disabled = true;
                  card4.classList.add("great");
                  console.log(test4);
                })
                .catch((e) => {
                  console.log(e);
                });
            }

            if(button == card5.id){
              let test5 = new Promise((resolve, reject) => {
                if (button == generatedTab[4][0] && idCard.length == 4) {
                  idCard.push(button);
                  resolve(idCard);
                  return console.log("nice");
                } else {
                  reject("false");
                }
              });
              test5
                .then((result) => {
                  console.log(result);
                  card5.disabled = true;
                  card5.classList.add("great");
                  console.log(test5);
                })
                .catch((e) => {
                  console.log(e);
                });
            }
            congrat(idCard, generatedTab);

           if(idCard.length == generatedTab.length){
            restartGame(idCard, animals, animalPath);
           }

    }
    

    
    function restart(){
        
    }
    
    function restartGame(reset, tab, path){

        BOARD.insertAdjacentHTML('beforeend', "<button id='restart'>Restart</button>");
        BOARD.insertAdjacentHTML("beforeend", "<button id='next'>Alphabet</button>");

        let restart = document.getElementById('restart');
        let next = document.getElementById("next");
        
        generateGame(restart, tab, path);
        generateGame(next, letters, letterPath);
        reset.length = 0;
        generatedTab.length = 0;
        mixedGeneratedTab.length = 0;

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
              "<button class='card' id=" +
              pics[i][0] +
              " onClick='check(" +
              pics[i][0] +
              ")'><img class='scrollPic' src='pic/" +
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
    

