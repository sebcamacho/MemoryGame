export class Player {
  lives = 3;
  score = 0;
  constructor(name) {
    this.name = name;
  }

  setScore(v) {
    this.score += v;
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