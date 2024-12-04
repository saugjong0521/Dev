import { getTodoList } from "@/api/todoApi";
import { Todo } from "@/types/todo";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";


const EditTodoPage = () => {
    const {id} = useParams();
    const [todo, setTodo] = useState<Todo | null>(null);
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

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

}


export default EditTodoPage