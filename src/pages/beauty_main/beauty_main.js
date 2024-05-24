window.onload = function() {

    document.getElementById("total-no").innerHTML = 8; // 파싱해서 개수 넣기

    // 광고 슬라이드
    let secCont = document.getElementsByClassName("ad-section-container")[0];

    // 드래그(스와이프) 이벤트를 위한 변수 초기화
    let startPoint = 0;
    let endPoint = 0;

    // PC 클릭 이벤트 (드래그)
    secCont.addEventListener("mousedown", (e) => {
        if (e.target !== e.currentTarget) return;
        startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
    }, true);

    secCont.addEventListener("mouseup", (e) => {
        if (e.target !== e.currentTarget) return;
        
        endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
        if (startPoint < endPoint) {
            // 마우스가 오른쪽으로 드래그 된 경우
            console.log("prev move");
            movePrevAdSection();
        } else if (startPoint > endPoint) {
            // 마우스가 왼쪽으로 드래그 된 경우
            console.log("next move");
            moveNextAdSection();
        }
    }, true);

    // 모바일 터치 이벤트 (스와이프)
    secCont.addEventListener("touchstart", (e) => {
        startPoint = e.touches[0].pageX; // 터치가 시작되는 위치 저장
    });
    
    secCont.addEventListener("touchend", (e) => {
        endPoint = e.changedTouches[0].pageX; // 터치가 끝나는 위치 저장
        if (startPoint < endPoint) {
            // 오른쪽으로 스와이프 된 경우
            console.log("prev move");
            movePrevAdSection();
        } else if (startPoint > endPoint) {
            // 왼쪽으로 스와이프 된 경우
            console.log("next move");
            moveNextAdSection();
        }
    });
    
    // 슬라이드
    const slider = document.getElementsByClassName('main-today-pick-list')[0];
    const slides = slider.querySelector('ul');
    let isDragging = false;
    let startPos = 0;
    let scrollLeft = 0;

    slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        startPos = e.clientX - slides.offsetLeft;
        scrollLeft = slides.scrollLeft;
        slides.classList.add('grabbing'); // 드래그 중임을 표시하기 위해 클래스 추가
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const mouseX = e.clientX - slides.offsetLeft;
        const distX = mouseX - startPos;
        slides.scrollLeft = scrollLeft - distX;
    });

    slider.addEventListener('mouseup', () => {
        isDragging = false;
        slides.classList.remove('grabbing');
    });

    slider.addEventListener('mouseleave', () => {
        isDragging = false;
        slides.classList.remove('grabbing');
    });
} // 온로드 끝

// 광고 슬라이드
function movePrevAdSection() { // 광고 슬라이드 이전
    // 이미지 바꾸기, 링크 바꾸기, 현재 페이지 바꾸기
    let currentNo = Number(document.getElementById("current-no").innerHTML);

    if (currentNo != 1) {
        inputAdSection(Number(currentNo - 1));
    } else {
        inputAdSection(Number(document.getElementById("total-no").innerHTML));
    }
}

function moveNextAdSection() { // 광고 슬라이드 다음
    let currentNo = Number(document.getElementById("current-no").innerHTML);

    if (currentNo != Number(document.getElementById("total-no").innerHTML)) {
        inputAdSection(Number(currentNo + 1));
    } else {
        inputAdSection(Number(1));
    }
    

}

function inputAdSection(num) {
    document.getElementById("current-no").innerHTML = num; // 현재 광고 번호
    // document.getElementById("ad-section-link").href = "링크"; // 광고 링크
    document.getElementById("ad-section-img").src = "../../../public/images/ad_img" + num + ".jpeg"; // 광고 이미지
    document.getElementById("ad-section-img").onclick = "location.href='" + "#" + "'"; // 광고 이미지
}

// 사이드 메뉴
function openSideMenu() { // 사이드 메뉴 열어주는 함수
    document.getElementsByClassName("sideMenu")[0].style.cssText = "width: 250px; display: block;";
}

function closeSideMenu(obj) { // 사이드 메뉴 닫아주는 함수
    obj.parentElement.style.cssText = "width: 0px; display: none;";
}