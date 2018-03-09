import Phaser from 'phaser';
import { config } from '../../config';
import Trail from './trail';
import AirTrail from './air-trail';
import MagnetEffect from './magnet';
import Wings from './wings';
import Fire from './fire';
import Blood from './blood';

export default class Bunny extends Phaser.Sprite {
  constructor(game, x, y, name) {
    super(game, x, y, config.spritesheet, `${name}_stand.png`);

    this.data.name = name;
    this.data.magnet = false;
    this.data.isDead = false;
    this.data.running = false;
    this.data.jetPack = false;
    this.data.countJump = Bunny.MAX_JUMPS;

    this.game.physics.arcade.enable([this]);

    this.width *= config.scaleRatio;
    this.height *= config.scaleRatio;

    this.body.gravity = { ...Bunny.GRAVITY };
    this.body.maxVelocity = { ...Bunny.MAX_VELOCITY };
    this.body.collideWorldBounds = true;

    this.onDied = new Phaser.Signal();

    this.createAnimation();
    this.createDieAnimation();
    this.animations.play('run');

    this.addSounds();
    this.addMagnetEffect();
    this.addWings();
    this.addFire();

    this.jetPackSprite = this.game.make.sprite(
      0,
      0,
      config.spritesheet,
      'jetpack.png'
    );

    this.addChild(this.jetPackSprite);
    this.jetPackSprite.alpha = 0;
  }

  activateJetPack() {
    this.data.jetPack = true;
    this.data.trail.stopEmitt();

    this.body.velocity.setTo(0);
    this.body.maxVelocity = { ...Bunny.JETPACK_VELOCITY };
    this.body.gravity.setTo(0, 0);

    this.jetPackSprite.alpha = 1;

    this.activateGod();
    this.fire.show();

    this.game.add
      .tween(this)
      .to(
        {
          rotation: Math.PI / 2
        },
        100
      )
      .start();

    setTimeout(this.diactivateJetPack, Bunny.JETPACK_TIME);
  }

  diactivateJetPack = () => {
    const tween = this.game.add
      .tween(this.body.maxVelocity)
      .to(
        {
          x: 400
        },
        500
      )
      .start();

    tween.onComplete.add(() => {
      this.data.jetPack = false;
      this.data.trail.startEmitt();
      this.body.gravity = { ...Bunny.GRAVITY };

      this.body.velocity.setTo(Bunny.BASE_MAX_SPEED, 0);
      this.body.acceleration.setTo(Bunny.ACCELERATION, 0);

      this.jetPackSprite.alpha = 0;

      this.diactivateGod();
      this.fire.hide();
      this.rotation = 0;

      this.game.add
        .tween(this)
        .to(
          {
            rotation: 0
          },
          100
        )
        .start();
    }, this);
  };

  activateWings() {
    const wingsJumps = 100;

    this.wings.show();

    this.data.countJump = wingsJumps;

    if (this.wingTimeout != null) {
      clearTimeout(this.wingTimeout);
    }

    if (!this.data.jetPack) {
      this.wingTimeout = setTimeout(this.diactivateWings, Bunny.WINGS_TIME);
    }
  }

  diactivateWings = () => {
    this.data.countJump = Bunny.BASE_MAX_JUMPS;

    this.wings.hide();
  };

  addSounds() {
    this.dieSound = this.game.sound.add('lose');
    this.jumpSound = this.game.sound.add('jump');
  }

  addTrail() {
    this.data.trail = new Trail(this.game, this);
    this.data.airTrail = new AirTrail(this.game, this);
    this.game.add.existing(this.data.trail);
    this.game.add.existing(this.data.airTrail);
  }

  addMagnetEffect() {
    this.magnetEffect = new MagnetEffect(this.game);
    this.game.add.existing(this.magnetEffect);
  }

  addWings() {
    this.wings = new Wings(this.game, this);
  }

  update() {
    if (this.data.isDead) return;

    if (this.data.magnet) {
      const offsetX = 5;
      const offsetY = 10;

      this.magnetEffect.x = this.x + this.width / 2 + offsetX;
      this.magnetEffect.y = this.y + this.height / 2 + offsetY;
    }

    if (this.inAir()) {
      if (!this.data.jetPack) this.data.trail.startEmitt();
      this.animations.play('jump');
    } else if (this.data.running) {
      if (!this.data.jetPack) this.data.trail.startEmitt();
      this.animations.play('run');
      this.data.countJump = Bunny.MAX_JUMPS;
    } else {
      this.data.trail.stopEmitt();
      this.animations.play('stand');
    }
  }

