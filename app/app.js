import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let autoboot = false;
if (config.shouldAutoBoot) {
  autoboot
}
const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  autoboot: config.shouldAutoBoot
});

loadInitializers(App, config.modulePrefix);

if (!config.shouldAutoBoot) {
  const app = App.create(config.APP);
  app.visit('/foo');
}

export default App;
