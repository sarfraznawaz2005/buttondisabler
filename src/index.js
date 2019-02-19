/*
Author: Sarfraz Ahmed
http://codeinphp.github.io/
*/

export default class buttondisabler {

  constructor({
    selector = 'button[type="submit"], input[type="submit"]',
    timeout = 5000,
    text = 'Wait...'
  } = {}) {
    this.selector = selector;
    this.timeout = timeout;
    this.text = text;

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
