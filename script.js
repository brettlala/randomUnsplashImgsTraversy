const container = document.querySelector('.container');
const url = 'https://source.unsplash.com/random/';
const rows = 5;

function showImages() {
      
    for(i = 0; i < rows * 3; i++) {
        const img = document.createElement('img');
        img.src = `${url}${getSize()}`;
        img.classList.add('randoImage');
        container.appendChild(img);
    }
    
}

function getNumber() {
    let num = Math.round(Math.random() * 10 + 300);
    return num;
}

function getSize() {
    let size = `${getNumber()}x${getNumber()}`;
    return size;
}


showImages();