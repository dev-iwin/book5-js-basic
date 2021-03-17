var slides = document.querySelectorAll("#container > img"); // id가 container인 요소의 자식 img 요소 // 이미지를 배열에 저장
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");
var index = 0;

prev.addEventListener("click", prevSlide); // prev.onclick = prevSlide;
next.addEventListener("click", nextSlide); // prev.onclick = nextSlide;

// 기본 동작
showSlide(index);

//기본 동작 함수
function showSlide(n) {
    for(var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
}


function prevSlide() {
    if(index > 0) {
        index -= 1; // index--; 도 가능
    }
    else {
        index = slides.length - 1;
    }
    showSlide(index);
}

function nextSlide() {
    if(index < slides.length -1 ) {
        index += 1; // index++; 도 가능
    }
    else {
        index = 0;
    }
    showSlide(index);
}