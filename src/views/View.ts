import { User } from '../models/User'

export abstract class View<T> {
    constructor(public parent: Element, public model: User) {
        this.bindModel()
    }

    abstract eventsMap(): { [key: string]: () => void }
    abstract template(): string

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

    // Takes our template and appends it to parent HTML element
    render(): void {
        this.parent.innerHTML = ''

        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content)

        this.parent.append(templateElement.content)
    }
}