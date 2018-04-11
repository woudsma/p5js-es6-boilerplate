// Exporting a function
export default (p) => {
  var max = 500
  var w = 0
  var h = max
  var wspeed = 1.66
  var hspeed = 1.33
  var r = 0

  // Use Processing functions with p5.js
  p.setup = () => {
    // Creating a canvas using the entire screen of the webpage
    p.createCanvas(window.innerWidth, window.innerHeight)
    p.strokeWeight(5)
    p.ellipseMode(p.CENTER)

    console.log('p5.js setup function executed')
  }

  p.draw = () => {
    // Clear the frame
    p.background(255, 10)

    // Draw an ellipse
    p.translate(p.width / 2, p.height / 2)
    p.rotate(r)
    p.fill(0, 1)
    p.stroke(5)
    p.ellipse(0, 0, w, h)

    // Update rotation and increments
    r = r + 0.015
    w = w + wspeed
    h = h + hspeed
    if (w < 0 || w > max) wspeed = wspeed * -1
    if (h < 0 || h > max) hspeed = hspeed * -1
  }

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
  }

}
