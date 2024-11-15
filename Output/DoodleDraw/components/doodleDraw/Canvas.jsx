import { useEffect, useRef } from "react";


export default function Canvas(){

    const CanvasRef = useRef(null);

    // 영역 
    useEffect(()=>{
        const canvas = CanvasRef.current;
        canvas.width = clientX;
        canvas.height = clientY;
    })


    return(

        <div className="">
        <canvas ref={CanvasRef}></canvas>
        </div>
    )
}