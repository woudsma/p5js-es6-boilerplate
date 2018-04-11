// Exporting a function
export default (p) => {

  // Use Processing functions with p5.js
  p.setup = () => {
    // Creating a canvas using the entire screen of the webpage
    p.createCanvas(window.innerWidth, window.innerHeight)
    p.noStroke()
    p.rectMode(p.CENTER)

    console.log('p5.js setup function executed')
  }

  p.draw = () => {
    // Clear the frame
    p.background(255)

    // Draw a rectangle
    var w = p.random(100, 400)
    var h = p.random(100, 400)
    p.fill(0)
    p.ellipse(p.width / 2, p.height / 2, w, h)
  }

}
