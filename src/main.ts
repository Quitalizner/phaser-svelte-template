import './shared/styles/reset.scss';
import './shared/styles/global.scss';

import 'phaser';

import App from './App.svelte';

export const app = new App({
  target: document.body,
});