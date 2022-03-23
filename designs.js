// Select color input
// Select size input


// form handling 
const form = document.querySelector("#sizePicker");
//adding an event listenner to the form so as to handle the input 
form.addEventListener('submit',e => 
{
    // preventing the form from auto submitting and 
    //retain our input after clicking the submit button .
    e.preventDefault() 

    //fetching the value of gridHeight from the input .
    const gridHeight = document.querySelector("#inputHeight").value;

    //fetching the value of gridWidth from the input .
    const gridWidth = document.querySelector("#inputWidth").value;
    
    // fetch the color value from the input 
    const colorValue = document.querySelector("#colorPicker").value;

  


    makeGrid(gridHeight,gridWidth,colorValue);
})

// When size is submitted by the user, call makeGrid()

function makeGrid(canvasHeight,canvasWidth,colorVal) {

// Your code goes here!
    //storing the canvas region 
    const canvas = document.querySelector("#pixelCanvas");

    //pre creating a <tr> element to be appended.
    const tr = document.createElement('tr');
    //pre creating a <td> element to be appended.
    const td = document.createElement('td'); 


    //creating a canvas with repect to the height and width provided 
    for (i = 0; i < canvasHeight; i++) 
    {
        //appending the tr(table row ) to the table 
        const appendTableRow = canvas.appendChild(tr.cloneNode());

        
        for(j = 0; j < canvasWidth; j++)
        {
                //appending the td to the tr in the table 
                const tableData = appendTableRow.appendChild(td.cloneNode());

                //adding event listenner to every data created on click.
                tableData.addEventListener('click', () => {
                    tableData.style.backgroundColor = colorVal;
                })
            

        }
        


    }

    



}
