import HistoryLocation from "@ember/routing/history-location";

export default class ExtendedHistoryLocation extends HistoryLocation {
  pushState(path) {
    console.error(`pushState: ${path}`);
    super.pushState(...arguments);
  }

  replaceState(path) {
    console.error(`replaceState: ${path}`);
    super.replaceState(...arguments);
  }
}
