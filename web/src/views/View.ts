import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K>{
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  
  abstract template(): string;

  regionsMap(): { [key: string]: string }{
    return {}
  }
  eventsMap(): { [key: string]: () => void }{
    return {}
  };

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }
  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for ( let key in regionsMap){
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);

      if (element) {
        this.regions[key] = element;
      }
    }
  }

  onRender(): void{}

  render(): void {
    // though this is no a efficient way like angular and react
    // they compare the new and old DOM and re-render it
    // we here just simply demonstrate how it work
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);


    this.onRender();

    this.parent.append(templateElement.content);
  }
}
