import { useState } from "react"
import { useLocation } from "react-router-dom"

export default function WritePage (){

    const state = useLocation().state;
    const email = state;
    console.log(email)

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    return(

        <div className="container">

            <h2>게시글 작성하기</h2>

            <form>
                <div className="writeBox">
                    <label htmlFor="boardTitle">제목</label>
                    <input 
                        type="text" 
                        id="boardTitle" 
                        required 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="writeBox">
                    <label htmlFor="boardText">내용</label>
                    <textarea 
                        id="boardText"
                        required
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>

                <button type="submit" className="submitBtn">작성하기</button>
            </form>

        </div>


    )
}