import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    console.warn('history', window.history.state);
  }
}
