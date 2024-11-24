"use strict";
// 타입에 티백 수, 레몬 포함여부, 우유포함 여부, 꿀 포함 여부
class TeaMaker3 {
    constructor(waterAmount3) {
        this.waterAmount3 = 0;
        this.waterAmount3 = waterAmount3;
    }
    makeTea3(teaBags, addLemon) {
        if (this.waterAmount3 < teaBags * TeaMaker3.waterTeaBag3) {
            throw new Error('물의 양이 부족합니다.');
        }
        this.waterAmount3 -= teaBags * TeaMaker3.waterTeaBag3;
        console.log(`tea를 만들었습니다. 남은 물의 양은 ${this.waterAmount3}ml 입니다.`);
        return {
            teaBags,
            isLemon: addLemon
        };
    }
}
TeaMaker3.waterTeaBag3 = 250;
// 우유와 꿀은 상속을 이용해서 코드 작성
class MilkTeaMaker extends TeaMaker3 {
    makeTea3(teaBags, addLemon) {
        const tea = super.makeTea3(teaBags, addLemon);
        console.log('우유를 추가했습니다.');
        return (isMilk) => ;
    }
}
