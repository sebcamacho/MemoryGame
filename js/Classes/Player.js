// import { score } from "../functions/dom";

export class Player {
  lives = 3;
  score = 0;
  constructor(name) {
    this.name = name;
  }

  setScore(v) {
    this.score += v;
  }
  init(){
    this.score = 0
    this.getScore();
    this.lives = 3
    this.getLives();
  }

  getScore() {
    score.innerHTML = `score: ${this.score}`;

  }

  mistake() {
    if (this.lives > 0) {
      this.lives--;
      return this.getLives();
    }
  }

  addLives(v) {
    this.lives += v;
  }

  getLives() {
    lives.innerHTML = "";
    for (let i = 0; i < this.lives; i++) {
      lives.innerHTML += '<i class="fas fa-heart"></i> ';
    }
  }
}