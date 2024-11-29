"use client"


/*
nextJs는 서버사이드 랜더링 방식을 기본으로 사용하고 있다.
초기 랜더링시 서버에서 html문서를 미리 생성하고 클라이언트로 전송하는 방식이다.

그러나 일부 컴포넌트에서 상태관리, api, 이벤트를 통해서 상태값이 동적으로 관리되야하는 파일에서는 해당 서버사이드 랜더링 방식이 맞지 않다.
미리 만들어진 파일을 제공할 수 없기 때문

그래서 컴포넌트 가장 첫줄에 "use client" 코드를 넣어서 해당 컴포넌트의 구동방식을 서버사이드 랜더링이 아닌, 클라이언트 사이드 랜더링 방식으로 변경해야 한다.
대표적으로 useState, useEffect가 있다.
*/

import { addTodoList, getTodoList } from "@/api/todoApi";
import TodoList from "@/components/TodoList";
import { Todo } from "@/types/todo";
import { useEffect, useState } from "react";


export default function Home() {

  const [todos, setTodos] = useState<Todo[]>([]); // todo 리스트의 전체 상태관리
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');


  useEffect(()=>{
    getTodoList().then(setTodos)
  },[])



  const handleAddTodo = async() => {
    if(newTitle && newContent){
      await addTodoList({title: newTitle, content: newContent});
      getTodoList().then(setTodos)  // todoList 갱신
      setNewContent('');
      setNewTitle('');
    }
  }

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
      <TodoList todos={todos}/>
    </div>
  );
}
