class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph(){
    const newp = document.createElement('p');
    newp.innerText = "'This paragraph has been dynamically added by JavaScript!"
    this.mainContainerEl.append(newp);
  }
}

module.exports = View;