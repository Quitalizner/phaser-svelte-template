import AbstractScene from './AbstractScene';
import AssetsPreloader from '../utils/AssetPreloader';
import AudioManager from '../core/AudioManager';

class BootScene extends AbstractScene {
  assetsPreloader: AssetsPreloader;

  constructor() {
    super('boot');
    this.assetsPreloader = new AssetsPreloader(this);
  }

  preload(): void {
    // Load all loading bar related assets here assets here
    this.assetsPreloader.loadBootSceneAssets();
  }

  resizeAndRepositionElements(): void {
    //
  }

  create(): void {
    this.audioManager = new AudioManager(this);
    this.audioManager.initBootAudio();

    this.handleLoadingProgress();
    this.handleSceneExit();
    // To load main game assets
    this.assetsPreloader.loadGameSceneAssets();

    // create the loading bar
  }

  private handleLoadingProgress(): void {
    this.load.on('progress', (percentage: number) => {
      console.warn('percentage', percentage);
      // this.updateLoadingBar(percentage);
    });
  }

  // private updateLoadingBar(percentage: number): void {
  //   console.warn('percentage', percentage);
  // }

  private handleSceneExit(): void {
    this.load.on('complete', () => {
      this.turnOffResizeHandler();
      this.scene.start('game');
    });
  }
}

export default BootScene;
