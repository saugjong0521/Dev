"use strict";
/*
타입 별칭
: 타입을 선언할때 별칭을 이용해서 선언
- 코드의 가동석이 올라감
- 별칭을 사용할때에는 대문자로 시작하는 것이 관례
*/
//객체 타입에 대한 별칭 정의도 가능
const name001 = 'kim';
const age001 = 40;
const classMate = {
    name: 'park',
    age: 40
};
let currentStatus;
currentStatus = 'loading';
function getUserMenu(role) {
    switch (role) {
        case 'admin':
            return ['upload', 'write', 'read', 'delete'];
        case 'user':
            return ['write', 'read'];
        case 'guest':
            return ['read'];
        default:
            return [];
    }
}
/*
별칭을 사용하게 되면
복잡하게 있는 타입들을 하나의 키워드로 정리할 수 있게 된다.
api의 상태관리, 몇가지 특별한 상황에서 출력하는 값을 정의하고, 그 외에 값을 오류처리할때 유용
*/ 
