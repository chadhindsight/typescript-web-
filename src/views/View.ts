import { Model } from '../models/Model'

// Ensure that type T has a certain set of properties tied to it
interface ModelForView {
    on(eventName: string, callback: () => void): void;
}

export abstract class View<T extends Model<K>, K> {
    regions: { [key: string]: Element } = {}

    constructor(public parent: Element, public model: T) {
        this.bindModel()
    }

    eventsMap(): { [key: string]: () => void } {
        return {};
    }

    abstract template(): string

    regionsMap(): { [key: string]: string } {
        return {}
    }

    bindModel() {
        // call render method to update the view when data changes 
        this.model.on('change', () => {
            this.render()
        })
    }

    // Helper method for render
    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();

        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':');

            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey])
            })
        }
    }


    mapRegions(fragment: DocumentFragment): void {
        const regionsMap = this.regionsMap();

        for (let key in regionsMap) {
            const selector = regionsMap[key];
            const element = fragment.querySelector(selector);

            if (element) {
                this.regions[key] = element;
            }
        }
    }

    // Takes our template and appends it to parent the HTML element
    render(): void {
        this.parent.innerHTML = ''

        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content)

        this.parent.append(templateElement.content)
    }
}