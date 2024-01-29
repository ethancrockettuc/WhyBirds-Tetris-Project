document.addEventListener('DOMContentLoaded', () => {
  // TODO: we can also get the grid size from user
  const GRID_WIDTH_NUM = 10
  const GRID_HEIGHT_NUM = 20
  const GRID_TOTAL_WIDTH = 10
  const GRID_TOTAL_HEIGHT = 20
  
  const GRID_SIZE = GRID_WIDTH_NUM * GRID_HEIGHT_NUM
  const colors = [ //Make sure why this is needed
  'url(images/blue_block.png)',
  'url(images/pink_block.png)',
  'url(images/purple_block.png)',
  'url(images/peach_block.png)',
  'url(images/yellow_block.png)']

  // no need to type 200 divs :)
  const grid = createGrid();


  //let squares = Array.from(grid.querySelectorAll('div')) //used to be querySelectorAll. Not sure why that didnt work.
  let nodesquares = document.querySelector(".grid").querySelectorAll("div"); 
  let arraysquares = Array.from(nodesquares);

  function createGrid() {
    // the main grid
    let grid = document.querySelector(".grid") //Selects the first element with class "grid".
    let flexgrid = document.querySelector(".flexgrid") 
    for (let i = 0; i < GRID_SIZE; i++) { //This tells us how many div elements inside the grid div to make.
      let gridElement = document.createElement("div")
      grid.appendChild(gridElement)
      flexgrid.appendChild(gridElement)
    }

    // set base of grid
    for (let i = 0; i < GRID_WIDTH_NUM; i++) {
      let gridElement = document.createElement("div")
      flexgrid.appendChild(gridElement) //Before gridElement gets class block3. 
      gridElement.setAttribute("class", "block3")
      grid.appendChild(gridElement)
    }
    return grid;
}
}
)

