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

    console.log(gridHeight,gridWidth);

    makeGrid(gridHeight,gridWidth);
})

// When size is submitted by the user, call makeGrid()

function makeGrid(canvasHeight,canvasWidth) {

// Your code goes here!
    //storing the canvas region 
    const canvas = document.querySelector("#pixelCanvas");

    //pre creating a <tr> element to be appended.
    const tr = document.createElement('tr');
    //pre creating a <td> element to be appended.
    const td = document.createElement('td'); 

    

    //creating a canvas with repect to the height and width provided 
    for (i = 0; i < 10; i++) 
    {
        //appending the tr(table row ) to the table 
        const appendTableRow = canvas.appendChild(tr.cloneNode());

        
        for(j = 0; j < 10; j++)
        {
                //appending the td to the tr in the table 
                appendTableRow.appendChild(td.cloneNode());
                continue;
        }
        


    }

    



}
