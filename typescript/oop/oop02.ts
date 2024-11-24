
// oop방식 tea 만들기 관리 로직
type TeaCup2 = {
    teaBag : number,
    isLemon : boolean
}

// 함수대신 클래스로 변경해서 작성
class TeaMaker {
    static waterTeaBag : number = 250;
    // static: 클래스에서 속성이나 메소드를 정의할때 사용,
    // 해당 속성이나 메서드가 클래스의 인스턴스가 아닌
    // 클래스 자체에서 속하도록 하는 키워드

    waterAmount : number = 0;

    constructor(waterAmount: number){
        this.waterAmount = waterAmount
    }
}
