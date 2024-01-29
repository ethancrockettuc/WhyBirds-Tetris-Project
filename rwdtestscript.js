document.addEventListener('DOMContentLoaded', () => {
  // TODO: we can also get the grid size from user
  const GRID_WIDTH_NUM = 10
  const GRID_HEIGHT_NUM = 20

  const GRID_SIZE = GRID_WIDTH_NUM * GRID_HEIGHT_NUM
  const colors = [ //Make sure why this is needed
  'url(images/blue_block.png)',
  'url(images/pink_block.png)',
  'url(images/purple_block.png)',
  'url(images/peach_block.png)',
  'url(images/yellow_block.png)']

  const flexgrid = createGrid();

  //let squares = Array.from(document.querySelector(".flexgrid).querySelectorAll('div')) //used to be querySelectorAll. Not sure why that didnt work.
  let nodesquares = document.querySelector(".flexgrid").querySelectorAll("div"); 
  let squares = Array.from(nodesquares);

  function createGrid() {
    // the main grid
    let flexgrid = document.querySelector(".flexgrid") 
    for (let i = 0; i < GRID_SIZE; i++) { //This tells us how many div elements inside the grid div to make.
      var gridElement = document.createElement("div")
      flexgrid.appendChild(gridElement)
    }
    // set base of grid
    for (let i = 0; i < GRID_WIDTH_NUM; i++) {
      let gridElement = document.createElement("div")
      gridElement.className= "base_block"
      //gridElement.setAttribute("class", "base_block")
      flexgrid.appendChild(gridElement) //Before gridElement gets class block3. 
    }
    return flexgrid;
}

  //assign functions to keycodes
  function control(e) {
    if (e.keyCode === 39)
      moveright()
    else if (e.keyCode === 38)
      rotate()
    else if (e.keyCode === 37)
      moveleft()
    else if (e.keyCode === 40)
      moveDown()
  }

// the classical behavior is to speed up the block if down button is kept pressed so doing that
document.addEventListener('keydown', control)

//The Tetrominoes
const lTetromino = [
  [1, GRID_WIDTH_NUM + 1, GRID_WIDTH_NUM * 2 + 1, 2],
  [GRID_WIDTH_NUM, GRID_WIDTH_NUM + 1, GRID_WIDTH_NUM + 2, GRID_WIDTH_NUM * 2 + 2],
  [1, GRID_WIDTH_NUM + 1, GRID_WIDTH_NUM * 2 + 1, GRID_WIDTH_NUM * 2],
  [GRID_WIDTH_NUM, GRID_WIDTH_NUM * 2, GRID_WIDTH_NUM * 2 + 1, GRID_WIDTH_NUM * 2 + 2]
]

const zTetromino = [
  [0, GRID_WIDTH_NUM, GRID_WIDTH_NUM + 1, GRID_WIDTH_NUM * 2 + 1],
  [GRID_WIDTH_NUM + 1, GRID_WIDTH_NUM + 2, GRID_WIDTH_NUM * 2, GRID_WIDTH_NUM * 2 + 1],
  [0, GRID_WIDTH_NUM, GRID_WIDTH_NUM + 1, GRID_WIDTH_NUM * 2 + 1],
  [GRID_WIDTH_NUM + 1, GRID_WIDTH_NUM + 2, GRID_WIDTH_NUM * 2, GRID_WIDTH_NUM * 2 + 1]
]

const tTetromino = [
  [1, GRID_WIDTH_NUM, GRID_WIDTH_NUM + 1, GRID_WIDTH_NUM + 2],
  [1, GRID_WIDTH_NUM + 1, GRID_WIDTH_NUM + 2, GRID_WIDTH_NUM * 2 + 1],
  [GRID_WIDTH_NUM, GRID_WIDTH_NUM + 1, GRID_WIDTH_NUM + 2, GRID_WIDTH_NUM * 2 + 1],
  [1, GRID_WIDTH_NUM, GRID_WIDTH_NUM + 1, GRID_WIDTH_NUM * 2 + 1]
]

const oTetromino = [
  [0, 1, GRID_WIDTH_NUM, GRID_WIDTH_NUM + 1],
  [0, 1, GRID_WIDTH_NUM, GRID_WIDTH_NUM + 1],
  [0, 1, GRID_WIDTH_NUM, GRID_WIDTH_NUM + 1],
  [0, 1, GRID_WIDTH_NUM, GRID_WIDTH_NUM + 1]
]

const iTetromino = [
  [1, GRID_WIDTH_NUM + 1, GRID_WIDTH_NUM * 2 + 1, GRID_WIDTH_NUM * 3 + 1],
  [GRID_WIDTH_NUM, GRID_WIDTH_NUM + 1, GRID_WIDTH_NUM + 2, GRID_WIDTH_NUM + 3],
  [1, GRID_WIDTH_NUM + 1, GRID_WIDTH_NUM * 2 + 1, GRID_WIDTH_NUM * 3 + 1],
  [GRID_WIDTH_NUM, GRID_WIDTH_NUM + 1, GRID_WIDTH_NUM + 2, GRID_WIDTH_NUM + 3]
]

const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]


//move the Tetromino moveDown
let currentPosition = 4
let current = theTetrominoes[0][0]
//draw the shape
function draw() {
  current.forEach(index => {
    squares[currentPosition + index].classList.add("body.flexgrid.tetrimino")
  })
}
draw();

}
)

//counting amount of row and columns in flexbox using js.
//.forEach() method basically iterates through entire array and applies logic to it
//So, the three parameters used by the forEach() method are:

/*
The current element being processed.
The index of the current element in the array.
(Optional) The array that forEach() is being applied to.
*/


/*
For anyone who wants LAST SECOND movement just before the piece stops, to slide it in a free space to the left or right - you can change the code to this: 

  //move down function
  function moveDown() {
    
    if(!current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
      undraw()
      currentPosition += width
      draw()
    } else {
      freeze();  
    }
  }

  //freeze function
  function freeze() {
      current.forEach(index => squares[currentPosition + index].classList.add('taken'))
      //start a new tetromino falling
      random = nextRandom
      nextRandom = Math.floor(Math.random() * theTetrominoes.length)
      current = theTetrominoes[random][currentRotation]
      currentPosition = 4
      draw()
      displayShape()
      addScore()
      gameOver()
  }




*/
