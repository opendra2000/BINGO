// react imports
import React from 'react';

export class BINGO_Confetti extends React.Component {
  static CONFETTI_COLORS = [
    [54, 172, 193],
    [255, 127, 80],
    [31, 58, 147],
    [255, 205, 86],
    [102, 51, 153],
  ];

  static twoPI = 2 * Math.PI;

  constructor(props) {
    super(props);
    this.style = BINGO_Confetti.CONFETTI_COLORS[~~this.range(0, 5)];
    this.rgb = `rgba(${this.style[0]},${this.style[1]},${this.style[2]}`;
    this.r = ~~this.range(2, 6);
    this.r2 = 2 * this.r;
    this.replace();
  }

  range = function (a, b) {
    return (b - a) * Math.random() + a;
  };

  replace = () => {
    this.opacity = 0;
    this.dop = 0.03 * this.range(1, 4);
    this.x = this.range(-this.r2, this.props.width - this.r2);
    this.y = this.range(-20, this.props.height - this.r2);
    this.xMax = this.props.width - this.r;
    this.yMax = this.props.height - this.r;
    this.vx = this.range(0, 2) + 8 * this.props.positionX - 5;
    this.vy = 0.7 * this.r + this.range(-1, 1);
  };

  drawCircle = (x, y, r, style) => {
    this.props.context.beginPath();
    this.props.context.arc(x, y, r, 0, BINGO_Confetti.twoPI, false);
    this.props.context.fillStyle = style;
    this.props.context.fill();
  };

  draw = () => {
    var reference;
    this.x += this.vx;
    this.y += this.vy;
    this.opacity += this.dop;

    if (this.opacity > 1) {
      this.opacity = 1;
      this.dop *= -1;
    }
    if (this.opacity < 0 || this.y > this.yMax) {
      this.replace();
    }

    if (!(0 < (reference = this.x) && reference < this.xMax)) {
      this.x = (this.x + this.xMax) % this.xMax;
    }

    return this.drawCircle(
      ~~this.x,
      ~~this.y,
      this.r,
      `${this.rgb},${this.opacity})`
    );
  };
}
