import { Todo } from "@/types/todo";
import { useState } from "react";


export default function Home() {

  const [todos, setTodos] = useState<Todo[]>([]); // todo 리스트의 전체 상태관리
  const [newTitle, setNewTitle] = useState('');
  const [nextContent, setNewContent] = useState('');

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Todo List</h1>
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="제목을 입력하세요"
          value={ newTitle }
        />
      </div>
    </div>
  );
}
