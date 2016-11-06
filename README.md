# Mini.js
EcmaScript6 compatible minifier.

<img src="https://66.media.tumblr.com/a524308ece75402367144ff2c4aea7b4/tumblr_ofujflH1wq1ru9jhqo1_1280.jpg" style="width: 100%;" />

## Mini.js
Mini.js <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise">promises</a> to compress your EcmaScript6 code. It uses <a href="https://www.npmjs.com/package/esprima">esprima</a> to parse a Javascript file to an AST (Abstract Syntax Tree) and then simply generates compressed code using <a href="https://www.npmjs.com/package/escodegen">escodegen</a>. Why?  Most minifiers for Node.js do not support ES6. (October 30, 2016)

### Install it

NpM: <a href="https://www.npmjs.com/package/mini.js">https://www.npmjs.com/package/mini.js</a> 

```bash
npm install mini.js
```

### Require it

```js
minify = require('mini.js')
```

### Use it

```js 
minify('thing.js').then(data => {
	console.log(data) //minified code
}).catch(reason => {
	/* unable to minify because of reason
	   there is probably a syntax error in thing.js */
})
``` 

Until next time.
