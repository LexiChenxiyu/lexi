let score = 0;
    let mole;
    let moleSize = 50;
    let moleSpeed = 5;
    let shadowLength = 10;
    let moleShadow = [];

    function setup() {
      createCanvas(windowWidth, windowHeight);
      mole = createMole();
    }

    function draw() {
      background(210,200,210);
      displayScore();
      drawMoleShadow();
      mole.display();
      mole.move();
    }

    function mouseClicked() {
      if (mole.hit(mouseX, mouseY)) {
        score++;
        mole = createMole();
      }
    }

    function createMole() {
      return {
        x: random(width - moleSize),
        y: random(height - moleSize),
        size: random(20, 70), // 随机大小
        color: color(random(255), random(255), random(255)), // 随机颜色
        display: function () {
          fill(this.color);
          ellipse(this.x + moleSize / 2, this.y + moleSize / 2, moleSize, moleSize);
        },
        move: function () {
          this.x += random(-moleSpeed, moleSpeed);
          this.y += random(-moleSpeed, moleSpeed);

          this.x = constrain(this.x, 0, width - moleSize);
          this.y = constrain(this.y, 0, height - moleSize);

          // 记录地鼠位置，用于绘制拖影
          moleShadow.push({ x: this.x, y: this.y, size: this.size, color: this.color });
          if (moleShadow.length > shadowLength) {
            moleShadow.shift();
          }
        },
        hit: function (mx, my) {
          return mx > this.x && mx < this.x + moleSize &&
                 my > this.y && my < this.y + moleSize;
        }
      };
    }

    function displayScore() {
      fill(0);
      textSize(24);
      text('Score: ' + score, 20, 30);
    }

    function drawMoleShadow() {
      noStroke();
      for (let i = 0; i < moleShadow.length; i++) {
        fill(moleShadow[i].color);
        ellipse(moleShadow[i].x + moleSize / 2, moleShadow[i].y + moleSize / 2, moleShadow[i].size, moleShadow[i].size);
      }
    }