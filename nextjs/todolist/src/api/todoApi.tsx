// 파이어베이스 db를 활용한 함수 정의 (항목 추가, 수정, 삭제)

import { db } from "@/states/firebase";
import { Todo } from "@/types/todo";
import { child, get, push, ref, update } from "firebase/database";

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
export const getTodoLists = async () => {
    const dbRef = ref(db) // db 참조 생성 
    //snapshot 데이터 가져오기 
    const snapshot = await get(child(dbRef, `todos`)); //db ref의 하위 노드 참조 
    // const snapshot = await get(dbRef); // child 제거, 직접 참조
    if(snapshot.exists()){
      const todoObj = snapshot.val();
      return Object.keys(todoObj).map((key)=> ({id: key, ...todoObj[key]})) as Todo[]
    }
    return [];
  
  }
  
  


export const editTodoList = async (id: string, editTodo: Partial<Todo>) => {
    // Partial : 모든 속성을 선택적으로 만들어주는 타입
    /*
    Omit과의 차이점
    Partial: 모든 속성 선택가능, Omit: 특정 속성을 제외한 타입
    객체의 일부만 업데이트 할때에 사용할 경우, 일부 속성만 전달해도 속성 에러가 나지 않음 (title을 지정시, content는 알아서 지정되도록 함)
    */
    const todoRef = ref(db, `todos/${id}`);
    await update(todoRef, editTodo);
}