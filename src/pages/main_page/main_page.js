const container = document.querySelector('.container')

let isDown = false
let startY
let scrollTop

container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startY = e.pageY - container.offsetTop;
    scrollTop = container.scrollTop;
    console.log(`mouseDown`);
});

container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('active');
    console.log(`mouseLeave`);
});

container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('active');
    console.log(`mouseUp`);
});

container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const y = e.pageY - container.offsetTop;
    const walk = y - startY;
    container.scrollTop = scrollTop - walk;
    console.log(`mouseMove`);
});
