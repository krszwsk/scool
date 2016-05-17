// Generated by CoffeeScript 1.10.0
(function() {
  $(document).ready(function() {
    var $canvas, H, Paddle, W, ball, ctx, paddles, paintCanvas, particles;
    window.requestAnimFrame = (function() {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
        return window.setTimeout(callback, 1000 / 60);
      };
    })();
    $canvas = $('#canvas');
    ctx = canvas.getContext('2d');
    W = 600;
    H = 600;
    canvas.width = W;
    canvas.height = H;
    ctx.fillRect(0, 0, W, H);
    particles = [];
    ball = {};
    paddles = [];
    ball = {
      x: 50,
      y: 50,
      r: 5,
      c: 'white',
      vx: 4,
      vy: 8,
      draw: function() {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        return ctx.fill;
      }
    };
    Paddle = (function() {
      function Paddle(pos) {
        var ref;
        this.pos = pos;
        this.h = 5;
        this.w = 150;
        this.x = W / 2 - this.w / 2;
        this.y = (ref = pos === 'top') != null ? ref : {
          0: H - this.h
        };
      }

      return Paddle;

    })();
    paddles.push(new Paddle('bottom'));
    paddles.push(new Paddle('top'));
    return paintCanvas = function() {
      ctx.fillStyle = 'black';
      return ctx.fillRect(0, 0, W, H);
    };
  });

}).call(this);
