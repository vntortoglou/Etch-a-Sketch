const container = document.getElementById(`container`);
const R16 = document.getElementById(`R16`);
const R32 = document.getElementById(`R32`);
const R64 = document.getElementById(`R64`);



createPixels = (num) => {
    container.innerHTML = '';
    pixels = document.createElement(`div`);
    pixels.classList.add(`pixels`);
    let totalPixels = num ** 2;

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };


    for (let i = 0; i < totalPixels; i++) {
       pixels = document.createElement('div');
       pixels.classList.add(`pixels`);
            pixels.addEventListener('mouseover', function() {
                this.style.backgroundColor = getRandomColor();
        });
        container.appendChild(pixels);
    }
};




R16.addEventListener('click', () => {
    createPixels(16);
    pixels = document.querySelectorAll('.pixels');
    pixels.forEach(pixel => {
        pixel.style.padding = '19px';
        pixel.style.border = `1px solid rgba(0, 0, 0, 0.5)`;
    });
});


R32.addEventListener('click', () => {
    createPixels(32);
    pixels = document.querySelectorAll('.pixels');
    pixels.forEach(pixel => {
        pixel.style.padding = '9px';
        pixel.style.border = `1px solid rgba(0, 0, 0, 0.25)`;
    });
});


R64.addEventListener('click', () => {
    createPixels(64);
    pixels = document.querySelectorAll('.pixels');
    pixels.forEach(pixel => {
        pixel.style.padding = '4px';
        pixel.style.border = `1px solid rgba(0, 0, 0, 0.1)`;
    });
});

