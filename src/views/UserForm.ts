export class UserForm {
    constructor(public parent: Element) { }


    eventsMap(): { [key: string]: () => void } {
        return {
            'click:button': this.onButtonClick
        };
    }

    onButtonClick(): void {
        console.log('Hi there')
    }

    template(): string {
        return `
        <div> 
            <h1> User Form</h1>
            <input />
        </div>
        `
    }
    // Takes our template and appends it to parent HTML element
    render(): void {
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.parent.append(templateElement.content)
    }
}