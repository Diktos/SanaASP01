// Батько
class UIComponent {
    constructor(id, cssClass) {
        this.id = id;
        this.cssClass = cssClass;
    }

    render() {
        return `<div id="${this.id}" class="${this.cssClass}"></div>`;
    }

    mount(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML += this.render();
        }
    }
}
// Діти
class UIButton extends UIComponent {
    constructor(id, cssClass, text, color) {
        super(id, cssClass);
        this.text = text;
        this.color = color;
    }
    render() {
        return `<button id="${this.id}" class="${this.cssClass}" style="background-color: ${this.color}; color: white; padding: 10px 20px; margin: 10px 10px 10px 0; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; font-family: sans-serif; transition: 0.2s;">${this.text}</button>`;
    }
}

class UIInput extends UIComponent {
    constructor(id, cssClass, placeholder, type) {
        super(id, cssClass);
        this.placeholder = placeholder;
        this.type = type;
    }
    render() {
        return `<input id="${this.id}" class="${this.cssClass}" type="${this.type}" placeholder="${this.placeholder}" style="display: block; width: 100%; box-sizing: border-box; padding: 12px; margin-bottom: 15px; border: 1px solid silver; border-radius: 6px; font-family: sans-serif; font-size: 14px; outline: none;" />`;
    }
}

class UIPanel extends UIComponent {
    constructor(id, cssClass, title, children = []) {
        super(id, cssClass);
        this.title = title;
        this.children = children;
    }
    render() {
        let childrenHtml = this.children.map(child => child.render()).join('');
        return `
            <div id="${this.id}" class="${this.cssClass}" style="background-color: white; border: 1px solid silver; box-shadow: 0 4px 10px lightgrey; padding: 25px; margin-bottom: 25px; border-radius: 8px; font-family: sans-serif;">
                <h3 style="margin-top: 0; color: dimgray; border-bottom: 2px solid whitesmoke; padding-bottom: 10px;">${this.title}</h3>
                ${childrenHtml}
            </div>
        `;
    }
}

class UICard extends UIPanel {
    constructor(id, cssClass, title, children = [], imageUrl) {
        super(id, cssClass, title, children);
        this.imageUrl = imageUrl;
    }
    render() {
        let childrenHtml = this.children.map(child => child.render()).join('');
        return `
            <div id="${this.id}" class="${this.cssClass}" style="background-color: white; border: 1px solid silver; box-shadow: 0 4px 10px lightgrey; padding: 20px; margin-bottom: 20px; border-radius: 8px; width: 320px; font-family: sans-serif; display: inline-block;">
                <img src="${this.imageUrl}" alt="Card image" style="width: 100%; height: 200px; object-fit: cover; border-radius: 6px; margin-bottom: 15px;" />
                <h3 style="margin-top: 0; color: dimgray;">${this.title}</h3>
                ${childrenHtml}
            </div>
        `;
    }
}

class UIList extends UIComponent {
    constructor(id, cssClass, items = []) {
        super(id, cssClass);
        this.items = items;
    }
    render() {
        let listItems = this.items.map(item => `<li style="padding: 8px 0; border-bottom: 1px solid whitesmoke; color: dimgray;">${item}</li>`).join('');
        return `<ul id="${this.id}" class="${this.cssClass}" style="list-style-type: none; padding: 0; margin: 0;">${listItems}</ul>`;
    }
}

// Приклад роботи
const myPanel = new UIPanel("p1", "main-panel", "Форма реєстрації", [
    new UIInput("inp1", "form-control", "Введіть email", "email"),
    new UIButton("btn1", "btn-primary", "Зберегти", "mediumseagreen"),
    new UIButton("btn2", "btn-danger", "Скасувати", "tomato")
]);
myPanel.mount("app");

const skillsList = new UIList("lst1", "list-group", ["C#", "ASP.NET", "JavaScript"]);
const myCard = new UICard("card1", "user-card", "Профіль", [skillsList], "https://project-seo.net/wp-content/uploads/2019/12/Google-Penguin.jpg");
myCard.mount("app");

document.getElementById("app").innerHTML += `<div id="dynamic-inputs-zone" style="margin-top: 20px; font-family: sans-serif;"></div>`;

const addBtn = new UIButton("addInputBtn", "btn-warning", "Додати нове поле", "orange");
addBtn.mount("app");

let inputCount = 1;
document.getElementById("addInputBtn").addEventListener("click", () => {
    const dynamicInput = new UIInput(`dynInp${inputCount}`, "form-control", `Динамічне поле ${inputCount}`, "text");
    dynamicInput.mount("dynamic-inputs-zone");
    inputCount++;
});