"use client"
import { editTodoList, getTodoList } from "@/api/todoApi";
import { Todo } from "@/types/todo";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";

const EditTodoPage = () => {
  
  const {id} = useParams();
  console.log("ID:", id);
  const [todo, setTodo] = useState<Todo | null>(null);
  const [title, setTitle] = useState('');
  console.log("Title:", title);
  const [content, setContent] = useState('');
  console.log("Content:", content);
  const router = useRouter();
  
  useEffect(()=> {
    console.log("useEffect triggered");
    getTodoList().then((todos)=> {
      console.log("Todos:", todos); // 데이터 확인
      const foundTodo = todos.find((el)=> el.id === id);
      if (foundTodo) {
        setTodo(foundTodo);
        setTitle(foundTodo.title);
        setContent(foundTodo.content);
      }
    })
    .catch((error) => {
      console.error("Error fetching todos:", error.message);
    });
  },[id])

  const handleEditTodoList = async ()=> {
    console.log("ID:", id);
    console.log("Title:", title);
    console.log("Content:", content);
    if (typeof id === 'string' && title && content){
      await editTodoList(id, {title, content});
      router.push(`/`)//수정 완료시 메인 페이지로 이동. 
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-white text-3xl font-bold mb-4"> edit Todo </h1>
      <div>
        <input 
        type = "text" 
        placeholder="제목" 
        value={title} 
        onChange={((e)=> setTitle(e.target.value))}
        className="border p-2 mb-2 w-full"
        />
        <input 
          type="text"
          placeholder="내용"
          value={content}
          onChange={(e)=> setContent(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleEditTodoList} >save</button>
      </div>

    </div>
  )

}

export default EditTodoPage;