window.onload = () => {
    resizeCanvas();  // 캔버스 크기 설정
    drawing();       // 그리기 함수 호출
}

// 캔버스 크기 조정
function resizeCanvas() {
    const canvas = document.querySelector('#drawing');
    const drawingArea = document.querySelector('.drawingArea')
    canvas.width = drawingArea.clientWidth;  // 창 너비에 맞춰 캔버스 너비 설정
    canvas.height = drawingArea.clientHeight; // 창 높이에 맞춰 캔버스 높이 설정

    /*
    window.innerWidth * (0.95)
    window.innerHeight * (0.85)
    도 가능
    */



}

function drawing() {
    const canvas = document.querySelector('#drawing');
    const ctx = canvas.getContext('2d');
    let drawing = false;
    let color = 'black';  // 초기 색상은 검정색
    let brush = 1;

    // 마우스를 눌렀을 때 그리기 시작
    canvas.addEventListener('mousedown', (e) => {
        drawing = true;
        startX = e.offsetX; // offsetX 사용
        startY = e.offsetY; // offsetY 사용
    });

    // 마우스를 이동할 때 그리기
    canvas.addEventListener('mousemove', (e) => {
        if (drawing) {
            drawLine(ctx, startX, startY, e.offsetX, e.offsetY); // offsetX, offsetY 사용
            startX = e.offsetX;
            startY = e.offsetY;
        }
    });

    // 마우스를 떼면 그리기 종료
    canvas.addEventListener('mouseup', () => {
        drawing = false;
    });

    // 선을 그리는 함수
    function drawLine(context, x1, y1, x2, y2) {
        drawThickness(); // 굵기 변경 함수 호출
        changeColor();   // 색상 변경 함수 호출

        context.strokeStyle = color;     // 현재 선택된 색상으로 선을 그림
        context.lineWidth = brush * 3;  // 선 두께 설정
        context.lineCap = "round";       // 선 끝을 둥글게 설정
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        context.closePath();
    }

    // 색상 변경 처리
    function changeColor() {
        const colorItems = document.querySelectorAll('.colorSelect');

        // 각 색상 항목에 클릭 이벤트 추가
        colorItems.forEach(item => {
            item.addEventListener('click', () => {
                const bgColor = window.getComputedStyle(item).getPropertyValue('background-color');
                color = bgColor; // 선택된 배경색을 색상으로 설정
            });
        });
    }

    // 굵기 변경 처리
    function drawThickness(){
        const brushItem = document.querySelector('.thickness');
        brush = brushItem.value;
    }

    // 리셋 처리
    function resetCanvas(){
        const resetBtn = document.querySelector('.clearBtn');
        
        resetBtn.addEventListener('click', () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
        });
    }
    resetCanvas();

    // 저장 처리
    function saveCanvas(){
        const saveBtn = document.querySelector('.saveBtn');

        saveBtn.addEventListener('click', () => {
            const save = canvas.toDataURL('image/png', 1.0);  // (저장형식, 품질)
            console.log(save);
            alert(save);
        });
    }
    saveCanvas();
}
