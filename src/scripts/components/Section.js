export class Section {
    constructor({items, renderer}, containerSelector) {
        this._data = items
        this._container = containerSelector;
        this._renderer = renderer;
    }

    renderItems() {
        this._data.forEach(item => {
            this._renderer(item);
        })
    }

    addItem(element) {
        this._container.append(element);
    }
}