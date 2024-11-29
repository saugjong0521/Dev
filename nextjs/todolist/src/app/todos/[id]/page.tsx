"use client"

import { getTodoList } from "@/api/todoApi";
import { Todo } from "@/types/todo";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";


const TodoDetailPage = () => {
    const {id} = useParams();
    const [todo, setTodo] = useState<Todo | null>(null)

    useEffect(() => {
        if(id){
            getTodoList().then((todos)=>{
                const findTodo = todos.find((item) => item.id === id)
                setTodo(findTodo || null);
            })
        }
    },[id])

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">{todo.title}</h2>
            <p>{todo.content}</p>
        </div>
    )
}

export default TodoDetailPage