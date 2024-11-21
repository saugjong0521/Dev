

/*
타입의 종류
원시형 타입 = number, string, boolean, symbol, null, undefined
객체형 타입 = function, array

*/

// number
const num : number = 9;
console.log(num);

// string
const text : string = 'hi';
console.log(text);

// boolean
const bool : boolean = false;
console.log(bool);

/*
void 타입
함수의 반환값이 없을때 사용
변수의 타입으로 void를 사용하는 것은 권장하지 않고 있다.
*/

function logMessage(message : string) :void {
    console.log(message)
}
logMessage('에러 메세지')
// logMessage는 반환하는 값이 없으므로 반환타입을 void로 설정할 수 있다.
let unVoid : void = undefined; // 권장하지 않는 타입
// why? void는 하나의 형태를 말하는 것이 아니고, 아무것도 반환하지 않음을 나타내기에 적합하지 않다.
// 값이 아닌 반환값의 상태르 알기 위함
let resultValue : undefined = undefined; // 이게 더 권장됨

// never
// 절대적으로 값이 반환되지 않는 함수의 반환타입을 명시해야 할 때 사용
// 무한루프, 정상적으로 함수가 종료되지 않을 때 사용

function errorText (message: string) : never{
    throw new Error(message);
} try {
    errorText ('에러가 발생했습니다.')
} catch (error) {
    console.error(error.message)    // 오류로 뜰 시, tsconfig.json에서 useUnknownInCatchVariables": false 적용
}

/*
never 타입으로 선언되면, 이 함수를 실행시 무조건 error객체를 던지므로, 반환값 없이 코드를 종료한다.
while(true) 같은 경우에도 사용할 수 있다.
*/

/*
null은 값이 없음을 명시적으로 나타냄
null은 단독으로 사용하는 경우 타입의 정의가 명확해지지 않는다.
다른 타입과 조합해서 사용하는 것이 좋음
*/
let text2: string | null
text2 = 'kim';
console.log(text2)
text2 = null;
console.log(text2)


/*
undefined
null과 같이 undefined도 단독으로 사용하는 것을 권장하지 않음
*/
let age3 : number | undefined




// any는 어떤 타입이든지 상관 없음 (타입 검사를 하지 않음)
let age4 : any = 10;

// unknown도 어떤 타입이든지 상관 없음 (타입 검사를 진행함)
let age5 : unknown = '홍길동'

// any와 unknown의 차이
function test01 () : unknown {
    return '10';
}

let testResult01 : unknown = test01();
if(typeof testResult01 === 'number'){
    console.log(testResult01 + 10)
} else if(typeof testResult01 === 'string'){
    console.log(testResult01 + 20)
}


function test02 () : any {
    return '김성종';
}
let testResult02 : any = test02();
console.log(testResult02.toUpperCase)
console.log(testResult02 + 2)

/*
any타입과 unknown은 모든 타입을 넣을 수 있다는 공통점이 있지만,
any는 타입검사를 하지 않고, unknown은 타입검사를 하기에
코드의 안정성을 위해서는(오류를 줄이기 위해서는) unknown이 좋다.(분기를 세워 오류를 잡아낼 수 있기에 더 선호되는 편이다.)
*/


/*
오브젝트
타입스크립트에서 객체를 나타내기 위해 사용하는 기본타입중 하나
*/

let obj : object = {name : 'park'}; // 권장하지 않는 방법
console.log(obj.name)
/*
let obj : object = {name : 'park'};
로 선언하면 객체의 구조에 대한 값을 분석하지 못한다.
따라서 객체의 속성이나 메서드 자체에 접근하는 것 자체가 불가능하다
*/

let obj02 : {name : string} = {name : 'go'} // 올바른 접근방법1
console.log(obj02.name)

interface Person { // 올바른 접근방법2
    name: string,
    age: Number,
}
let obj03 : Person = {name: 'hong', age: 40}
console.log(obj03.name, obj03.age)