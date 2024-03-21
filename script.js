const generatebtn = document.getElementById('generatebtn');
generatebtn.addEventListener('click', updateColr)


function getRandomCol() {
    
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let index = 0; index < 6; index++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}


function updateColr() {
    const colorBox = document.getElementById('color-box');
    const colorText = document.getElementById('color-text');  
    
    const randomColor = getRandomCol();
    colorBox.style.backgroundColor = randomColor;
    colorText.innerHTML = randomColor;
}


