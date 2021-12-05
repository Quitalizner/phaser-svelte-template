import GameComponents from '../game-objects/GameComponents';
import type AbstractScene from '../scenes/AbstractScene';

export default class GameManager {
  scene: AbstractScene;
  events: Phaser.Events.EventEmitter;
  gameComponents: GameComponents;

  constructor(scene: AbstractScene) {
    this.scene = scene;
    this.events = new Phaser.Events.EventEmitter();
    this.gameComponents = new GameComponents(this.scene);
  }
}
