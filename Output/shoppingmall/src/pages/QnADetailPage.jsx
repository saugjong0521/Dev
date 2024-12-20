import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { addComments, getComments, onUserState } from "../api/Firebase";
import { useQuery } from "@tanstack/react-query";


export default function QnADetailPage (){

    const state = useLocation().state;
    const {id, user, date, title, text} = state;

    const [loginUser, setLoginUser] = useState();
    const [commentWrite, setCommentWrite] = useState('');

    useEffect(() => {
        onUserState((user) => {
            setLoginUser(user)
        })
    },[])

    const handleComments = async (e) => {
        e.preventDefault();

        try {
            await addComments(id, loginUser.displayName, commentWrite);
            setCommentWrite('')
            refetch();
        }catch(error){
            console.error(error)
        }
    }

    const {data: comments, refetch } = useQuery({
        queryKey : [`/board/${id}/comments`],
        queryFn : ()=> getComments(id)
    })

    return(

        <div className="container">
            <div className="boardBox">
                <strong>{title}</strong>
                <p>{text}</p>
                <p>{date}</p>
            </div>
            
            <div className="commentWrap">
                <form onSubmit={handleComments}>
                    {loginUser == null ?
                    <input type="text" placeholder="로그인 후 작성할 수 있습니다." disabled/>
                    :
                    <input type="text" placeholder="댓글을 작성해 주세요" value={commentWrite}
                    onChange={(e) => setCommentWrite(e.target.value)}/>
                    }

                    <button type="submit">작성하기</button>

                    <ul className="commentList">
                        {comments && comments.map((el) => (
                            <li key={el.id}>
                                <p>{el.text}</p>
                            </li>
                        ))}
                    </ul>
                </form>
            </div>
        </div>

    )

}