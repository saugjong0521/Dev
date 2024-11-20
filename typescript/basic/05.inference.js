"use strict";
/*
inference 타입추론

타입추론은 변수나 함수의 초깃값을 통해서 해당 변수나 함수의 타입을 자동으로 결정하는 방식

즉, 타입을 미리 정하는 기존의 방식보다 주어진 값을 기반으로 타입스크립트가 타입을 추론해서 결정하게 하는 방식
불필요하게 타입을 선언하는 수고를 줄임
코드가 간결해짐

복잡한 객체에서는 타입의 추론이 부정확한 경우가 생김
(복잡한 객체에서는 타입을 미리 선언하는 것이 좋음)
-> 종종 의도하지 않은 타입이 나올 수 있음
-> or 가끔 any 타입으로 추론하여 코드가 불안정해지는 경우가 생김

초기값이 변경되야 하는 경우에는 재 추론이 되지 않아 에러가 나오게 된다.
*/
function test001(message = 'hello') {
    console.log(message);
}
test001('hi');
test001(235); // Argument of type 'number' is not assignable to parameter of type 'string'.
function add(x, y) {
    return x + y;
} // 매개변수의 타입이 미리 지정되어 있지 않다면 any 타입으로 추론
const sum01 = add(10, 10);
const sum02 = add('10', '10');
console.log(sum01);
console.log(sum02);
const arr01 = [1, 2, 3];
arr01.push(5);
console.log(arr01);
arr01.push('a'); // Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(arr01);
//객체에서의 추론
const person = {
    name: 'park',
    age: 40
};
console.log(person);
person.age = '55'; // Property 'name' does not exist on type 'object'.
console.log(person);
//타입 단언
/*
개발자가 특정 값이 정해진 타입임을 확실하게 인지할때, 컴파일러에게 해당 타입을 강제로 지정하는 방법
*/
let value = 'text'; // value의 타입은 any로 선언
let stringValue = value.length; //value의 타입을 string으로 단언
console.log(stringValue);
