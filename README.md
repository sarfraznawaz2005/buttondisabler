# buttondisabler

Simple and no-dependency, vanilla JavaScript package to disable submit button to avoid duplicate form submissions.

### Installation and Usage

**ES6 Way**

`npm install buttondisabler`

```javascript
import buttondisabler from 'buttondisabler';

new buttondisabler({
    selector: 'button[type="submit"], input[type="submit"]',
    timeout: 5000,
    text: 'Wait...'
});
```

**Or via `script` tag:**

```html
<script type="application/javascript" src="lib/buttondisabler.js"></script>
```
```javascript

new buttondisabler({
    selector: 'button[type="submit"], input[type="submit"]',
    timeout: 5000,
    text: 'Wait...'
});
```

If you want to use those three options as shown above with same values as above, then those are so by default so you can omit them and instead use `new buttondisabler()` without options.