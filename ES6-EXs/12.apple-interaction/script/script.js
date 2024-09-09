(() => {
    let yOffset = 0; 
    let prevScrollHeight = 0; 
    let currentSection = 0; 
    let newSection = false; 
    let acc = 0.2;
    let delayYoffset = 0;
    let rafId;
    let rafState;

    const sectionInfo = [
        {
            type: 'sticky', 
            heightNum: 5,  
            scrollHeight: 0, 
            objs: {
                container: document.querySelector('#scroll-section-0'),
                canvas: document.querySelector('#video-canvas-0'),
                context: document.querySelector('#video-canvas-0') ? document.querySelector('#video-canvas-0').getContext('2d') : null,
                videoImages: []
            },
            values: {
                videoImageCount: 64,    
                imgSequence: [0, 64],   
                canvas_opacity: [1, 0, { start: 0.9, end: 1 }]
            }
        }
    ]

    function setCanvasImage() {
        let imgItem;
        for (let i = 0; i < sectionInfo[0].values.videoImageCount; i++) {
            imgItem = new Image();
            imgItem.src = `./images/setion01/00${i+1}.png`
            sectionInfo[0].objs.videoImages.push(imgItem)
        }
        console.log(imgItem)
    }

    window.addEventListener('load', () => {
        window.addEventListener('scroll', () => {
            yOffset = window.pageYOffset;   
            fixedMenu();

            setCanvasImage();
        })
    })

    function fixedMenu() {
        if (yOffset > 50) {
            document.body.classList.add('nav-fixed')
        } else {
            document.body.classList.remove('nav-fixed')
        }
    }
})()
