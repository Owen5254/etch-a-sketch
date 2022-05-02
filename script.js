const container = document.querySelector('.container');
const btnBlack = document.createElement('button');
const btnWarm = document.createElement('button');
const btnCold = document.createElement('button');
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
        })
    })

    buttonsContainer.appendChild(btnRGB).classList.add('btn');
}

function warmColor() {
    const boxs = container.querySelectorAll('.box');
    let warm_array = ['#BF6A6D', '#A45256', '#EC6760', '#F88C5D', '#FDCF6D'];
    btnWarm.textContent = 'Warm';
    btnWarm.addEventListener('click', ()=>{
        boxs.forEach(box => {
            box.addEventListener('mouseover', () =>{
                box.style.background = warm_array[Math.floor(
                    Math.random()* warm_array.length)];          
            })
        })
    })
    buttonsContainer.appendChild(btnWarm).classList.add('btn');
}

function coldColor() {
    const boxs = container.querySelectorAll('.box');
    let cold_array = ['#5590BC', '#0DABB8', '#01F0F6', '#1FFDE1', '#57FFC8'];
    btnWarm.textContent = 'Cold';
    btnWarm.addEventListener('click', ()=>{
        boxs.forEach(box => {
            box.addEventListener('mouseover', () =>{
                box.style.background = cold_array[Math.floor(
                    Math.random()* cold_array.length)];          
            })
        })
    })
    buttonsContainer.appendChild(btnCold).classList.add('btn');
}

function reset(){
    const boxs = container.querySelectorAll('.box');
    boxs.forEach(box => {
        box.remove();
    })
}

function resize(){
    btnSize.textContent = 'Grid Size';
    btnSize.addEventListener('click', () =>{
        let user = prompt('what size do you want for your grid?');
        if (user === null || user < 1) {
            reset();
            createDivs(16,16);
            blackColor();
            RGBColor();
            
        }else {
            reset();
            createDivs(user,user);
            blackColor();
            RGBColor();
        } 
    })
    buttonsContainer.appendChild(btnSize).classList.add('btn');
}

createDivs(16,16);   
RGBColor();
blackColor();
warmColor();
coldColor();
resize();