import type AbstractScene from '../scenes/AbstractScene';

const ASSETS_PREFIX_URL = 'game/src/assets/img/';

export class AssetsPreloader {
  scene: AbstractScene;

  constructor(scene: AbstractScene) {
    this.scene = scene;
  }

  // Requires use of this.scene.load.start in the case of calling anywhere outside a scene preload function.
  loadBootSceneAssets(): void {
    this.scene.load.maxParallelDownloads = 10;
    this.scene.load.xhr.timeout = 10;

    this.scene.load.path = ASSETS_PREFIX_URL;
  }

  // Requires use of this.scene.load.start in the case of calling anywhere outside a scene preload function.
  loadGameSceneAssets(): void {
    this.scene.load.path = ASSETS_PREFIX_URL;

    // this.scene.load.image('bg', 'bg.png');

    this.scene.load.path = 'game/src/assets/audio/';

    // this.scene.load.image('logo', 'logo/logo.png');
    // this.scene.load.atlas('logo-shine', 'logo/logo_effect.png', 'logo/logo_effect.json');    // Free Spin

    // this.scene.load.spritesheet('win-particle', 'win/coin.png', {
    //   frameWidth: 200,
    //   frameHeight: 200,
    //   startFrame: 0,
    //   endFrame: 30,
    // });

    // this.scene.load.bitmapFont(
    //   'win-counter-font',
    //   'bitmapFonts/win-counter.png',
    //   'bitmapFonts/win-counter.xml'
    // );
    this.scene.load.start();
  }

  // createAnimations(): void {}
}

export default AssetsPreloader;
