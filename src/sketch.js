// Exporting a variable (in this case, a function)
export const mySketch = (p) => {
  let maxSize = 500
  let w = 0
  let h = maxSize
  let wspeed = 1.66
  let hspeed = 1.33
  let r = 0

  // Calling p5.js functions, using the variable 'p'
  p.setup = () => {
    // Creating a canvas using the entire screen of the webpage
    p.createCanvas(maxSize, maxSize)
    p.strokeWeight(5)
    p.ellipseMode(p.CENTER)
    p.background(255)

    console.log('p5.js setup function executed')
  }

  p.draw = () => {
    // Clear the frame
    p.background(255, 50)

    // Draw an ellipse
    p.translate(p.width / 2, p.height / 2)
    p.rotate(r)
    p.fill(0, 1)
    p.stroke(5)
    p.ellipse(0, 0, w, h)

    // Updating rotation and increment values
    r = r + 0.015
    w = w + wspeed
    h = h + hspeed
    if (w < 0 || w > maxSize) wspeed *= -1
    if (h < 0 || h > maxSize) hspeed *= -1
  }
}
