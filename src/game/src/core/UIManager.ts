import type AbstractScene from '../scenes/AbstractScene';
import type GameManager from './GameManager';

export default class UIManager {
  scene: AbstractScene;
  private gameManager: GameManager;

  constructor(scene: AbstractScene, gameManager: GameManager) {
    this.scene = scene;
    this.gameManager = gameManager;
  }
}
