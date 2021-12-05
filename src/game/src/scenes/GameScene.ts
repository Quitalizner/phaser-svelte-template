import AudioManager from '../core/AudioManager';
import GameManager from '../core/GameManager';
import UIManager from '../core/UIManager';
import AbstractScene from './AbstractScene';

class GameScene extends AbstractScene {
  private gameManager!: GameManager;
  private uiManager!: UIManager;

  constructor() {
    super('game');
  }

  // preload(): void {}

  private createGameElements(): void {
    this.audioManager = new AudioManager(this);
    this.audioManager.initGameAudio();
    this.gameManager = new GameManager(this);
    this.uiManager = new UIManager(this, this.gameManager);
  }

  create(): void {
    this.createGameElements();
  }

  resizeAndRepositionElements(): void {
    if (this.gameManager) {
      this.gameManager.gameComponents.resizeAndRepositionElements();
    }
  }

  // update(time: number, delta: number): void {
  //   if (this.gameManager) {
  //   }
  // }
}

export default GameScene;
