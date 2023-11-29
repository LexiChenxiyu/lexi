function setup() {
      createCanvas(400, 400);
    }

    function draw() {
      background(255);

      // 计算眼球位置
      let eyeX = width / 2;
      let eyeY = height / 2;
      eyeSize = 80;
      // 绘制眼白
      fill(255);
      ellipse(eyeX, eyeY, eyeSize, eyeSize);

      // 计算瞳孔位置
      let angle = atan2(mouseY - eyeY, mouseX - eyeX);
      let pupilX = eyeX + cos(angle) * (eyeSize / 4);
      let pupilY = eyeY + sin(angle) * (eyeSize / 4);

      // 绘制瞳孔
      fill(0);
      ellipse(pupilX, pupilY, eyeSize / 2, eyeSize / 2);
    }