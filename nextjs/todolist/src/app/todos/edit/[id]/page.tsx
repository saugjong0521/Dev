import { Todo } from "@/types/todo";
import { useParams } from "next/navigation"
import { useState } from "react";


const EditTodoPage = () => {
    const {id} = useParams();
    const [todo, setTodo] = useState<Todo | null>(null);
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
}