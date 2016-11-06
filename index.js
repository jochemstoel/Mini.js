/* 
 * @package mini.js
 * @version 0.0.4c
 * @author Jochem Stoel (jochemstoel.github.io)
 * @url https://www.npmjs.com/package/mini.js
 * @license Don't involve me.
 */

 const minify = function minify(file) {	

 	/* return a Promise (https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise) */
	return new Promise((deliver, renege) => {

		/* Wrap some methods for convenient notation. I call this syntactical sugar. */
		const readFile = require('fs').readFile
		const parse = require('esprima').parse
		const generate = require('escodegen').generate

		/* Open file */
		readFile(file, (error, buffer) => {

			if (error)
				renege(error.message) /* Unable to find or access file */

			/* A try/catch block so that we can use then/catch rather than causing an exception */
			try {

				/* fs.readFile returns a buffer so first stringify the buffer, 
				   try to parse() the string to AST and then generate() code from that AST
				   finally deliver the Promise with generated code */
				deliver(generate(parse(String(buffer)), {
				    format: {
				        indent: {
				            style: '',
				            base: 0
				        },
				        newline: '',
				        space: ' ',
				        compact: true,
				    }
				}))
			} catch (exception) {

				/* Something went wrong, renege the promise with the exception message as reason */
				renege(exception.message)
			}
		})
	})	
}

/* require() will return function minify */
module.exports = minify