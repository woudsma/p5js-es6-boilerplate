// Exporting a function
export default (p) => {
  // Use Processing functions with p5.js
  p.setup = () => {
    // Creating a canvas using the entire screen of the webpage
    p.createCanvas(window.innerWidth, window.innerHeight)
    p.noStroke()

    console.log('p5.js setup function executed')
  }

  p.draw = () => {
    // Clear the frame
    p.background(255)

    // Draw a rectangle
    p.fill(0)
    p.rect(p.width / 2, p.height / 2, 80, 80)

    // Draw a funky ellipse
    p.fill(255, 0, 0)
    p.funkyEllipse(200, 200, 100, 100)
  }

  p.funkyEllipse = (x, y, w, h) => {
    w = w + p.random(-10, 10)
    h = h + p.random(-10, 10)
    p.ellipse(x, y, w, h)
  }
}
