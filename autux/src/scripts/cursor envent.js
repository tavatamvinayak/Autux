const icons_a = document.getElementsByClassName('hero-cursor _1');
const icons_b = document.getElementsByClassName('hero-cursor _2');
const icons_c = document.getElementsByClassName('hero-cursor _3');

document.onmousemove = (event) => {
    const x = event.clientX * 100 / window.innerWidth + '%';
    const y = event.clientY * 100 / window.innerHeight + '%'; 

    for (let icon of icons_a) {
        icon.style.transform = `translate3d(${x}, ${y}, 0px) scale3d(1, 1, 1)`;
    }

    const x_2 = event.clientX * 100 / window.innerWidth + '%';
    const y_2 = event.clientY * 100 / window.innerHeight + '%'; 
    for (let icon of icons_b) {
        icon.style.transform = `translate3d(${x_2}, ${y_2 }, 0px) scale3d(1, 1, 1)`;
    }
    const x_3 = event.clientX * 100 / window.innerWidth + '%';
    const y_3 = event.clientY * 100 / window.innerHeight + '%'; 
    for (let icon of icons_c) {
        icon.style.transform = `translate3d(${x_3}, ${y_3}, 0px) scale3d(1, 1, 1)`;
    }
};

