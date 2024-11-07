import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getBoard, onUserState } from "../api/Firebase";
import { useQuery } from "@tanstack/react-query";
import BoardListItem from "../components/BoardListItem";


export default function QnA (){

    const [user, setUser] = useState();
    const navigate = useNavigate();

    useEffect (()=> {
        onUserState((user)=>{
            setUser(user);
        })
    },[])

    const {data : board,} = useQuery({
        queryKey: 'board',
        queryFn : getBoard
    })

    return(
        <div className="container">
            <div className="boardTop">
                <h2>QnA 게시판</h2>
                {user && user.isAdmin &&
                    <button className="writeBtn">작성하기</button>}
            </div>

            <ul className="boardList">
                {board && board.map((el)=>(
                    <BoardListItem key={el.id} post={el}/>
                ))}
            </ul>
        </div>
    )
    
}