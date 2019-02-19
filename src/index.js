/*
Author: Sarfraz Ahmed
http://codeinphp.github.io/
*/

export default class buttondisabler {

  constructor(options) {
    this.selector = options && options.selector || 'button[type="submit"], input[type="submit"]';
    this.timeout = options && options.timeout || 5000;
    this.text = options && options.text || 'Wait...';

    this.bind();
  }

  bind() {
    const fields = document.querySelectorAll(this.selector);

    fields.forEach((field) => {

      field.addEventListener('click', (e) => {
        let buttonText = '';
        const nodeName = e.target.nodeName;

        // change text
        if (nodeName.toLowerCase() === 'button') {
          buttonText = field.innerHTML;
          field.innerHTML = this.text;
        } else {
          buttonText = field.value;
          field.value = this.text;
        }

        // restore original text and enable back
        setTimeout(() => {
          field.disabled = false;

          if (buttonText) {
            if (nodeName.toLowerCase() === 'button') {
              field.innerHTML = buttonText;
            } else {
              field.value = buttonText;
            }
          }

        }, this.timeout);

        setTimeout(() => {
          field.disabled = true;
        }, 10);

        return true;
      });
    });
  }
}
