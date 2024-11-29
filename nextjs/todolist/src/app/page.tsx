import { Todo } from "@/types/todo";
import { useState } from "react";


export default function Home() {

  const [todos, setTodos] = useState<Todo[]>([]); // todo 리스트의 전체 상태관리
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Todo List</h1>
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="제목을 입력하세요"
          value={ newTitle }
          onChange={(e)=>setNewTitle(e.target.value)}
          className="border p-2"
        />

        <input
          type="text"
          placeholder="내용을 입력하세요"
          value={newContent}
          onChange={(e)=>setNewContent(e.target.value)}
          className="border p-2"
        />

        <button 
          onClick={handleAddTodo}
          className="bg-blue-400 text-white p-3 rounded"
        >내용 추가</button>

      </div>
    </div>
  );
}
