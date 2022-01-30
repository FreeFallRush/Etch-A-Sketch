let canvas = document.createElement('div');
canvas.setAttribute('id', 'canvas');

let container = document.getElementById('container');
container.append(canvas);

let squareNum;

defaultCanvas(16);

//default canvas 16 x 16
function defaultCanvas(squareNum) {
    let i = 0;
    while(i < squareNum ** 2) {
        let square = document.createElement('div');
        square.setAttribute('class', 'square');

        canvas.style.gridTemplateColumns = `repeat(${squareNum}, 1fr)`;
        canvas.style.gridTemplateRows = `repeat(${squareNum}, 1fr)`;
            
        canvas.append(square);
        i++;
    }
    chooseOption();    
}


//erase default canvas when reset is clicked
function removeCanvas() {
    let child = canvas.lastChild;

    while(child) {
        canvas.removeChild(child);
        child = canvas.lastChild;
    }
}


//redraws canvas when reset button is clicked, according to the numbers selected
function redrawCanvas(sqareNum) {
    squareNum = +prompt("Choose a number between 1 and 100 and make your canvas", "");
    

   if(squareNum > 0 && squareNum <= 100) {
        
        removeCanvas();
        defaultCanvas(squareNum);
        removeEvents(); 
        chooseOption();
        

    } else if(squareNum < 0 || squareNum > 100) {
        alert ("Works only if the number is between 1 and 100.", "");
    } else {
            alert ("It's working only with numbers.", "");
    }   
}


//removes the event listeners 
function removeEvents() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.removeEventListener('mouseover', defaultColor);
        square.removeEventListener('mouseover', chooseColor);
        square.removeEventListener('mouseover', paintRainbow);
        square.removeEventListener('mouseover', paintGrayscale);
        square.removeEventListener('mouseover', clearCanvas);
        square.removeEventListener('mouseover', eraseCanvas);
    });
} 

// squares color with the default color (red) on mouseover
function defaultColor() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'red';
            square.style.opacity = '';
        });
    });
}

//squares color accordingly to the color picker
function chooseColor() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            let colorSelector = document.getElementById('colorPicker');
            let colorChoice = colorSelector.value;
            square.style.backgroundColor = colorChoice;
            square.style.opacity = '';
        });
    });
}


// squares color with random color (rainbow) on mouseover
function paintRainbow() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            let randomColor = `rgb(${r}, ${g}, ${b})`;

            square.style.backgroundColor = randomColor;
            square.style.opacity = '';
        });
    });
}


// squares color with increment gray (grayscale) on mouseover
function paintGrayscale() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        let opacity = Number(square.style.opacity);
        square.addEventListener('mouseover', () => {
            if(opacity < 1) {
                opacity = opacity + 0.1;
            }
            square.style.opacity = opacity;
            square.style.backgroundColor = 'black';    
        });
    });
}


//squares color with white (leaving the impression of being erased) on mouseover
function eraseCanvas() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'white';
            square.style.opacity = '';
        });
    });
}

//all squares color white (leaving the impression of a canvas reset) 
function clearCanvas() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
        square.style.opacity = '';   
    });
}

//a function that calls all the options available for the canvas
function chooseOption() {
    clearCanvas();
    eraseCanvas();
    paintGrayscale();
    paintRainbow();
    chooseColor();
    defaultColor();
    
}


//adding event listeners to eaach button
let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    let btnId = button.id;

    if(btnId === "default") {
        let defaultCol = document.getElementById('default');
        defaultCol.addEventListener('click', defaultColor);
    } else if(btnId === "rainbow") {
        let rainbow = document.getElementById('rainbow');
        rainbow.addEventListener('click', paintRainbow);
    } else if(btnId === "color-picker") {
        let pickColor = document.getElementById('color-picker');
        pickColor.addEventListener('click', chooseColor);
    } else if(btnId === "grayscale") {
        let grayscale = document.getElementById('grayscale');
        grayscale.addEventListener('click', paintGrayscale);
    } else if(btnId === "eraser") {
        let eraser = document.getElementById('eraser');
        eraser.addEventListener('click', eraseCanvas);
    } else if(btnId === "clear") {
        let clear = document.getElementById('clear');
        clear.addEventListener('click', clearCanvas);
    } else if(btnId === "reset") {
        let resetCanvas = document.getElementById('reset');
        resetCanvas.addEventListener('click', redrawCanvas);
    }
});