const container = document.querySelector('.container');
const btnBlack = document.createElement('button');
const btnGray = document.createElement('button');
const btnRGB = document.createElement('button');
const btnSize = document.createElement('button');
const buttonsContainer = document.querySelector('.buttons');

function createDivs(cols, rows) {
    for(let i= 0; i < (cols*rows); i++) {
        const div = document.createElement('div');
        div.style.border = '1px solid red';
        container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box');
    }
}

function grayColor(){
    const boxs = container.querySelectorAll('.box');
    btnGray.textContent = 'Gray';
    btnGray.addEventListener('click', () => {
        boxs.forEach(box => {
            box.addEventListener('mouseover', ()=>{
                let Rnum = Math.floor(Math.random() * 255);
                box.style.background = `rgb(${Rnum}, ${Rnum}, ${Rnum})`;
            })
        });
    })

    buttonsContainer.appendChild(btnGray).classList.add('btn');
}


function blackColor(){
    const boxs = container.querySelectorAll('.box');
    btnBlack.textContent = 'Black';
    btnBlack.addEventListener('click', () => {
        boxs.forEach(box => {
            box.addEventListener('mouseover', ()=>{
                box.style.background = `black`;
            })
        });
    })

    buttonsContainer.appendChild(btnBlack).classList.add('btn');
}

function RGBColor(){
    const boxs = container.querySelectorAll('.box');
    btnRGB.textContent = 'RGB';
    btnRGB.addEventListener('click', () => {
        boxs.forEach(box => {
            box.addEventListener('mouseover', ()=>{
                let R = Math.floor(Math.random() * 255);
                let G = Math.floor(Math.random() * 255);
                let B = Math.floor(Math.random() * 255);
                box.style.background = `rgb(${R}, ${G}, ${B})`;
            })
        });
    })

    buttonsContainer.appendChild(btnRGB).classList.add('btn');
}



createDivs(16,16);   
grayColor();
RGBColor();
blackColor();