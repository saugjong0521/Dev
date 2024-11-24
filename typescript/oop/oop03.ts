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
        if(this.waterAmount3 < teaBags * TeaMaker3.waterTeaBag3){
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

// 우유와 꿀은 상속을 이용해서 코드 작성

class MilkTeaMaker extends TeaMaker3 {
    makeTea3(teaBags: number, addLemon: boolean): TeaCup3 {
        const tea = super.makeTea3(teaBags, addLemon);
        console.log('우유를 추가했습니다.')
        return {
            ...tea,
            isMilk: true
        }
    }
}

class HoneyTeaMaker extends TeaMaker3{
    makeTea3(teaBags: number, addLemon: boolean): TeaCup3 {
        const tea = super.makeTea3(teaBags, addLemon);
        console.log('꿀을 추가했습니다.')
        return{
            ...tea,
            isHoney: true
        }
    }
}


const machines : TeaMaker3[] = [
    new TeaMaker3(1000),
    new MilkTeaMaker(1000),
    new HoneyTeaMaker(1000)
]

machines.forEach(el => {
    console.log('-----------------------');
    console.log(el.makeTea3(2, true));
})