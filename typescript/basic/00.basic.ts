

let age : number = 50 ;

/*
정적 타입 검사
- 컴파일 시점에서 변수와 함수의 타입을 검사해서 타입 오류를 미리 확한하게 하는 방법
터미널에서 컴파일시 에러를 출력 해주지만, 타입검사 자체를 막는 기능은 없기 때문에 출력은 됨
*/


/*
타입스크립트는 자바스크립트의 상위 개념으로, 기존 자바스크립트의 코드와 호환이 가능

 */

let age2 = '안녕';

function text01(name){
    return 'hi' + name;
}

// 기존 자바스크립트 코드도 사용 가능
console.log(text01('kim'))

function text02(name : string) : string {
    return 'hi' + name
}

console.log(text02('lee'))


//타입스크립트는 클래스, 상속 등의 객체지향 프로그래밍(oop)이 지원

interface PersonName{
    firstName : string,
    lastName : string,
}


/*
인터페이스
타입스크립트에서 객체의 구조를 정의하기 위한 메소드, 객체의 형태를 강제한다.
어떠한 객체가 가져야 할 속성과 타입을 미리 정의해 놓기 때문에 코드의 일관성을 유지하게 한다.
*/

// 인터페이스에서 설정한 객체를 클래서에서 연동할 수 있게 해준다.
// implements = 타입스크립트에서 클래스가 특정 인터페이스를 준수하도록 선언하는 키워드
class Employee implements PersonName {
    constructor(public firstName: string, public lastName: string, public jobPosition: string){

    }
}

let employee01 = new Employee('홍','길동','개발자')
console.log(employee01)