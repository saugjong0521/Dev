"use strict";
/*
object-oriented programming (객체지향 프로그래밍)
객체를 중심으로 프로그램을 설계하고 개발하는 프로그래밍 기법
- 클래스 문법을 중심으로 하는 프로그래밍 기법이기 때문에, class를 기반으로 코드를 작성하는것이 일반적인 문법

캡슐화
- 데이터와 관련된 기능(메소드)들을 하나의 객체로 묶어서 관리한다.
- 외부에서 데이터를 직접적으로 접근하지 못하도록 하기 위함

상속
- 한 클래스가 다른 클래스의 속성과 메소드를 물려받아서 사용하는 기능
- 코드의 재사용성이나 유지보수성이 좋아짐
*/
const WaterTeaBag = 250; // 하나의 티백당 필요한 물의 양을 상수로 선언
let waterAmount = 0; // 현재 보유중인 물의 양
// tea를 만드는 함수를 제작 : TeaBag의 갯수를 매개변수로 받아옴
function makeTea(teaBags, addLemon) {
    if (waterAmount < teaBags * WaterTeaBag) {
        throw new Error('물의 양이 부족합니다.');
    }
    // tea를 만들면서 사용된 물의 양만큼 빼기
    waterAmount -= teaBags * WaterTeaBag;
    return {
        teaBags,
        isLemon: addLemon
    };
}
waterAmount += 1253;
const tea1 = makeTea(2, false);
// const tea2 = makeTea(7, true)
console.log(tea1);
// console.log(tea2)
