if (typeof CloudAPI === 'undefined') {
   window.CloudAPI = undefined;
}

let Engine = {
  minWidth: 640,
  minHeight: 360,

  maxWidth: window.innerWidth,
  maxHeight: window.innerHeight,

  width: 1000,
  height: 640,

  spritesheet: 'jumper',
  scaleRatio: 0.25, // 0.35
  magnetDistace: 300
}