  addFire() {
    this.fire = new Fire(this.game);
    this.fire.y = this.height / config.scaleRatio;
    this.fire.x = this.width / 2;
    this.fire.alpha = 0;

    this.addChild(this.fire);
  }

  activateMagnet() {
    this.data.magnet = true;

    this.magnetEffect.show();

    if (this.magnetTimeout != null) {
      clearTimeout(this.magnetTimeout);
    }

    this.magnetTimeout = setTimeout(this.diactivateMagnet, Bunny.MAGNET_TIME);
  }

  diactivateMagnet = () => {
    this.data.magnet = false;

    this.magnetEffect.hide();
  };

  inAir() {
    return !this.body.touching.down;
  }

  die() {
    if (this.data.isDead) return;

    this.dieSound.play();
    this.playDieAnimation();

    const gravity = new Phaser.Point(0, 4000);
    const velocity = new Phaser.Point(0, -1200);

    this.game.camera.unfollow();

    this.body.velocity = velocity;
    this.body.acceleration.setTo(0);
    this.body.gravity = gravity;
    this.body.collideWorldBounds = false;
    this.data.isDead = true;
    this.data.trail.stopEmitt();
    this.animations.play('hurt');

    this.onDied.dispatch();
  }

  createDieAnimation() {
    this.data.blood = new Blood(this.game, this);
    this.game.add.existing(this.data.blood);
  }

  playDieAnimation() {
    this.data.blood.playAnimation();
  }

  run() {
    this.data.running = true;
    this.body.velocity.setTo(Bunny.BASE_MAX_SPEED, 0);
    this.body.acceleration.setTo(Bunny.ACCELERATION, 0);
  }

  createAnimation() {
    this.animations.add('jump', [`${this.data.name}_jump.png`], 1, true);
    this.animations.add(
      'run',
      [`${this.data.name}_walk1.png`, `${this.data.name}_walk2.png`],
      10,
      true
    );
    this.animations.add('hurt', [`${this.data.name}_hurt.png`], 1, true);
    this.animations.add('ready', [`${this.data.name}_ready.png`], 1, true);
    this.animations.add('stand', [`${this.data.name}_stand.png`], 1, true);
  }

  activateGod() {
    this.data.god = true;

    if (!this.data.jetPack) {
      this.godTimeout = setTimeout(this.diactivateGod, Bunny.GODMODE_TIME);
    }

    const animationTime = 400;

    if (this.godAnimation) {
      this.godAnimation.stop(true);
    }

    this.godAnimation = this.game.add
      .tween(this)
      .to(
        {
          alpha: 0.2
        },
        animationTime
      )
      .to(
        {
          alpha: 1
        },
        animationTime
      )
      .loop(-1)
      .start();

    this.godAnimation.onComplete.add(() => {
      this.alpha = 1;
    }, this);
  }

  diactivateGod = () => {
    this.data.god = false;

    this.godAnimation.stop(true);
  };

  jump() {
    if (this.data.isDead || this.data.jetPack) return;

    const jumpImpulse = 900;

    if (this.data.countJump > 0) {
      this.body.velocity.y = -jumpImpulse;
      this.data.countJump -= 1;
      this.jumpSound.play();
    }
  }
}

Bunny.BASE_MAX_JUMPS = 2;
Bunny.MAX_JUMPS = Bunny.BASE_MAX_JUMPS;
Bunny.ACCELERATION = 2000;
Bunny.BASE_MAX_SPEED = 250;

Bunny.MAGNET_TIME = 8000;
Bunny.GODMODE_TIME = 10000;
Bunny.WINGS_TIME = 6000;
Bunny.JETPACK_TIME = 5000;
Bunny.MAX_VELOCITY = new Phaser.Point(400, 20000);
Bunny.GRAVITY = new Phaser.Point(0, 2500);
Bunny.JETPACK_VELOCITY = new Phaser.Point(40000, 20000);
