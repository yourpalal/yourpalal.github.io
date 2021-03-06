var raf = requestAnimationFrame,
    colors = ["red", "orange", "blue", "purple"],
    forward = {
      spin: 1,
      shoot: "yellow",
      unshoot: "black",
      avatar: "red",
      unavatar: "white",
      box: "white",
      text: "white",
      untext: "black",
    },
    reversed = {
      spin: -1,
      shoot: "white",
      unshoot: "black",
      avatar: "red",
      unavatar: "white",
      box: "yellow",
      next: forward,
      text: "black",
      untext: "white",
    };
forward.next = reversed;

var Enemy = function() {
  this.update = () => {
    x += (vx / 60);
    y += (vy / 60);

    if (this.oob()) {
      this.reset();
    }
  };

  this.draw = (c) => {
    c.moveTo(x - 5, y - 5);
    c.rect(x - 5, y - 5, 10, 10);
  };

  this.splat = (c) => {
    c.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
    c.fillStyle = "black";
    c.beginPath();
    for (var i = 0; i < 40; i++) {
      c.moveTo(x - 5, y - 5);
      var angle = Math.PI * 2 * Math.random(),
          radius = Math.random() * 50;
      c.rect(x + (radius * Math.sin(angle)),
              y + (radius * Math.cos(angle)),
             10, 10);
    }
    c.stroke();
    c.fill();
  };

  this.oob = () => (x < 0 || x > 405 || y < 0 || y > 405);
  this.reset = () => {
    x = Math.random() * 400;
    y = Math.round(Math.random()) * 400
    if (Math.random() > 0.5) {
      var _x = x;
      x = y;
      y = _x;
    }

    vx = (200 - x) * (Math.random() * 0.5 + 0.3);
    vy = (200 - y) * (Math.random() * 0.5 + 0.3);
  };

  this.angle = (x0, y0) => Math.atan2(y - y0, x - x0);
  this.dist_squared = (x0, y0) => Math.sqrt((x - x0) * (x - x0) + (y - y0) * (y - y0));
  this.reset();
};

var User = function(x, y) {
  var vr = 0, angle = 0
  this.firing = 0;

  this.update = (how) => {
    if (this.firing > 0) {
      this.firing ++;
    }

    angle += (0.1 - Math.min(0.09, this.firing / 800)) * how.spin;
    // keep angle in [-pi, pi]
    if (angle > Math.PI) {
      angle -= Math.PI * 2;
    } else if (angle < -Math.PI) {
      angle += Math.PI * 2;
    }
  };

  // draw user ^ shape
  this.draw_t = (c, color) => {
    c.beginPath();
      c.strokeStyle = color;
      c.moveTo(20, 0);
      c.lineTo(0, -9);
      c.moveTo(20, 0);
      c.lineTo(0, 9);
    c.stroke();
  };

  // draw line out of ^ shape
  this.draw_shot = (c, color) => {
    if (this.firing <= 0) { return; }
    c.beginPath();
      c.strokeStyle = color;
      c.moveTo(0, 0);
      c.lineTo(this.shot_length(), 0);
    c.stroke();
  };

  this.draw = (c, how) => {
    c.translate(x, y);
    c.rotate(angle - 0.1);
    this.draw_t(c, how.unavatar);
    this.draw_shot(c, how.unshoot);

    c.rotate(0.1);
    this.draw_t(c, how.avatar);
    this.draw_shot(c, how.shoot);

    c.resetTransform();
  };

  this.shot_length = () => (Math.sin(this.firing / 40) / 2 + 0.5) * 250;

  // check if the user has hit an enemy
  this.hits = (e) => {
    if (this.firing <= 0) {return false;}
    var rads = e.angle(x, y); // \in [-pi, pi]
    if (((rads - angle)  * (rads - angle)) > 0.01) {
      return false;
    }
    var max_dist = this.shot_length();
    if (e.dist_squared(x, y) > (max_dist * max_dist)) {
      return false;
    }
    return true;
  }

  this.hit_by = (e) => (e.dist_squared(x, y) < 20);
};

// HUD draws the numbers
var Hud = function(game, ctx) {
  this.draw = (how) => {
    ctx.strokeStyle = how.untext;
    ctx.strokeText(game.ticks - 1, 10, 50);

    ctx.strokeStyle = how.text;
    ctx.strokeText(game.ticks, 10, 50);
  };
};

var Game = function(bg) {
  var ctx = bg.getContext("2d")
    enemies = [new Enemy()],
    u = new User(200, 200),
    hud = new Hud(this, ctx),
    how = forward
  ;

  this.sounds = new Sounds(this);
  this.ticks = 0;
  this.user = u;


  this.update = () => {
    this.ticks++;
    hud.draw(how);

    if (this.ticks % 3000 == 0) {
      this.spawn();
    }

    ctx.strokeStyle = how.box;
    enemies.forEach((e) => {
      e.update();
      ctx.beginPath();
      e.draw(ctx, how);
      ctx.stroke();

      if (u.hits(e)) {
        e.splat(ctx);
        e.reset();
      } else if (u.hit_by(e)) {
        this.reset();
      }
    });

    u.draw(ctx, how);

    ctx.strokeStyle = "green";
    u.update(how);
    ctx.beginPath();
    u.draw(ctx, how);
    ctx.stroke();

    this.sounds.update();

    raf(this.update);
  };

  this.spawn = () => {
    enemies.push(new Enemy());
  }

  this.start = () => {
    raf(this.update);
  };

  this.reset = () => {
    how = how.next;
    this.ticks = 0;
    this.enemies = [new Enemy()];
  };

  this.fire = () => {
    this.user.firing++;
  };

  this.unfire = () => {
    this.user.firing = 0;
  };
};

var Sounds = function(game) {
  var ac = new (window.AudioContext || window.webkitAudioContext)();
  var global_gain = ac.createGain();
  global_gain.connect(ac.destination);

  var player = ac.createOscillator();
  player.type = 'square';
  player.frequency.value = 40;
  player.connect(global_gain);
  player.start();

  var sub = ac.createOscillator();
  sub.type = 'saw';
  sub.frequency.value = 40;
  sub.connect(global_gain);
  sub.start();

  this.mute = () => global_gain.gain.value = global_gain.gain.value > 0 ? 0 : 1;

  this.update = () => {
    player.detune.value = game.user.shot_length() / 6 + 20;
  };
};



var game;

window.onload = () => {
  var bg = document.getElementById("bg");
  game = new Game(bg);
  game.start();

  document.getElementById("mute").onclick = () => {
    game.sounds.mute();
  };

  document.getElementById("fullscreen").onclick = () => {
    if (bg.requestFullscreen) {
      bg.requestFullscreen();
    } else if (bg.msRequestFullscreen) {
      bg.msRequestFullscreen();
    } else if (bg.mozRequestFullScreen) {
      bg.mozRequestFullScreen();
    } else if (bg.webkitRequestFullscreen) {
      bg.webkitRequestFullscreen();
    }
  };

  window.onmousedown = () => {
    game.fire();
  };

  window.onmouseup = () => {
    game.unfire();
  };

  window.ontouchstart = () => {
    game.fire();
  };

  window.ontouchend = () => {
    game.unfire();
  };

  window.onkeydown = () => {
    game.fire();
  };

  window.onkeyup = () => {
    game.unfire();
  };
};
