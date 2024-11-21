/*
타입 별칭
: 타입을 선언할때 별칭을 이용해서 선언
- 코드의 가동석이 올라감
- 별칭을 사용할때에는 대문자로 시작하는 것이 관례
*/


// 별칭은 type이라는 키워드로 선언
type Letter = string; //문자열 타입에 대한 별칭을 Text로 정의
type Num = number;  //숫자열 타입에 대한 별칭을 Num으로 정의
type Student = {
    name: Letter,
    age: Num
}
//객체 타입에 대한 별칭 정의도 가능



const name001 : Letter = 'kim';
const age001 : Num = 40;

const classMate : Student = {
    name : 'park',
    age : 40
}



/*
유니언 타입(unionType)
여러 타입중에 하나일 수도 있는 경우를 나타낼 때 사용하며, '|'로 구별한다.(or조건문)
각 타입에 따라 다른 처리를 해야할때 사용
*/

// api 상태관리
type Status = 'loading' | 'success' | 'error';
let currentStatus : Status ;

currentStatus = 'loading';
// currentStatus = 'failed'; 에러


// ex) 관리자 타입을 지정해서 사용
type UserType = 'admin' | 'user' | 'guest';
function getUserMenu(role : UserType) : string[]{
    switch(role){
        case 'admin':
            return ['upload', 'write', 'read', 'delete']

        case 'user':
            return  ['write', 'read']

        case 'guest':
            return ['read']

        default:
            return []
    }
}

/*
별칭을 사용하게 되면
복잡하게 있는 타입들을 하나의 키워드로 정리할 수 있게 된다.
api의 상태관리, 몇가지 특별한 상황에서 출력하는 값을 정의하고, 그 외에 값을 오류처리할때 유용
*/