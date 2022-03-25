// Select color input
// Select size input

// form handling
const form = document.querySelector("#sizePicker");

//pre creating a <tr> element to be appended.
const tr = document.createElement("tr");

//pre creating a <td> element to be appended.
const td = document.createElement("td");

//storing the canvas region
const canvas = document.querySelector("#pixelCanvas");

//selection the colorPicker input
const colorPicker = document.querySelector("#colorPicker");
let colorPickerValue = colorPicker.value;

/*
the function below (makeGrid()) is for creating the canvas this is done by creating dynamic elements with a nested for loop 
the first loop creates the table row (tr) and inside every table row there is a couple of table data which is also created 
dynamically with the addition of a click event (the td will fire when the td region is clicked) 
td: represent the cells of the grid 
tr: is simply the row to which each cells a attached . 
*/
function makeGrid(canvasHeight, canvasWidth) {
  //creating a canvas with repect to the height and width provided
  for (i = 0; i < canvasHeight; i++) {
    //appending the tr(table row ) to the table
    const appendTableRow = canvas.appendChild(tr.cloneNode());

    for (j = 0; j < canvasWidth; j++) {
      //appending the td to the tr in the table
      const tableData = appendTableRow.appendChild(td.cloneNode());

      //adding event listenner to every data created on click.
      tableData.addEventListener("click", () => {
        //NOTICE that the color picker now listens to the value from the dom directly
        //other than being passed as an argument.
        tableData.style.backgroundColor = colorPickerValue;
      });
    }
  }
}

/*
This is the callback function to prevent default submission 
set the gridHeight and gridWidthe 
and finally call the makeGrid() function,
passing the gridHeight and gridWidth as arguments.
*/
function setGrid(e) {
  e.preventDefault();

  //fetching the value of gridHeight from the input .
  const gridHeight = document.querySelector("#inputHeight").value;

  //fetching the value of gridWidth from the input .
  const gridWidth = document.querySelector("#inputWidth").value;

  makeGrid(gridHeight, gridWidth);
}

/*
The form event will fire when the value in the index page are submitted as shown in the first parameter in the 
addEventListener method.
the second parameter is the callback created above its function(use) is highlighted in the comments above it 
*/
form.addEventListener("submit", setGrid);

/*
This event is to run when the input field for id colorPicker is set . 
Its function(use) is to reset the value of the color that will fill each cell of the grid
*/
colorPicker.addEventListener("input", () => {
  colorPickerValue = colorPicker.value;
});
