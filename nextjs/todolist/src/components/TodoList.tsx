import { removeTodoList } from "@/api/todoApi";
import { Todo } from "@/types/todo";
import Link from "next/link";


interface TodoListProps{
    todos: Todo[] // types폴더에 있는 todo의 리스트 배열을 props로 받아옴
}

const TodoList:React.FC<TodoListProps> = ({todos, reloadTodoList}) => {
    /*
    React.FC
    함수형 컴포넌트를 생성하는 타입스크립트 타입 유형
    */

    const handleRemoveTodo = async (id: string) => {
        await removeTodoList(id)
        reloadTodoList()
    }

    return(
        <div className="todoList">
            {todos.map((todo)=>(
                <div key={todo.id} className="p-4 border-b">
                    <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
                    <Link href={`/todos/edit/${todo.id}`}>수정</Link>
                    <button onClick={()=>handleRemoveTodo(todo.id)}>삭제하기</button>
                </div>
            ))}
        </div>
    )
}

export default TodoList