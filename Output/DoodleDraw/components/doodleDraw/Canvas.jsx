import { useEffect, useRef, useState } from "react";
import {styled} from "styled-components";

export default function Canvas(){

    const CanvasRef = useRef(null);
    const ContextRef = useRef(null);

    const [ctx, setCtx] = useState();


    // 영역 
    useEffect(()=>{
        const canvas = CanvasRef.current;
        canvas.width = Canvas.parentElement.clientWidth;
        canvas.height = CanvasBox.parentElement.clientHeight;
    })


    useEffect(()=>{
        const canvas = CanvasRef.current;
        const context = CanvasRef.getcontext("2d")
        context.strokeStyle = "black"
        context.lineWidth = 2.5;
        ContextRef.current = context;

        setCtx(ContextRef.current)
    })


    return(
        <CanvasBox>
            <canvas ref={CanvasRef}></canvas>
        </CanvasBox>
    )
}

const CanvasBox = styled.div`
    width: 100vw;
    height: 100vh;

    canvas{
        width: 100%;
        height: 100%;
    }
`