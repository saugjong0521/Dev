"use strict";
// 함수대신 클래스로 변경해서 작성
class TeaMaker {
    constructor(waterAmount) {
        // static: 클래스에서 속성이나 메소드를 정의할때 사용,
        // 해당 속성이나 메서드가 클래스의 인스턴스가 아닌
        // 클래스 자체에서 속하도록 하는 키워드
        this.waterAmount2 = 0;
        this.waterAmount2 = waterAmount;
    }
    static makeMachine(waterAmount) {
        return new TeaMaker(waterAmount);
    }
    // tea를 만드는 메소드, 요청된 티백 수와 레몬 포함여부를 매개변수로 받아서 tea를 생성
    makeTea2(teaBags, addLemon) {
        if (this.waterAmount2 < teaBags * TeaMaker.waterTeaBag2) {
            throw new Error('물의 양이 부족합니다.');
        }
        this.waterAmount2 -= teaBags * TeaMaker.waterTeaBag2;
        console.log(`tea를 만들었습니다. 남은 물은 ${this.waterAmount2}ml 입니다.`);
        return {
            teaBags,
            isLemon: addLemon
        };
    }
    addWater(amount) {
        this.waterAmount2 += amount;
    }
}
TeaMaker.waterTeaBag2 = 250;
