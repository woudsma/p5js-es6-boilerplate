// Import an installed module from npm
import p5 from 'p5'
// Import a javascript file from the project folder
import sketch from './sketch.js'
// Import css styles in javascript
import './index.css'

console.log('Hello from javascript!')

// Initialize sketch
new p5(sketch, document.getElementById('sketch'))
