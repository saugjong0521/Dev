// 타입에 티백 수, 레몬 포함여부, 우유포함 여부, 꿀 포함 여부


type TeaCup3 = {
    teaBags : number,
    isLemon? : boolean,
    isMilk? : boolean,
    isHoney? : boolean 

}

class TeaMaker3 {
    static waterTeaBag3 : number = 250;
    waterAmount3 : number = 0;

    constructor(waterAmount3 : number){
        this.waterAmount3 = waterAmount3
    }

    makeTea3(teaBags: number, addLemon: boolean): TeaCup3{
        if(this.waterAmount3 < teaBags * waterTeaBag3){
            throw new Error('물의 양이 부족합니다.')
        }
        this.waterAmount3 -= teaBags * TeaMaker3.waterTeaBag3;
        console.log(`tea를 만들었습니다. 남은 물의 양은 ${this.waterAmount3}ml 입니다.`)

        return {
            teaBags,
            isLemon : addLemon
        }
    }
}