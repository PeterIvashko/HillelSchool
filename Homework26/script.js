class FormElement {
    constructor(name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value;
    }
    showName() {
        console.log(`Name: ${this.name}`);
    }
    getValue() {
        return this.value;
    }
}

class TextElement extends FormElement {
    constructor(name, placeholder) {
        super(name, 'text', '');
        this.placeholder = placeholder;
    }
    createInput() {
        const input = document.createElement('input');
        input.type = this.type;
        input.name = this.name;
        input.placeholder = this.placeholder;
        return input;
    }
}

class CheckboxElement extends FormElement {
    constructor(name, checked) {
        super(name, 'checkbox', '');
        this.checked = checked;
    }
    createInput() {
        const input = document.createElement('input');
        input.type = this.type;
        input.name = this.name;
        input.checked = this.checked;
        return input;
    }
}

class ButtonElement extends FormElement {
    constructor(name) {
        super(name, 'button', '');
    }
    createButton() {
        const button = document.createElement('button');
        button.type = this.type;
        button.name = this.name;
        button.innerText = this.name;
        return button;
    }
}

const form = document.createElement('form');

const nameInput = new TextElement('name', 'Enter your name');
form.appendChild(nameInput.createInput());

const emailInput = new TextElement('email', 'Enter your email');
form.appendChild(emailInput.createInput());

const subscribeCheckbox = new CheckboxElement('subscribe', true);
form.appendChild(subscribeCheckbox.createInput());

const submitButton = new ButtonElement('Submit');
form.appendChild(submitButton.createButton());

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    console.log(data);
});
