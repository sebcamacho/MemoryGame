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
       "zebra.png"
    ]

    let level1 = [
      {1 : [1, 2, 3, 4, 5]},
      {2 : [6, 7, 8, 9, 10]},
      {3 : [11, 12, 13, 14, 15]},
      {4 : [16, 17, 18, 19, 20]},
      {5 : [21, 22, 23, 24, 25]},
    ];


    let newtab = randomValue(animals);
    let generatedTab = [];

    for (let i = 0; i < 5; i++) {
      generatedTab.push([i,newtab()]);
     
    }
    
    console.log(generatedTab);

    let tabFromNewTab = randomValue(generatedTab);
    let mixedGeneratedTab = [];
    for (let i = 0; i < 5; i++) {
      mixedGeneratedTab.push(tabFromNewTab());
    }
    console.log(mixedGeneratedTab);
    
    const promise = new Promise((resolve, reject) => {
     
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
      
    });   
    
    
    
    let idCard = [];

    
    
    
    let button;
    function check(button) {
        let card1 = document.getElementById("0");
        let card2 = document.getElementById("1");
        let card3 = document.getElementById("2");
        let card4 = document.getElementById("3");
        let card5 = document.getElementById("4");
        let cards = document.getElementsByClassName("card");
        
        
        
        // console.log(card1)
      
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
                selectCard.classList.add('nope')
                
                
                
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
           

    }

    // function compare(button, tab, i++){
    //     if(button == tab){
    //         idCard.push(button);
    //     }else{
    //         console.log('error')
    //     }
    // }

    
  

    function congrat(tab1, tab2){
        
        if (tab1.length == tab2.length){
            console.log('You win !')
            
        }else{
            console.log('waiting')
        
        }
    }
    function checkIt(button, num, tab){

            if(button == tab && tab.length == num){
                tab.push(button)
            }else(
                console.log('error')
            ) }

    function displayCard(pic) {
      let displayHtml = "";
      displayHtml +=
        "<img src='pic/Animals/" + pic[1] + "' >";
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
              ")'><img src='pic/Animals/" +
              pics[i][1] +
              "' ></button>";
            BOARD.innerHTML = displayMixedTab;
            
        }
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
        let animal = copy[index];
        copy.splice(index, 1);
        return animal;
      };
    }
    

// }