"use strict";
// 자바 스크립트 방식
function addJsVer(num01, num02) {
    return num01 + num02;
}
console.log(addJsVer(10, 20));
// 타입 지정이 없음
// 타입 스크립트 방식
function addTsVer(num01, num02) {
    return num01 + num02;
}
console.log(addTsVer(10, 20));
// 객체를 병합 (자바 스크립트 방식)
function mergeJsVer(obj01, obj02) {
    return Object.assign(Object.assign({}, obj01), obj02);
}
console.log(mergeJsVer({ name: 'park' }, { age: 40 }));
// 타입스크립트에서 객체의 병합은 제네릭 방식( 제네릭 방식: 다양한 객체 타입을 병합할 수 있도록 유연성을 제공하는 메소드 )
/*
제네릭 방식에서 사용되는 타입변수 이름들
T : TYPE
U : TYPE 외에 들어올수 있는 또 다른 타입
K : 객체의 KEY TYPE
V : 객체의 VALUE(값) TYPE
*/
function mergeTsVer(obj01, obj02) {
    return Object.assign(Object.assign({}, obj01), obj02);
}
console.log(mergeTsVer({ name: '김성종' }, { age: 29 }));
function items(item) {
    return item;
}
console.log(items('text'));
console.log(items(12345));
// any와 제네릭 타입의 차이는 결과값은 같지만, 안정성의 차이(타입검사의 진행여부)에 따라 선택할 수 있다. (unknown과 비슷)
function result(item) {
    return item;
}
let result01 = result('hi');
console.log(result01.toUpperCase());
let result02 = result(1212);
console.log(result02.toUpperCase()); // 에러
function resultAny(item) {
    return item;
}
let resultAny01 = resultAny(1212);
console.log(resultAny01.toUpperCase());
