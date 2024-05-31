document.addEventListener('DOMContentLoaded', (event) => {
    const scrollableContent = document.querySelector('.scrollable-content');
  
    let isScrolling;
  
    scrollableContent.addEventListener('scroll', () => {
      window.clearTimeout(isScrolling);
  
      isScrolling = setTimeout(() => {
        // 스크롤이 멈추면 실행될 코드
        scrollableContent.style.overflowY = 'hidden';
      }, 66);
    });
  
    scrollableContent.addEventListener('touchstart', () => {
      // 사용자가 터치를 시작하면 스크롤 가능하게 설정
      scrollableContent.style.overflowY = 'scroll';
    });
  
    scrollableContent.addEventListener('touchend', () => {
      // 사용자가 터치를 끝내면 스크롤을 멈추도록 설정
      window.clearTimeout(isScrolling);
  
      isScrolling = setTimeout(() => {
        scrollableContent.style.overflowY = 'hidden';
      }, 66);
    });
  });