// Drag 할 경우, HTMLElement에 대해서 마우스 버튼 클릭시의 
const container = document.querySelector('.container') as HTMLElement

let isDown: boolean = false
let startY: number
let scrollTop: number

container.addEventListener('mousedown', (e: MouseEvent) => {
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

container.addEventListener('mousemove', (e: MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const y = e.pageY - container.offsetTop;
    const walk = y - startY;
    container.scrollTop = scrollTop - walk;
    console.log(`mouseMove`);
});
