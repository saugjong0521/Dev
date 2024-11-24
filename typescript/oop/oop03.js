"use strict";
// 타입에 티백 수, 레몬 포함여부, 우유포함 여부, 꿀 포함 여부
class TeaMaker3 {
    constructor(waterAmount3) {
        this.waterAmount3 = 0;
        this.waterAmount3 = waterAmount3;
    }
    makeTea3(teaBags, addLemon) {
        if (this.waterAmount3 < teaBags * TeaMaker3waterTeaBag3) {
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
