// Import a module that was installed with npm
import p5 from 'p5'
// Import a variable from a JavaScript file from the project folder
import { mySketch } from './sketch.js'
// Import CSS styles in JavaScript
import './index.css'

console.log('Hello from JavaScript!')

// Initialize p5.js
// p5 requires two arguments: new p5(sketch function, target DOM element)
new p5(mySketch, document.getElementById('sketch'))

// Example: update the DOM
setTimeout(() => {
  document.getElementById('input').value = 'Edit me!'
}, 2000)

// Enable live reload while developing (https://esbuild.github.io/api/#live-reload)
if (process.env.NODE_ENV !== 'production') {
  new EventSource('/esbuild').addEventListener('change', () =>
    location.reload(),
  )
}
