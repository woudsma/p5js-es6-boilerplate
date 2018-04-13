// Import an installed module from npm
import p5 from 'p5'
// Import a variable from a javascript file from the project folder
import { mySketch } from './sketch.js'
// Import css styles in javascript
import './index.css'

console.log('Hello from javascript!')

// Initializing p5.js
// p5 requires two arguments: new p5(sketch function, target DOM element)
new p5(mySketch, document.getElementById('sketch'))
