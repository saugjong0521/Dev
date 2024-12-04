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

    return(

        <div className="container mx-auto p-4">
            <h1 className="text-white text-3xl font-bold">Edit Todo</h1>
        </div>

    )

}


export default EditTodoPage