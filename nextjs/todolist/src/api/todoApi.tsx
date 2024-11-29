// 파이어베이스 db를 활용한 함수 정의 (항목 추가, 수정, 삭제)

import { db } from "@/states/firebase";
import { Todo } from "@/types/todo";
import { child, get, push, ref } from "firebase/database";

// 항목의 추가
export const addTodoList = async(todo : Omit<Todo, "id">) => {
    /*
    Omit: 특정 타입에서 일부 속성을 제외한 새로운 타입
    현재 코드에서는 title과 content만 작성되고 id는 외부에서 자동으로 생성되기 때문에
    Omit을 활용해서 id를 제외한 title과 content만 생성되도록 하용
 ]  */
    const todoRef = ref(db, `todos`)
    await push(todoRef, todo)
}


// 리스트 가져오기
export const getTodoList = async() => {
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, 'todos'))
}