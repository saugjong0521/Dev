"use client"

import { editTodoList, getTodoList } from "@/api/todoApi";
import { Todo } from "@/types/todo";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";


const EditTodoPage = () => {
    const {id} = useParams();
    const [todo, setTodo] = useState<Todo | null>(null);
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const router = useRouter()


    useEffect(() => {
        getTodoList().then((todos)=>{
            const findTodo = todos.find((el) => el.id ===id)
            if(findTodo){
                setTodo(findTodo);
                setTitle(findTodo.title);
                setContent(findTodo.content)
            }
        })
    },[id])

    const handleEditTodoList = async() => {
        if(typeof id === 'string' && title && content){
            await editTodoList(id, {title, content})
            router.push('/')    // 수정완료시 메인페이지로 이동
        }
    }

    return(

        <div className="container mx-auto p-4">
            <h1 className="text-white text-3xl font-bold mb-4">Edit Todo</h1>
            <div>
                <input 
                    type="text" 
                    placeholder="제목" 
                    value={title} 
                    onChange={((e)=>setTitle(e.target.value))}
                    className="border p-2 mb-2 w-full"
                />

                <input
                    type="text"
                    placeholder="내용"
                    value={content}
                    onChange={(e)=>setContent(e.target.value)}
                    className="border p-2 mb-2 w-full"
                />

                <button onClick={handleEditTodoList}>수정</button>
            </div>
        </div>

    )

}


export default EditTodoPage