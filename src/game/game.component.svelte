<script lang="ts">

  import RoundRectanglePlugin from 'phaser3-rex-plugins/plugins/roundrectangle-plugin';
  import AbstractScene from './src/scenes/AbstractScene';
  import BootScene from './src/scenes/BootScene';
  import GameScene from './src/scenes/GameScene';
  import GameResizer from './src/utils/GameResizer';
  import { DESIGN_RES } from './src/cfg/game-config';
  import { onMount } from 'svelte';

  type GameConfig = Phaser.Types.Core.GameConfig;

  class Game {
    static setupGame(): void {
      const renderer = Phaser.AUTO;
      const config: GameConfig = {
        type: renderer,
        title: 'Game Name',
        backgroundColor: '#000',
        banner: process.env.NODE_ENV == "development",
        scale: {
          fullscreenTarget: 'app-root',
          parent: 'phaser-canvas',
          mode: Phaser.Scale.NONE,
          width: DESIGN_RES.landscape.width,
          height: DESIGN_RES.landscape.height,
          autoRound: true,
        },
        plugins: {
          global: [
            {
              key: 'rexRoundRectanglePlugin',
              plugin: RoundRectanglePlugin,
              start: true,
            },
            // ...
          ],
        },
      };

      const game = new Phaser.Game(config);
      const gameResizer = new GameResizer(game);
      window.addEventListener('resize', () => {
        gameResizer.resize();
      });
      window.addEventListener('orientationchange', () => {
        // Added a time delay since it's observed that devicePixelRatio updates the next frame
        setTimeout(() => {
          gameResizer.resize();
        }, 1);
      });

      game.scene.add('boot', BootScene);
      game.scene.add('game', GameScene);

      const startInterval = setInterval(() => {
        if (game && game.scene && game.scene.scenes && game.scene.scenes[1]) {
          clearInterval(startInterval);
          (game.scene.scenes as AbstractScene[]).forEach((scene: AbstractScene) => {
            scene.grs = gameResizer;
            scene.attachHandlers();
          });
          game.scene.start('boot');
        }
      }, 50);
    }
  }

  onMount(() => {
    Game.setupGame();
	});
</script>

<div id="phaser-canvas"></div>

<style lang="scss" global>
  @import './game.styles.scss'
</style>