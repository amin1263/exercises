var ballObject = {}

function constructBall() {
  // When this function runs, we should:
  // - add defaults to the ballObject
  //      radius
  //      position ({x: 250, y: 250})
  //      color
  //      velocity ({x: 10, y: 0})
  //      domElement (document.querySelector(".ball"))

  // Add the following starting styles to the domElement:
  //  - width = radius + "px"
  //  - height = radius + "px"
  //  - backgroundColor = color
  //  - top = position.y + "px"
  //  - left = position.x + "px"
  var radius = 20
  var position = ({x: 250, y: 250})
  var color = 'blue'
  var velocity=  ({x: 10, y: 0})
  // document.querySelector(".ball").style.width = "300px"
  var domElement = (document.querySelector(".ball"))
  domElement.style.width = radius + "px"
   domElement.style.height = radius + "px"
   domElement.style.backgroundColor = color
   domElement.style.top = position.y + "px"
   domElement.style.left = position.x + "px"
}

function move() {
  setPosition();
  drawPosition();
}

function setPosition() {
  // When this function runs, we need to:
  //   - update the properties of the ballObject
  //   - run the drawPosition() function
  // The position of the ball should be the current position plus the velocity.
}

function drawPosition() {
  // When this function runs, we need to:
  //   - use the properties of the ballObject to update the style of the ball domElement
  // Remember that CSS requires a string with "px" at the end. You can use x + "px"

}
